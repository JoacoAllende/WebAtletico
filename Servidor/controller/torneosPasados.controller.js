const torneosPasadosController = {};

const mysqlConnection = require('../database');

torneosPasadosController.getTorneosPasados = (req, res, next) => {
    const query = 'SELECT MAX(id) AS cantTorneos FROM torneo';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            cantTorneos = rows[0].cantTorneos;
            let torneos = [];
            for (let i = 1; i <= cantTorneos; i++){
                let torneo = [];
                let estadisticas = [];
                const query = 'SELECT * FROM torneo WHERE id = ' + i;
                mysqlConnection.query(query, (err, rows, fields) => {
                    if (!err) {
                        torneo.push(rows);
                    } else {
                        console.log(err);
                    }
                })
                let equipos = [];
                const query2 = 'SELECT equipo FROM equipoParticipaTorneo WHERE id_torneo = ' + i;
                mysqlConnection.query(query2, (err, rows, fields) => {
                    if (!err) {
                        let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                        resultArray.forEach(function (element) {
                            equipos.push(element);
                        });
                        torneo.push(equipos);
                        torneos.push(torneo);
                        if (i == cantTorneos) {
                            res.json(torneos);
                        }
                    } else {
                        console.log(err);
                    }
                })
            }
        } else {
            console.log(err);
        }
    })
};
 
module.exports = torneosPasadosController;