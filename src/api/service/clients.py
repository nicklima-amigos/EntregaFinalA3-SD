from repository.clients import ClientsRepository
from schemas.clients import CreateClient, UpdateClient


class ClientService:
    def __init__(self, repository: ClientsRepository):
        self.repository = repository

    def find_all(self):
        return self.repository.find_all()

    def find_one(self, id: int):
        return self.repository.find_one(id)

    def create(self, client: CreateClient):
        return self.repository.create(client)

    def update(self, id: int, client: UpdateClient):
        return self.repository.update(id, client)

    def delete(self, id: int):
        return self.repository.delete(id)
