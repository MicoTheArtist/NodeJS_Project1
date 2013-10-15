// the readline module allows you to create interactive prompts.  
// Readline is a core module that is installed with node itself.
// their is no need to install readline using npm
var rl = require('readline'); 

// we are creating a question using the create interface method of readline.
var prompts = rl.createInterface(process.stdin, process.stdout); // we are passing in the standard input (process.stin) and standard output (process.stout)

// once the interface is created we use the "prompts.question" method to ask a question.
prompts.question("How many servings of fruits and vegetables do you eat each day? ", function  (servings) {	// the response from the user will be passed as an argument into this function
	var message = '';

	if (servings < 5) {
		message = "Since you're only eating " + servings + 
		" right now, you might want to start eating " + (5 - servings) + " more.";
	} else {
		message = "Excellent, your diet is on the right track!";
	}
	
	console.log(message);
	
  process.exit();	// if you do not run "process.exit()" the interface is going to keep reading from "standard input"
});
