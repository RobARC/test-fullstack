CREATE DATABASE db_usuarios; 

USE db_usuarios;

CREATE TABLE usuarios(
    ID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Usuario VARCHAR(16) NOT NULL,
    Contraseña VARCHAR(60) NOT NULL,
    Nombre VARCHAR(25) NOT NULL,
    Apellido VARCHAR(25) NOT NULL,
    Telefono VARCHAR(12),
    Id_Rol INT(11),
    FOREIGN KEY (Id_Rol) REFERENCES roles(ID),
    Fecha_creacion DATE,
    Usuario_creacion DATE,
    Fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Usuario_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Estado ENUM('Activo', 'Inactivo')
);

CREATE TABLE roles(
    ID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(25)
);

CREATE USER IF NOT EXISTS 'Administrador'@'localhost' IDENTIFIED BY 'Admin_01_pwd';
GRANT ALL PRIVILEGES ON *.* TO 'Administrador'@'localhost';

CREATE USER IF NOT EXISTS 'Usuario'@'localhost' IDENTIFIED BY 'Usuario_01_pwd';
GRANT ALL PRIVILEGES ON *.* TO 'Usuario'@'localhost';

INSERT INTO roles(Nombre) VALUE('Administrador');

INSERT INTO roles(Nombre) VALUE('Usuario');

