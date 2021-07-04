const User = require('../database/models/UserModel');

const bcrypt = require('bcrypt');

module.exports = {

    async AuthUser(HttpRequest, HttpResponse){

        console.log(HttpRequest.body);

        const { usuario, password } = HttpRequest.body;

        try{

            const user = await User.findOne({
                where: {usuario}
            });

            if(user){

                console.log(user.senha);

                const senha = await bcrypt.compareSync(password, user.senha);

                if(senha){

                    HttpRequest.session.isAutenticated = true;
                    HttpRequest.session.user_id = user.id;
                    HttpRequest.session.jwtToken =  "Teste";
                    HttpRequest.session.usuario = user.usuario;
                    HttpRequest.session.nome = user.nome;

                    return HttpResponse
                                .status(200)
                                .json({
                                    codeMessage: 200,
                                    Menssage: "Usuário Logado",
                                });

                }else{
                    
                    return HttpResponse
                                .status(200)
                                .json({
                                    codeMessage: 201,
                                    Menssage: "Credenciais de Acesso Inválidas!"
                                });

                }

            }else{

                return HttpResponse
                                .status(200)
                                .json({
                                    codeMessage: 201,
                                    Menssage: "Credenciais de Acesso Inválidas!"
                                });

            }

        }catch(e){
            
            console.log(e);

            return HttpResponse
                            .status(500)
                            .json({
                                message : e.message,
                                originError : e.stack
                            });

        }     

    },
    async UserIsAutenticade(HttpRequest, HttpResponse) {
                
        if(HttpRequest.session.isAutenticated === true)
            return HttpResponse.render("dashboard/index");
        
        return HttpResponse.render('login/index');

    }

}