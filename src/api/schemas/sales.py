from datetime import datetime
from pydantic import BaseModel
from schemas.clients import Client

from schemas.products import ProductInformation


class SaleBase(BaseModel):
    product_id: int
    client_id: int
    quantity: int


class CreateSale(SaleBase):
    pass


class UpdateSale(SaleBase):
    pass


class Sale(SaleBase):
    id: int


class SaleDetails(BaseModel):
    id: int
    product: ProductInformation
    client: Client
    quantity: int


class SaleWithProduct(BaseModel):
    id: int
    product: ProductInformation
    quantity: int


class ClientDetail(BaseModel):
    id: int
    name: str
    created_at: datetime
    sales: list[SaleWithProduct]
