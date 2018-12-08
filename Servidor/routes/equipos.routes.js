const express = require('express');
const router = express.Router();

const equipo = require("../controller/equipo.controller");

router.get('/equipos', equipo.getEquipos);

router.get('/', equipo.getEquipos);

module.exports = router;