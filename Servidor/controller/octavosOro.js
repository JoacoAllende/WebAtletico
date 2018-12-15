const octavosOroController = {};

const mysqlConnection = require('../database');

octavosOroController.getPartidos = (req, res, next) => {
    const query = 'SELECT j.*, e1.nombre AS equipoUno, e2.nombre AS equipoDos FROM equipo e1 INNER JOIN juega j ON (j.id_equipoUno = e1.id) INNER JOIN equipo e2 ON (j.id_equipoDos = e2.id) WHERE j.instancia = "o" ORDER BY j.id_partido';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};

module.exports = octavosOroController;