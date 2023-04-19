const express = require('express');
const server = express();

server.use(express.json());

//Array de Alunos
const alunos = ['Ana Vitoria', 'Mario Luis', 'Alice Costa', 'Pedro Matias', 'Luis Miguel'];


//Pagina Principal
server.get('/', function (req, res) {
    res.send("<h1>Escola da tia Julia!!!</h1>");
});


//Retornar lista de Alunos
server.get('/alunos', function (req, res) {
   return res.json(alunos);
    });


//Criar Aluno
server.post('/alunos', function (req, res) {
    const { name } = req.body;
    alunos.push(name);

    return res.json(alunos);
});

//Atualizar Aluno
server.put('alunos/:index', function (req, res) {
    const { index } = req.params;
    const { name } = req.body;

    alunos[index] = name;

    return res.json(alunos);
});

//Deletar um Aluno
server.delete('/alunos/:index', function (req, res) {
    const { index } = req.params;

    alunos.splice(index, 1);
    
    return res.json({ message: 'O cadastro foi deletado'});
});



server.listen(3000);
