var io = require('socket.io'); // loading up the socket.io module
var connect = require('connect');	// also loading up the connect module

// using connect to start a server on port 3000
var app = connect().use(connect.static('public')).listen(3000);	// using the static function to connect to the public folder
var socket = io.listen(app); // we are having the socket.io library listen to the app we have created with connect
// here we are creating a web socket
// both the static assets and the web socket will be served over port 3000

// socket.io library can be used "stand alone" or with the "connect" module.


// console
// socket = io.connect('http://localhost:3000')