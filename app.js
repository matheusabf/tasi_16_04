const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/db-quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'db_quiz.html'));
});

app.get('/oop-quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'oop_quiz.html'));
});

app.get('/web-tech-quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'web_tech_quiz.html'));
});

app.post('/submit-db-quiz', (req, res) => {
    const respostaPergunta1 = req.body.q1;
    if (respostaPergunta1 === "a") {
        res.send("Resposta correta!");
    } else {
        res.send("Resposta incorreta!");
    }
});

app.post('/submit-oop-quiz', (req, res) => {
    const respostaPergunta1 = req.body.q1;
    if (respostaPergunta1 === "a") {
        res.send("Resposta correta!");
    } else {
        res.send("Resposta incorreta!");
    }
});

app.post('/submit-web-tech-quiz', (req, res) => {
    const respostaPergunta1 = req.body.q1;
    if (respostaPergunta1 === "a") {
        res.send("Resposta correta!");
    } else {
        res.send("Resposta incorreta!");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
