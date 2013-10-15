var io = require('socket.io'),
  connect = require('connect');

// We start a connect app on port 3000
var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);  // we create a socket called chat_room listening to that app

// now we assign a function to the connection event for all of
// the sockets that are connected to the chat room
chat_room.sockets.on('connection', function (socket) {
	// whenever the connection event fires, we emit an entrance event to all
	// of the sockets that are currently connected to the chat room.
	// The entrance event is an event that we defined.
  chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});
  // we are also passing in an object with a message property.
  // the "message" property is set to "A new chatter is online."
  
  // After emiting an event from the server side you can listen for it on
  // the browser, side and then handle it.
});