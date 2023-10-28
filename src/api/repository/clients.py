from persistence.database import Database
from schemas.clients import Client, CreateClient, UpdateClient


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

    def update(self, id: int, client: UpdateClient):
        self.database.exec(
            "UPDATE clients SET name = ? WHERE id = ?",
            [client.name, id],
        )
        return self.find_one(id)

    def delete(self, id: int):
        return self.database.exec("DELETE FROM clients WHERE id = ?", [id])
