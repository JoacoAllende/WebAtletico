const express = require('express');
const router = express.Router();

const partidos = require("../controller/octavosOro");

router.get('/octavosOro', partidos.getPartidos);

module.exports = router;