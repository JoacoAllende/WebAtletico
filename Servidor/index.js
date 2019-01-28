const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");
const validator = require("express-validator");
const MySQLStore = require('express-mysql-session')(session);
const path = require('path');

//const mySqlConnection = require('./database');
const { database } = require('./keys');

const passport = require('passport');
require("./lib/passport");

//Settings

app.set('port', process.env.PORT || 4000);
app.use(express.static(__dirname + '/../Vista/dist/Vista'));
app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname + '/../Vista/dist/Vista/index.html'))
})

//Middlewares

app.use(session({
    secret: "atleticomysqlsession",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(validator());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));


//Global variables

app.use((req, res, next) => {
    app.locals.success = req.flash("success");
    app.locals.message = req.flash("message");
    app.locals.user = req.user;
    next();
});

//Routes

app.use(require('./routes/equipos.routes'));
app.use(require('./routes/grupo.routes'));
app.use(require('./routes/copaOro.routes'));
app.use(require('./routes/goleadores.routes'));
app.use(require('./routes/copaPlata.routes'));
app.use(require('./routes/autenticacion.routes'));


//Starting the Server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})