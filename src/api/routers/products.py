from fastapi import APIRouter


products_router = APIRouter()


@products_router.get("/")
def find():
    pass


@products_router.get("/{id}")
def find_one(id: int):
    pass


@products_router.post("/")
def create():
    pass


@products_router.put("/{id}")
def update(id: int):
    pass


@products_router.delete("/{id}")
def delete(id: int):
    pass
