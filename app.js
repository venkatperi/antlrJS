const parse = require( './lib/parse' );
const InspireTree = require( 'inspire-tree' );
const InspireTreeDOM = require( 'inspire-tree-dom' );
const _ = require( 'lodash' );
const $ = require( 'jquery' );
const editor = require( './lib/editor' );

function update() {
  //var input = $( '#source' ).getValue();
  var input = editor.editor().getValue();
  console.log( input );

  $( '#tree' ).remove();
  $( '#treeContainer' ).append( '<div id="tree"></div>' );

  $( '#annotations' ).remove();
  $( '#annotationsContainer' ).append( '<div id="annotations"></div>' );

  var res = parse( input );

  $( '#annotations' ).append(
    "<div class='header'><span class='type'>type</span>" +
    "<span class='row'>row</span>" +
    "<span class='column'>column</span>" +
    "<span class='text'>message</span>" +
    "</div>" );

  res.annotations.forEach( ( a ) => {
    $( '#annotations' ).append(
      "<div class='item'><span class='type'>" + a.type + "</span>" +
      "<span class='row'>" + (a.row+1)+ "</span>" +
      "<span class='column'>" + a.column + "</span>" +
      "<span class='text'>" + a.text + "</span>" +
      "</div>" );
  } );

  editor.editor().getSession().setAnnotations( res.annotations );
  var tree = new InspireTree( {
    data: [ res.obj ]
  } );

  new InspireTreeDOM( tree, {
    target: "#tree",
    nodeHeight: 20
  } );

  tree.expandDeep();

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
  $( '#convert' ).click( update );
} );
