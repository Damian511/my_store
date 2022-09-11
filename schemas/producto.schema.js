const Joi = require('joi');

const id = Joi.string().uuid();

const name = Joi.string().min(3).max(15);

const price = Joi.number().integer().min(10);

const image = Joi.string().uri();

const createProductoSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductoSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

const getProductoSchema = Joi.object({
  id: id.required(),
});

module.exports =  { createProductoSchema, updateProductoSchema, getProductoSchema };
