const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

const setupModels = require('../db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

//conexion para postgres
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

//conexion para mysql
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres'
  //dialect: 'mysql'
});

setupModels(sequelize);

// sequelize.sync();

module.exports =  sequelize;
