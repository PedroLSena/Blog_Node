const express = require('express');
const path = require('path');
const router  = require('./routes.js');
const app =express();
const PORT = 3000

// Configuração do diretório de rotas
app.set('view engine', 'ejs');
// Configuração do diretório de views para o EJS
app.set('views', __dirname + '/views');
// Configuração do diretório público para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//leitura de formularios
app.use(express.urlencoded({ extended: true }));

//Rotas
app.use(router);

app.listen(PORT || 3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.render('200');
});
