from pydantic import BaseModel, Field


class ProductBase(BaseModel):
    name: str
    brand: str
    price: float
    quantity: int


class CreateProduct(ProductBase):
    name: str
    brand: str
    price: float
    quantity: int | None = Field(default=0)


class UpdateProduct(ProductBase):
    pass


class Product(ProductBase):
    id: int


class ProductInformation(BaseModel):
    id: int
    name: str
    brand: str
    price: float
