const express = require('express');
const router = express.Router();

let items = []; // Array para simular um banco de dados

// Rota GET para ler itens
router.get('/items', (req, res) => {
  res.json(items);
});

// Rota POST para criar um novo item
router.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem); // Adiciona o novo item ao array
  res.status(201).json(newItem);
});

// Rota PUT para atualizar um item
router.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    return res.status(404).send('Item não encontrado');
  }

  items[index] = updatedItem; // Atualiza o item no array
  res.json(updatedItem);
});

// Rota DELETE para excluir um item
router.delete('/items/:id', (req, res) => {
  const { id } = req.params;

  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    return res.status(404).send('Item não encontrado');
  }

  items = items.filter(item => item.id !== id); // Remove o item do array
  res.status(204).send();
});

module.exports = router;
