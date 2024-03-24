const db = require('../src/config/dbConfig');

describe('Teste de conexão com o banco de dados', () => {
  test('Deve conectar ao banco de dados e executar uma consulta simples', done => {
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
      expect(err).toBeNull();
      expect(results[0].solution).toBe(2);
      done();
    });
  });

  afterAll(() => {
    db.end();
  });
});
