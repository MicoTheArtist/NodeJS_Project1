var recipes = require('./data/recipes.js').data; // we are requiring data recipes and requiring the data property from that module

// below are two functions, both set as properties of the exports global
// Because the two functions, below are both set as properties of the "exports" global, the will both be available from outside this module.
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