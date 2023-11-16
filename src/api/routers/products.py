from fastapi import APIRouter, Depends
from dependencies import get_products_service
from schemas import CreateProduct, Product, UpdateProduct

from service import ProductsService


products_router = APIRouter(prefix="/products", tags=["products"])


@products_router.get("/", response_model=list[Product])
def find(service: ProductsService = Depends(get_products_service)):
    return service.find_all()


@products_router.get("/{id}", response_model=Product)
def find_one(id: int, service: ProductsService = Depends(get_products_service)):
    return service.find_one(id)


@products_router.post("/", response_model=Product, status_code=201)
def create(
    product: CreateProduct, service: ProductsService = Depends(get_products_service)
):
    return service.create(product)


@products_router.put("/{id}", response_model=Product)
def update(
    id: int,
    product: UpdateProduct,
    service: ProductsService = Depends(get_products_service),
):
    return service.update(id, product)


@products_router.delete("/{id}", status_code=204)
def delete(id: int, service: ProductsService = Depends(get_products_service)):
    return service.delete(id)
