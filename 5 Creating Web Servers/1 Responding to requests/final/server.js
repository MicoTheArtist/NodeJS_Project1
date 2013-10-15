var http = require('http');	// requiring the http module. This is a core module that is distributed with node.js

// the createServer method takes a function as an argument. This function is run every time a request is sent to the server 
http.createServer(function (request, response) { // request object has all of the data that came in from the http request
													// response object allows us to customize what we are going to send back to the web browser
	response.writeHead(200, {'Content-Type': 'text/html'}); // whenever we get a request, we are going to be send back a 200 response code with a specified content-type of the text/html
	response.end('<html><body>Home, URL was: ' + request.url + '</body></html>'); // we end the request with the body.  This body is going to be an html document that is going to display the url the browser requested.
	console.log(request.url); // logs the url
}).listen(3000, 'localhost');	// now we are telling the http module to listen on port 3000 at localhost

console.log('Server running at http://localhost:3000/');