const express = require('express');
const nunjucks = require('nunjucks');

const recipes = require ('./data.js');

const server = express();

server.set('view engine', 'njk');

nunjucks.configure('src/views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.use(express.static('public'));

server.get('/', (req, res) => {
    return res.render('index', {recipes: recipes});
});

server.get('/sobre', (req, res) => {
    return res.render('about');
});

server.get('/receitas', (req, res) => {
    return res.render('recipes', {recipes: recipes});
});

recipes.forEach((recipe) => {
    server.get(`/${recipe.title_id}`, (req, res) => {
        return res.render('recipe', {recipe: recipe});
    });
});
server.listen(process.env.PORT || 3000, () => console.log('ok'));
