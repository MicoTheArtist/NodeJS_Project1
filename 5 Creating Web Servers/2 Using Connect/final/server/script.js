var connect = require('connect'); // we are calling the connect function that returns an object.

// note: the order of the chained use() functions matters.
var app = connect()	// we are calling the connect function which returns an object
	.use(connect.static('public')) // here we are serving files directly from the public folder
	.use(function (req, res) {		// if nothing is called directly from the public static folder it comes to this line and returns an error
		res.end("Couldn't find it.");
	})
	.listen(3000);