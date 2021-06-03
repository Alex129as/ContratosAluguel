const express = require('express');

const morgan = require('morgan');

const app = express();

const routes = require('./routes');

require('./database/index');

const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));

app.set('view engine','handlebars');

app.use(express.json());

app.use(express.urlencoded( {extended: true }));

app.use(morgan("dev"));

app.use(routes);

app.listen(8181, () => console.log("Rodando em: http://127.0.0.1:8181"));