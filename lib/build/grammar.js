const _ = require( 'lodash' );
const antlrTool = require( '../antlr_tool' );

module.exports = function( opts = {} ) {
  opts = _.extend( { files: '*.g4', }, opts );
  let args = [ '-Dlanguage=JavaScript' ];
  if ( opts.outdir ) {
    args.push( '-o' );
    args.push( opts.outdir );
  }

  args.push( opts.files );
  return antlrTool( args, { cwd: opts.cwd } );
}
