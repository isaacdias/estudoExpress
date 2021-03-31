const { response } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
    const { title, owner} = req.query;
    console.log(title);
    console.log(owner);

    res.json([
        'projeto1',
        'projeto2',
    ])
});

app.post('/projects', (req, res) => {
    return res.json([
        'projeto1',
        'projeto2',
        'projeto3',
        'projeto4',
        'projeto5',
    ])
})

app.put('/projects/:id', (req, res) => {
    const params = req.params;

    console.log(params);

    return res.json([
        'projeto50',
        'projeto2',
        'projeto3',
        'projeto4',
        'projeto5',
    ])
})

app.delete('/projects/:id', (req, res) => {
    return res.json([
        'projeto50',
        'projeto2',
    ])
})

app.listen(3000)