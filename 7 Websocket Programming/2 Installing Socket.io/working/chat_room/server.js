var io = require('socket.io');
var connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var socket = io.listen(app);