const express = require('express');
const router = express.Router();

const vallaInvicta = require("../controller/vallaInvicta.controller");

router.get('/vallaInvicta/:to/:a', vallaInvicta.getVallaInvicta);

module.exports = router;