from api.persistence.database import Database
from api.schemas.clients import Client, CreateClient
from datetime import datetime


class ClientsRepository:
    def __init__(self, database: Database):
        self.database = database

    def find_all(self):
        rows = self.database.query("SELECT * FROM clients")
        return [Client(**row) for row in rows]

    def find_one(self, id: int):
        row = self.database.query_one("SELECT * FROM clients WHERE id = ?", [id])
        return Client(**row)

    def create(self, client: CreateClient):
        last_insert_id = self.database.exec(
            "INSERT INTO clients (name) VALUES (?)",
            [client.name],
        )
        if last_insert_id is None:
            return None
        return self.find_one(last_insert_id)
