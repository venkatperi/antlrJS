const antlr4 = require( 'antlr4' );
const formatter = require( './grammar/formatter' );
const AnnotatingErrorListener = require( './AnnotatingErrorListener' );

module.exports = ( name, startRule ) => {
  const Lexer = require( `./grammars/${name}/${name}Lexer` )[`${name}Lexer`];
  const Parser = require( `./grammars/${name}/${name}Parser` )[`${name}Parser`];

  return function( input ) {
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
    var tree = parser[startRule]();
    return {
      obj: formatter.toObject( tree, parser, { name: 'text' } ),
      annotations: annotations
    }
  }
}
