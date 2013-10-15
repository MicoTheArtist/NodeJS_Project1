var express = require('express');

var app = express.createServer();

var recipes = require('./data/recipes').data;	// the recipes variables is pulling in the data

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', function(req, res) {
  res.render('recipes.ejs', {
    title: 'Clever Kitchens - Recipe List',
    recipes: recipes
  });
});

app.get('/recipes/:title', function(req, res) {
	var data = recipes.filter(function  (recipe) {	// here we are using the ".filter()" method to filter the recipes Json Data array
    return (recipe.url === req.params.title);	 // if the condition is true, the data variable is set only to the part of the array where the condition is true.
  });

  if (data.length > 0) {	// after the filtering is done we test the length of the data array
    data = data[0];		// if their are more than one elements in the array, we assume that the first one is the one we want.
    data.title = 'Clever Kitchens - Recipe'; // here we are setting a new title name value pair inside of the data array

    res.render('recipe.ejs', data); // here we are loading in the "recipe.ejs" view and passing in the data.
  } else {
    res.status(404).render('error.ejs', {title: 'Recipe Not Found'}); // if none of the ":title" variables match, than the error.ejs page is opened and the title "Recipe Not Found" is placed in the {title} slot of recipe.ejs
  }
});

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);