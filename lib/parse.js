const antlr4 = require( 'antlr4' );
const formatter = require( './formatter' );
const AnnotatingErrorListener = require( './AnnotatingErrorListener' );

const Lexer = require( GRAMMAR_DIR + "/" + GRAMMAR_NAME + "Lexer" )[ GRAMMAR_NAME + "Lexer" ];
const Parser = require( GRAMMAR_DIR + "/" + GRAMMAR_NAME + "Parser" )[ GRAMMAR_NAME + "Parser" ];

module.exports = function( input ) {
  var chars = new antlr4.InputStream( input );
  var lexer = new Lexer( chars );
  var tokens = new antlr4.CommonTokenStream( lexer );
  var parser = new Parser( tokens );
  var annotations = [];
  var listener = new AnnotatingErrorListener( annotations );
  lexer.removeErrorListeners();
  lexer.addErrorListener( listener );
  parser.removeErrorListeners();
  parser.addErrorListener( listener );
  parser.buildParseTrees = true;
  var tree = parser[ START_RULE ]();
  return {
    obj: formatter.toObject( tree, parser, { name: 'text' } ),
    annotations: annotations
  }
}
