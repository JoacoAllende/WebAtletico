const copaOroController = {};

const mysqlConnection = require('../database');

copaOroController.getPartidos = (req, res, next) => {
    let instancias = [];
    const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "o" AND j.torneo = 0 AND j.año = 2018 ORDER BY j.id_partido';
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
            const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "c" AND j.torneo = 0 AND j.año = 2018 ORDER BY j.id_partido';
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
                    const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "s" AND j.torneo = 0 AND j.año = 2018 ORDER BY j.id_partido';
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
                    const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE (j.instancia = "7" OR j.instancia = "5" OR j.instancia = "t" OR j.instancia = "f") AND j.torneo = 0 AND j.año = 2018 ORDER BY j.id_partido';
            mysqlConnection.query(query, (err, rows, fields) => {
                if (!err) {
                    let instancia = [];
                    let partidos = [];
                    let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                        resultArray.forEach(function (element) {
                            partidos.push(element);
                        });
                    instancia.push(["Partidos finales"]);
                    instancia.push(partidos);
                    instancias.push(instancia);
                    res.json(instancias)
                    
                } else {
                    console.log(err);
                }
            })
                    //res.json(instancias);
                    
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

module.exports = copaOroController;