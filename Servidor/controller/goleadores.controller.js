const goleadoresController = {};

const mysqlConnection = require('../database');

goleadoresController.getGoleadores = async (req, res, next) => {
    const query = await 'SELECT g.*, e.nombre AS equipo FROM goleadores g INNER JOIN equipo e ON (g.id_equipo = e.id) WHERE g.torneo = ' + req.params.to + ' AND g.anio = ' + req.params.a + ' ORDER BY g.goles DESC';
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
    console.log(goleador);
    const query = 'INSERT INTO goleadores (nombre, apellido, numero, goles, id_equipo, anio, torneo) VALUES ("' + goleador.nombre + '","' + goleador.apellido + '",' + goleador.numero + ',' + goleador.goles + ',' + goleador.id_equipo + ',' + goleador.anio + ',' + goleador.torneo + ')';
    console.log(query);
    mysqlConnection.query(query, (req, rows, fields) => {        
        res.json({
            'status' : 'goleador creado'
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
    console.log(goleador);
    const query = 'UPDATE goleadores SET nombre = "' + goleador.nombre + '", apellido = "' + goleador.apellido + '", numero = ' + goleador.numero + ', goles = ' + goleador.goles + ' WHERE id = ' + goleador.id;
    console.log(query);
    mysqlConnection.query(query, (err, rows, fields) => {
        res.json('updated');
    })
}
 
module.exports = goleadoresController;