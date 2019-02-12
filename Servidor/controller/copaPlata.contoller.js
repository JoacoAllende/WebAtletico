const copaPlataController = {};

const mysqlConnection = require('../database');

copaPlataController.getPartidos = (req, res, next) => {
    let instancias = [];
    const query = 'SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "ccp" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            let instancia = [];
            let partidos = [];
            let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                resultArray.forEach(function (element) {
                    partidos.push(element);
                });
            instancia.push(["Cuartos de final"]);
            instancia.push(partidos);
            instancias.push(instancia);
            const query = 'SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "scp" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
            mysqlConnection.query(query, (err, rows, fields) => {
                if (!err) {
                    let instancia = [];
                    let partidos = [];
                    let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                        resultArray.forEach(function (element) {
                            partidos.push(element);
                        });
                    instancia.push(["Semifinales"]);
                    instancia.push(partidos);
                    instancias.push(instancia);
                    const query = 'SELECT j.*, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "fcp" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
                    mysqlConnection.query(query, (err, rows, fields) => {
                    if (!err) {
                        let instancia = [];
                        let partidos = [];
                        let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                        resultArray.forEach(function (element) {
                            partidos.push(element);
                        });
                    instancia.push(["Final"]);
                    instancia.push(partidos);
                    instancias.push(instancia);
                    res.json(instancias);
                } else {
                    console.log(err);
                }
            })
                    
                } else {
                    console.log(err);
                }
            })
        } else {
            console.log(err);
        }
    })
};

copaPlataController.getPartido = (req, res, next) => {
    const query = 'SELECT *, date(j.dia) AS fecha, hour(j.dia) AS hora, minute(j.dia) as minutos, FROM juega WHERE id_partido = ' + req.params.id;
    mysqlConnection.query(query, (err, rows, fields) =>{
        res.json(rows);
    })
};

copaPlataController.editPartido = (req, res, next) => {
    const partido = req.body;
    const query = 'UPDATE juega SET golesLocal = ' + partido.golesLocal + ', golesVisitante = ' + partido.golesVisitante + ', penalesLocal = ' + partido.penalesLocal + ', penalesVisitante = ' + partido.penalesVisitante + ' WHERE id_partido  = ' + partido.id_partido;
    mysqlConnection.query(query, (err, rows, fields) => {
        res.json('updated');
    })
};

module.exports = copaPlataController;