from fastapi import HTTPException
from repository.products import ProductsRepository
from repository.sales import SalesRepository
from schemas.sales import CreateSale, UpdateSale


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

    def update(self, id: int, sale: UpdateSale):
        return self.repository.update(id, sale)

    def delete(self, id: int):
        return self.repository.delete(id)
