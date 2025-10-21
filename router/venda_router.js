const vendaController = require('../controller/venda_controller');
const express = require('express');
const router = express.Router();

router.post('/vendas', vendaController.createVenda);
router.get('/vendas', vendaController.getAllVendas);
router.get('/vendas/:id', vendaController.getVendaById);
router.delete('/vendas/:id', vendaController.deleteVenda);

module.exports = router;
