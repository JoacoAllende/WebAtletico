const express = require('express');
const router = express.Router();

const grupo = require("../controller/grupo.controller");

router.get('/grupos/:to/:a', grupo.getGrupos);
router.get('/grupos/:to/:a/:id', grupo.getPartido);
router.put('/grupos/:to/:a/:id', grupo.editPartido);


module.exports = router;