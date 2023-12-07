fixtures = """
    INSERT INTO clients (id,name) VALUES 
    (1,"Joao Luccas"),
    (2,"Raphael Oliveira"),
    (3,"Nicolas Lima"),
    (4,"Marcos Henrique"),
    (5,"Bruna Cesar");

    INSERT INTO products (id, name, brand, price, quantity) VALUES 
    (1,"Ar Condicionado","LG",2.179, 5),
    (2,"Maquina de Lavar","Samsung",1.699,12),
    (3,"Fritadeira Air Frier","Mondial",229,5),
    (4,"Micro ondas","Philco",583,3),
    (5,"Ventilador de teto","Ventisol", 200, 20),
    (6,"Panela de pressao eletrica","Mondial", 399, 10),
    (7,"Robô aspirador","Mondial",666,14),
    (8,"Geladeira frost free","Electrolux",2.584,4),
    (9,"Freezer horizontal","Electrolux",2.6999,12),
    (10,"Fogao de pé","Electrolux",2.299,7);

    INSERT INTO sales (id, client_id, product_id, quantity) VALUES
    (1,5,3,9),
    (2,1,4,7),
    (3,2,6,10),
    (4,1,7,2),
    (5,5,1,4),
    (6,3,9,1),
    (7,3,8,6),
    (8,2,5,2),
    (9,4,2,3),
    (10,2,1,5);

"""
