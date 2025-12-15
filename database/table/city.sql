CREATE TABLE IF NOT EXISTS city(
    id INT NOT NULL PRIMARY KEY,
    city VARCHAR(100) NOT NULL
)ENGINE=INNODB;


INSERT INTO city(id,city)
     VALUES (1,'Surat'),
            (2, 'Pune'),
            (3, 'Mumbai');