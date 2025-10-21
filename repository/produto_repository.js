class Produto {
    constructor(id, nome, categoriaId, fornecedorNome, preco) {
        this.id = id;
        this.nome = nome;
        this.categoriaId = categoriaId; // armazena id da categoria
        this.fornecedorNome = fornecedorNome; // string do fornecedor
        this.preco = preco;
    }
}

let produtos = [];
let autoIncrementId = 1;

function createProduto(nome, categoriaId, fornecedorNome, preco) {
    const produto = new Produto(autoIncrementId++, nome, parseInt(categoriaId), fornecedorNome, parseFloat(preco));
    produtos.push(produto);
    return produto;
}

function getAllProdutos() {
    return produtos;
}

function getProdutoById(id) {
    const numId = parseInt(id);
    return produtos.find(p => p.id === numId) || null;
}

function updateProduto(id, nome, categoriaId, fornecedorNome, preco) {
    const numId = parseInt(id);
    const produto = getProdutoById(numId);
    if (produto) {
        produto.nome = nome;
        produto.categoriaId = parseInt(categoriaId);
        produto.fornecedorNome = fornecedorNome;
        produto.preco = parseFloat(preco);
        return produto;
    }
    return null;
}

function deleteProduto(id) {
    const numId = parseInt(id);
    const index = produtos.findIndex(p => p.id === numId);
    if (index !== -1) {
        return produtos.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createProduto,
    getAllProdutos,
    getProdutoById,
    updateProduto,
    deleteProduto
};
