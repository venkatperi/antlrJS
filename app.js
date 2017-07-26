import './css/tree.css';
import './css/style.css';

const parse = require( './lib/parse' );
const tree = require( './lib/tree' );
const _ = require( 'lodash' );
const $ = require( 'jquery' );
const theEditor = require( './lib/editor' );

function update() {
  theEditor.then( function( editor ) {
    var input = editor.getValue();

    $( '#annotations' ).remove();
    $( '#annotationsContainer' ).append( '<div id="annotations"></div>' );

    var res = parse( input );

    $( '#annotations' ).append(
      "<div class='header'><span class='type'>type</span>" +
      "<span class='row'>row</span>" +
      "<span class='column'>column</span>" +
      "<span class='text'>message</span>" +
      "</div>" );

    res.annotations.forEach( function( a ) {
      $( '#annotations' ).append(
        "<div class='item'><span class='type'>" + a.type + "</span>" +
        "<span class='row'>" + ( a.row + 1 ) + "</span>" +
        "<span class='column'>" + a.column + "</span>" +
        "<span class='text'>" + a.text + "</span>" +
        "</div>" );
    } );

    editor.getSession().setAnnotations( res.annotations );

    $( '#tree' ).remove();
    $( '#treeContainer' ).append( '<div id="tree"></div>' );
    let t = tree( res.obj, '#tree' );

    t.on( 'node.click', function( e, node ) {
      if ( node._row )
        theEditor.then( ( e ) => e.gotoLine( node._row, node._column ) );
    } );

  } );
}

$( function() {
  $( 'h1' ).text( $( 'h1' ).text() + ' - ' + GRAMMAR_NAME );
  theEditor.then( function( e ) { e.focus() } );
  $( '#convert' ).click( update );
} );
