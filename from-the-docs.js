var grammar = require("./grammars/json.js");
var nearley = require("nearley");

// Create a Parser object from our grammar.
var p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);

// Parse something
p.feed("[1,2,3]");
console.log( require( 'util' ).inspect( p.results ) );

// p.results --> [ ["sum", "1", "1"] ]

