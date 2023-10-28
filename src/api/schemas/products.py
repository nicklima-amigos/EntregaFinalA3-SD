from pydantic import BaseModel


class ProductBase(BaseModel):
    name: str
    price: float
    quantity: int


class CreateProduct(ProductBase):
    pass


class UpdateProduct(ProductBase):
    pass


class Product(ProductBase):
    id: int
