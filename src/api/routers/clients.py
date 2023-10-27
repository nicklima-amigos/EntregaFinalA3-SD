from fastapi import APIRouter

clients_router = APIRouter()


@clients_router.get("/")
def find():
    pass


@clients_router.get("/{id}")
def find_one(id: int):
    pass


@clients_router.post("/")
def create():
    pass


@clients_router.put("/{id}")
def update(id: int):
    pass


@clients_router.delete("/{id}")
def delete(id: int):
    pass
