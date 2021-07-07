const User = require('../database/models/UserModel');

const bcrypt = require('bcrypt');

module.exports = {

    async AuthUser(HttpRequest, HttpResponse){

        const { usuario, password } = HttpRequest.body;

        try{

            const user = await User.findOne({
                where: {usuario}
            });

            if(user){

                const senha = await bcrypt.compareSync(password, user.senha);

                if(senha){

                    HttpRequest.session.isAutenticated = true;
                    HttpRequest.session.user_id = user.id;
                    HttpRequest.session.usuario = user.usuario;
                    HttpRequest.session.nome = user.nome;

                    return HttpResponse
                                .status(200)
                                .json({
                                    codeMessage: 200,
                                    typeMenssage: "success",
                                    Menssage: "Usuário Logado com Sucesso!!!",
                                });

                }else{
                    
                    return HttpResponse
                                .status(200)
                                .json({
                                    codeMessage: 201,
                                    typeMenssage: "warning",
                                    Menssage: "Credenciais de Acesso Inválidas!"
                                });

                }

            }else{

                return HttpResponse
                                .status(200)
                                .json({
                                    codeMessage: 201,
                                    typeMenssage: "warning",
                                    Menssage: "Credenciais de Acesso Inválidas!"
                                });

            }

        }catch(e){

            return HttpResponse
                            .status(500)
                            .json({
                                codeMessage: 500,
                                message : e.message,
                                typeMenssage: 'error',
                                originError : e.stack
                            });

        }     

    },
    async UserIsAutenticade(HttpRequest, HttpResponse) {
                
        if(HttpRequest.session.isAutenticated === true)
            return HttpResponse.render("dashboard/index");
        
        return HttpResponse.render("login/index");

    },
    async UserDestroySession(HttpRequest, HttpResponse){

        HttpRequest.session.destroy();
        HttpResponse.render("login/index");

    }

}