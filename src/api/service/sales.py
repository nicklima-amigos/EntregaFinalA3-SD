from fastapi import HTTPException
from schemas.products import UpdateProduct
from service.products import ProductsService
from repository.sales import SalesRepository
from schemas.sales import CreateSale, UpdateSale


class SalesService:
    def __init__(self, repository: SalesRepository, products_service: ProductsService):
        self.repository = repository
        self.products_service = products_service

    def find_all(self):
        return self.repository.find_all()

    def find_one(self, id: int):
        sale = self.repository.find_one(id)
        if sale is None:
            raise HTTPException(status_code=404, detail="Sale not found")
        return sale

    def create(self, sale: CreateSale):
        product = self.products_service.find_one(sale.product_id)
        product.quantity -= sale.quantity
        self.products_service.update(product.id, UpdateProduct(**product.model_dump()))
        return self.repository.create(sale)

    def update(self, id: int, sale: UpdateSale):
        updated_sale = self.repository.update(id, sale)
        if updated_sale is None:
            raise HTTPException(status_code=404, detail="Sale not found")
        return updated_sale

    def delete(self, id: int):
        self.find_one(id)
        return self.repository.delete(id)

    def list_info(self):
        return self.repository.list_info()

    def get_best_sellers(self):
        sales = self.list_info()
        product_quantities: dict[str, int] = {}
        for sale in sales:
            if sale.product_name in product_quantities:
                product_quantities[sale.product_name] += sale.quantity
            else:
                product_quantities[sale.product_name] = sale.quantity
        product_entries = [(key, value) for key, value in product_quantities.items()]
        product_entries.sort(key=lambda x: x[1], reverse=True)
        return product_entries
