from fastapi import APIRouter, Depends
from dependencies import get_clients_service
from schemas.clients import Client, ClientDetail, CreateClient, UpdateClient

from service.clients import ClientService


clients_router = APIRouter(prefix="/clients", tags=["clients"])


@clients_router.get("/", response_model=list[Client])
def find(service: ClientService = Depends(get_clients_service)):
    return service.find_all()


@clients_router.get("/{id}", response_model=ClientDetail)
def find_one(id: int, service: ClientService = Depends(get_clients_service)):
    return service.find_one(id)


@clients_router.post("/", response_model=Client, status_code=201)
def create(client: CreateClient, service: ClientService = Depends(get_clients_service)):
    return service.create(client)


@clients_router.put("/{id}", response_model=Client)
def update(
    id: int, client: UpdateClient, service: ClientService = Depends(get_clients_service)
):
    return service.update(id, client)


@clients_router.delete("/{id}", status_code=204)
def delete(id: int, service: ClientService = Depends(get_clients_service)):
    return service.delete(id)
