const autenticacion = { };

const mysqlConnection = require('../database');

const passport = require("passport");
const { isLoggedIn } = require("../lib/auth");

autenticacion.getFormLogin = (req, res, next) => {
    res.json({"message": "get form login works"});
};

autenticacion.login = (req, res,next) => {
    passport.authenticate("local.login", {
        successRedirect: '/profile',
        failureRedirect: '/err',
        failureFlash: true
    })(req, res, next)
};

autenticacion.getFormSignUp = (req, res) => {
    res.json({"message": "get form sign up works"});
}

autenticacion.signUp = passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/err',
    failureFlash: true
});


autenticacion.logout = (req, res) => {
    req.logOut();
    res.json({"message": "Sesion terminada"});
};


autenticacion.profile = (req, res) => {
    res.json({"message": "profile works"});
}



module.exports = autenticacion;




/*
autenticacion.login = async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    await mysqlConnection.query("SELECT * FROM usuarios WHERE username = ? AND password = ?", [username, password]);
    res.json("Recibido" + " " + username);
} */