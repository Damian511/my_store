const express = require('express');

const ProductoService = require('./../services/producto.service');

const validatorHandler = require('../middlewares/validator.handler');

const { createProductoSchema,updateProductoSchema,getProductoSchema } = require('../schemas/producto.schema');


const router = express.Router();
const service = new ProductoService();

router.get('/', async (req, res) => {
  const productos = await service.find();
  res.status(200).json(productos);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filtro');
});

router.get('/:id', validatorHandler(getProductoSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const productos = await service.findOne(id);
    res.json(productos)
  } catch (error) {
    next(error)
  }
});

router.post('/', validatorHandler(createProductoSchema, 'body'), async (req, res) => {
  const body = req.body;
  const newProducto = await service.created(body);
  res.status(201).json(newProducto);
});

router.put('/:id',
  validatorHandler(getProductoSchema, 'params'),
  validatorHandler(updateProductoSchema, 'body'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.status(202).json({
      message: 'update',
      data: body,
      id
    });
  });

router.patch('/:id',
  validatorHandler(getProductoSchema, 'params'),
  validatorHandler(updateProductoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body;
      const producto = await service.update(id, body);
      res.status(200).json(producto);
    } catch (error) {
      next(error);
    }

  });

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const rta = await service.delete(id);
    res.status(200).json(rta);
  } catch (error) {
    next(error);
  }

});

module.exports = router;
