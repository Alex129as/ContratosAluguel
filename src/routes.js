const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/', (HttpRequest, HttpResponse) => {

    teste = "teste";

    return HttpResponse.render('login/login');

})

routes.post('/cadastrar/user', UserController.store);

module.exports = routes;