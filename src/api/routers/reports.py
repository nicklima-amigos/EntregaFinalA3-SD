from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from fastapi.templating import Jinja2Templates
from service.sales import SalesService
from service.clients import ClientsService
from service.products import ProductsService
from dependencies import (
    get_clients_service,
    get_products_service,
    get_reports_service,
    get_sales_service,
)

from service.reports import ReportService

templates = Jinja2Templates(directory="templates")

reports_router = APIRouter(prefix="/reports", tags=["reports"])


@reports_router.get("/depleting-products")
def generate_depleting_products_report(
    report_service: ReportService = Depends(get_reports_service),
    products_service: ProductsService = Depends(get_products_service),
):
    depleting_products = products_service.find_depleting()
    file_response_data = report_service.create_report(
        "baixo_estoque", "depleting_products.j2", {"products": depleting_products}
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
        "produtos_por_cliente",
        "products_by_client.j2",
        {
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
        "mais_vendidos", "best_sellers.j2", {"products": product_entries}
    )
    return StreamingResponse(**file_response_data)


@reports_router.get("/clients-average-consumption")
def generate_clients_average_consumption_report(
    report_service: ReportService = Depends(get_reports_service),
    clients_service: ClientsService = Depends(get_clients_service),
):
    clients_average_consumption = clients_service.get_average_consumption_by_client()
    file_response_data = report_service.create_report(
        "media_consumo_clientes",
        "clients_average_consumption.j2",
        {"clients": clients_average_consumption},
    )
    return StreamingResponse(**file_response_data)
