const grupoController = {};

const mysqlConnection = require('../database');

grupoController.getGrupos = (req, res, next) => {
    let cantGrupos;
    mysqlConnection.query('SELECT MAX(grupo) as cantidadGrupos FROM equipo WHERE año = ' + req.params.a + ' AND torneo = ' + req.params.to, (err, rows, fields) => {
        if (!err) { 
            cantGrupos = rows[0].cantidadGrupos;
            let grupos = [];
            for (let i = 1; i <= cantGrupos; i++) {
                const query = 'SELECT * FROM equipo WHERE grupo = ' + i + ' AND torneo = ' + req.params.to + ' AND año = ' + req.params.a + ' ORDER BY puntos DESC, diferenciaGoles DESC, golesAFavor DESC, golesEnContra DESC';
                mysqlConnection.query(query, (err, rows, fields) => {
                    if (!err) {
                        let grupo = [];
                        let posiciones = [];
                        let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                        resultArray.forEach(function (element) {
                            posiciones.push(element);
                        });
                        grupo.push(posiciones);
                        const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON j.id_equipoDos = e2.id WHERE j.id_grupo = ' + i + ' AND j.torneo = ' + req.params.to + ' AND j.año = ' + req.params.a + ' ORDER BY j.id_partido';
                        let partidos = [];
                        mysqlConnection.query(query, (err, rows, fields) => {
                            if (!err) {
                                //console.log(rows);
                                let resultArrayPartidos = Object.values(JSON.parse(JSON.stringify(rows)));
                                resultArrayPartidos.forEach(function (element) {
                                    partidos.push(element);
                                });
                                grupo.push(partidos);
                                //console.log(grupo);
                                grupos.push(grupo);
                                if (i == cantGrupos) {
                                    res.json(grupos);
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

module.exports = grupoController;