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
        sale = self.repository.find_one(id)
        if sale is None:
            raise HTTPException(status_code=404, detail="Sale not found")
        return sale

    def create(self, sale: CreateSale):
        product = self.products_repository.find_one(sale.product_id)
        if product is None:
            raise HTTPException(status_code=404, detail="Product not found")
        if product.quantity < sale.quantity:
            raise HTTPException(status_code=422, detail="Not enough product in stock")
        product.quantity -= sale.quantity
        self.products_repository.update_quantity(product.id, product.quantity)
        return self.repository.create(sale)

    def update(self, id: int, sale: UpdateSale):
        updated_sale = self.repository.update(id, sale)
        if updated_sale is None:
            raise HTTPException(status_code=404, detail="Sale not found")
        return updated_sale

    def delete(self, id: int):
        self.find_one(id)
        return self.repository.delete(id)
