const express = require('express');
const router = express.Router();


router.get('/:categoriaID/productos/:productoID',(req, res) => {
  const { categoriaID,productoID } = req.params;
  res.json({
    categoriaID,
    productoID
  });
});

module.exports =  router;
