from schemas import (
    Client,
    SaleDetails,
    ProductInformation,
    CreateSale,
    Sale,
    UpdateSale,
    SaleInfo,
)
from persistence import Database


class SalesRepository:
    def __init__(self, database: Database):
        self.database = database

    def find_all(self):
        rows = self.database.query(
            "SELECT id, product_id, client_id, quantity FROM sales"
        )
        return [
            Sale(id=id, product_id=product_id, client_id=client_id, quantity=quantity)
            for (id, product_id, client_id, quantity) in rows
        ]

    def find_one(self, id: int):
        row = self.database.query_one(
            """
            SELECT 
                s.id, s.quantity,
                p.id, p.name, p.price, p.brand,
                c.id, c.name, c.created_at
            FROM 
                sales s
            JOIN
                products p ON p.id = s.product_id
            JOIN
                clients c ON c.id = s.client_id
            WHERE 
                s.id = ?
        """,
            [id],
        )
        if row is None:
            return None
        (
            sale_id,
            sale_quantity,
            product_id,
            product_name,
            product_price,
            product_brand,
            client_id,
            client_name,
            client_created_at,
        ) = row
        product = ProductInformation(
            id=product_id, name=product_name, brand=product_brand, price=product_price
        )
        client = Client(id=client_id, name=client_name, created_at=client_created_at)
        return SaleDetails(
            id=sale_id,
            product=product,
            client=client,
            quantity=sale_quantity,
        )

    def create(self, sale: CreateSale):
        last_insert_id = self.database.exec(
            "INSERT INTO sales (client_id, product_id, quantity) VALUES (?, ?, ?)",
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

    def list_info(self):
        rows = self.database.query(
            """
            SELECT 
                s.id, s.quantity,
                p.id, p.name, p.price,
                c.id, c.name
            FROM 
                sales s
            JOIN
                products p ON p.id = s.product_id
            JOIN
                clients c ON c.id = s.client_id
        """
        )
        return [
            SaleInfo(
                id=id,
                quantity=quantity,
                product_id=product_id,
                product_name=product_name,
                product_unit_price=product_unit_price,
                client_id=client_id,
                client_name=client_name,
                total=round(product_unit_price * quantity, 2),
            )
            for (
                id,
                quantity,
                product_id,
                product_name,
                product_unit_price,
                client_id,
                client_name,
            ) in rows
        ]
