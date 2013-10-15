var express = require('express');

var app = express.createServer();

var recipes = require('./data/recipes').data; // notice we are using "./" before the name of the module. That tells node to look in the local directory and not look in any of the module paths.
												// After the require statement we are getting the "data" property. This data property is then sent into recipes.
app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', function(req, res){
  res.render('recipes.ejs', {
    title: 'Clever Kitchens - Recipe List',
    recipes: recipes // the recipes value is coming from the require "recipes" value above.
  });
});

app.get('/recipes/:title', function(req, res) {
	res.send('<h1>' + req.params.title + '</h1>');
});

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);