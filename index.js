const express = require('express');
const app = express();


const categoria_router = require('./router/categoria_router');
const produto_router = require('./router/produto_router');
const venda_router = require('./router/venda_router');
const usuario_router = require('./router/usuario_router');


app.use(express.json());

app.use('/api', categoria_router);
app.use('/api', produto_router);
app.use('/api', venda_router);
app.use('/api', usuario_router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
