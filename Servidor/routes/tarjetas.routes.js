const express = require('express');
const router = express.Router();

const tarjetas = require("../controller/tarjetas.controller");

router.get('/tarjetas/:to/:a', tarjetas.getTarjetas);

module.exports = router;