var connect = require('connect'); // loading in connect

var app = connect()	// creating a connect server
	.use(connect.bodyParser())		// using body parser which will allow us to read the "POST" form variables in their submitted form
	.use(connect.static('public'))	// we are also using static() method to connect to the public folder. 
	.use(function (req, res) {	// if the request cannot be filled by the public folder than this function is used 
		if (req.url === '/process') {	// if the url request ends with "/process" it will attempt to send back a message with the form variables
			res.end(req.body.name + ' would repeat ' + req.body.repeat + ' times.');
		} else {
			res.end("Invalid Request");	// otherwise it will end with a message invalid request.
		}
	})
	.listen(3000);