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
          causu_email: {
            type: Sequelize.STRING,
            allowNull: false
          },
          causu_password: {
            type: Sequelize.STRING,
            allowNull: false
          },
          created_ad: {
            type: Sequelize.DATE,
            allowNull: false
          },
          deleted_at:{
            type: Sequelize.DATE,
            allowNull: false
          }

        });

  },

  down: async (queryInterface, Sequelize) => {
   
      return await queryInterface.dropTable('causers');
    
  }
};
