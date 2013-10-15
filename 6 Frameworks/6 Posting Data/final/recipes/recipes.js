var recipes = require('./data/recipes').data;

exports.list = function(req, res){
  res.render('recipes.ejs', {
    title: 'Clever Kitchens - Recipe List',
    recipes: recipes
  });
};

exports.single = function(req, res) {
	var data = recipes.filter(function  (recipe) {
    return (recipe.url === req.params.title);
  });

  if (data.length > 0) {
    data = data[0];
    data.title = 'Clever Kitchens - Recipe';

    res.render('recipe.ejs', data);
  } else {
    res.status(404).render('error.ejs', {title: 'Recipe Not Found'});
  }
};

// NOTE: on the "script.js" page this is talked about // app.use(express.bodyParser()); // this will automaticly populate the body property of the request variable
exports.suggest = function(req, res) { // this function display the results from the post in "suggeset_result.ejs"
  res.render('suggest_result.ejs', {
    title: 'Clever Kitchens - Thanks!',
    name: req.body.name,		// we are accesing the name, ingredietns and directions from the body property of the request variable
    ingredients: req.body.ingredients,
    directions: req.body.directions
  });
};