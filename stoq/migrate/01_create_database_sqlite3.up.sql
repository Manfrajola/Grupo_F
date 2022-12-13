-- Criando a tabela dos produtos
CREATE TABLE IF NOT EXISTS tb_product (id_product INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, 
                        name_product VARCHAR (150) NOT NULL, -- Atributo "name_product" com o tipo varchar(150)
                        code VARCHAR (30) NOT NULL, -- Atributo "code" com o tipo varchar(30)
                        price DECIMAL (10, 2) NOT NULL, -- Atributo "price" com o tipo decimal(10, 2)
                        created_at DATETIME NOT NULL DEFAULT (datetime('now', 'localtime')), -- Atributo "created_at" com o tipo datatime
                        updated_at DATETIME NOT NULL DEFAULT (datetime('now', 'localtime'))); -- Atributo "updated_at" com o tipo datatime

-- Criando a tabela relacionada ao auto incremento
CREATE TABLE sqlite_sequence(name,seq);

-- Criando trigger
CREATE TRIGGER tb_product_updated_at_trig AFTER UPDATE OF name, code, price ON tb_product FOR EACH ROW BEGIN UPDATE tb_product SET updated_at = datetime('now', 'localtime') WHERE id = NEW.id; 
END;