class Venda {
    constructor(id, clienteNome, itens, dataHora, total) {
        this.id = id;
        this.clienteNome = clienteNome;
        this.itens = itens; // [{ produtoId, quantidade, precoUnitario }]
        this.dataHora = dataHora;
        this.total = total;
    }
}

let vendas = [];
let autoIncrementId = 1;

function createVenda(clienteNome, itens, dataHora, total) {
    const venda = new Venda(autoIncrementId++, clienteNome, itens, dataHora, total);
    vendas.push(venda);
    return venda;
}

function getAllVendas() {
    return vendas;
}

function getVendaById(id) {
    const numId = parseInt(id);
    return vendas.find(v => v.id === numId) || null;
}

function deleteVenda(id) {
    const numId = parseInt(id);
    const index = vendas.findIndex(v => v.id === numId);
    if (index !== -1) {
        return vendas.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createVenda,
    getAllVendas,
    getVendaById,
    deleteVenda
};
