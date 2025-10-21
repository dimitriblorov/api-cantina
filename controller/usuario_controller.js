const usuarioService = require('../service/usuario_service');

async function registerUsuario(req, res) {
    try {
        const { nomeCompleto, email, senha } = req.body;
        const newUser = usuarioService.registerUsuario(nomeCompleto, email, senha);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(error.id || 500).json({ error: error.message || "Erro interno." });
    }
}

async function loginUsuario(req, res) {
    try {
        const { email, senha } = req.body;
        const user = usuarioService.loginUsuario(email, senha);
        res.status(200).json(user);
    } catch (error) {
        res.status(error.id || 500).json({ error: error.message || "Erro interno." });
    }
}

async function getAllUsuarios(req, res) {
    try {
        const usuarios = usuarioService.getAllUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(error.id || 500).json({ error: error.message || "Erro interno." });
    }
}

async function getUsuarioById(req, res) {
    try {
        const { id } = req.params;
        const usuario = usuarioService.getUsuarioById(id);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(error.id || 500).json({ error: error.message || "Erro interno." });
    }
}

async function deleteUsuario(req, res) {
    try {
        const { id } = req.params;
        usuarioService.deleteUsuario(id);
        res.status(204).send();
    } catch (error) {
        res.status(error.id || 500).json({ error: error.message || "Erro interno." });
    }
}

module.exports = {
    registerUsuario,
    loginUsuario,
    getAllUsuarios,
    getUsuarioById,
    deleteUsuario
};
