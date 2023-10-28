from pydantic import BaseModel
from datetime import datetime
from .products import ProductInformation


class ClientBase(BaseModel):
    name: str


class CreateClient(ClientBase):
    pass


class UpdateClient(ClientBase):
    pass


class Client(ClientBase):
    id: int
    created_at: datetime


class SaleWithProduct(BaseModel):
    id: int
    product: ProductInformation
    quantity: int


class ClientDetail(BaseModel):
    id: int
    name: str
    created_at: datetime
    sales: list[SaleWithProduct]


class SaleDetails(BaseModel):
    id: int
    product: ProductInformation
    client: Client
    quantity: int
