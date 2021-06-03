const express = require('express');

const routes = express.Router();

routes.get('/', (HttpRequest, HttpResponse) => {

    teste = "teste";

    return HttpResponse.render('login/login');

})

module.exports = routes;