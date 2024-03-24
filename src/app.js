const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const userRouter = require('./routes/UserRouter');

const app = express();

// Configuração do bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração da sessão
app.use(session({
    secret: 'seu_segredo_aqui', // Escolha um segredo para a sessão
    resave: false,
    saveUninitialized: true
}));

// Configuração do roteador
app.use('/api/users', userRouter);



module.exports = app;
