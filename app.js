import './css/tree.css';
import './css/style.css';
const parse = require( './lib/parse' );
const tree = require( './lib/tree' );
const _ = require( 'lodash' );
const $ = require( 'jquery' );
const theEditor = require( './lib/editor' );

const tokenRegex = /^\[\w+ (\d+):(\d+)\].*$/;

function update() {
  theEditor.then( ( editor ) => {
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

    res.annotations.forEach( ( a ) => {
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

    t.on( 'node.click', ( e, node ) => {
      let matches = node.text.match( tokenRegex );
      if ( matches )
        theEditor.then( ( e ) => e.gotoLine( matches[ 1 ], matches[2] ) );
    } );
  } );
}

$( function() {
  theEditor.then( ( e ) => e.focus() );
  $( '#convert' ).click( update );
} );
