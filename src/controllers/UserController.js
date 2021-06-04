const User = require('../database/models/UserModel');

const {Op} = require('sequelize')

module.exports = {

     async store (HttpRequest, HttpResponse) {
        
        const {nome, cpf, email, usuario , senha } = HttpRequest.body;

        const userExists = await User.findAll({  
            where: {
                [Op.or] : [
                    {usuario},
                    {email},
                    {cpf},
                ]
            }
        });

        if (userExists.length === 0){

            const now = new Date;
            const ativo = true;

            try{

                const user = await User
                            .create({
                                nome,
                                cpf,
                                email,
                                usuario,
                                ativo,
                                senha,
                                data_cadastro: now.getDate(),
                                data_alteracao: now.getDate(),
                            });
                
                return HttpResponse
                            .status(200)
                            .json({
                                Menssage: "Usuário Cadastrado com Sucesso.",
                                user: user
                            });
            
            }catch(e){

                return HttpResponse
                            .status(500)
                            .json({
                                message : e.toString(),
                                originError : e.stack
                            });

            }

        }else{

            return HttpResponse
                        .status(200)
                        .json({Message: "Usuário Já Existe"});

        }

    },

};
