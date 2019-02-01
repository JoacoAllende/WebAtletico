const express = require('express');
const router = express.Router();

const torneosPasados = require("../controller/torneosPasados.controller");

router.get('/torneosPasados', torneosPasados.getTorneosPasados);

module.exports = router;