from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.sales import sales_router
from routers.clients import clients_router
from routers.products import products_router
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(sales_router, prefix="/sales", tags=["sales"])
app.include_router(products_router, prefix="/products", tags=["products"])
app.include_router(clients_router, prefix="/clients", tags=["clients"])


@app.get("/healthcheck", status_code=200)
def index():
    return {"status": "ok"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
