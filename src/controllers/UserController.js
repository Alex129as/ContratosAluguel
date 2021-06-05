const User = require('../database/models/UserModel');

const bcrypt = require('bcrypt');

const {Op} = require('sequelize')

module.exports = {

     async store (HttpRequest, HttpResponse) {
        
        const {nome, cpf, email, usuario , password } = HttpRequest.body;

        const senha = await bcrypt.hash(password, 10, (error, hash) => {
            if(error)
                return HttpResponse.status(500).json({
                    message: 'Não foi Posssivel Criptografar A senha.',
                    error: error.message,
                    TextError: error.stack
                });

            return hash;    
        });

        const userExists = await User.findAll({  
            where: {
                [Op.or] : [
                    {usuario},
                    {email},
                    {cpf},
                ]
            }
        });

        console.log(senha);

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
