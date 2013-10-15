var express = require('express');

var app = express.createServer();
app.use(express.bodyParser()); // this will automaticly populate the body property of the request variable

var recipes = require('./recipes.js');

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', recipes.list);

// NOTE: you can route get and post requests to the same url.

// first same /recipes/suggest route
app.get('/recipes/suggest', function(req, res) {	// this first request is a get request that pulls up the suggest.ejs and gives it a title
  res.render('suggest.ejs', {title: 'Suggest a Recipe'});
});

// second same /recipes/suggest route, however, it is a post this time
app.post('/recipes/suggest', recipes.suggest);	// this uses the recipes.suggest function from recipes.js

app.get('/recipes/:title', recipes.single);

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);