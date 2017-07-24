const $ = require( 'jquery' );
const ace = require( 'brace' );
require( 'brace/mode/asciidoc' );
require( 'brace/theme/solarized_light' );

let editor = null;

function init() {
  editor = ace.edit( 'source' );
  editor.getSession().setMode( 'ace/mode/asciidoc' )
  editor.setTheme( 'ace/theme/solarized_light' )
}

module.exports = {
  init: init,
  editor: () => editor
}
