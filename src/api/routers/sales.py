from fastapi import APIRouter, Depends
from schemas import SaleDetails, CreateSale, Sale, UpdateSale, SaleInfo
from dependencies import get_sales_service
from service import SalesService


sales_router = APIRouter(prefix="/sales", tags=["sales"])


@sales_router.get("/", response_model=list[Sale])
def find(service: SalesService = Depends(get_sales_service)):
    return service.find_all()


@sales_router.get("/details", response_model=list[SaleInfo])
def list_details(service: SalesService = Depends(get_sales_service)):
    return service.list_info()


@sales_router.get("/{id}", response_model=SaleDetails)
def find_one(id: int, service: SalesService = Depends(get_sales_service)):
    return service.find_one(id)


@sales_router.post("/", response_model=SaleDetails, status_code=201)
def create(sale: CreateSale, service: SalesService = Depends(get_sales_service)):
    return service.create(sale)


@sales_router.put("/{id}")
def update(
    id: int, sale: UpdateSale, service: SalesService = Depends(get_sales_service)
):
    return service.update(id, sale)


@sales_router.delete("/{id}", status_code=204)
def delete(id: int, service: SalesService = Depends(get_sales_service)):
    return service.delete(id)
