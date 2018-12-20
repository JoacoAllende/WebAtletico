const express = require('express');
const router = express.Router();

const partidos = require("../controller/copaPlata.contoller");

router.get('/copaPlata', partidos.getPartidos);

module.exports = router;