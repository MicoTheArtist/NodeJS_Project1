var connect = require('connect');

// storing data in this "my_data" object
var my_data = {
	'fruit': 'apple',
	'number': '555-1212',
	'color': 'purple'
};

var app = connect() // set up another server
	.use(function (req, res) {
    	res.setHeader('Content-Type', 'application/json');  // we are setting the content type to "application/json" to help with our client side scripting when we need to use the database from the myData object
		res.end(JSON.stringify(my_data)); // here we are calling JSON.stringify and adding in "myData" turning this object into a json string
	})
	.listen(3000);