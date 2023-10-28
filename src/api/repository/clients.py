from schemas.products import ProductInformation
from schemas.sales import ClientDetail, SaleWithProduct
from persistence.database import Database
from schemas.clients import Client, CreateClient, UpdateClient


class ClientsRepository:
    def __init__(self, database: Database):
        self.database = database

    def find_all(self):
        rows = self.database.query("SELECT id, name, created_at FROM clients")
        return [
            Client(id=id, name=name, created_at=created_at)
            for (id, name, created_at) in rows
        ]

    def find_one(self, id: int):
        rows = self.database.query(
            """
            SELECT 
                c.id, c.name, c.created_at, s.id, s.quantity, p.id, p.name, p.price
            FROM 
                clients c
            LEFT JOIN 
                sales s ON s.client_id = c.id
            LEFT JOIN
                products p ON p.id = s.product_id 
            WHERE 
                c.id = ?
        """,
            [id],
        )
        sales = [
            SaleWithProduct(
                id=row[3],
                quantity=row[4],
                product=ProductInformation(id=row[5], name=row[6], price=row[7]),
            )
            for row in rows
            if row[3] is not None
        ]
        return ClientDetail(
            id=rows[0][0], name=rows[0][1], created_at=rows[0][2], sales=sales
        )

    def create(self, client: CreateClient):
        last_insert_id = self.database.exec(
            "INSERT INTO clients (name) VALUES (?)",
            [client.name],
        )
        if last_insert_id is None:
            return None
        return self.find_one(last_insert_id)

    def update(self, id: int, client: UpdateClient):
        self.database.exec(
            "UPDATE clients SET name = ? WHERE id = ?",
            [client.name, id],
        )
        return self.find_one(id)

    def delete(self, id: int):
        return self.database.exec("DELETE FROM clients WHERE id = ?", [id])
