const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require('../database'); 

const helpers = require("../lib/helpers");

//LOGIN

passport.use('local.login', new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username,password,done) => {
    
    const rows = await pool.query("SELECT * FROM usuarios WHERE username = ?",[username]);
    console.log(req.body);
    if (rows.length > 0){
        const user = rows[0];
        console.log(user);
        const validadPassword = await helpers.matchPassword(password,user.password);
        if (validadPassword){
            console.log("Welcome " + user.username);
            done(null, user/*, req.flash("success","Welcome " + user.username)*/);
        } else {
            console.log("Contraseña invalida");
            done(null, false/*,req.flash("message","Contraseña invalida")*/);
        }
    } else {
        console.log("Usuario incorrecto");
        return done(null, false/*, req.flash("message","Nombre de usuario no existente")*/);
    }
}));


// SINGUP

passport.use("local.signup", new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
}, async (req, username,password,done) => {
    const { fullname } = req.body;
    const newUser = {
        username,
        password,
        fullname
    };
    newUser.password = await helpers.encryptPassword(password);
    //newUser.id = 1;
    console.log(newUser);
    
    const result = await pool.query("INSERT INTO usuarios SET ?", [newUser]);
    console.log(result);
    newUser.id_usuario = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser( async (user, done) => {
    console.log("Usuario dentro de serialize " + user.username );
    //const rows = await pool.query("SELECT * FROM usuarios WHERE username = ?",[user.username])
    done(null, user.id_usuario);

});

passport.deserializeUser(async (id,done) => {
   const rows = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?',[id]);
   done(null,rows[0]);
});