var express = require('express');	// first we are loading up exrpess

var app = express.createServer();	// next we are creating a server with express

// all of the routes are defined below.
app.get('/', function(req, res){	// first we set up a route at "/"
  res.render('index.ejs', {title: 'Clever Kitchens'});	// this is going to set up "index.ejs" and we are setting the title to "Clever Kitchens"
});

// note the "res.render" object always grabs a layout from the view section.
app.get('/recipes', function(req, res){ // the route here is "/recipes"
  res.render('layout.ejs', {	// the route "/recipes" is being handled directly by "layout.ejs".  Express always looks for a default layout file to wrap the views that we use.
    title: 'Clever Kitchens - Recipes', 	// here we are setting the title
    body: '<h1>All Recipes</h1>'	// here we are setting the body variable because we are not using a view
  });
});

app.get('/recipes/:title', function(req, res) {
 res.send('<h1>' + req.params.title + '</h1>'); // this just displays the title variables in the body without going throught the render function. Theirfore the "layout.ejs" page got skipped.
});

app.get('/*', function(req, res) {  // this route is set for when a url does not exist.  It is also called a default route.
  res.status(404).render('error.ejs', {title: 'Error'});	// we use the "error.ejs" page and set the "title" to "Error".  We also set the status() method to 404, telling the browser and google that the page does not exist.
});

app.listen(3000);