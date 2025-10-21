const usuarioRepository = require('../repository/usuario_repository');

function registerUsuario(nomeCompleto, email, senha) {
    if (!nomeCompleto || !email || !senha) {
        const error = new Error("Nome, email e senha são obrigatórios.");
        error.id = 400;
        throw error;
    }

    const existing = usuarioRepository.getUsuarioByEmail(email);
    if (existing) {
        const error = new Error("Email já cadastrado.");
        error.id = 409;
        throw error;
    }

    // OBS: armazenamento de senha em plain-text apenas para exercício (não faça isso em produção)
    return usuarioRepository.createUsuario(nomeCompleto, email, senha);
}

function loginUsuario(email, senha) {
    const user = usuarioRepository.getUsuarioByEmail(email);
    if (!user || user.senha !== senha) {
        const error = new Error("Credenciais inválidas.");
        error.id = 401;
        throw error;
    }
    // para este trabalho retornamos o usuário (sem token) — o front pode simular sessão.
    return {
        id: user.id,
        nomeCompleto: user.nomeCompleto,
        email: user.email
    };
}

function getAllUsuarios() {
    return usuarioRepository.getAllUsuarios();
}

function getUsuarioById(id) {
    const u = usuarioRepository.getUsuarioById(id);
    if (!u) {
        const error = new Error("Usuário não encontrado.");
        error.id = 404;
        throw error;
    }
    return u;
}

function deleteUsuario(id) {
    const removed = usuarioRepository.deleteUsuario(id);
    if (!removed) {
        const error = new Error("Usuário não encontrado.");
        error.id = 404;
        throw error;
    }
    return removed;
}

module.exports = {
    registerUsuario,
    loginUsuario,
    getAllUsuarios,
    getUsuarioById,
    deleteUsuario
};
