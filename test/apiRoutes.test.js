const request = require('supertest');
const express = require('express');
const apiRoutes = require('../src/routes/apiRoutes'); // Certifique-se de que o caminho está correto

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);

describe('Testes de API CRUD', () => {
 
  let testItem = { id: '1', name: 'Test Item' };

  test('POST /api/items', async () => {
    const response = await request(app).post('/api/items').send(testItem);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(testItem);
  });

  test('GET /api/items', async () => {
    const response = await request(app).get('/api/items');
    expect(response.statusCode).toBe(200);
    expect(response.body).toContainEqual(testItem);
  });

  test('PUT /api/items/1', async () => {
    const updatedItem = { ...testItem, name: 'Updated Item' };
    const response = await request(app).put('/api/items/1').send(updatedItem);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(updatedItem);
  });

  test('DELETE /api/items/1', async () => {
    const response = await request(app).delete('/api/items/1');
    expect(response.statusCode).toBe(204);
  });
});
