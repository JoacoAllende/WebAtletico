CREATE DATABASE IF NOT EXISTS TorneoCopaCiudadDeAyacucho;

USE TorneoCopaCiudadDeAyacucho;

CREATE TABLE IF NOT EXISTS equipo (
	id INT(2) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL,
	puntos INT(1) NOT NULL DEFAULT '0',
	partidosJugados INT(1) NOT NULL DEFAULT '0',
	partidosGanados INT(1) NOT NULL DEFAULT '0',
	partidosEmpatados INT(1) NOT NULL DEFAULT '0',
	partidosPerdidos INT(1) NOT NULL DEFAULT '0',
	golesAFavor INT(2) NOT NULL DEFAULT '0',
	golesEnContra INT(2) NOT NULL DEFAULT '0',
	diferenciaGoles INT(2) NOT NULL DEFAULT '0',
	golesEnContraTotal INT(2) NOT NULL DEFAULT '0',
	grupo INT(1) NOT NULL,
	cantAmarillas INT(2) NOT NULL DEFAULT '0',
	cantRojas INT(2) NOT NULL DEFAULT '0',
	anio INT(4) NULL,
	torneo BOOLEAN NULL, -- 0 es para el torneo nacional
	PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS goleadores (
	id INT(3) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
	apellido VARCHAR(60) NOT NULL,
	numero INT(2) NOT NULL,
	goles INT(2) NOT NULL,
	id_equipo INT(2) NOT NULL,
	anio INT(4) NULL,
	torneo BOOLEAN NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (id_equipo) REFERENCES equipo(id));

CREATE TABLE IF NOT EXISTS juega (
	id_partido INT(2) NOT NULL AUTO_INCREMENT,
	id_equipoUno INT(2) NOT NULL,
	id_equipoDos INT(2) NOT NULL,
	golesLocal INT(2) NOT NULL DEFAULT '-1',
	golesVisitante INT(2) NOT NULL DEFAULT '-1',
	penalesLocal INT(2) NOT NULL DEFAULT '-1',
	penalesVisitante INT(2) NOT NULL DEFAULT '-1',
	id_grupo INT(1) NULL,
	instancia VARCHAR(3) NULL,
	anio INT(4) NULL,
	torneo BOOLEAN NULL,
	dia DATETIME NULL,
	PRIMARY KEY (id_partido),
	FOREIGN KEY (id_equipoUno) REFERENCES equipo(id),
	FOREIGN KEY (id_equipoDos) REFERENCES equipo(id));

CREATE TABLE IF NOT EXISTS usuarios (
	id_usuario INT(2) NOT NULL AUTO_INCREMENT,
	username VARCHAR(16) NOT NULL,
	password VARCHAR(60) NOT NULL,
	fullname VARCHAR(100) NOT NULL,
	PRIMARY KEY (id_usuario)
);

-- INSERT INTO usuarios (id_usuario, username, password, fullname) 
-- VALUES (1, 'joaco', '1234567ocho', 'Joaquin Allende');

CREATE TABLE IF NOT EXISTS torneo (
	id INT(2) NOT NULL AUTO_INCREMENT,
	descripcion VARCHAR(150) NOT NULL,
	cantEquipos INT(2) NOT NULL,
	primero VARCHAR(70) NOT NULL,
	segundo VARCHAR(70) NOT NULL,
	tercero VARCHAR(70) NOT NULL,
	cuarto VARCHAR(70) NOT NULL,
	goleador VARCHAR(70) NULL,
	cantGoles INT(2) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS equipoParticipaTorneo (
	id_torneo INT(2) NOT NULL,
	equipo VARCHAR(70) NOT NULL,
	PRIMARY KEY (id_torneo, equipo),
	FOREIGN KEY (id_torneo) REFERENCES torneo(id)
);

-- ingreso los datos de los torneos pasados
INSERT INTO torneo (descripcion, cantEquipos, primero, segundo, tercero, cuarto, goleador) VALUES 
('1° Torneo Nacional 14 al 16 de febrero de 1997 - Categoria 1984', 16, 'Club Atletico Boca Juniors', 'Club Azul Athletic', 'Club Estudiantes de La Plata', 'Ferrocarril Roca de Las Flores', 'Matias Alustiza (Club Azul Athletic)'),
('2º Torneo Nacional 6 al 8 de febrero de 1998 - Categoria 1985', 16, 'Racing Club de Avellaneda', 'Club Atletico Boca Juniors', 'Club Atletico Lanus', 'Club Atletico Independiente de Avellaneda', 'Luis Benitez (Racing Club de Avellaneda)');
INSERT INTO torneo (descripcion, cantEquipos, primero, segundo, tercero, cuarto, goleador, cantGoles) VALUES 
('3º Torneo Nacional 5 al 7 de febrero de 1999 - Categoria 1986', 20, 'Club Atletico Boca Juniors', 'Club Atletico Independiente de Avellaneda', 'Club Atletico Lanus', 'Racing Club de Avellaneda', 'Damian Napoli (Club Atletico Boca Juniors)', 8);
INSERT INTO torneo (descripcion, cantEquipos, primero, segundo, tercero, cuarto) VALUES 
('4º Torneo Nacional 4 al 6 de febrero de 2000 - Categoria 1987', 24, 'Club Atletico Boca Juniors', 'Club Atletico Independiente de Avellaneda', 'Racing Club de Avellaneda', 'Club Atletico Ayacucho');
INSERT INTO torneo (descripcion, cantEquipos, primero, segundo, tercero, cuarto, goleador, cantGoles) VALUES 
('5º Torneo Nacional 9 al 11 de febrero de 2001 - Categoria 1988', 20, 'Club Atletico Independiente de Avellaneda', 'Club Atletico River Plate de Montevideo', 'Club Atletico Boca Juniors', 'Racing Club de Avellaneda', 'Sebastian Ahumada (Racing Club de Avellaneda)', 11),
('6º Torneo Nacional 7 al 10 de febrero de 2002 - Categoria 1989', 21, 'Club Atletico Velez Sarsfield', 'Club Atletico Boca Juniors', 'Racing Club de Avellaneda', 'Club Atletico Independiente de Avellaneda', 'Jonatan Cristaldo (Club Atletico Velez Sarsfield)', 11), 
('7º Torneo Nacional 6 al 9 de febrero de 2003 - Categoria 1990', 20, 'Club Atletico Boca Juniors', 'Club Atletico Independiente de Avellaneda', 'Club Atletico Velez Sarsfield', 'Club Deportivo Castelli', 'Brian Nievas (Club Atletico Independiente de Avellaneda)', 11),
('8º Torneo Nacional 5 al 8 de febrero de 2004 - Categoria 1991', 20, 'Club Atletico Boca Juniors', 'Club Atletico Almagro Florida (Mar del Plata)', 'Club Atletico Velez Sarsfield', 'Racing Club de Avellaneda', 'Nicolas Toledo (Ferrocarril Roca de Las Flores)', 10),
('9º Torneo Nacional 6 al 8 de febrero de 2005 - Categoria 1992', 20, 'Club Atletico Boca Juniors', 'Racing Club de Avellaneda', 'Club Atletico Velez Sarsfield', 'Club Atletico Independiente de Avellaneda', 'Ignacio Patero (Club Atletico Velez Sarsfield)', 8),
('10º Torneo Nacional 7 al 9 de febrero de 2006 - Categoria 1993', 20, 'Club Atletico Velez Sarsfield', 'Club Atletico Independiente de Mar del Plata', 'Racing Club de Avellaneda', 'Club Atletico Banfield', 'Federico Caloni (Club Atletico Velez Sarsfield)', 7);
INSERT INTO torneo (descripcion, cantEquipos, primero, segundo, tercero, cuarto) VALUES 
('11º Torneo Nacional 8 al 10 de febrero de 2007 - Categoria 1994', 20, 'Club Atletico Boca Juniors', 'Club Atletico Velez Sarsfield', 'Club Atletico Banfield', 'Club Atletico Liniers de Bahia Blanca'),
('12º Torneo Nacional 6 al 9 de febrero de 2008 - Categoria 1995', 16, 'Club Atletico Banfield', 'E.F.I.G.A. (Las Flores)', 'Club Cadetes de San Martin', 'Club Atletico Ayacucho');
INSERT INTO torneo (descripcion, cantEquipos, primero, segundo, tercero, cuarto, goleador, cantGoles) VALUES 
('13º Torneo Nacional 5 al 7 de febrero de 2016 - Categoria 2003', 20, 'Racing Club de Avellaneda', 'Club Atletico Lanus', 'Club Estudiantes de La Plata', 'Club Atletico Banfield', 'Evian Daniel Crescitelli (Club Estudiantes de La Plata)', 8),
('14º Torneo Nacional 9 al 12 de febrero de 2017 - Categoria 2004', 24, 'Club Atletico Velez Sarsfield', 'Club Estudiantes de La Plata', 'Club Atletico San Lorenzo de Almagro', 'Club Atletico Banfield', 'Santiago Castro (Club Atletico Velez Sarsfield)', 12),
('15º Torneo Nacional 1 al 4 de febrero de 2018 - Categoria 2005', 28, 'Racing Club de Avellaneda', 'Club Atletico Boca Juniors', 'Club Atletico Velez Sarsfield', 'Club de Gimnasia y Esgrima La Plata', 'Raul Ignacio Cabral (Club Atletico Velez Sarsfield)', 15);

-- ingreso los equipos de afa participantes de cada torneo
INSERT INTO equipoParticipaTorneo (id_torneo, equipo) VALUES
(1, 'Club Atletico Boca Juniors'),
(1, 'Racing Club de Avellaneda'),
(1, 'Club Estudiantes de La Plata'),
(2, 'Club Atletico Boca Juniors'),
(2, 'Racing Club de Avellaneda'),
(2, 'Club Atletico Lanus'),
(2, 'Club Atletico Independiente de Avellaneda'),
(3, 'Club Atletico Boca Juniors'),
(3, 'Racing Club de Avellaneda'),
(3, 'Club Atletico Lanus'),
(3, 'Club Atletico Independiente de Avellaneda'),
(4, 'Club Atletico Boca Juniors'),
(4, 'Racing Club de Avellaneda'),
(4, 'Club Atletico River Plate'),
(4, 'Club Atletico Independiente de Avellaneda'),
(5, 'Club Atletico Boca Juniors'),
(5, 'Racing Club de Avellaneda'),
(5, 'Club Atletico Independiente de Avellaneda'),
(5, 'Club Atletico River Plate de Montevideo (Uruguay)'),
(6, 'Club Atletico Boca Juniors'),
(6, 'Racing Club de Avellaneda'),
(6, 'Club Atletico Velez Sarsfield'),
(6, 'Club Atletico Independiente de Avellaneda'),
(6, 'Club Atletico Paulistinha de Brasil'),
(7, 'Club Atletico Boca Juniors'),
(7, 'Racing Club de Avellaneda'),
(7, 'Club Atletico Velez Sarsfield'),
(7, 'Club Atletico Independiente de Avellaneda'),
(8, 'Club Atletico Boca Juniors'),
(8, 'Racing Club de Avellaneda'),
(8, 'Club Atletico Velez Sarsfield'),
(8, 'Club Atletico Independiente de Avellaneda'),
(9, 'Club Atletico Boca Juniors'),
(9, 'Racing Club de Avellaneda'),
(9, 'Club Atletico Velez Sarsfield'),
(9, 'Club Atletico Independiente de Avellaneda'),
(10, 'Club Atletico Banfield'),
(10, 'Racing Club de Avellaneda'),
(10, 'Club Atletico Velez Sarsfield'),
(11, 'Club Atletico Boca Juniors'),
(11, 'Club Atletico Banfield'),
(11, 'Club Atletico Velez Sarsfield'),
(12, 'Racing Club de Avellaneda'),
(12, 'Club Atletico Banfield'),
(13, 'Racing Club de Avellaneda'),
(13, 'Club Estudiantes de La Plata'),
(13, 'Club Atletico Lanus'),
(13, 'Club Atletico Banfield'),
(13, 'Club Olimpo de Bahia Blanca'),
(14, 'Racing Club de Avellaneda'),
(14, 'Club Estudiantes de La Plata'),
(14, 'Club Atletico San Lorenzo de Almagro'),
(14, 'Club Atletico Banfield'),
(14, 'Club Atletico Velez Sarsfield'),
(14, 'Club Nacional de Futbol de Uruguay'),
(15, 'Racing Club de Avellaneda'),
(15, 'Club Estudiantes de La Plata'),
(15, 'Club Atletico Boca Juniors'),
(15, 'Club Atletico Banfield'),
(15, 'Club Atletico Velez Sarsfield'),
(15, 'Club de Gimnasia y Esgrima La Plata'),
(15, 'Club Nacional de Futbol de Uruguay');

-- ingreso equipos del torneon nacional 2018
INSERT INTO `equipo` (`id`, `nombre`, `puntos`, `partidosJugados`, `partidosGanados`, `partidosEmpatados`, `partidosPerdidos`, `golesAFavor`, `golesEnContra`, `diferenciaGoles`, `grupo`) VALUES
	(1, 'Club de Gimnasia y Esgrima La Plata A.F.A.', 9, 3, 3, 0, 0, 13, 0, 13, 1),
	(2, 'Club Atletico Ayacucho', 3, 3, 1, 0, 2, 1, 3, -2, 1),
	(3, 'Club Atletico Jorge Newbery (Maipu)', 0, 3, 0, 0, 3, 1, 14, -13, 1),
	(4, 'Club Social y Deportivo El Fortin ', 6, 3, 2, 0, 1, 5, 3, 2, 1),
	(5, 'Club Atletico Velez Sarsfield A.F.A.', 9, 3, 3, 0, 0, 27, 2, 25, 2),
	(6, 'Club Defensores (Ayacucho)', 6, 3, 2, 0, 1, 5, 12, -7, 2),
	(7, 'Club Deportivo El Leon', 1, 3, 0, 1, 2, 3, 7, -4, 2),
	(8, 'Club Embajadores de Olavarria', 1, 3, 0, 1, 2, 4, 18, -14, 2),
	(9, 'Club Atletico Banfield A.F.A.', 9, 3, 3, 0, 0, 25, 0, 25, 3),
	(10, 'Club de Gimnasia y Esgrima de Tandil', 1, 3, 0, 1, 2, 1, 11, -10, 3),
	(11, 'Club Sportivo Trabajo (Balcarce)', 4, 3, 1, 1, 1, 6, 11, -5, 3),
	(12, ' C.A.F.A. (Moreno)', 2, 3, 0, 2, 1, 4, 14, -10, 3),
	(13, 'Club Estudiantes de la Plata A.F.A', 9, 3, 3, 0, 0, 25, 0, 25, 4),
	(14, 'Pequeños Talentos (Rauch)', 1, 3, 0, 1, 2, 2, 15, -13, 4),
	(15, 'Club Atletico Quilmes (Mar del Plata)', 6, 3, 2, 0, 1, 5, 8, -3, 4),
	(16, 'Club Social y Deportivo Pinamar', 1, 3, 0, 1, 2, 1, 10, -9, 4),
	(17, 'Racing Club de Avellaneda A.F.A.', 9, 3, 3, 0, 0, 14, 0, 14, 5),
	(18, 'Club Atletico Ferrocarril Sud (Tandil)', 4, 3, 1, 1, 1, 4, 4, 0, 5),
	(19, 'Club Deportivo Juventud Unida', 4, 3, 1, 1, 1, 2, 7, -5, 5),
	(20, 'Club Atletico Chascomus', 0, 3, 0, 0, 3, 0, 9, -9, 5),
	(21, 'Club Atletico Boca Juniors A.F.A.', 9, 3, 3, 0, 0, 21, 0, 21, 6),
	(22, 'Club Independiente (Tandil)', 4, 3, 1, 1, 1, 2, 9, -7, 6),
	(23, 'Club Atletico Alvarado (Mar del Plata)', 0, 3, 0, 0, 3, 2, 14, -12, 6),
	(24, 'Club Atletico Estudiantes (Olavarria)', 4, 3, 1, 1, 1, 3, 5, -2, 6),
	(25, 'Club Nacional de Futbol (Uruguay)', 9, 3, 3, 0, 0, 20, 1, 19, 7),
	(26, 'Club Excursionistas Tandil', 0, 3, 0, 0, 3, 2, 26, -24, 7),
	(27, 'Club Atletico Independiente (Mar del Plata)', 6, 3, 2, 0, 1, 9, 5, 4, 7),
	(28, 'Club Ferrocarril Roca (Las Flores)', 3, 3, 1, 0, 2, 8, 7, 1, 7);

-- pongo anio y torneo para todos los equipos del nacional 2018
UPDATE equipo SET anio = 2018;
UPDATE equipo SET torneo = 0;

-- actualizo los goles total de cada equipo del torneo nacional 2018
UPDATE equipo SET golesEnContraTotal = 3 WHERE id = 1;
UPDATE equipo SET golesEnContraTotal = 4 WHERE id = 2;
UPDATE equipo SET golesEnContraTotal = 14 WHERE id = 3;
UPDATE equipo SET golesEnContraTotal = 4 WHERE id = 4;
UPDATE equipo SET golesEnContraTotal = 3 WHERE id = 5;
UPDATE equipo SET golesEnContraTotal = 14 WHERE id = 6;
UPDATE equipo SET golesEnContraTotal = 7 WHERE id = 7;
UPDATE equipo SET golesEnContraTotal = 18 WHERE id = 8;
UPDATE equipo SET golesEnContraTotal = 0 WHERE id = 9;
UPDATE equipo SET golesEnContraTotal = 11 WHERE id = 10;
UPDATE equipo SET golesEnContraTotal = 20 WHERE id = 11;
UPDATE equipo SET golesEnContraTotal = 18 WHERE id = 12;
UPDATE equipo SET golesEnContraTotal = 5 WHERE id = 13;
UPDATE equipo SET golesEnContraTotal = 15 WHERE id = 14;
UPDATE equipo SET golesEnContraTotal = 9 WHERE id = 15;
UPDATE equipo SET golesEnContraTotal = 12 WHERE id = 16;
UPDATE equipo SET golesEnContraTotal = 2 WHERE id = 17;
UPDATE equipo SET golesEnContraTotal = 10 WHERE id = 18;
UPDATE equipo SET golesEnContraTotal = 9 WHERE id = 19;
UPDATE equipo SET golesEnContraTotal = 9 WHERE id = 20;
UPDATE equipo SET golesEnContraTotal = 4 WHERE id = 21;
UPDATE equipo SET golesEnContraTotal = 19 WHERE id = 22;
UPDATE equipo SET golesEnContraTotal = 14 WHERE id = 23;
UPDATE equipo SET golesEnContraTotal = 6 WHERE id = 24;
UPDATE equipo SET golesEnContraTotal = 5 WHERE id = 25;
UPDATE equipo SET golesEnContraTotal = 29 WHERE id = 26;
UPDATE equipo SET golesEnContraTotal = 19 WHERE id = 27;
UPDATE equipo SET golesEnContraTotal = 6 WHERE id = 28;

-- actualiza amarillas y rojas de cada equipo del nacional 2018
UPDATE equipo SET cantAmarillas = 5, cantRojas = 0 WHERE id = 1;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 2;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 3;
UPDATE equipo SET cantAmarillas = 2, cantRojas = 0 WHERE id = 4;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 5;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 6;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 7;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 8;
UPDATE equipo SET cantAmarillas = 2, cantRojas = 0 WHERE id = 9;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 1 WHERE id = 10;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 11;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 12;
UPDATE equipo SET cantAmarillas = 2, cantRojas = 1 WHERE id = 13;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 14;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 15;
UPDATE equipo SET cantAmarillas = 2, cantRojas = 0 WHERE id = 16;
UPDATE equipo SET cantAmarillas = 2, cantRojas = 1 WHERE id = 17;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 18;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 19;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 20;
UPDATE equipo SET cantAmarillas = 2, cantRojas = 0 WHERE id = 21;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 22;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 23;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 24;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 25;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 26;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 27;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 28;

-- agrego los partidos del torneo nacional del 2018
INSERT INTO `juega` (`id_partido`, `id_equipoUno`, `id_equipoDos`, `golesLocal`, `golesVisitante`, `penalesLocal`, `penalesVisitante`, `id_grupo`, `instancia`) VALUES
(1, 2, 4, 0, 1, -1, -1, 1, NULL),
(2, 1, 3, 9, 0, -1, -1, 1, NULL),
(3, 1, 2, 2, 0, -1, -1, 1, NULL),
(4, 3, 4, 1, 4, -1, -1, 1, NULL),
(5, 1, 4, 2, 0, -1, -1, 1, NULL),
(6, 2, 3, 1, 0, -1, -1, 1, NULL),
(7, 5, 7, 4, 1, -1, -1, 2, NULL),
(8, 6, 8, 4, 1, -1, -1, 2, NULL),
(9, 6, 7, 1, 0, -1, -1, 2, NULL),
(10, 5, 8, 12, 1, -1, -1, 2, NULL),
(11, 7, 8, 2, 2, -1, -1, 2, NULL),
(12, 5, 6, 11, 0, -1, -1, 2, NULL),
(13, 10, 11, 0, 3, -1, -1, 3, NULL),
(14, 9, 12, 10, 0, -1, -1, 3, NULL),
(15, 11, 12, 3, 3, -1, -1, 3, NULL),
(16, 9, 10, 7, 0, -1, -1, 3, NULL),
(17, 9, 11, 8, 0, -1, -1, 3, NULL),
(18, 10, 12, 1, 1, -1, -1, 3, NULL),
(19, 13, 14, 11, 0, -1, -1, 4, NULL),
(20, 15, 16, 2, 0, -1, -1, 4, NULL),
(21, 14, 15, 1, 3, -1, -1, 4, NULL),
(22, 13, 16, 7, 0, -1, -1, 4, NULL),
(23, 14, 16, 1, 1, -1, -1, 4, NULL),
(24, 13, 15, 7, 0, -1, -1, 4, NULL),
(25, 18, 19, 1, 1, -1, -1, 5, NULL),
(26, 17, 20, 5, 0, -1, -1, 5, NULL),
(27, 17, 18, 3, 0, -1, -1, 5, NULL),
(28, 19, 20, 1, 0, -1, -1, 5, NULL),
(29, 18, 20, 3, 0, -1, -1, 5, NULL),
(30, 17, 19, 6, 0, -1, -1, 5, NULL),
(31, 23, 24, 2, 3, -1, -1, 6, NULL),
(32, 21, 22, 9, 0, -1, -1, 6, NULL),
(33, 22, 23, 2, 0, -1, -1, 6, NULL),
(34, 21, 24, 3, 0, -1, -1, 6, NULL),
(35, 22, 24, 0, 0, -1, -1, 6, NULL),
(36, 21, 23, 9, 0, -1, -1, 6, NULL),
(37, 27, 28, 1, 0, -1, -1, 7, NULL),
(38, 25, 26, 11, 0, -1, -1, 7, NULL),
(39, 26, 27, 0, 8, -1, -1, 7, NULL),
(40, 25, 28, 4, 1, -1, -1, 7, NULL),
(41, 25, 27, 5, 0, -1, -1, 7, NULL),
(42, 26, 28, 2, 7, -1, -1, 7, NULL),
(43, 5, 22, 10, 0, -1, -1, NULL, 'o'),
(44, 9, 19, 2, 0, -1, -1, NULL, 'o'),
(45, 13, 11, 9, 0, -1, -1, NULL, 'o'),
(46, 21, 24, 1, 1, 6, 5, NULL, 'o'),
(47, 25, 18, 6, 0, -1, -1, NULL, 'o'),
(48, 17, 6, 2, 0, -1, -1, NULL, 'o'),
(49, 1, 15, 1, 0, -1, -1, NULL, 'o'),
(50, 27, 4, 1, 0, -1, -1, NULL, 'o'),
(51, 5, 27, 10, 0, -1, -1, NULL, 'c'),
(52, 9, 1, 0, 0, 2, 3, NULL, 'c'),
(53, 13, 17, 1, 3, -1, -1, NULL, 'c'),
(54, 21, 25, 4, 1, -1, -1, NULL, 'c'),
(55, 5, 21, 0, 0, 4, 5, NULL, 's'),
(56, 1, 17, 1, 2, -1, -1, NULL, 's'),
(57, 25, 27, 4, 0, -1, -1, NULL, '7'),
(58, 9, 13, 2, 0, -1, -1, NULL, '5'),
(59, 5, 1, 1, 1, 5, 3, NULL, 't'),
(60, 21, 17, 0, 2, -1, -1, NULL, 'f'),
(61, 28, 28, 0, 0, 1, 0, NULL, 'ccp'),
(62, 2, 26, 4, 0, -1, -1, NULL, 'ccp'),
(63, 12, 8, 0, 5, -1, -1, NULL, 'ccp'),
(64, 7, 16, 2, 0, -1, -1, NULL, 'ccp'),
(65, 28, 7, 0, 1, -1, -1, NULL, 'scp'),
(66, 2, 8, 0, 1, -1, -1, NULL, 'scp'),
(67, 7, 8, 1, 0, -1, -1, NULL, 'fcp');

-- actualizo el año y el torneo para los partidos del torneo nacional 2018
UPDATE juega SET anio = 2018;
UPDATE juega SET torneo = 0;

-- cargo los goleadores del nacional de 2018
INSERT INTO `goleadores` (`id`, `nombre`, `apellido`, `numero`, `goles`, `id_equipo`) VALUES
(1, 'Raul Ignacio', 'Cabral', 9, 15, 5),
(2, 'Ezequiel', 'Nicolini', 7, 12, 25),
(3, 'Lautaro', 'Castaño', 11, 11, 5),
(4, 'Kevin Joel', 'Brito', 16, 9, 5),
(5, 'Gianluca', 'Bosch', 17, 7, 5),
(6, 'Lautaro', 'Ahumada ', 7, 6, 5),
(7, 'Mateo', 'Comba', 9, 9, 25),
(8, 'Mauricio', 'Roldan', 11, 6, 9),
(9, 'Santiago Valentin', 'Gonzales', 10, 5, 9),
(10, 'Octavio', 'Casalongue', 16, 5, 17),
(11, 'Juan Pablo', 'Arango Rolfi', 10, 5, 13),
(12, 'Nahuel', 'Simon', 9, 4, 15),
(13, 'Lucas Nicolas', 'Parera', 7, 4, 9),
(14, 'Luciano', 'Dias ', 10, 4, 17),
(15, 'Nicolas', 'Mitic Flores', 9, 4, 1),
(16, 'Nehuen', 'Benedetti', 14, 4, 13),
(17, 'Sebastian', 'Traverso', 4, 3, 13),
(18, 'Martin', 'Naser', 16, 3, 13),
(19, 'Luca', 'Landriel', 11, 4, 13),
(20, 'Thiago Valentin', 'Rolon', 8, 4, 21),
(21, 'Santiago', 'Peralta', 11, 3, 25),
(22, 'Thiago', 'Taboada', 9, 3, 17),
(23, 'Alex', 'Costa', 2, 3, 28),
(24, 'Agustin', 'Suarez', 14, 3, 25),
(25, 'Victor Hugo', 'Galeano', 7, 3, 21),
(26, 'Thomas', 'Mielniczuk', 6, 3, 1),
(27, 'Juan Cruz', 'Vergara', 7, 2, 1),
(28, 'Martin', 'Paz', 11, 3, 6),
(29, 'Mateo', 'Miglino', 15, 3, 5),
(30, 'Teo', 'Gomez ', 11, 3, 11),
(31, 'Facundo Nahuel', 'Roemo', 8, 3, 9),
(32, 'Lautaro Uriel', 'Peralta', 9, 3, 9),
(33, 'Nicolas Emanuel', 'Rojas', 16, 2, 9),
(34, 'Adrian Benjamin', 'Lucero Alaggio', 14, 2, 9),
(35, 'Juan Pablo', 'Moreno', 10, 3, 21),
(36, 'Tomas Joel', 'Lopez', 11, 3, 21),
(37, 'Juan Segundo', 'Larrivey', 7, 2, 13),
(38, 'Gano Genaro', 'Galarza', 5, 2, 13),
(39, 'Tiziano', 'Sanmartino', 3, 2, 13),
(40, 'Fabian', 'Masson', 9, 2, 28),
(41, 'Wenceslao', 'Cordomi', 11, 2, 28),
(42, 'Nicolas', 'Lombardi', 9, 2, 7),
(43, 'Juan Martin', 'Herrera ', 11, 2, 7),
(44, 'Santino', 'Sacchi', 11, 2, 8),
(45, 'Elias', 'Ferreyra', 9, 2, 8),
(46, 'Ramiro', 'Macarrone', 3, 2, 17),
(47, 'Mateo', 'Gutierrez', 14, 2, 17),
(48, 'Tomas', 'Arburua', 12, 2, 17),
(49, 'Tomas Alejandro', 'Lopez', 13, 2, 4),
(50, 'Tobias', 'Ferrari ', 10, 2, 18),
(51, 'Lucas', 'Dietzel', 17, 2, 8),
(52, 'Faustino', 'De Vito ', 4, 2, 5),
(53, 'Matias', 'Guerra', 6, 2, 27),
(54, 'Santiago', 'Ronda Laborde', 11, 2, 27),
(55, 'Juan Francisco', 'Vazquez Vizmara', 9, 2, 11),
(56, 'Diego', 'Rivas Urriza', 9, 2, 4),
(57, 'Marco', 'Miguens', 13, 2, 13),
(58, 'Santiago', 'Tobar', 15, 2, 13),
(59, 'Carlos', 'Otazu Fariña', 9, 2, 13),
(60, 'Agustin', 'Camplone', 14, 2, 24),
(61, 'Luca', 'Crivelli', 10, 1, 24),
(62, 'Jhoan', 'Cardozo', 8, 2, 25),
(63, 'Exequias', 'Zapata', 11, 2, 17),
(64, 'Tiago', 'Gonzalez ', 15, 2, 17),
(65, 'Gaston', 'Galeano', 8, 2, 7),
(66, 'Simon', 'Frias ', 8, 2, 19),
(67, 'Lucas', 'Lazarte', 9, 2, 18),
(68, 'Joshua Nicolas', 'Portillo', 6, 2, 21),
(69, 'Ivan', 'alvarez ', 9, 2, 6),
(70, 'Ezequiel', 'Gregnoli', 10, 2, 12),
(71, 'Lucio', 'Vazquez', 16, 2, 1),
(72, 'Simon', 'Meza', 10, 2, 1),
(73, 'Homero', 'Dobal', 10, 1, 2),
(74, 'Tomas Valentin', 'Velazquez ', 14, 1, 9),
(75, 'Santiago Elias', 'Acosta', 3, 1, 9),
(76, 'Agustin', 'Lopez', 5, 1, 9),
(77, 'Octavio Nahuel', 'Diaz', 13, 1, 9),
(78, 'Ciro', 'Lopez ', 11, 1, 23),
(79, 'Thiago', 'Pintado', 13, 1, 25),
(80, 'Mathias', 'Albistur', 17, 1, 25),
(81, 'Alessandro', 'Scarpa', 5, 1, 10),
(82, 'Gonzalo', 'Bustamante ', 10, 1, 27),
(83, 'Joaquin', 'Contino', 11, 1, 2),
(84, 'Rufino', 'Cordero', 13, 1, 2),
(85, 'Francisco', 'Diz', 15, 1, 2),
(86, 'Nahuel', 'Parenti', 10, 1, 22),
(87, 'Emanuel', 'Pica', 5, 1, 4),
(88, 'Enzo', 'Carrera', 7, 1, 8),
(89, 'Tomas', 'Bustos', 14, 1, 8),
(90, 'Nahuel Fernando', 'Lamorte', 6, 1, 11),
(91, 'Tiziano', 'Godoy', 5, 1, 1),
(92, 'Nicolas', 'Coceres', 8, 1, 1),
(93, 'Juan Ignacio', 'Canale', 6, 1, 13),
(94, 'Gianni', 'Dislacio', 4, 1, 24),
(95, 'Roman', 'Salazar', 4, 1, 21),
(96, 'Franco', 'Bortolin', 18, 1, 12),
(97, 'Alexis', 'Servia Leguizamon', 12, 1, 12),
(98, 'Kevin', 'Gonzalez Vargas', 14, 1, 5),
(99, 'Dylan', 'Meaca', 5, 1, 14),
(100, 'Jeronimo', 'Sosa', 6, 1, 15),
(101, 'Tobias', 'Zapata', 9, 1, 22),
(102, 'Juan Jose', 'Teriaca ', 8, 1, 27),
(103, 'Mateo', 'Becci Trama', 9, 1, 27),
(104, 'Ramiro', 'Cabranes', 7, 1, 27),
(105, 'Augusto', 'Ruis', 13, 1, 27),
(106, 'Joaquin', 'Mandiola', 3, 1, 27),
(107, 'Thomas', 'Scolari', 2, 1, 13),
(108, 'Fabricio', 'Ventresca', 9, 1, 21),
(109, 'Lautaro', 'Napolitano', 11, 1, 1),
(110, 'Joaquin', 'Soria ', 13, 1, 17),
(111, 'Tobias', 'Zapata', 9, 1, 23),
(112, 'Ezequiel Agustin', 'Raineri', 7, 1, 16),
(113, 'Gaspar', 'Conde Etchebarne', 2, 1, 14),
(114, 'Lautaro Omar', 'Sosa', 6, 1, 7),
(115, 'Nelson', 'Franco', 5, 1, 28),
(116, 'Benjamin', 'Andolfatti', 2, 1, 26),
(117, 'Tobias', 'Lopez', 10, 1, 26),
(118, 'Martiniano', 'Iralur', 5, 1, 2);

-- actualizo el año y torneo de los equipos del nacional 2018
UPDATE goleadores SET anio = 2018;
UPDATE goleadores SET torneo = 0;

-- ingreso los equipos del paralelo 2018
INSERT INTO `equipo` (`nombre`, `puntos`, `partidosJugados`, `partidosGanados`, `partidosEmpatados`, `partidosPerdidos`, `golesAFavor`, `golesEnContra`, `diferenciaGoles`, `grupo`) VALUES
('Club Social y Deportivo El Fortin ', 6, 3, 2, 0, 1, 8, 1, 7, 1),
('Club Deportivo El Leon ', 4, 3, 1, 1, 1, 3, 2, 1, 1),
('Club Excursionistas Tandil', 0, 3, 0, 0, 3, 0, 15, -15, 1),
('Club Ferrocarril Roca (Las Flores)', 7, 3, 2, 1, 0, 8, 1, 7, 1),
('Club Atletico Estudiantes (Olavarria)', 3, 3, 1, 0, 2, 3, 6, -3, 2),
('Club Sarmiento (Ayacucho)', 0, 3, 0, 0, 3, 0, 6, -6, 2),
('Club Independiente (Tandil)', 6, 3, 2, 0, 1, 4, 1, 3, 2),
('Club Atletico Independiente (Mar del Plata)', 9, 3, 3, 0, 0, 7, 1, 6, 2),
('Club Alumni Azuleño', 6, 3, 2, 0, 1, 4, 1, 3, 3),
('Club Defensores (Ayacucho)', 3, 3, 1, 0, 2, 2, 4, -2, 3),
('Club Atletico Ferrocarril Sud (Tandil)', 1, 3, 0, 1, 2, 0, 5, -5, 3),
('Club Atletico Quilmes (Mar del Plata)', 7, 3, 2, 1, 0, 4, 0, 4, 3),
('Club Atletico Ayacucho', 9, 3, 3, 0, 0, 9, 0, 9, 4),
('Club Deportivo Juevntud Unida', 0, 3, 0, 0, 3, 0, 8, -8, 4),
('Club de Gimnasia y Esgrima de Tandil', 6, 3, 2, 0, 1, 5, 3, 2, 4),
('Club Atletico Jorge Newbery', 3, 3, 1, 0, 2, 3, 6, -3, 4);

-- actualizo el año y el torneo de los equipos del paralelo 2018
UPDATE equipo SET torneo = 1 WHERE anio IS NULL;
UPDATE equipo SET anio = 2018;

-- actualizo los goles en contra total de los equipos del torneo paralelo 2018
UPDATE equipo SET golesEnContraTotal = 1 WHERE id = 29;
UPDATE equipo SET golesEnContraTotal = 0 WHERE id = 30;
UPDATE equipo SET golesEnContraTotal = 15 WHERE id = 31;
UPDATE equipo SET golesEnContraTotal = 3 WHERE id = 32;
UPDATE equipo SET golesEnContraTotal = 6 WHERE id = 33;
UPDATE equipo SET golesEnContraTotal = 6 WHERE id = 34;
UPDATE equipo SET golesEnContraTotal = 4 WHERE id = 35;
UPDATE equipo SET golesEnContraTotal = 3 WHERE id = 36;
UPDATE equipo SET golesEnContraTotal = 3 WHERE id = 37;
UPDATE equipo SET golesEnContraTotal = 5 WHERE id = 38;
UPDATE equipo SET golesEnContraTotal = 5 WHERE id = 39;
UPDATE equipo SET golesEnContraTotal = 0 WHERE id = 40;
UPDATE equipo SET golesEnContraTotal = 6 WHERE id = 41;
UPDATE equipo SET golesEnContraTotal = 8 WHERE id = 42;
UPDATE equipo SET golesEnContraTotal = 6 WHERE id = 43;
UPDATE equipo SET golesEnContraTotal = 6 WHERE id = 44;

-- actualiza amarillas y rojas de cada equipo del paralelo 2018
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 29;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 30;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 31;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 32;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 33;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 34;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 35;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 36;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 37;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 38;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 39;
UPDATE equipo SET cantAmarillas = 1, cantRojas = 0 WHERE id = 40;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 41;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 42;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 43;
UPDATE equipo SET cantAmarillas = 0, cantRojas = 0 WHERE id = 44;

-- agrego los partidos del torneo paralelo 2018
INSERT INTO `juega` (`id_equipoUno`, `id_equipoDos`, `golesLocal`, `golesVisitante`, `penalesLocal`, `penalesVisitante`, `id_grupo`, `instancia`) VALUES
(29, 32, 0, 1, -1, -1, 1, NULL),
(30, 31, 2, 0, -1, -1, 1, NULL),
(31, 32, 0, 6, -1, -1, 1, NULL),
(29, 30, 1, 0, -1, -1, 1, NULL),
(30, 32, 1, 1, -1, -1, 1, NULL),
(29, 31, 7, 0, -1, -1, 1, NULL),
(33, 36, 1, 4, -1, -1, 2, NULL),
(34, 35, 0, 2, -1, -1, 2, NULL),
(33, 34, 2, 0, -1, -1, 2, NULL),
(33, 35, 0, 2, -1, -1, 2, NULL),
(34, 36, 0, 2, -1, -1, 2, NULL),
(35, 36, 0, 1, -1, -1, 2, NULL),
(39, 40, 0, 0, -1, -1, 3, NULL),
(37, 38, 1, 0, -1, -1, 3, NULL),
(37, 40, 0, 1, -1, -1, 3, NULL),
(38, 39, 2, 0, -1, -1, 3, NULL),
(37, 39, 3, 0, -1, -1, 3, NULL),
(38, 40, 0, 3, -1, -1, 3, NULL),
(42, 43, 0, 3, -1, -1, 4, NULL),
(41, 44, 4, 0, -1, -1, 4, NULL),
(42, 44, 0, 2, -1, -1, 4, NULL),
(43, 44, 2, 1, -1, -1, 4, NULL),
(41, 42, 3, 0, -1, -1, 4, NULL),
(41, 43, 2, 0, -1, -1, 4, NULL),
(41, 43, 3, 0, -1, -1, NULL, 'c'),
(36, 37, 2, 0, -1, -1, NULL, 'c'),
(32, 35, 2, 2, 1, 2, NULL, 'c'),
(40, 29, 0, 0, 2, 0, NULL, 'c'),
(41, 40, 0, 3, -1, -1, NULL, 's'),
(36, 35, 1, 0, -1, -1, NULL, 's'),
(41, 35, 0, 3, -1, -1, NULL, 't'),
(40, 36, 2, 0, -1, -1, NULL, 'f'),
(30, 30, 0, 0, 1, 0, NULL, 'scp'),
(38, 33, 0, 1, -1, -1, NULL, 'scp'),
(30, 33, 0, 0, 1, 0, NULL, 'fcp');

-- actualizo el año y el torneo para los partidos del torneo paralelo 2018
UPDATE juega SET anio = 2018;
UPDATE juega SET torneo = 1 WHERE torneo IS NULL;

-- cargo los goleadores del paralelo de 2018
INSERT INTO `goleadores` (`nombre`, `apellido`, `numero`, `goles`, `id_equipo`) VALUES
('Nasif', 'Elia', 9, 5, 40),
('Valentin', 'Capuano Torres', 10, 2, 40),
('Franco', 'Bonilauri', 14, 1, 40),
('Benjamin', 'Villaryel', 11, 1, 40),
('Patricio', 'Peñalva', 11, 4, 32),
('David', 'Juarez', 8, 4, 36),
('Fermin', 'Loengo', 10, 2, 36),
('Leonel Adrian', 'Sandez', 3, 2, 36),
('Tobias ', 'Castellano', 15, 1, 36),
('Agustin', 'Acosta', 10, 3, 41),
('Martin Maximiliano', 'Suarez ', 8, 2, 41),
('Juan', 'Pelegrini Gomila', 15, 2, 41),
('Lisandro', 'De Arrieta Mazza ', 5, 1, 41),
('Xanti', 'Urra', 14, 1, 41),
('Enoc', 'Girado', 9, 3, 35),
('Benjamin', 'Saenz', 8, 1, 35),
('Valentino', 'Rivero', 14, 1, 35),
('Baltasar', 'Anselmi', 2, 1, 35),
('Joaquin', 'Camara', 9, 2, 43),
('Thiago', 'Gadea', 7, 2, 29),
('Lucas', 'Gomez', 5, 2, 29),
('Fausto', 'Penacchionni', 6, 1, 33),
('Juan Ignacio', 'Velazquez', 15, 1, 37),
('Mateo Exequiel', 'Diaz', 9, 1, 37),
('Santiago', 'Recci', 10, 1, 37),
('Dylan', 'Russo', 10, 1, 32),
('Laureano', 'Lamas', 22, 1, 32),
('Valentin', 'Herrera ', 8, 1, 32),
('Franco', 'Bortolotti', 10, 1, 29),
('Lionel', 'Bustamante ', 2, 1, 29),
('Agustin', 'Medina', 8, 1, 29),
('Lautaro', 'Lopez ', 3, 1, 29),
('Hernan', 'La Frossia Harisgarat', 5, 1, 30),
('Brian Ezequiel', 'Sanchez', 7, 1, 43),
('Joaquin', 'Almaraz', 11, 1, 43),
('Gonzalo', 'Cabalin', 10, 1, 43),
('Geronimo', 'Girolet', 7, 1, 35),
('Pedro', 'Morel', 11, 1, 41),
('Juan Jose', 'Amodeo', 2, 1, 41),
('Manuel', 'alvarez', 12, 1, 36),
('Valentino', 'Vitali', 11, 1, 33),
('Bautista', 'Serrano', 7, 1, 33),
('Mateo', 'Novo', 8, 1, 33),
('Martin', 'Freije Elorz', 9, 1, 44),
('Joaquin', 'Peralta', 5, 1, 44),
('Nicolas', 'Ferdara', 10, 1, 44),
('Renzo', 'Ascat', 7, 1, 38),
('Lautaro', 'Videla ', 5, 1, 38),
('Diego', 'Lopez', 7, 1, 37),
('Valentin', 'Bianchimmi', 19, 1, 32);

-- actualizo el año y torneo de los equipos del paralelo 2018
UPDATE goleadores SET anio = 2018;
UPDATE goleadores SET torneo = 1 WHERE torneo IS NULL;

-- ingreso los equipos del torneo nacional 2019
INSERT INTO `equipo` (`nombre`, `grupo`, `anio`, `torneo`) VALUES
('Club Atletico River Plate A.F.A.', 1, 2019, 0),
('Club y Biblioteca Ramon Santamarina (Tandil)', 1, 2019, 0),
('Club Atletico Estudiantes (Olavarria)', 1, 2019, 0),
('Club Atletico Argentino (Saladillo)', 1, 2019, 0),
('Club Estudiantes de La Plata A.F.A.', 2, 2019, 0),
('Club Atletico y Social San Lorenzo (Rauch)', 2, 2019, 0),
('Club Atletico Ayacucho', 2, 2019, 0),
('Club Atletico Belgrano (Vidal)', 2, 2019, 0),
('Club Nacional de Futbol de Uruguay', 3, 2019, 0),
('Club Atletico Ferrocarril Sud (Tandil)', 3, 2019, 0),
('Club Atletico Quilmes (Mar del Plata)', 3, 2019, 0),
('Asociacion Deportiva Atletico Villa Gesell', 3, 2019, 0),
('Club Atletico Banfield A.F.A.', 4, 2019, 0),
('Club de Gimnasia y Esgrima de Tandil', 4, 2019, 0),
('Club Deportivo Independencia (A. G. Chavez)', 4, 2019, 0),
('Club Deportivo Juventud Unida (Gral. Madariaga)', 4, 2019, 0),
('Club Atletico Boca Juniors A.F.A.', 5, 2019, 0),
('Club Defensores (Ayacucho)', 5, 2019, 0),
('Club Atletico Chascomus', 5, 2019, 0),
('Club Social y Deportivo Union (Maipu)', 5, 2019, 0),
('Club Atletico San Lorenzo de Almagro A.F.A.', 6, 2019, 0),
('Club Atletico Social y Deportivo Rauch', 6, 2019, 0),
('Club Atletico Liniers (Bahia Blanca) B', 6, 2019, 0),
('Club Deportivo El Leon (Gral. Madariaga)', 6, 2019, 0),
('Racing Club de Avellaneda A.F.A.', 7, 2019, 0),
('Club Sarmiento (Ayacucho)', 7, 2019, 0),
('Club Atletico Independiente (Mar del Plata)', 7, 2019, 0),
('Club Atletico Maipu', 7, 2019, 0),
('Club Atletico Velez Sarsfield A.F.A.', 8, 2019, 0),
('Club Independiente (Tandil)', 8, 2019, 0),
('Club Atletico Liniers (Bahia Blanca) A', 8, 2019, 0),
('Club Ferrocarril Roca (Las Flores)', 8, 2019, 0);

-- ingreso los equipos del torneo paralelo 2019
INSERT INTO `equipo` (`nombre`, `grupo`, `anio`, `torneo`) VALUES
('Club Atletico Estudiantes (Olavarria)', 1, 2019, 1),
('Club Deportivo Juventud Unida (Gral. Madariaga)', 1, 2019, 1),
('Club y Biblioteca Ramon Santamarina (Tandil)', 1, 2019, 1),
('Club Atletico Liniers (Bahia Blanca) A', 1, 2019, 1),
('Club Alumni Azuleño', 2, 2019, 1),
('Club Sarmiento (Ayacucho)', 2, 2019, 1),
('Club Independiente (Tandil)', 2, 2019, 1),
('Club Atletico Liniers (Bahia Blanca) B', 2, 2019, 1),
('Club Atletico Independiente (Mar del Plata)', 3, 2019, 1),
('Club Defensores (Ayacucho)', 3, 2019, 1),
('Club Atletico Ferrocarril Sud (Tandil)', 3, 2019, 1),
('Club Atletico Ayacucho', 4, 2019, 1),
('Club Atletico Maipu', 4, 2019, 1),
('Club Ferrocarril Roca (Las Flores)', 4, 2019, 1);

-- ingresa los partidos de la fase de grupos del nacional
INSERT INTO juega (id_equipoUno, id_equipoDos, id_grupo, anio, torneo) VALUES
(47, 46, 1, 2019, 0),
(45, 48, 1, 2019, 0),
(48, 46, 1, 2019, 0),
(45, 47, 1, 2019, 0),
(47, 48, 1, 2019, 0),
(45, 46, 1, 2019, 0),
(49, 51, 2, 2019, 0),
(50, 52, 2, 2019, 0),
(51, 50, 2, 2019, 0),
(49, 52, 2, 2019, 0),
(51, 52, 2, 2019, 0),
(49, 50, 2, 2019, 0),
(54, 55, 3, 2019, 0),
(53, 56, 3, 2019, 0),
(54, 56, 3, 2019, 0),
(53, 55, 3, 2019, 0),
(53, 54, 3, 2019, 0),
(45, 56, 3, 2019, 0),
(58, 59, 4, 2019, 0),
(57, 60, 4, 2019, 0),
(57, 59, 4, 2019, 0),
(58, 60, 4, 2019, 0),
(57, 58, 4, 2019, 0),
(59, 60, 4, 2019, 0),
(62, 64, 5, 2019, 0),
(61, 63, 5, 2019, 0),
(64, 63, 5, 2019, 0),
(61, 62, 5, 2019, 0),
(62, 63, 5, 2019, 0),
(61, 64, 5, 2019, 0),
(66, 68, 6, 2019, 0),
(65, 67, 6, 2019, 0),
(67, 68, 6, 2019, 0),
(65, 66, 6, 2019, 0),
(67, 66, 6, 2019, 0),
(65, 68, 6, 2019, 0),
(70, 72, 7, 2019, 0),
(69, 71, 7, 2019, 0),
(70, 71, 7, 2019, 0),
(69, 72, 7, 2019, 0),
(71, 72, 7, 2019, 0),
(69, 70, 7, 2019, 0),
(75, 74, 8, 2019, 0),
(73, 76, 8, 2019, 0),
(73, 75, 8, 2019, 0),
(74, 76, 8, 2019, 0),
(75, 76, 8, 2019, 0),
(73, 74, 8, 2019, 0);

-- actualiza los horarios de los partidos del nacional

UPDATE juega SET dia = '2019-02-13 16:10:00' WHERE id_partido = 103;
UPDATE juega SET dia = '2019-02-13 18:30:00' WHERE id_partido = 104;
UPDATE juega SET dia = '2019-02-14 16:10:00' WHERE id_partido = 105;
UPDATE juega SET dia = '2019-02-14 22:00:00' WHERE id_partido = 106;
UPDATE juega SET dia = '2019-02-15 16:10:00' WHERE id_partido = 107;
UPDATE juega SET dia = '2019-02-15 18:30:00' WHERE id_partido = 108;
UPDATE juega SET dia = '2019-02-13 17:20:00' WHERE id_partido = 109;
UPDATE juega SET dia = '2019-02-13 18:30:00' WHERE id_partido = 110;
UPDATE juega SET dia = '2019-02-14 15:00:00' WHERE id_partido = 111;
UPDATE juega SET dia = '2019-02-14 17:20:00' WHERE id_partido = 112;
UPDATE juega SET dia = '2019-02-15 15:00:00' WHERE id_partido = 113;
UPDATE juega SET dia = '2019-02-15 18:30:00' WHERE id_partido = 114;
UPDATE juega SET dia = '2019-02-13 15:00:00' WHERE id_partido = 115;
UPDATE juega SET dia = '2019-02-13 19:40:00' WHERE id_partido = 116;
UPDATE juega SET dia = '2019-02-14 16:10:00' WHERE id_partido = 117;
UPDATE juega SET dia = '2019-02-14 18:30:00' WHERE id_partido = 118;
UPDATE juega SET dia = '2019-02-15 17:20:00' WHERE id_partido = 119;
UPDATE juega SET dia = '2019-02-15 17:20:00' WHERE id_partido = 120;
UPDATE juega SET dia = '2019-02-13 15:00:00' WHERE id_partido = 121;
UPDATE juega SET dia = '2019-02-13 17:20:00' WHERE id_partido = 122;
UPDATE juega SET dia = '2019-02-14 16:10:00' WHERE id_partido = 123;
UPDATE juega SET dia = '2019-02-14 18:30:00' WHERE id_partido = 124;
UPDATE juega SET dia = '2019-02-15 16:10:00' WHERE id_partido = 125;
UPDATE juega SET dia = '2019-02-15 16:10:00' WHERE id_partido = 126;
UPDATE juega SET dia = '2019-02-13 16:10:00' WHERE id_partido = 127;
UPDATE juega SET dia = '2019-02-13 20:50:00' WHERE id_partido = 128;
UPDATE juega SET dia = '2019-02-14 17:20:00' WHERE id_partido = 129;
UPDATE juega SET dia = '2019-02-14 20:50:00' WHERE id_partido = 130;
UPDATE juega SET dia = '2019-02-15 16:10:00' WHERE id_partido = 131;
UPDATE juega SET dia = '2019-02-15 18:30:00' WHERE id_partido = 132;
UPDATE juega SET dia = '2019-02-13 17:20:00' WHERE id_partido = 133;
UPDATE juega SET dia = '2019-02-13 18:30:00' WHERE id_partido = 134;
UPDATE juega SET dia = '2019-02-14 16:10:00' WHERE id_partido = 135;
UPDATE juega SET dia = '2019-02-14 18:30:00' WHERE id_partido = 136;
UPDATE juega SET dia = '2019-02-15 17:20:00' WHERE id_partido = 137;
UPDATE juega SET dia = '2019-02-15 17:20:00' WHERE id_partido = 138;
UPDATE juega SET dia = '2019-02-13 16:10:00' WHERE id_partido = 139;
UPDATE juega SET dia = '2019-02-13 18:30:00' WHERE id_partido = 140;
UPDATE juega SET dia = '2019-02-14 15:00:00' WHERE id_partido = 141;
UPDATE juega SET dia = '2019-02-14 18:30:00' WHERE id_partido = 142;
UPDATE juega SET dia = '2019-02-15 18:30:00' WHERE id_partido = 143;
UPDATE juega SET dia = '2019-02-15 20:50:00' WHERE id_partido = 144;
UPDATE juega SET dia = '2019-02-13 16:10:00' WHERE id_partido = 145;
UPDATE juega SET dia = '2019-02-13 17:20:00' WHERE id_partido = 146;
UPDATE juega SET dia = '2019-02-14 17:20:00' WHERE id_partido = 147;
UPDATE juega SET dia = '2019-02-14 17:20:00' WHERE id_partido = 148;
UPDATE juega SET dia = '2019-02-15 15:00:00' WHERE id_partido = 149;
UPDATE juega SET dia = '2019-02-15 19:40:00' WHERE id_partido = 150;
 
 -- ingresa los partidos de la fase de grupos del paraleleo
INSERT INTO juega (id_equipoUno, id_equipoDos, id_grupo, anio, torneo) VALUES 
(77, 78, 1, 2019, 1),
(79, 80, 1, 2019, 1),
(80, 78, 1, 2019, 1),
(79, 77, 1, 2019, 1),
(80, 77, 1, 2019, 1),
(79, 78, 1, 2019, 1),
(82, 81, 2, 2019, 1),
(83, 84, 2, 2019, 1),
(83, 82, 2, 2019, 1),
(84, 81, 2, 2019, 1),
(84, 82, 2, 2019, 1),
(83, 81, 2, 2019, 1),
(86, 87, 3, 2019, 1),
(85, 86, 3, 2019, 1),
(87, 85, 3, 2019, 1),
(88, 90, 4, 2019, 1),
(90, 89, 4, 2019, 1),
(88, 89, 4, 2019, 1);

-- ingresa los partidos interzonales de la fase de grupos del paralelo
INSERT INTO juega (id_equipoUno, id_equipoDos, instancia, anio, torneo) VALUES
(85, 89, 'iz', 2019, 1),
(87, 88, 'iz', 2019, 1),
(86, 90, 'iz', 2019, 1);

-- actualiza horarios de los partidos del paraleleo

UPDATE juega SET dia = '2019-02-13 15:00:00' WHERE id_partido = 151;
UPDATE juega SET dia = '2019-02-13 17:20:00' WHERE id_partido = 152;
UPDATE juega SET dia = '2019-02-14 16:10:00' WHERE id_partido = 153;
UPDATE juega SET dia = '2019-02-14 18:30:00' WHERE id_partido = 154;
UPDATE juega SET dia = '2019-02-15 17:20:00' WHERE id_partido = 155;
UPDATE juega SET dia = '2019-02-15 17:20:00' WHERE id_partido = 156;
UPDATE juega SET dia = '2019-02-13 17:20:00' WHERE id_partido = 157;
UPDATE juega SET dia = '2019-02-13 18:30:00' WHERE id_partido = 158;
UPDATE juega SET dia = '2019-02-14 15:00:00' WHERE id_partido = 159;
UPDATE juega SET dia = '2019-02-14 17:20:00' WHERE id_partido = 160;
UPDATE juega SET dia = '2019-02-15 18:30:00' WHERE id_partido = 161;
UPDATE juega SET dia = '2019-02-15 18:30:00' WHERE id_partido = 162;
UPDATE juega SET dia = '2019-02-13 16:10:00' WHERE id_partido = 163;
UPDATE juega SET dia = '2019-02-14 17:20:00' WHERE id_partido = 164;
UPDATE juega SET dia = '2019-02-15 16:10:00' WHERE id_partido = 165;
UPDATE juega SET dia = '2019-02-13 16:10:00' WHERE id_partido = 166;
UPDATE juega SET dia = '2019-02-14 16:10:00' WHERE id_partido = 167;
UPDATE juega SET dia = '2019-02-15 16:10:00' WHERE id_partido = 168;
UPDATE juega SET dia = '2019-02-13 18:30:00' WHERE id_partido = 169;
UPDATE juega SET dia = '2019-02-14 18:30:00' WHERE id_partido = 170;
UPDATE juega SET dia = '2019-02-15 15:00:00' WHERE id_partido = 171;

-- actualiza hora de los partidos del año pasado
UPDATE juega SET dia = '2018-02-07 00:00:00' WHERE dia IS NULL;

-- crea trigger para actualizar los grupos y la valla menos vencida
DROP TRIGGER IF EXISTS tr_actualizar_grupo;
	
DELIMITER | 
CREATE TRIGGER tr_actualizar_grupo
AFTER UPDATE ON juega
FOR EACH ROW
BEGIN
	IF (old.golesLocal != new.golesLocal OR old.golesVisitante != new.golesVisitante) THEN
		IF (new.instancia IS NULL OR new.instancia = "iz") THEN
			IF (old.golesLocal = -1 AND old.golesVisitante = -1) THEN
				UPDATE equipo SET partidosJugados = partidosJugados + 1 WHERE (id = new.id_equipoUno OR id = new.id_equipoDos);
				UPDATE equipo SET golesAFavor = golesAFavor + new.golesLocal, golesEnContra = golesEnContra + new.golesVisitante, golesEnContraTotal = golesEnContraTotal + new.golesVisitante WHERE id = new.id_equipoUno;
				UPDATE equipo SET golesAFavor = golesAFavor + new.golesVisitante, golesEnContra = golesEnContra + new.golesLocal, golesEnContraTotal = golesEnContraTotal + new.golesLocal WHERE id = new.id_equipoDos;
				IF (new.golesLocal > new.golesVisitante) THEN
					UPDATE equipo SET puntos = puntos + 3, partidosGanados = partidosGanados + 1 WHERE id = new.id_equipoUno;
					UPDATE equipo SET partidosPerdidos = partidosPerdidos + 1 WHERE id = new.id_equipoDos;
				END IF;
				IF (new.golesLocal = new.golesVisitante) THEN
					UPDATE equipo SET puntos = puntos + 1, partidosEmpatados = partidosEmpatados + 1 WHERE (id = new.id_equipoUno OR id = new.id_equipoDos);
				END IF;
				IF (new.golesLocal < new.golesVisitante) THEN
					UPDATE equipo SET puntos = puntos + 3, partidosGanados = partidosGanados + 1 WHERE id = new.id_equipoDos;
					UPDATE equipo SET partidosPerdidos = partidosPerdidos + 1 WHERE id = new.id_equipoUno;
				END IF;
			ELSE
				IF (old.golesLocal > old.golesVisitante) THEN
					IF (new.golesLocal = new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos - 2, partidosGanados = partidosGanados - 1, partidosEmpatados = partidosEmpatados + 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos + 1, partidosPerdidos = partidosPerdidos - 1, partidosEmpatados = partidosEmpatados + 1 WHERE id = new.id_equipoDos;
                    ELSEIF (new.golesLocal < new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos - 3, partidosGanados = partidosGanados - 1, partidosPerdidos = partidosPerdidos + 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos + 3, partidosPerdidos = partidosPerdidos - 1, partidosGanados = partidosGanados + 1 WHERE id = new.id_equipoDos;
					END IF;
                ELSEIF (old.golesLocal = old.golesVisitante) THEN
					IF (new.golesLocal > new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos + 2, partidosGanados = partidosGanados + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos - 1, partidosPerdidos = partidosPerdidos + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoDos;
					ELSEIF (new.golesLocal < new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos - 1, partidosPerdidos = partidosPerdidos + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos + 2, partidosGanados = partidosGanados + 1, partidosEmpatados = partidosEmpatados - 1 WHERE id = new.id_equipoDos;
					END IF;
				ELSEIF (old.golesLocal < old.golesVisitante) THEN
					IF (new.golesLocal > new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos + 3, partidosGanados = partidosGanados + 1, partidosPerdidos = partidosPerdidos - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos - 3, partidosPerdidos = partidosPerdidos + 1, partidosGanados = partidosGanados - 1 WHERE id = new.id_equipoDos;
					ELSEIF (new.golesLocal = new.golesVisitante) THEN
						UPDATE equipo SET puntos = puntos + 1, partidosEmpatados = partidosEmpatados + 1, partidosPerdidos = partidosPerdidos - 1 WHERE id = new.id_equipoUno;
						UPDATE equipo SET puntos = puntos - 2, partidosEmpatados = partidosEmpatados + 1, partidosGanados = partidosGanados - 1 WHERE id = new.id_equipoDos;
					END IF;
				END IF;
				UPDATE equipo SET golesAFavor = golesAFavor - old.golesLocal + new.golesLocal, golesEnContra = golesEnContra - old.golesVisitante + new.golesVisitante, golesEnContraTotal = golesEnContraTotal - old.golesVisitante + new.golesVisitante WHERE id = new.id_equipoUno;
				UPDATE equipo SET golesAFavor = golesAFavor - old.golesVisitante + new.golesVisitante, golesEnContra = golesEnContra - old.golesLocal + new.golesLocal, golesEnContraTotal = golesEnContraTotal - old.golesLocal + new.golesLocal WHERE id = new.id_equipoDos;
			END IF;
			UPDATE equipo SET diferenciaGoles = golesAFavor - golesEnContra WHERE id = new.id_equipoUno;
			UPDATE equipo SET diferenciaGoles = golesAFavor - golesEnContra WHERE id = new.id_equipoDos;
		ELSE
			IF (old.golesLocal = -1 AND old.golesVisitante = -1) THEN
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal + new.golesVisitante WHERE id = id_equipoUno;
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal + new.golesLocal WHERE id = id_equipoDos;
			ELSE
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal - old.golesVisitante + new.golesVisitante WHERE id = id_equipoUno;
				UPDATE equipo SET golesEnContraTotal = golesEnContraTotal - old.golesLocal + new.golesLocal WHERE id = id_equipoDos;
			END IF;
		END IF;
	END IF;
END
|
DELIMITER ;
