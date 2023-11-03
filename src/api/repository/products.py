from persistence.database import Database
from schemas.products import CreateProduct, Product, UpdateProduct


class ProductsRepository:
    def __init__(self, database: Database):
        self.database = database

    def find_all(self):
        rows = self.database.query(
            "SELECT id, name, brand, price, quantity FROM products"
        )
        return [
            Product(id=id, name=name, brand=brand, price=price, quantity=quantity)
            for (id, name, brand, price, quantity) in rows
        ]

    def find_one(self, id: int):
        row = self.database.query_one(
            "SELECT id, name, brand, price, quantity FROM products WHERE id = ?", [id]
        )
        if row is None:
            return None
        (id, name, brand, price, quantity) = row
        return Product(id=id, name=name, brand=brand, price=price, quantity=quantity)

    def create(self, product: CreateProduct):
        last_insert_id = self.database.exec(
            "INSERT INTO products (name, brand, price, quantity) VALUES (?, ?, ?, ?)",
            [product.name, product.brand, product.price, product.quantity],
        )
        if last_insert_id is None:
            return None
        return self.find_one(last_insert_id)

    def update(self, id: int, product: UpdateProduct):
        self.database.exec(
            "UPDATE products SET name = ?, brand = ?, price = ?, quantity = ? WHERE id = ?",
            [product.name, product.brand, product.price, product.quantity, id],
        )
        return self.find_one(id)

    def update_quantity(self, id: int, quantity: int):
        self.database.exec(
            "UPDATE products SET quantity = ? WHERE id = ?",
            [quantity, id],
        )
        return self.find_one(id)

    def delete(self, id: int):
        return self.database.exec("DELETE FROM products WHERE id = ?", [id])
