const antlr4 = require( 'antlr4/index' );
const AsciidocLexer = require( './asciidocjs/AsciidocLexer' ).AsciidocLexer;
const AsciidocParser = require( './asciidocjs/AsciidocParser' ).AsciidocParser;
const formatter = require( './asciidocjs/formatter' );

function parse( input ) {
  var chars = new antlr4.InputStream( input );
  var lexer = new AsciidocLexer( chars );
  var tokens = new antlr4.CommonTokenStream( lexer );
  var parser = new AsciidocParser( tokens );
  parser.buildParseTrees = true;
  var tree = parser.asciidoc();
  return formatter.toObject( tree, parser, {name: 'text'} );
}


module.exports = parse;
