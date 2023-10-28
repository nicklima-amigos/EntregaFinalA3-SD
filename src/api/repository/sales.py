from persistence.database import Database
from schemas.sales import CreateSale, Sale, UpdateSale


class SalesRepository:
    def __init__(self, database: Database):
        self.database = database

    def find_all(self):
        rows = self.database.query("SELECT * FROM sales")
        return [Sale(**row) for row in rows]

    def find_one(self, id: int):
        row = self.database.query_one("SELECT * FROM sales WHERE id = ?", [id])
        if row is None:
            return None
        return Sale(**row)

    def create(self, sale: CreateSale):
        last_insert_id = self.database.exec(
            "INSERT INTO sales (client_id, product_id, quantity) VALUES (?)",
            [sale.client_id, sale.product_id, sale.quantity],
        )
        if last_insert_id is None:
            return None
        return self.find_one(last_insert_id)

    def update(self, id: int, sale: UpdateSale):
        self.database.exec(
            "UPDATE sales SET client_id = ?, product_id = ?, quantity = ? WHERE id = ?",
            [sale.client_id, sale.product_id, sale.quantity, id],
        )
        return self.find_one(id)

    def delete(self, id: int):
        return self.database.exec("DELETE FROM sales WHERE id = ?", [id])
