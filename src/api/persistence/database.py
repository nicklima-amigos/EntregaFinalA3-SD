import sqlite3
from persistence.schema import schema


class Database:
    def __init__(self, database_name: str):
        self.database_name = database_name
        with sqlite3.connect(self.database_name) as connection:
            connection.executescript(schema)

    def query(self, sql: str):
        with sqlite3.connect(self.database_name) as connection:
            cursor = connection.cursor()
            cursor.execute(sql)
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
