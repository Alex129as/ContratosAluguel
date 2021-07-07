const User = require('../database/models/UserModel');

const bcrypt = require('bcrypt');

const {Op} = require('sequelize');

module.exports = {

     async store (HttpRequest, HttpResponse) {
        
        const {nome, cpf, email, usuario , password } = HttpRequest.body;
                
        const senha =  await bcrypt.hashSync(password, 10);

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
                                status: 200
                            });
            
            }catch(e){

                return HttpResponse
                            .status(500)
                            .json({
                                message : e.toString(),
                                originError : e.stack,
                                senha: ""+senha
                            });

            }

        }else{

            return HttpResponse
                        .status(200)
                        .json({Message: "Usuário Já Existe"});

        }

    },

};
