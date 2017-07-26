const $ = require( 'jquery' );
const ace = require( 'brace' );
//require( 'brace/mode/ACEMODE' );

module.exports = new Promise( ( resolve, reject ) => {
  $( function() {
    editor = ace.edit( 'source' );
    //editor.getSession().setMode( 'ace/mode/ACEMODE' )
 		resolve(editor);
  } );
} );
