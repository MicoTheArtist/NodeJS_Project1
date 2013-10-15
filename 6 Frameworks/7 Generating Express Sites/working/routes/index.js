
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
 * GET recipes "index" page
 */
 
exports.recipes = function(req, res){
  res.render('index', { title: 'Recipes' });
};

/*
 * GET micos page
 */
 
exports.micos = function(req, res){
  res.render('micos', { title: 'Manuel Ryan Espinosa | PHP Software Engineer &amp; Front End Web Developer' });
};