const express = require('express');
const router = express.Router();

const goleadores = require("../controller/goleadores.controller");

router.get('/goleadores/:to/:a', goleadores.getGoleadores);
router.post('/goleadores/:to/:a', goleadores.createGoleador);
router.put('/goleadores/:to/:a', goleadores.editGoleador);

module.exports = router;