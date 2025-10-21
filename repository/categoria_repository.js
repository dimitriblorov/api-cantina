class Categoria {
    constructor(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}

let categorias = [];
let autoIncrementId = 1;

function addCategoria(nome, descricao) {
    const categoria = new Categoria(autoIncrementId++, nome, descricao);
    categorias.push(categoria);
    return categoria;
}

function getAllCategorias() {
    return categorias;
}

function getCategoriaById(id) {
    const numId = parseInt(id);
    return categorias.find(cat => cat.id === numId) || null;
}

function updateCategoria(id, nome, descricao) {
    const numId = parseInt(id);
    const categoria = getCategoriaById(numId);
    if (categoria) {
        categoria.nome = nome;
        categoria.descricao = descricao;
        return categoria;
    }
    return null;
}

function deleteCategoria(id) {
    const numId = parseInt(id);
    const index = categorias.findIndex(cat => cat.id === numId);
    if (index !== -1) {
        return categorias.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    addCategoria,
    getAllCategorias,
    getCategoriaById,
    updateCategoria,
    deleteCategoria
};