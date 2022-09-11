const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('../models/user.model');

const CUSTOMER_TABLE =  'costumers';

const CostumerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  userId:{
    field:'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdated: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Costumer extends Model{
  static associate(models){
    this.belongsTo(models.User, {as: 'user'});
  }
  static config(sequelize){
    return {
      sequelize,
      tableName:CUSTOMER_TABLE,
      modelName:'Costumers',
      timestamps: false
    }
  }
};

module.exports = { CUSTOMER_TABLE, CostumerSchema, Costumer }
