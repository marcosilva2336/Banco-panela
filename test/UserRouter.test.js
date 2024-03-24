const request = require('supertest');
const express = require('express');
const app = express();
const userRouter = require('../src/routes/UserRouter'); // Importe o seu arquivo de rota aqui

app.use(express.json()); // Certifique-se de usar o middleware JSON para análise de solicitações

// Use a rota de registro
app.use('/api/users', userRouter);

describe('Teste da rota /register', () => {
  it('Deve criar um novo usuário e redirecionar', async () => {
    const newUser = {
      fullName: 'John Doe',
      cpf: '123.456.789-00',
      tel: '(88) 88888-8888',
      email: 'john@example.com',
      dob: '20020227',
      motherName: 'Mary Doe',
      cep: '51345-462',
      endereco: 'Travessa Soares Meireles',
      cidade: 'Camaragibe',
      estado: 'PE',
      pais: 'Brasil',
      rg: '123456',
      password: 'senha123',
    };
    const response = await request(app)
    .post('/api/users/register')
    .send(newUser);


  expect(response.status).toBe(302);


  expect(response.headers.location).toBe('/login.html');

});
});