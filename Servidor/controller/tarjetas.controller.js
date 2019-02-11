const tarjetasController = {};

const mysqlConnection = require('../database');

tarjetasController.getTarjetas = (req, res, next) => {
    const query = 'SELECT nombre, cantAmarillas, cantRojas FROM equipo WHERE torneo = ' + req.params.to + ' AND anio = ' + req.params.a + ' ORDER BY cantRojas, cantAmarillas';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};
 
module.exports = tarjetasController;