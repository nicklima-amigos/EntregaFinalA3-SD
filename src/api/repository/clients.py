from schemas import (
    ClientDetail,
    SaleWithProduct,
    ProductInformation,
    Client,
    CreateClient,
    UpdateClient,
)
from persistence import Database


class ClientsRepository:
    def __init__(self, database: Database):
        self.database = database

    def find_all(self):
        rows = self.database.query("SELECT id, name, created_at FROM clients")
        return [
            Client(id=id, name=name, created_at=created_at)
            for (id, name, created_at) in rows
        ]

    def find_all_detailed(self):
        rows = self.database.query(
            """
            SELECT 
                c.id, c.name, c.created_at, s.id, s.quantity, p.id, p.name, p.price, p.brand
            FROM 
                clients c
            LEFT JOIN 
                sales s ON s.client_id = c.id
            LEFT JOIN
                products p ON p.id = s.product_id 
        """
        )
        clients: dict[int, ClientDetail] = {}
        for row in rows:
            if row[0] not in clients and row[0:3]:
                clients[row[0]] = ClientDetail(
                    id=row[0], name=row[1], created_at=row[2], sales=[]
                )
            if all(row):
                sales = clients[row[0]].sales
                sales.append(
                    SaleWithProduct(
                        id=row[3],
                        quantity=row[4],
                        product=ProductInformation(
                            id=row[5], brand=row[8], name=row[6], price=row[7]
                        ),
                    )
                )
        return list(clients.values())

    def find_one(self, id: int):
        rows = self.database.query(
            """
            SELECT 
                c.id, c.name, c.created_at, s.id, s.quantity, p.id, p.name, p.price, p.brand
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
        if len(rows) == 0:
            return None
        sales = [
            SaleWithProduct(
                id=row[3],
                quantity=row[4],
                product=ProductInformation(
                    id=row[5], brand=row[8], name=row[6], price=row[7]
                ),
            )
            for row in rows
            if all(row[3:])
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
