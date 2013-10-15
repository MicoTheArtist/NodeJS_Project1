// socket.io -- allows you to emit an event to all of the sockets at once, or you can emit to one specific socket
var io = require('socket.io'),
  connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) {
  socket.emit('entrance', {message: 'Welcome to the chat room!'});  // this event is only being emited to the socket that is currently being connected
																		// The other sockets will not see this message
  socket.on('disconnect', function  () { // here I am assigning a socket to the disconnect event that the current socket might individually commit
    chat_room.sockets.emit('exit', {message: 'A chatter has disconnected.'});  // when the chatter disconnects, it will emit an exit event to all of the chatters that the socket is currently connected to
  });

  chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});  // this json message gets emitted to all of the sockets using "chat_room" on this socket.
});