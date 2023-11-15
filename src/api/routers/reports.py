import os
import shutil

from fastapi import APIRouter, Depends, Request
from fastapi.responses import StreamingResponse
from fastapi.templating import Jinja2Templates
from service.products import ProductsService
from dependencies import get_products_service, get_reports_service

from service.reports import ReportService

templates = Jinja2Templates(directory="templates")

reports_router = APIRouter(prefix="/reports", tags=["reports"])


@reports_router.get("/")
def find(service: ReportService = Depends(get_reports_service)):
    file_response_data = service.create_report(
        "report", "index.j2", {"whatever": "foo"}
    )
    return StreamingResponse(**file_response_data)


@reports_router.get("/depleting-products")
def generate_depleting_products_report(
    request: Request,
    report_service: ReportService = Depends(get_reports_service),
    products_service: ProductsService = Depends(get_products_service),
):
    depleting_products = products_service.find_depleting()
    file_response_data = report_service.create_report(
        "baixo_estoque", "depleting_products.j2", {"products": depleting_products}
    )
    # return report_service.render_template(
    #     "depleting_products.j2", {"products": depleting_products, "request": request}
    # )
    return StreamingResponse(**file_response_data)
