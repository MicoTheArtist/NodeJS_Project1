var argv = require('optimist').argv,
	$ = require('jquery'),  // we can assign jquery to any type of variable we want to, however, for consistency it is good to use $
	fs = require('fs'); // core module provided by node that allows us to access the file system

var file = argv._[0];  // after we get the name of only the first file loaded.

var html = fs.readFileSync(file, 'UTF-8');	// we then use the fs module to read the file
												// we pass in the name of the file and tell it to open it in "UTF-8" encoding, as a string.
												
$(html).find('p').each(function(index) { // here we are using all of the paragraph tags, cycling over each of them. Returning each of their html and storing them in content.
	var content = $(this).html();

	console.log('Paragraph ' + (index + 1) + ': ' + content);
});

// in the terminal type "node-dev script.js page.html" to bring in the correct page.