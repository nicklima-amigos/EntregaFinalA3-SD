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


class SaleInfo(Sale):
    quantity: int
    product_name: str
    product_unit_price: float
    client_name: str
    total: float
