var os = require('os'); // pulls in the core os module

var message = 'This script is running on Node.js ' + process.version +
			' on a ' + os.type() + '-based operating system.';

console.log(message);