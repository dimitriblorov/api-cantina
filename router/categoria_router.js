const categoriaController = require('../controller/categoria_controller');
const express = require('express');
const router = express.Router();

router.post('/categorias', categoriaController.createCategoria);
router.get('/categorias', categoriaController.getAllCategorias);
router.get('/categorias/:id', categoriaController.getCategoriaById);
router.put('/categorias/:id', categoriaController.updateCategoria);
router.delete('/categorias/:id', categoriaController.deleteCategoria);

module.exports = router;
