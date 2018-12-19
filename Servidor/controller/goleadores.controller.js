const goleadoresController = {};

const mysqlConnection = require('../database');

goleadoresController.getGoleadores = (req, res, next) => {
    const query = 'SELECT * FROM goleadores ORDER BY goles DESC';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};

module.exports = goleadoresController;