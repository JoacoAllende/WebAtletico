const express = require('express');
const router = express.Router();

const goleadores = require("../controller/goleadores.controller");

router.get('/goleadores', goleadores.getGoleadores);

module.exports = router;