from api.persistence.database import Database
from api.schemas.products import CreateProduct, Product


class ProductsRepository:
    def __init__(self, database: Database):
        self.database = database

    def find_all(self):
        rows = self.database.query("SELECT * FROM products")
        return [Product(**row) for row in rows]

    def find_one(self, id: int):
        row = self.database.query_one("SELECT * FROM products WHERE id = ?", [id])
        return Product(**row)

    def create(self, product: CreateProduct):
        last_insert_id = self.database.exec(
            "INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)",
            [product.name, product.price, product.quantity],
        )
        if last_insert_id is None:
            return None
        return self.find_one(last_insert_id)
