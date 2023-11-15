from fastapi import HTTPException
from repository.products import ProductsRepository
from schemas.products import CreateProduct, UpdateProduct


class ProductsService:
    def __init__(self, repository: ProductsRepository):
        self.repository = repository

    def find_all(self):
        return self.repository.find_all()

    def find_one(self, id: int):
        product = self.repository.find_one(id)
        if product is None:
            raise HTTPException(status_code=404, detail="Product not found")
        return product

    def create(self, product: CreateProduct):
        return self.repository.create(product)

    def update(self, id: int, product: UpdateProduct):
        if product.quantity < 0:
            raise HTTPException(status_code=422, detail="Not enough product in storage")
        updated_product = self.repository.update(id, product)
        if updated_product is None:
            raise HTTPException(status_code=404, detail="Product not found")
        return updated_product

    def delete(self, id: int):
        self.find_one(id)
        return self.repository.delete(id)

    def find_depleting(self):
        return self.repository.find_depleting()
