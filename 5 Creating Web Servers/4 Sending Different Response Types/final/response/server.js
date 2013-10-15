var connect = require('connect');

var app = connect()
	.use(function (req, res) {
		res.statusCode = 403;	// the "403" response status is sent back when you have a resource that you are denying access to
		res.end("Forbidden"); // the message we are sending back is forbidden.
	})
	.listen(3000);