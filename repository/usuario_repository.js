class Usuario {
    constructor(id, nomeCompleto, email, senha) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.senha = senha; // em memória, plain-text (apenas para exercício)
    }
}

let usuarios = [];
let autoIncrementId = 1;

function createUsuario(nomeCompleto, email, senha) {
    const usuario = new Usuario(autoIncrementId++, nomeCompleto, email, senha);
    usuarios.push(usuario);
    return usuario;
}

function getUsuarioByEmail(email) {
    return usuarios.find(u => u.email === email) || null;
}

function getAllUsuarios() {
    return usuarios;
}

function getUsuarioById(id) {
    const numId = parseInt(id);
    return usuarios.find(u => u.id === numId) || null;
}

function deleteUsuario(id) {
    const numId = parseInt(id);
    const index = usuarios.findIndex(u => u.id === numId);
    if (index !== -1) {
        return usuarios.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createUsuario,
    getUsuarioByEmail,
    getAllUsuarios,
    getUsuarioById,
    deleteUsuario
};
