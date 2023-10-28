from fastapi import APIRouter, Depends
from dependencies import get_products_service
from schemas.products import CreateProduct, UpdateProduct

from service.products import ProductsService


products_router = APIRouter(prefix="/products", tags=["products"])


@products_router.get("/")
def find(service: ProductsService = Depends(get_products_service)):
    return service.find_all()


@products_router.get("/{id}")
def find_one(id: int, service: ProductsService = Depends(get_products_service)):
    return service.find_one(id)


@products_router.post("/")
def create(
    product: CreateProduct, service: ProductsService = Depends(get_products_service)
):
    return service.create(product)


@products_router.put("/{id}")
def update(
    id: int,
    product: UpdateProduct,
    service: ProductsService = Depends(get_products_service),
):
    return service.update(id, product)


@products_router.delete("/{id}")
def delete(id: int, service: ProductsService = Depends(get_products_service)):
    return service.delete(id)
