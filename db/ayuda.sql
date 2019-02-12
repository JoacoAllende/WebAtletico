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