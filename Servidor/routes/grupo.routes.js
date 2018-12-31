const express = require('express');
const router = express.Router();

const grupo = require("../controller/grupo.controller");

router.get('/grupos/:to/:a', grupo.getGrupos);


module.exports = router;