const express = require('express');
const router = express.Router();

const partidos = require("../controller/copaPlata.contoller");

router.get('/copaPlata/:to/:a', partidos.getPartidos);
router.put('/copaPlata/:to/:a', partidos.editPartido);

module.exports = router;