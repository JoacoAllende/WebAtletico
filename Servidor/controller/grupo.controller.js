const grupoController = {};

const mysqlConnection = require('../database');

grupoController.getGrupos = (req, res, next) => {
    let cantGrupos;
    mysqlConnection.query("SELECT MAX(grupo) as cantidadGrupos FROM equipo", (err, rows, fields) => {
        if (!err) {
            cantGrupos = rows[0].cantidadGrupos;
            console.log(cantGrupos + " primera");
            let grupos = [];
            for (let i = 1; i <= cantGrupos; i++) {
                const query = 'SELECT * FROM equipo WHERE grupo = ' + i;
                mysqlConnection.query(query, (err, rows, fields) => {
                    if (!err) {
                        let grupo = [];
                        let resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                        resultArray.forEach(function (element) {
                            grupo.push(element);
                        });
                        grupos.push(grupo);
                        if (i == cantGrupos){
                            res.json(grupos);
                        }
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