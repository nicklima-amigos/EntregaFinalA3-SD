from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from service import SalesService, ClientsService, ProductsService
from dependencies import (
    get_clients_service,
    get_products_service,
    get_reports_service,
    get_sales_service,
)

from service.reports import ReportService


reports_router = APIRouter(prefix="/reports", tags=["reports"])


@reports_router.get("/depleting-products")
def generate_depleting_products_report(
    report_service: ReportService = Depends(get_reports_service),
    products_service: ProductsService = Depends(get_products_service),
):
    depleting_products = products_service.find_depleting()
    file_response_data = report_service.create_report(
        report_name="baixo_estoque",
        template_name="depleting_products.j2",
        context={"products": depleting_products},
    )
    return StreamingResponse(**file_response_data)


@reports_router.get("/products-by-client/{client_id}")
def generate_products_by_client_report(
    client_id: int,
    clients_service: ClientsService = Depends(get_clients_service),
    report_service: ReportService = Depends(get_reports_service),
):
    client = clients_service.find_one(client_id)
    products = clients_service.get_clients_purchased_products(client)
    file_response_data = report_service.create_report(
        report_name="produtos_por_cliente",
        template_name="products_by_client.j2",
        context={
            "client": client,
            "products": products,
        },
    )
    return StreamingResponse(**file_response_data)


@reports_router.get("/best-sellers")
def generate_best_sellers_report(
    report_service: ReportService = Depends(get_reports_service),
    sales_service: SalesService = Depends(get_sales_service),
):
    product_entries = sales_service.get_best_sellers()
    file_response_data = report_service.create_report(
        report_name="mais_vendidos",
        template_name="best_sellers.j2",
        context={"products": product_entries},
    )
    return StreamingResponse(**file_response_data)


@reports_router.get("/clients-average-consumption")
def generate_clients_average_consumption_report(
    report_service: ReportService = Depends(get_reports_service),
    clients_service: ClientsService = Depends(get_clients_service),
):
    clients_average_consumption = clients_service.get_average_consumption_by_client()
    file_response_data = report_service.create_report(
        report_name="media_consumo_clientes",
        template_name="clients_average_consumption.j2",
        context={"clients": clients_average_consumption},
    )
    return StreamingResponse(**file_response_data)
