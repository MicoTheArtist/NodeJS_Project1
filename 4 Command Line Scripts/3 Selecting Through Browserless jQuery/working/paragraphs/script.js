var argv = require('optimist').argv;
var $ = require('jquery');
var fs = require('fs');

var file = argv._[0];

var html = fs.readFileSync(file, 'UTF-8');

$(html).find('p').each(function(index) {
	var content = $(this).html();
	
	console.log('Paragraph ' + (index + 1) + ': ' + content);
});