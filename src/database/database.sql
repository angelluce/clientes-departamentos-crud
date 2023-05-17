CREATE DATABASE viamatica;

CREATE SCHEMA private;

CREATE TABLE private.departamentos(
    id_departamento SERIAL PRIMARY KEY,
    nombre_departamento VARCHAR(20)
)

CREATE TABLE private.clientes(
    id_cliente SERIAL PRIMARY KEY,
    nombre_cliente VARCHAR(40),
    direccion_cliente VARCHAR(30),
    telefono_cliente VARCHAR(10),
    id_departamento INTEGER,
	FOREIGN KEY (id_departamento) REFERENCES private.departamentos(id_departamento)
)
