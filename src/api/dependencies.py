from fastapi import Depends
from repository.products import ProductsRepository
from repository.sales import SalesRepository
from service.clients import ClientService
from service.products import ProductsService
from service.sales import SalesService
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


def get_products_service(
    repository: ProductsRepository = Depends(get_products_repository),
):
    return ProductsService(repository)


def get_sales_service(
    repository: SalesRepository = Depends(get_sales_repository),
    products_service: ProductsService = Depends(get_products_service),
):
    return SalesService(repository, products_service)


def get_clients_service(
    repository: ClientsRepository = Depends(get_clients_repository),
):
    return ClientService(repository)
