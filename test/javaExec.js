const assert = require( 'assert' );
const javaExec = require( '../lib/java_exec' );

describe( 'javaExec', function() {
  it( 'runs java', function( done ) {
    javaExec( {
      main: 'org.antlr.v4.Tool'
    } ).then( function( res ) {
      console.log( res.stdout );
      done();
    } ).catch( done );
  } );

} );
