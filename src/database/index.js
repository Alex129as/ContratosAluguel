const Sequilize = require('sequelize');

const dbconfig = require('../config/database');

const User = require('./models/UserModel');

const connection = new Sequilize(dbconfig);

User.init(connection);

module.exports = connection;