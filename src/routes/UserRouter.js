const express = require('express');
const db = require('../config/dbConfig');
const router = express.Router();
const path = require('path');



function verificaLogin(req, res, next) {
    if (!req.session.loggedIn) {
        res.redirect('/404.html'); 
    } else {
        next();
    }
}
router.post('/register', (req, res) => {
    const { fullName, cpf, tel, email, dob, motherName, cep, endereco, cidade, estado, pais, rg, password } = req.body;

    const cpfQuery = 'SELECT * FROM usuario WHERE cpf = ?';
    db.query(cpfQuery, [cpf], (cpfErr, cpfResult) => {
        if (cpfErr) {
            console.error('Erro na consulta SQL (CPF):', cpfErr);
            return res.status(500).send('Erro interno do servidor');
        }


        if (cpfResult.length > 0) {
            return res.status(400).json({ message: 'CPF já cadastrado' });
        }

        const nomeQuery = 'SELECT * FROM usuario WHERE nomeCompleto = ?';
        db.query(nomeQuery, [fullName], (nomeErr, nomeResult) => {
            if (nomeErr) {
                console.error('Erro na consulta SQL (Nome Completo):', nomeErr);
                return res.status(500).send('Erro interno do servidor');
            }


            if (nomeResult.length > 0) {
                return res.status(400).json({ message: 'Nome completo já cadastrado' });
            }


            const insertQuery = 'INSERT INTO usuario (nomeCompleto, cpf, telefone, email, dataNascimento, nomeMae, cep, endereco, cidade, estado, pais, rg, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            db.query(insertQuery, [fullName, cpf, tel, email, dob, motherName, cep, endereco, cidade, estado, pais, rg, password], (err, result) => {
                if (err) {
                    console.error('Erro na consulta SQL (Inserção):', err);
                    res.status(500).send('Erro ao cadastrar usuário');
                    return;
                }

                res.redirect('/login.html');
            });
        });
    });
});


router.post('/login', (req, res) => {
    const { cpf, password } = req.body;

    const query = 'SELECT * FROM usuario WHERE cpf = ? AND senha = ?';
    db.query(query, [cpf, password], (err, result) => {
        if (err) {
            console.error('Erro na consulta SQL:', err);
            return res.status(500).send('Erro interno do servidor');
        }

        if (result.length === 0) {
            return res.status(401).send('CPF ou senha incorretos');
        }
        req.session.loggedIn = true;
        res.redirect('/api/users/user'); 
    });
});



router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login.html');
});


//ROTAS DA TELA DE USUARIO

router.get('/user', verificaLogin, (req, res) => {
    res.sendFile(path.join(__dirname, '../../private/user.html'));

});


router.get('/ControleDeGastos.html', verificaLogin, (req, res) => {
    res.sendFile(path.join(__dirname, '../../private/ControleDeGastos.html'));
  });
  
module.exports = router;
