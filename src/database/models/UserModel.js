const { Model,DataTypes } = require('sequelize');

class User extends Model{

    static init(connection){

        super.init({
                id : {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    field: 'causu_id',
                    autoIncrement: true,
                    default: true
                },
                cpf : {
                    type: DataTypes.STRING(14),
                    field: 'causu_cpf',
                    allowNull: false
                },
                nome : { 
                    type: DataTypes.STRING,
                    field: 'causu_nome',
                    allowNull: false
                },
                email : { 
                    type: DataTypes.STRING,
                    field: 'causu_email',
                    allowNull: false
                },
                usuario : {
                    type: DataTypes.STRING(50),
                    field: 'causu_username',
                    allowNull: false
                },
                senha : { 
                    type: DataTypes.STRING(255),
                    field: 'causu_password',
                    allowNull: false
                },
                ativo : {
                    type: DataTypes.BOOLEAN,
                    field: 'causu_ativo',
                    allowNull: false
                },
                data_cadastro : { 
                    type: DataTypes.DATE,
                    field: 'created_at',
                    allowNull: false,
                    timestamp: true
                },
                data_alteracao : { 
                    type: DataTypes.DATE,
                    field: 'updated_at',
                    allowNull: false,
                    timestamp: true
                },
                 data_exclusao : { 
                    type: DataTypes.DATE,
                    allowNull: true,
                    timestamp: true,
                    field: 'deleted_at'
                },

            }, {   
                sequelize : connection,
                modelName: "causers"
            }
        )
    }

}

module.exports = User;