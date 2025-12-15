USE task1;

CREATE TABLE IF NOT EXISTS users (
    id INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    phone BIGINT NOT NULL UNIQUE,
    name VARCHAR(30) NOT NULL,
    city INT NOT NULL,
    gender ENUM('male','female') NOT NULL,
    password VARCHAR(100) NOT NULL,
    hobbies VARCHAR(255),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
    FOREIGN KEY (city) REFERENCES city(id)
)ENGINE=INNODB;
