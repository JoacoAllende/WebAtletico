 const equipoController = {};

const mysqlConnection = require('../database');

equipoController.getEquipos = (req, res, next) => {
    const query = 'SELECT * FROM equipo';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};

module.exports = equipoController;