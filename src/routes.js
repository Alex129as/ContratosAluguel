const express = require('express');

const multer = require('multer');

const multerPerfilsConfig = require('./config/multer/multerUploadPerfil');

const multerImagesConfig = require('./config/multer/multerUploadImages');

const multerFilesConfig = require('./config/multer/multerUploadFiles');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/', (HttpRequest, HttpResponse) => {

    return HttpResponse.render('login/login');

})

routes.post('/cadastrar/user', UserController.store);

module.exports = routes;