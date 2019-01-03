const express = require('express');
const router = express.Router();

const partidos = require("../controller/copaOro.controller");

router.get('/copaOro/:to/:a', partidos.getPartidos);

module.exports = router;