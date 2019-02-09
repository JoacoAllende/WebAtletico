const express = require('express');
const router = express.Router();

const partidos = require("../controller/copaOro.controller");

router.get('/copaOro/:to/:a', partidos.getPartidos);
router.put('/copaOro/:to/:a', partidos.editPartido);

module.exports = router;