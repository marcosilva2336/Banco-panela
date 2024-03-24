const express = require('express');
const path = require('path');
const app = require('./src/app'); 
const db = require('./src/config/dbConfig');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'))); 


//config 404 para rotas privadas
app.use('/css', (req, res, next) => {
  const cssFilePath = path.join(__dirname, 'private', 'css', req.url);
  if (!fs.existsSync(cssFilePath)) {
    res.status(404).send('File not found');
  } else {
    next();
  }
});

app.use('/js', (req, res, next) => {
  const jsFilePath = path.join(__dirname, 'private', 'js', req.url);
  if (!fs.existsSync(jsFilePath)) {
    res.status(404).send('File not found');
  } else {
    next();
  }
});


app.use(express.static(path.join(__dirname, 'public')));

// 404 para rotas publicas
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
// ...


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
