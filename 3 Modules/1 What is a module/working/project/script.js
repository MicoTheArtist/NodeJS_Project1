var parser = require('node-markdown');

var html = parser.Markdown('Using **markdonw** helps you focus on writing, *not* on markup.');

console.log(html);