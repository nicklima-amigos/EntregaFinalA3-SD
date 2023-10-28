from fastapi import APIRouter, Depends
from dependencies import get_clients_service
from schemas.clients import CreateClient, UpdateClient

from service.clients import ClientService


clients_router = APIRouter(prefix="/clients", tags=["clients"])


@clients_router.get("/")
def find(service: ClientService = Depends(get_clients_service)):
    return service.find_all()


@clients_router.get("/{id}")
def find_one(id: int, service: ClientService = Depends(get_clients_service)):
    return service.find_one(id)


@clients_router.post("/")
def create(client: CreateClient, service: ClientService = Depends(get_clients_service)):
    return service.create(client)


@clients_router.put("/{id}")
def update(
    id: int, client: UpdateClient, service: ClientService = Depends(get_clients_service)
):
    return service.update(id, client)


@clients_router.delete("/{id}")
def delete(id: int, service: ClientService = Depends(get_clients_service)):
    return service.delete(id)
