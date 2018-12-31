const goleadoresController = {};

const mysqlConnection = require('../database');

goleadoresController.getGoleadores = (req, res, next) => {
    const query = 'SELECT g.*, e.nombre AS equipo FROM goleadores g INNER JOIN equipo e ON (g.id_equipo = e.id) WHERE g.torneo = 0 AND g.año = 2018 ORDER BY g.goles DESC';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};

module.exports = goleadoresController;