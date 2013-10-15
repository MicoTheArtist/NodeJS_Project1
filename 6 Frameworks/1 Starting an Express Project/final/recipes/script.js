var express = require('express');	// we are loading express as a module

var app = express.createServer();	// now we are creating an express server using createServer()

// below we are defining three roots using app.get
app.get('/recipes', function(req, res){	// root for recipes
  res.send('<h1>All Recipes</h1>');
});

app.get('/recipes/:title', function(req, res) {	// another root for recipes that has a variable called title
 res.send('<h1>' + req.params.title + '</h1>');	// we have acces to any variables defined in the root through the "params" object. NOTE: the "params" object is a native node.js object.
});

// it is important that this default handler goes last
app.get('/*', function(req, res) {		// another root with an *
 res.send('if all else fails, we hit this page');
});

app.listen(3000);	// we are listening to the application on port 3000