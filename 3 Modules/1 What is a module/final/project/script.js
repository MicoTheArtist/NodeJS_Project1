var parser = require('node-markdown'); // this is requiring node-markdown and assigning it to the "parser" object

// here we are calling parser.Markdown to change the markdown code into HTML. 
var html = parser.Markdown('Using **markdown** helps you focus on writing, *not* on markup.');
// once the new html object is created we are spitting it out on the console.

console.log(html);