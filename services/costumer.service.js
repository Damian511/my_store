const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CostumerService {
  constructor() {}

  async create(data) {
    const newCostumer = await models.Costumers.create(data);
    return newCostumer;
  }

  async find() {
    const rta = await models.Costumers.findAll();
    return rta;
  }

  async findOne(id) {
    const costumer = await models.Costumers.findByPk(id);
    if(!costumer){
      throw boom.notFound('No se encontro el cliente');
    }
    return costumer;
  }

  async update(id, changes) {
    const costumer = await this.findOne(id);
    const rta = await costumer.update(changes);
    return rta;
  }

  async delete(id) {
    const costumer = await this.findOne(id);
    await costumer.destroy();
    return { id };
  }
}

module.exports = CostumerService;
