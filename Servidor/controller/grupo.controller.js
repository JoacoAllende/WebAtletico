const grupoController = {};

const mysqlConnection = require('../database');

grupoController.getGrupos = (req, res, next) => {
    let cantGrupos;
    mysqlConnection.query('SELECT MAX(grupo) as cantidadGrupos FROM equipo WHERE anio = ' + req.params.a + ' AND torneo = ' + req.params.to, (err, rows, fields) => {
        if (!err) { 
            cantGrupos = rows[0].cantidadGrupos;
            let grupos = [];
            for (let i = 1; i <= cantGrupos; i++) {
                const query = 'SELECT * FROM equipo WHERE grupo = ' + i + ' AND torneo = ' + req.params.to + ' AND anio = ' + req.params.a + ' ORDER BY puntos DESC, diferenciaGoles DESC, golesAFavor DESC, golesEnContra DESC';
                mysqlConnection.query(query, (err, rows, fields) => {
                    if (!err) {
                        let grupo = [];
                        let posiciones = [];
                        let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                        resultArray.forEach(function (element) {
                            posiciones.push(element);
                        });
                        grupo.push(posiciones);
                        const query = 'SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON j.id_equipoDos = e2.id WHERE j.id_grupo = ' + i + ' AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
                        let partidos = [];
                        mysqlConnection.query(query, (err, rows, fields) => {
                            if (!err) {
                                let resultArrayPartidos = Object.values(JSON.parse(JSON.stringify(rows)));
                                resultArrayPartidos.forEach(function (element) {
                                    partidos.push(element);
                                });
                                grupo.push(partidos);
                                grupos.push(grupo);
                                if (i == cantGrupos) {
                                    let resultado = [];
                                    resultado.push(grupos);
                                    const query = 'SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON j.id_equipoDos = e2.id WHERE j.instancia = "iz" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
                                    let partidos = [];
                                    mysqlConnection.query(query, (err, rows, fields) => {
                                        if (!err) {
                                            let resultArrayPartidos = Object.values(JSON.parse(JSON.stringify(rows)));
                                            resultArrayPartidos.forEach(function (element) {
                                                partidos.push(element);
                                            });
                                            resultado.push(partidos);
                                            res.json(resultado);
                                        } else {
                                            console.log(err);
                                        }
                                    })
                                }
                            } else {
                                console.log(err);
                            }
                        })

                    } else {
                        console.log(err);
                    }
                })
            }

        } else {
            console.log(err);
        }
    });
};

grupoController.getPartido = (req, res, next) => {
    const query = 'SELECT * FROM juega WHERE id_partido = ' + req.params.id;
    mysqlConnection.query(query, (err, rows, fields) => {
        res.json(rows);
    })
};

grupoController.editPartido = (req, res, next) => {
    const partido = req.body;
    console.log('el body papa');
    console.log(partido);
    const query = 'UPDATE juega SET golesLocal = ' + partido.golesLocal + ', golesVisitante = ' + partido.golesVisitante + ', penalesLocal = ' + partido.penalesLocal + ', penalesVisitante = ' + partido.penalesVisitante + ' WHERE id_partido  = ' + partido.id_partido;
    console.log(query);
    mysqlConnection.query(query, (err, rows, fields) => {
        res.json('updated');
    })
};

module.exports = grupoController;