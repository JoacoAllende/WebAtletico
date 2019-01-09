const express = require('express');
const router = express.Router();

const goleadores = require("../controller/goleadores.controller");

router.get('/goleadores/:to/:a', goleadores.getGoleadores);
router.post('/goleadores/actualizar', goleadores.createGoleador);
router.get('/goleadores/actualizar/:to/:a/:id', goleadores.getGoleador);
router.put('/goleadores/actualizar/:to/:a/:id', goleadores.editGoleador);

module.exports = router;