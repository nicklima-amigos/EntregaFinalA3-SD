from fastapi import HTTPException
from api.repository.products import ProductsRepository
from api.repository.sales import SalesRepository
from api.schemas.sales import CreateSale


class SalesService:
    def __init__(
        self, repository: SalesRepository, products_repository: ProductsRepository
    ):
        self.repository = repository
        self.products_repository = products_repository

    def find_all(self):
        return self.repository.find_all()

    def find_one(self, id: int):
        return self.repository.find_one(id)

    def create(self, sale: CreateSale):
        product = self.products_repository.find_one(sale.product_id)
        if product is None:
            raise HTTPException(status_code=404, detail="Product not found")
        if product.quantity < sale.quantity:
            raise HTTPException(status_code=422, detail="Not enough product in stock")
        return self.repository.create(sale)


class InsuficientStockError(Exception):
    detail = "Not enough product in stock"
