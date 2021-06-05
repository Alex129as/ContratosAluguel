const express = require('express');

const expressSesion = require('express-session');

const morgan = require('morgan');

const handlebars = require('express-handlebars');

const app = express();

const routes = require('./src/routes/routes');

require('./src/database/index');

app.use(expressSesion({ 
        secret: '3b04f61162bf671d231545e9129c32b6',
        saveUninitialized: true,
        resave: true
}));

app.use(express.static(__dirname + "/public/"))

app.engine('handlebars', handlebars({defaultLayout: 'main'}));

app.set('view engine','handlebars');

app.use(express.json());

app.use(express.urlencoded( {extended: true }));

app.use(morgan("dev"));

app.use(routes);

app.listen(8181, () => console.log("Rodando em: http://127.0.0.1:8181"));