var os = require('os');  // require allows us to pull in more code from a module.
						  // The require function then returns an object that includes all of the code in the os module

// "process" is a global object available in node.js, however, not normally available in our browser.
var message = 'This script is running on Node.js ' + process.version +
			' on a ' + os.type() + '-based operating system.';

console.log(message);