const express = require('express');

const routes = express.Router();

routes.get('/', (HttpRequest, HttpResponse) => {

    return HttpResponse.json({ Hello: 'World'});

})

module.exports = routes;