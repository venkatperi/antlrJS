const antlr4 = require( 'antlr4' );

var AnnotatingErrorListener = function( annotations ) {
  antlr4.error.ErrorListener.call( this );
  this.annotations = annotations || [];
  return this;
};

AnnotatingErrorListener.prototype = Object.create( antlr4.error.ErrorListener.prototype );
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

AnnotatingErrorListener.prototype.syntaxError = function( recognizer, offendingSymbol, line, column, msg, e ) {
  this.annotations.push( {
    row: line - 1,
    column: column,
    text: msg,
    type: "error" 
  } );
};

module.exports = AnnotatingErrorListener;
