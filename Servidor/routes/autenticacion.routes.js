const express = require('express');
const router = express.Router();

const autenticacion = require ("../controller/autenticacion.controller");
const { isLoggedIn } = require("../lib/auth");


router.get('/login', autenticacion.getFormLogin);
router.post('/login', autenticacion.login);

router.get('/signup', autenticacion.getFormSignUp);
router.post('/signup', autenticacion.signUp);

router.get('/profile', autenticacion.profile);
router.get('/logout',autenticacion.logout);

module.exports = router;