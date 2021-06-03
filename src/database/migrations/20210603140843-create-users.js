'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return await 
      queryInterface.createTable('causers', 
        {   
          causu_id: {
              type: Sequelize.INTEGER,
              primaryKey:  true,
              autoIncrement: true,
              allowNull: false
          },
          causu_nome: {
            type: Sequelize.STRING,
            allowNull: false
          },
          causu_cpf: {
            type:  Sequelize.STRING(14),
            allowNull: false
          },
          causu_email: {
            type: Sequelize.STRING,
            allowNull: false
          },
          causu_username: {
            type: Sequelize.STRING(50),
            allowNull: false,
          },
          causu_password: {
            type: Sequelize.STRING(255),
            allowNull: false
          },
          causu_ativo: {
            type: Sequelize.BOOLEAN,
            allowNull: false
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updated_at:{
            type: Sequelize.DATE,
            allowNull: false
          },
          deleted_at:{
            type: Sequelize.DATE,
            allowNull: true
          },

        });

  },

  down: async (queryInterface, Sequelize) => {
   
      return await queryInterface.dropTable('causers');
    
  }
};
