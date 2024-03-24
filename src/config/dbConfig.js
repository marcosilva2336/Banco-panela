const mysql = require('mysql2');

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '',
  database: 'banco_Panela' 
});

// Conecte-se ao MySQL
connection.connect(error => {
  if (error) {
    console.error('Erro ao conectar ao MySQL:', error);
    return;
  }
  console.log('Conectado ao MySQL com sucesso');
});

module.exports = connection;
