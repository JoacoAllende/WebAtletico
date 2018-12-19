const express = require('express');
const router = express.Router();

const partidos = require("../controller/copaOro.controller");

router.get('/copaOro', partidos.getPartidos);

module.exports = router;