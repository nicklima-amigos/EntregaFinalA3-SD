from repository.products import ProductsRepository
from schemas.products import CreateProduct, UpdateProduct


class ProductsService:
    def __init__(self, repository: ProductsRepository):
        self.repository = repository

    def find_all(self):
        return self.repository.find_all()

    def find_one(self, id: int):
        return self.repository.find_one(id)

    def create(self, product: CreateProduct):
        return self.repository.create(product)

    def update(self, id: int, product: UpdateProduct):
        return self.repository.update(id, product)

    def delete(self, id: int):
        return self.repository.delete(id)


class ProductNotFoundError(Exception):
    detail = "Product not found"
