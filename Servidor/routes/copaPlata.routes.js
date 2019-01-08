const express = require('express');
const router = express.Router();

const partidos = require("../controller/copaPlata.contoller");

router.get('/copaPlata/:to/:a', partidos.getPartidos);
router.get('/copaPlata/:to/:a/:id', partidos.getPartido);
router.put('/copaPlata/:to/:a/:id', partidos.editPartido);

module.exports = router;