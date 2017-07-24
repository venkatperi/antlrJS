const parse = require( './lib/parse' );
const InspireTree = require( 'inspire-tree' );
const InspireTreeDOM = require( 'inspire-tree-dom' );
const _ = require( 'lodash' );
const $ = require( 'jquery' );
const editor = require('./lib/editor');


function update() {
  //var input = $( '#source' ).getValue();
  var input = editor.editor().getValue();
  console.log(input);

  $('#tree').remove();
  $('#treeContainer').append('<div id="tree"></div>');

  var tree = new InspireTree( {
    data: [ parse( input ) ]
  } );

  new InspireTreeDOM( tree, {
    target: "#tree",
    nodeHeight: 20
  } );

  tree.on( 'node.dblclick', function( event, node ) {
    event.preventTreeDefault(); // Cancels default listener
    if ( node.collapsed() ) {
      node.expand();
      node.recurseDown( ( x ) => x.expand() );
    } else {
      node.recurseDown( ( x ) => x.collapse() );
      node.collapse();
    }
  } );

}

document.querySelector( '.search' ).addEventListener( 'keyup', _.debounce( function( event ) {
  console.log( event.target.value );
  tree.search( event.target.value );
}, 150 ) );

$( function() {
  editor.init();
  $('#convert').click(update);
} );
