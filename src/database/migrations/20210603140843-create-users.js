'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return await 
      queryInterface.createTable('CAUSERS', 
        {   
          CAUSU_ID: {
              type: Sequelize.INTEGER,
              primaryKey:  true,
              autoIncrement: true,
              allowNull: false
          },
          CAUSU_NOME: {
            type: Sequelize.STRING,
            allowNull: false
          },
          CAUSU_EMAIL: {
            type: Sequelize.STRING,
            allowNull: false
          },
          CREATED_AT: {
            type: Sequelize.DATE,
            allowNull: false
          },
          DELETED_AT:{
            type: Sequelize.DATE,
            allowNull: false
          }

        });

  },

  down: async (queryInterface, Sequelize) => {
   
      return await queryInterface.dropTable('users');
    
  }
};
