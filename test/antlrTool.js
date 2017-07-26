const assert = require( 'assert' );
const path = require( 'path' );
const antlrTool = require( '../lib/antlr_tool' );

describe( 'antlr tool', function() {
  it( 'builds grammar', function( done ) {
    antlrTool( [ "*.g4" ], {
      cwd: path.join( __dirname, 'fixtures/grammar/xml' )
    } ).then( function( res ) {
      console.log( res.stdout );
      done();
    } ).catch( done );
  } );

} );
