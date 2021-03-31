const express = require('express');
const {v4:uuidv4} = require('uuid')

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
    // const { title, owner} = req.query;

    res.json(projects)
});

app.post('/projects', (req, res) => {
    const { title, owner} = req.body;

    const project = { id: uuidv4(), title, owner};

    projects.push(project);

    return res.json(project)
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