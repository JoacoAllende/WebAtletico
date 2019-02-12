const copaOroController = {};

const mysqlConnection = require('../database');

copaOroController.getPartidos = (req, res, next) => {
    let instancias = [];
    const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "o" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            let instancia = [];
            let partidos = [];
            let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                resultArray.forEach(function (element) {
                    partidos.push(element);
                });
            instancia.push(["Octavos de final"]);
            instancia.push(partidos);
            instancias.push(instancia);
            const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "c" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
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
                    const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "s" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
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
                        const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "7" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';
                        mysqlConnection.query(query, (err, rows, fields) => {
                            if (!err) {
                                let instancia = [];
                                let partidos = [];
                                let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                                    resultArray.forEach(function (element) {
                                        partidos.push(element);
                                    });
                                instancia.push(["Séptimo puesto"]);
                                instancia.push(partidos);
                                instancias.push(instancia);
                                const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "5" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';        
                                mysqlConnection.query(query, (err, rows, fields) => {
                                    if (!err) {
                                        let instancia = [];
                                        let partidos = [];
                                        let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                                            resultArray.forEach(function (element) {
                                                partidos.push(element);
                                            });
                                        instancia.push(["Quinto puesto"]);
                                        instancia.push(partidos);
                                        instancias.push(instancia);
                                        const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "t" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';        
                                        mysqlConnection.query(query, (err, rows, fields) => {
                                            if (!err) {
                                                let instancia = [];
                                                let partidos = [];
                                                let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                                                    resultArray.forEach(function (element) {
                                                        partidos.push(element);
                                                    });
                                                instancia.push(["Tercer puesto"]);
                                                instancia.push(partidos);
                                                instancias.push(instancia);
                                                const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "f" AND j.torneo = ' + req.params.to + ' AND j.anio = ' + req.params.a + ' ORDER BY j.id_partido';        
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
                                                        res.json(instancias)
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
        } else {
            console.log(err);
        }
    })
};

copaOroController.getPartido = (req, res, next) => {
    const query = 'SELECT *, date(dia) AS fecha, hour(dia) AS hora, minute(dia) as minutos, FROM juega WHERE id_partido = ' + req.params.id;
    mysqlConnection.query(query, (err, rows, fields) =>{
        res.json(rows);
    })
};

copaOroController.editPartido = (req, res, next) => {
    const partido = req.body;
    const query = 'UPDATE juega SET golesLocal = ' + partido.golesLocal + ', golesVisitante = ' + partido.golesVisitante + ', penalesLocal = ' + partido.penalesLocal + ', penalesVisitante = ' + partido.penalesVisitante + ' WHERE id_partido  = ' + partido.id_partido;
    mysqlConnection.query(query, (err, rows, fields) => {
        res.json('updated');
    })
};

module.exports = copaOroController;