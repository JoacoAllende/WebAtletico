const vallaInvictaController = {};

const mysqlConnection = require('../database');

vallaInvictaController.getVallaInvicta = (req, res, next) => {
    const query = 'SELECT nombre, golesEnContraTotal FROM equipo WHERE torneo = ' + req.params.to + ' AND anio = ' + req.params.a + ' ORDER BY golesEnContraTotal';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};
 
module.exports = vallaInvictaController;