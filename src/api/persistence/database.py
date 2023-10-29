import sqlite3
from .schema import schema
from .fixtures import init_values


def init_db():
    with sqlite3.connect("database.sqlite3") as connection:
        connection.executescript(schema)

def init_values_db():
    with sqlite3.connect("database.sqlite3") as connection:
        connection.executescript(init_values)

class Database:
    def __init__(self, database_name: str = "database.sqlite3"):
        self.database_name = database_name

    def query(self, sql: str, params: list = []):
        with sqlite3.connect(self.database_name) as connection:
            cursor = connection.cursor()
            cursor.execute(sql, params)
            return cursor.fetchall()

    def query_one(self, sql: str, params: list = []):
        with sqlite3.connect(self.database_name) as connection:
            cursor = connection.cursor()
            cursor.execute(sql, params)
            return cursor.fetchone()

    def exec(self, sql: str, params: list = []):
        with sqlite3.connect(self.database_name) as connection:
            cursor = connection.cursor()
            cursor.execute(sql, params)
            connection.commit()
            return cursor.lastrowid
