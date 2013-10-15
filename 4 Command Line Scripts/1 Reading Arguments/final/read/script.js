// This script will read some commands from the command line, and run a loop a specified number of times with a custom message.
var argv = require('optimist').argv; // we are requiring the "optimist" module and requiring the argv property off ot it.
for (var i=0; i < argv.times; i++) { // then we are reading the times property off of argv.  The times property gets set on the command line using the 
	console.log(argv._[0] + ' on loop number ' + (i + 1));	// The remaining arguments that are not stored with flags are stored in the underscore array
}																// we are getting the first element from that array, and using that as a part of the message in the loop.

// read ->node script.js --times 8 spinning
// read ->node script.js --times 8 spinning --test 8
// read ->node script.js --times 8 spinning --test 8
// read ->node script.js Spinning --times 3