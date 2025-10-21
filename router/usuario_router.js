const usuarioController = require('../controller/usuario_controller');
const express = require('express');
const router = express.Router();

router.post('/usuarios/register', usuarioController.registerUsuario);
router.post('/usuarios/login', usuarioController.loginUsuario);
router.get('/usuarios', usuarioController.getAllUsuarios);
router.get('/usuarios/:id', usuarioController.getUsuarioById);
router.delete('/usuarios/:id', usuarioController.deleteUsuario);

module.exports = router;
