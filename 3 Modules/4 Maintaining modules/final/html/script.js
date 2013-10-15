var parser = require('node-markdown');

var html = parser.Markdown('Using **markdown** helps you focus on writing, *not* on markup.');

console.log(html);


////// Important commands
	// npm init -- starts a new json package automatically.
	// npm update -- update a current package, taking away deprecated items or adding items.
	// npm prune -- this command removes packages that we are not using anymore.