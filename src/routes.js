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

routes.post('/cadastrar/imagem/perfil/user', multer(multerPerfilsConfig).single('imgUser'), (HttpRequest, HttpResponse) =>{

    const { file, id_usuario } = HttpRequest;

    if(!file)
        return HttpResponse
                    .status(500)
                    .json({
                        Error: 'Erro ao gravar Arquivo'
                    });


    return HttpResponse.status(200).json({succes: "success"});

});

module.exports = routes;