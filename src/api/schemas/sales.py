import datetime
from pydantic import BaseModel


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
