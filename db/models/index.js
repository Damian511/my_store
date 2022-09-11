const { User, UserSchema } = require('./user.model');
const { Costumer, CostumerSchema } = require('./costumers.model');

function setupModels(sequelize) {
  //inicializamos las tablas
  User.init(UserSchema, User.config(sequelize));
  Costumer.init(CostumerSchema, Costumer.config(sequelize));
  //hacemos las asociaciones de tablas
  Costumer.associate(sequelize.models);
}

module.exports = setupModels;
