CREATE DATABASE restaurant;
CREATE TABLE menu(
	nombreplato varchar(255),
	precio int
);


//Inserts 
INSERT INTO menu(nombreplato, precio) VALUES("Aji de gallina",30);
INSERT INTO menu(nombreplato, precio) VALUES("Arroz con pollo",25);

//Consulta
SELECT nombreplato, precio
FROM menu;