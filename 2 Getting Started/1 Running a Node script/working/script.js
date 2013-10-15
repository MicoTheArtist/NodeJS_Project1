var os = require('os');

var message = 'This script is runing on Node.js ' + process.version +
			   ' on a ' + os.type() + '-based operating system.';
			   
console.log(message);