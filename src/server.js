const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set('view engine', 'njk');

nunjucks.configure('src/views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.use(express.static('public'));

server.get('/', (req, res) => {
    return res.render('index');
});

server.get('/sobre', (req, res) => {
    return res.render('about');
});

server.get('/receitas', (req, res) => {
    return res.render('recipes');
});

server.listen(3000, () => console.log('ok'));