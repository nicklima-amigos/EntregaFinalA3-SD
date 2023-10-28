from fastapi import APIRouter, Depends
from dependencies import get_sales_service
from schemas.sales import CreateSale, UpdateSale
from service.sales import SalesService


sales_router = APIRouter(prefix="/sales", tags=["sales"])


@sales_router.get("/")
def find(service: SalesService = Depends(get_sales_service)):
    return service.find_all()


@sales_router.get("/{id}")
def find_one(id: int, service: SalesService = Depends(get_sales_service)):
    return service.find_one(id)


@sales_router.post("/")
def create(sale: CreateSale, service: SalesService = Depends(get_sales_service)):
    return service.create(sale)


@sales_router.put("/{id}")
def update(
    id: int, sale: UpdateSale, service: SalesService = Depends(get_sales_service)
):
    return service.update(id, sale)


@sales_router.delete("/{id}")
def delete(id: int, service: SalesService = Depends(get_sales_service)):
    return service.delete(id)
