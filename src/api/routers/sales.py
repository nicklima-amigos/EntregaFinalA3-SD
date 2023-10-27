from fastapi import APIRouter


sales_router = APIRouter()


@sales_router.get("/")
def find():
    pass


@sales_router.get("/{id}")
def find_one(id: int):
    pass


@sales_router.post("/")
def create():
    pass


@sales_router.put("/{id}")
def update(id: int):
    pass


@sales_router.delete("/{id}")
def delete(id: int):
    pass
