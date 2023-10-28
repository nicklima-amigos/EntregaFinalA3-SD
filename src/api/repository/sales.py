from api.persistence.database import Database
from api.schemas.sales import CreateSale, Sale


class SalesRepository:
    def __init__(self, database: Database):
        self.database = database

    def find_all(self):
        rows = self.database.query("SELECT * FROM sales")
        return [Sale(**row) for row in rows]

    def find_one(self, id: int):
        row = self.database.query_one("SELECT * FROM sales WHERE id = ?", [id])
        return Sale(**row)

    def create(self, sale: CreateSale):
        last_insert_id = self.database.exec(
            "INSERT INTO sales (client_id, product_id, quantity) VALUES (?)",
            [sale.client_id, sale.product_id, sale.quantity],
        )
        if last_insert_id is None:
            return None
        return self.find_one(last_insert_id)
