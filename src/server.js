const express = require('express');

const app = express();

const routes = require('./routes');

require('./database/index');

const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));

app.set('view engine','handlebars');

app.use(express.json());

app.use(routes);

app.listen(3333);