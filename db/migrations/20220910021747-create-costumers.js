'use strict';
const { CostumerSchema, CUSTOMER_TABLE } = require('../models/costumers.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CUSTOMER_TABLE,CostumerSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(CUSTOMER_TABLE);
  }
};
