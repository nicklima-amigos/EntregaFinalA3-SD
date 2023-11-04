schema = """
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        created_at DATETIME DEFAULT (datetime('now','localtime'))
    );
    
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        brand TEXT NOT NULL,
        price REAL NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 0
    );
    
    CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY,
        client_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        sold_at DATETIME DEFAULT (datetime('now','localtime')),
        FOREIGN KEY (client_id) REFERENCES clients (id),
        FOREIGN KEY (product_id) REFERENCES products (id)
    );
"""
