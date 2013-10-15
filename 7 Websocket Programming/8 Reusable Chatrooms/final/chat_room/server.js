var io = require('socket.io');
var connect = require('connect');
var chatter = require('chatter');  // we are requireing the chatter module that we made the same way as the connect and socket.io module

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

// after setting up connect and socket.io we are calling the set_sockets function from the chatter module
// we are passing in the sockets from the chat room object
chatter.set_sockets(chat_room.sockets);

// here we are assigning only one function to an event in server.js
chat_room.sockets.on('connection', function (socket) {
  chatter.connect_chatter({	// on the connection event, we are calling connect_chatter off of the chatter module
    socket: socket,	// we are passing in the socket thats currently connecting
    username: socket.id	// we are passing in the sockets id as a username
  });
});