from fastapi import HTTPException
from repository import ClientsRepository
from schemas import (
    ClientAverageConsumption,
    ClientDetail,
    CreateClient,
    UpdateClient,
)


class ClientsService:
    def __init__(self, repository: ClientsRepository):
        self.repository = repository

    def find_all(self):
        return self.repository.find_all()

    def find_one(self, id: int):
        client = self.repository.find_one(id)
        if client is None:
            raise HTTPException(status_code=404, detail="Client not found")
        return client

    def create(self, client: CreateClient):
        return self.repository.create(client)

    def update(self, id: int, client: UpdateClient):
        updated_client = self.repository.update(id, client)
        if updated_client is None:
            raise HTTPException(status_code=404, detail="Client not found")
        return updated_client

    def delete(self, id: int):
        self.find_one(id)
        return self.repository.delete(id)

    def get_clients_purchased_products(self, client: ClientDetail):
        products_quantities: dict[str, int] = {}
        for sale in client.sales:
            product_name = sale.product.name
            if product_name in products_quantities:
                products_quantities[product_name] += sale.quantity
            else:
                products_quantities[product_name] = sale.quantity
        product_entries = list(products_quantities.items())
        product_entries.sort(key=lambda x: x[1], reverse=True)
        return product_entries

    def get_average_consumption_by_client(self):
        clients = self.repository.find_all_detailed()
        return [
            ClientAverageConsumption(
                id=client.id,
                name=client.name,
                number_of_purchases=len(client.sales),
                average_consumption=self.__calculate_client_average_consumption(client),
            )
            for client in clients
        ]

    def __calculate_client_average_consumption(self, client: ClientDetail):
        total_spent = 0
        for sale in client.sales:
            total_spent += sale.product.price * sale.quantity
        return total_spent / len(client.sales)
