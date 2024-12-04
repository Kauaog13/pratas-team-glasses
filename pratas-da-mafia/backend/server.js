// Importa o módulo express para criar o servidor
const express = require('express');

// Cria uma instância do servidor
const app = express();

// Define uma rota para a página inicial (res= response e req = require)
app.get('/', (req, res) => {
    // Envia uma resposta para o cliente com uma mensagem
    res.send("The server is running on port 3000");
})

// Inicia o servidor e define a porta de escuta
app.listen(3000, () => {
    // Exibe uma mensagem no console para indicar que o servidor está rodando
    console.log("The server is running on port 3000");
});