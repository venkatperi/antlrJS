const InspireTree = require( 'inspire-tree' );
const InspireTreeDOM = require( 'inspire-tree-dom' );

const tokenRegex = /^\[\w+ (\d+):(\d+)\].*$/;

function walk( tree, obj, visitor ) {
  if ( tree.isTreeNodes( obj ) ) {
    obj.forEach( ( node ) => walk( tree, node, visitor ) );
  } else if ( tree.isTreeNode( obj ) ) {
    if ( visitor.beforeNode )
      visitor.beforeNode( obj );
    if ( obj.hasChildren() ) {
      if ( visitor.beforeChildren )
        visitor.beforeChildren( obj );
      res = walk( tree, obj.children, visitor );
      if ( visitor.afterChildren )
        visitor.afterChildren( obj );
    }
    visitor.visit( obj );
    if ( visitor.afterNode )
      visitor.afterNode( obj );
  }
}

function getLine( text ) {
  if ( !text ) return null;
  let matches = text.match( tokenRegex );
  return matches ? {
    row: matches[ 1 ],
    column: matches[ 2 ]
  } : null
}

function setLines( tree ) {

  walk( tree, tree.node( '__root__' ), {
    beforeNode: ( n ) => {
      n._start = Infinity;
      n._end = -Infinity;
    },
    visit: ( n ) => {
      let pos = getLine( n.text );
      if ( pos ) {
        n._start = pos.row < n._start ? pos.row : n._start;
        n._end = pos.row > n._end ? pos.row : n._end;
        n._row = pos.row;
        n._column = pos.column;
      }
      let parent = n.getParent();
      if ( parent ) {
        parent._start = n._start < parent._start ? n._start : parent._start;
        parent._end = n._end > parent._end ? n._end : parent._end;
      }
    },
    afterChildren: ( n ) => {
      //n.text += ` ${n._start}:${n._end}`;
    }
  } );
}

function createTree( data, target, opts = {} ) {
  data.id = data.id || '__root__';
  var tree = new InspireTree( {
    data: Array.isArray( data ) ? data : [ data ]
  } );

  setLines( tree );

  new InspireTreeDOM( tree, {
    target: target,
    nodeHeight: 20
  } );

  if ( !opts.noExpandDeep )
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

