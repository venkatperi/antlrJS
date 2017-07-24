const $ = require( 'jquery' );
const ace = require( 'brace' );
require( 'brace/mode/asciidoc' );

module.exports = new Promise( ( resolve, reject ) => {
  $( function() {
    editor = ace.edit( 'source' );
    editor.getSession().setMode( 'ace/mode/asciidoc' )
 		resolve(editor);
  } );
} );
