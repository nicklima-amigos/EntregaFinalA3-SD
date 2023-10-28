from api.repository.products import ProductsRepository
from api.schemas.products import CreateProduct


class ProductsService:
    def __init__(self, repository: ProductsRepository):
        self.repository = repository

    def find_all(self):
        return self.repository.find_all()

    def find_one(self, id: int):
        return self.repository.find_one(id)

    def create(self, product: CreateProduct):
        return self.repository.create(product)


class ProductNotFoundError(Exception):
    detail = "Product not found"
