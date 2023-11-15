from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.sales import sales_router
from routers.clients import clients_router
from routers.products import products_router
from persistence.database import init_db, insert_fixtures
import uvicorn

app = FastAPI(title="A3 - Sistemas Distribuídos")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(sales_router)
app.include_router(products_router)
app.include_router(clients_router)


@app.get("/healthcheck", status_code=200, tags=["healthcheck"])
def index():
    return {"status": "ok"}


if __name__ == "__main__":
    init_db()
    insert_fixtures()
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
