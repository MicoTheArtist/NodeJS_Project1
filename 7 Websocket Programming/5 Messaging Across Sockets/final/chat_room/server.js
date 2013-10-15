var io = require('socket.io');
var connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) {
  socket.emit('entrance', {message: 'Welcome to the chat room!'});

  socket.on('disconnect', function  () {
    chat_room.sockets.emit('exit', {message: 'A chatter has disconnected.'});
  });

  socket.on('chat', function  (data) { // whenever this individual chat event is triggered
    chat_room.sockets.emit('chat', {message: '# ' + data.message});	// a message is sent to all of the chat_room socket connected chat rooms
  });

  chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});
});