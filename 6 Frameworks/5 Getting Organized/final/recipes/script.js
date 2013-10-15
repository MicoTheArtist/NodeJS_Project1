var express = require('express');

var app = express.createServer();

var recipes = require('./recipes'); // we are now requiring recipes as a module. NOTE: we are using "./" to get it from the local directory.

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});	// we are still assigning the view here directly in script.js
});

app.get('/recipes', recipes.list); // the function for this route has been replaced with "recipes.list"
app.get('/recipes/:title', recipes.single);	// the function for this route has been replaced with "recipes.single"

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});	// we are still assigning the view here directly in script.js
});

app.listen(3000);