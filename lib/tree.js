const InspireTree = require( 'inspire-tree' );
const InspireTreeDOM = require( 'inspire-tree-dom' );

function createTree( data, target ) {
  var tree = new InspireTree( {
    data: Array.isArray( data ) ? data : [ data ]
  } );

  new InspireTreeDOM( tree, {
    target: target,
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

  return tree;
}

module.exports = createTree;
