
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
 * GET recipes page.
 */
 exports.recipes = function(req, res) {
	res.render('index', {title: 'Recipes'});
};