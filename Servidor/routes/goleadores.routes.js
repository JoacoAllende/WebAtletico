const express = require('express');
const router = express.Router();

const goleadores = require("../controller/goleadores.controller");

router.get('/goleadores/:to/:a', goleadores.getGoleadores);

module.exports = router;