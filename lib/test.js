const antlr4 = require( 'antlr4/index' );
const AsciidocLexer = require( './AsciidocLexer' ).AsciidocLexer;
const AsciidocParser = require( './AsciidocParser' ).AsciidocParser;
const getStdin = require( 'get-stdin' );
const formatter = require( './formatter' );

getStdin().then( ( input ) => {
  var chars = new antlr4.InputStream( input );
  var lexer = new AsciidocLexer( chars );
  var tokens = new antlr4.CommonTokenStream( lexer );
  var parser = new AsciidocParser( tokens );
  parser.buildParseTrees = true;
  var tree = parser.asciidoc();
  //console.log( formatter.toAsciiTree( tree, parser ) );
  console.log( formatter.toJSON( tree, parser ) );
} )
.catch(console.log);
