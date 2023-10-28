from fastapi import APIRouter, Depends
from api.dependencies import get_sales_service
from api.schemas.sales import CreateSale

from api.service.sales import SalesService


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
def update(id: int):
    pass


@sales_router.delete("/{id}")
def delete(id: int):
    pass
