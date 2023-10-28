from fastapi import HTTPException
from repository.clients import ClientsRepository
from schemas.clients import CreateClient, UpdateClient


class ClientService:
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
