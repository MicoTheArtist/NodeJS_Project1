// module -- a module is a self-contained series of one or more JavaScript files reprenented by an object.
var sequence = require('./fibonacci');  // we are requiring the fibonacci.js module
										  // NOTE: "./" tells node to load in a local module rather than directory rather than looking inside of node modules or the core module collection.

console.log(sequence.data);  // here we are accessing the data property from sequence and spitting it out to the console.