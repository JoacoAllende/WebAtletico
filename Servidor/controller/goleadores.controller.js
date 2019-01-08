const goleadoresController = {};

const mysqlConnection = require('../database');

goleadoresController.getGoleadores = (req, res, next) => {
    const query = 'SELECT g.*, e.nombre AS equipo FROM goleadores g INNER JOIN equipo e ON (g.id_equipo = e.id) WHERE g.torneo = ' + req.params.to + ' AND g.año = ' + req.params.a + ' ORDER BY g.goles DESC';
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
};

goleadoresController.createGoleador = (req, res) => {
    const goleador = req.body;
    const query = 'INSERT INTO goleadores (nombre, apellido, numero, goles, id_equipo, año, torneo) VALUES ("' + goleador.nombre + '","' + goleador.apellido + '",' + goleador.numero + ',' + goleador.goles + ',' + goleador.id_equipo + ',' + goleador.año + ',' + goleador.torneo + ')';
    mysqlConnection.query(query, (req, rows, fields) => {
        res.json({
            'status' : 'received'
        })
    })
};

goleadoresController.getGoleador = (req, res) => {
    const query = 'SELECT * FROM goleadores WHERE id = ' + req.params.id;
    mysqlConnection.query(query, (err, rows, fields) =>{
        res.json(rows);
    })
};

goleadoresController.editGoleador = (req, res) => {
    const goleador = req.body;
    const query = 'UPDATE goleadores SET nombre = "' + goleador.nombre + '", apellido = "' + goleador.apellido + '", numero = ' + goleador.numero + ', goles = ' + goleador.goles + ', id_equipo = ' + goleador.id_equipo + ', año = ' + goleador.año + ', torneo = ' + goleador.torneo + ' WHERE id = ' + req.params.id;
    mysqlConnection.query(query, (err, rows, fields) => {
        res.json('updated');
    })
}
 
module.exports = goleadoresController;