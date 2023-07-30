CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
id bigserial PRIMARY KEY,
name varchar(200) NOT NULL unique
);

CREATE TABLE IF NOT EXISTS products(
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
name varchar(200) NOT NULL UNIQUE,
price decimal(8,2) NOT NULL,
category_id int DEFAULT NULL,
FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL 
);
