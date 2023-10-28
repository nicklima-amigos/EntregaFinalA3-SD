from fastapi import Depends
from api.repository.products import ProductsRepository
from api.repository.sales import SalesRepository
from api.service.clients import ClientService
from api.service.products import ProductsService
from api.service.sales import SalesService
from persistence.database import Database
from repository.clients import ClientsRepository

DATABASE_URL = "database.sqlite3"


def get_database():
    return Database(DATABASE_URL)


def get_clients_repository(database: Database = Depends(get_database)):
    return ClientsRepository(database)


def get_sales_repository(database: Database = Depends(get_database)):
    return SalesRepository(database)


def get_products_repository(database: Database = Depends(get_database)):
    return ProductsRepository(database)


def get_sales_service(
    repository: SalesRepository = Depends(get_sales_repository),
    products_repository: ProductsRepository = Depends(get_products_repository),
):
    return SalesService(repository, products_repository)


def get_clients_service(
    repository: ClientsRepository = Depends(get_clients_repository),
):
    return ClientService(repository)


def get_products_service(
    repository: ProductsRepository = Depends(get_products_repository),
):
    return ProductsService(repository)
