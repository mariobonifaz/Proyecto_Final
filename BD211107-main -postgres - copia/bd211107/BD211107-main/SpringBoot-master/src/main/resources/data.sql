DROP TABLE IF EXISTS citas;
DROP TABLE IF EXISTS dueno;
DROP TABLE IF EXISTS mascotas;
DROP TABLE IF EXISTS medicamentos;
DROP TABLE IF EXISTS tipoMascota;

create table citas
(
    idCita SERIAL primary key not null,
    fecha varchar(50) not null,
    hora varchar(50) not null,
    servicio varchar(50) not null,
    idMascota int not null
);

create table dueno
(
    idDueno SERIAL primary key not null,
    nombre varchar(50) not null,
    direccion varchar(50) not null,
    celular varchar(11) not null
);

CREATE TABLE mascotas
(
    idMascotas SERIAL Primary key not null,
    idDueno int not null,
    nombre varchar(50) not null,
    tipo varchar(50)  not null,
    fechaIngreso varchar(50) not null
);

create table medicamentos
(
    idMedicamento SERIAL Primary key not null,
    nombre varchar(50) not null,
    sustancia varchar(50) not null
);

create table tipomascota
(
    idTipo SERIAL primary key not null,
    nombre varchar (50) not null,
    caracteristicas varchar (150) not null
);

insert into citas (fecha, hora, servicio, idMascota)
values ('04/03/2022' , '13:00', 'citageneral', 1);

insert into dueno (nombre, direccion, celular)
values ('david', 'cuarzo', '961111334');

insert into mascotas (idDueno, nombre, tipo, fechaIngreso)
values (1, 'manchas','gato', '04/03/2022');

insert into medicamentos (nombre, sustancia)
values ('anticovid', '3312');

insert into tipomascota (nombre, caracteristicas)
values ('roedor', 'cola larga');