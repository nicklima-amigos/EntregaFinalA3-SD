from api.persistence.database import Database
from api.repository.clients import ClientsRepository
from api.schemas.clients import Client, CreateClient


class ClientService:
    def __init__(self, repository: ClientsRepository):
        self.repository = repository

    def find_all(self):
        return self.repository.find_all()

    def find_one(self, id: int):
        return self.repository.find_one(id)

    def create(self, client: CreateClient):
        return self.repository.create(client)
