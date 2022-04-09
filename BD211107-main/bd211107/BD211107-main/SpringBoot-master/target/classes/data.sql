DROP TABLE IF EXISTS citas;
DROP TABLE IF EXISTS dueno;
DROP TABLE IF EXISTS mascotas;
DROP TABLE IF EXISTS medicamentos;
DROP TABLE IF EXISTS tipoMascota;

create table citas
(
    idCita int(4) AUTO_INCREMENT primary key not null,
    fecha varchar(50) not null,
    hora varchar(50) not null,
    servicio varchar(50) not null,
    idMascota int(4) not null
);

create table dueno
(
    idDueno int (4) AUTO_INCREMENT primary key not null,
    nombre varchar (50) not null,
    direccion varchar (50) not null,
    celular int (10) not null
);

CREATE TABLE mascotas
(
    idMascotas int (4) AUTO_INCREMENT Primary key not null,
    idDueno int(4) not null,
    nombre varchar(50) not null,
    tipo varchar(50)  not null,
    fechaIngreso varchar(50) not null
);

create table medicamentos
(
    idMedicamento int (4) AUTO_INCREMENT Primary key not null,
    nombre        varchar(50) not null,
    sustancia     varchar(50) not null
);

create table tipomascota
(
    idTipo int (4) AUTO_INCREMENT primary key not null,
    nombre varchar (50) not null,
    caracteristicas varchar (150) not null
);

insert into citas (idCita, fecha, hora, servicio, idMascota)
values (1, '04/03/2022' , '13:00', 'citageneral', 1);

insert into dueno (idDueno, nombre, direccion, celular)
values (1, 'david', 'cuarzo', '961111334');

insert into mascotas (idMascotas, idDueno, nombre, tipo, fechaIngreso)
values (1, 1, 'manchas','gato', '04/03/2022');

insert into medicamentos (idMedicamento, nombre, sustancia)
values (1, 'anticovid', '3312');

insert into tipomascota (idTipo, nombre, caracteristicas)
values (1, 'roedor', 'cola larga');