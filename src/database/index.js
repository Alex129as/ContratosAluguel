const Sequilize = require('sequelize');

const dbconfig = require('../config/database');

const connection = new Sequilize(dbconfig);

module.exports = connection;