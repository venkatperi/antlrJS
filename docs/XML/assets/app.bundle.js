webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tree_css__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tree_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_tree_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_css__);



const name = "XML";
const startRule = "document";

const parse = __webpack_require__( 162 )( name, startRule );
const tree = __webpack_require__( 170 );
const _ = __webpack_require__( 35 );
const $ = __webpack_require__( 29 );
const theEditor = __webpack_require__( 171 );

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
  $( 'h1' ).text( $( 'h1' ).text() + ' - ' + name );
  theEditor.then( function( e ) { e.focus() } );
  $( '#convert' ).click( update );
} );


/***/ }),

/***/ 160:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

const antlr4 = __webpack_require__( 18 );
const formatter = __webpack_require__( 163 );
const AnnotatingErrorListener = __webpack_require__( 164 );

module.exports = ( name, startRule ) => {
  const Lexer = __webpack_require__(165)(`./${name}/${name}Lexer`)[ `${name}Lexer` ];
  const Parser = __webpack_require__(167)(`./${name}/${name}Parser`)[ `${name}Parser` ];

  return function( input ) {
    var chars = new antlr4.InputStream( input );
    var lexer = new Lexer( chars );
    var tokens = new antlr4.CommonTokenStream( lexer );
    var parser = new Parser( tokens );
    var annotations = [];
    var listener = new AnnotatingErrorListener( annotations );
    lexer.removeErrorListeners();
    lexer.addErrorListener( listener );
    parser.removeErrorListeners();
    parser.addErrorListener( listener );
    parser.buildParseTrees = true;
    var tree = parser[ startRule ]();
    return {
      obj: formatter.toObject( tree, parser, { name: 'text' } ),
      annotations: annotations
    }
  }
}


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

const { Utils } = __webpack_require__( 18 );
const { ErrorNode, TerminalNode } = __webpack_require__( 7 );
const { RuleContext } = __webpack_require__( 28 );
const { INVALID_ALT_NUMBER } = __webpack_require__( 11 );

function escapeWhitespace( s, escapeSpaces ) {
  s = s.replace( /\t/g, "\\t" )
    .replace( /\n/g, "\\n" )
    .replace( /\r/g, "\\r" );
  if ( escapeSpaces ) {
    s = s.replace( " ", "\u00B7" );
  }
  return s;
}

const toStringTree = function( tree, ruleNames, recog ) {
  if ( !tree ) return null;

  if ( ruleNames && !Array.isArray( ruleNames ) && ruleNames.ruleNames ) {
    recog = ruleNames;
    ruleNames = null;
  }

  if ( recog && recog.ruleNames ) {
    ruleNames = recog.ruleNames;
  }

  if ( !ruleNames ) {
    throw new Error( "Either ruleNames or recog must be set" );
  }

  var s = getNodeText( tree, ruleNames );
  s = Utils.escapeWhitespace( s, false );
  var c = tree.getChildCount();
  if ( c === 0 ) {
    return s;
  }
  var res = "(" + s + ' ';
  if ( c > 0 ) {
    s = toStringTree( tree.getChild( 0 ), ruleNames );
    res = res.concat( s );
  }

  for ( var i = 1; i < c; i++ ) {
    s = toStringTree( tree.getChild( i ), ruleNames );
    res = res.concat( ' ' + s );
  }
  res = res.concat( ")" );
  return res;
};

const toAsciiTree = function( tree, recog, prefix = "", isTail = true ) {
  if ( !tree ) return null;
  let ruleNames = null;

  if ( recog && recog.ruleNames ) {
    ruleNames = recog.ruleNames;
  }

  if ( !ruleNames ) {
    throw new Error( "Either ruleNames or recog must be set" );
  }

  let childCount = tree.getChildCount();

  let name = escapeWhitespace( getNodeText( tree, recog ), false );
  let res = [];
  res.push( prefix );
  res.push( isTail ? "└" : "├" );
  res.push( name );
  res.push( "\n" );

  for ( let i = 0; i < childCount; i++ ) {
    let p = prefix + ( isTail ? " " : "│" );
    res.push( toAsciiTree( tree.getChild( i ), recog, p,
      i < childCount - 1 ? false : true ) );
  }
  return res.join( '' );
};

const toJSON = function( tree, recog, opts = {} ) {
  let obj = toObject( tree, recog, opts );
  return JSON.stringify( obj, null, opts.noSpace ? null : 2 );
}

const toObject = function( tree, recog, opts = {} ) {
  if ( !tree ) return null;
  let ruleNames = null;

  if ( !recog ) {
    throw new Error( "No recognizer?" );
  }

  let res = {};
  res[ opts.name || 'name' ] = escapeWhitespace(
    getNodeText( tree, recog ), false );

  let childCount = tree.getChildCount();
  if ( childCount > 0 ) {
    let children = res[ opts.children || 'children' ] = [];
    for ( let i = 0; i < childCount; i++ ) {
      children.push( toObject( tree.getChild( i ), recog, opts ) );
    }
  }

  return res;
};

const getNodeText = function( t, ruleNames, recog ) {
  if ( !t ) return null;
  if ( ruleNames && !Array.isArray( ruleNames ) && ruleNames.ruleNames ) {
    recog = ruleNames;
    ruleNames = null;
  }

  if ( recog && recog.ruleNames ) {
    ruleNames = recog.ruleNames;
  }

  if ( ruleNames !== null ) {
    if ( t instanceof RuleContext ) {
      var altNumber = t.getAltNumber();
      if ( altNumber != INVALID_ALT_NUMBER ) {
        return ruleNames[ t.ruleIndex ] + ":" + altNumber;
      }
      return ruleNames[ t.ruleIndex ];
    } else if ( t instanceof ErrorNode ) {
      return t.toString();
    } else if ( t instanceof TerminalNode ) {
      if ( t.symbol !== null ) {
        let s = t.symbol;
				let name = s.type === -1 ? 'EOF' : recog.symbolicNames[s.type];
        return `[${name} ${s.line}:${s.column}] ${s.text}`;
      }
    }
  }

  // no recog for rule names
  var payload = t.getPayload();
  if ( payload instanceof Token ) {
    return payload.text;
  }
  return t.getPayload().toString();
};

module.exports = {
  toStringTree: toStringTree,
  toAsciiTree: toAsciiTree,
  toObject: toObject,
  toJSON: toJSON
}


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

const antlr4 = __webpack_require__( 18 );

var AnnotatingErrorListener = function( annotations ) {
  antlr4.error.ErrorListener.call( this );
  this.annotations = annotations || [];
  return this;
};

AnnotatingErrorListener.prototype = Object.create( antlr4.error.ErrorListener.prototype );
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;

AnnotatingErrorListener.prototype.syntaxError = function( recognizer, offendingSymbol, line, column, msg, e ) {
  this.annotations.push( {
    row: line - 1,
    column: column,
    text: msg,
    type: "error" 
  } );
};

module.exports = AnnotatingErrorListener;


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./XML/XMLLexer": 166
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 165;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// Generated from XMLLexer.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(18);


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0014\u00e9\b\u0001\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004",
    "\u0003\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t",
    "\u0006\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004",
    "\u000b\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f",
    "\t\u000f\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012",
    "\u0004\u0013\t\u0013\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016",
    "\t\u0016\u0004\u0017\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0007\u0002<\n\u0002\f\u0002\u000e\u0002?\u000b\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003P\n\u0003\f\u0003\u000e\u0003S\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004]\n\u0004\f\u0004\u000e\u0004`\u000b",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0006\u0006n\n\u0006\r\u0006\u000e\u0006o\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006",
    "y\n\u0006\r\u0006\u000e\u0006z\u0003\u0006\u0003\u0006\u0005\u0006\u007f",
    "\n\u0006\u0003\u0007\u0003\u0007\u0005\u0007\u0083\n\u0007\u0003\u0007",
    "\u0006\u0007\u0086\n\u0007\r\u0007\u000e\u0007\u0087\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0006\u000b\u00a1\n\u000b\r\u000b\u000e",
    "\u000b\u00a2\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0007\u0011\u00b9\n\u0011\f\u0011\u000e\u0011\u00bc\u000b\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00c1\n\u0011\f\u0011",
    "\u000e\u0011\u00c4\u000b\u0011\u0003\u0011\u0005\u0011\u00c7\n\u0011",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u00cb\n\u0012\f\u0012\u000e\u0012",
    "\u00ce\u000b\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u00dc\n\u0016\u0003\u0017\u0005\u0017",
    "\u00df\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005=Q^\u0002",
    "\u001a\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011",
    "\t\u0013\n\u0015\u0002\u0017\u000b\u0019\f\u001b\r\u001d\u000e\u001f",
    "\u000f!\u0010#\u0011%\u0012\'\u0013)\u0002+\u0002-\u0002/\u00021\u0014",
    "3\u0002\u0005\u0002\u0003\u0004\f\u0004\u0002\u000b\u000b\"\"\u0004",
    "\u0002((>>\u0004\u0002$$>>\u0004\u0002))>>\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0005\u00022;CHch\u0003\u00022;\u0004\u0002/0aa\u0005\u0002",
    "\u00b9\u00b9\u0302\u0371\u2041\u2042\n\u0002<<C\\c|\u2072\u2191\u2c02",
    "\u2ff1\u3003\ud801\uf902\ufdd1\ufdf2\uffff\u0002\u00f3\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0003\u0019\u0003",
    "\u0002\u0002\u0002\u0003\u001b\u0003\u0002\u0002\u0002\u0003\u001d\u0003",
    "\u0002\u0002\u0002\u0003\u001f\u0003\u0002\u0002\u0002\u0003!\u0003",
    "\u0002\u0002\u0002\u0003#\u0003\u0002\u0002\u0002\u0003%\u0003\u0002",
    "\u0002\u0002\u0003\'\u0003\u0002\u0002\u0002\u00041\u0003\u0002\u0002",
    "\u0002\u00043\u0003\u0002\u0002\u0002\u00055\u0003\u0002\u0002\u0002",
    "\u0007D\u0003\u0002\u0002\u0002\tX\u0003\u0002\u0002\u0002\u000be\u0003",
    "\u0002\u0002\u0002\r~\u0003\u0002\u0002\u0002\u000f\u0085\u0003\u0002",
    "\u0002\u0002\u0011\u0089\u0003\u0002\u0002\u0002\u0013\u008d\u0003\u0002",
    "\u0002\u0002\u0015\u0097\u0003\u0002\u0002\u0002\u0017\u00a0\u0003\u0002",
    "\u0002\u0002\u0019\u00a4\u0003\u0002\u0002\u0002\u001b\u00a8\u0003\u0002",
    "\u0002\u0002\u001d\u00ad\u0003\u0002\u0002\u0002\u001f\u00b2\u0003\u0002",
    "\u0002\u0002!\u00b4\u0003\u0002\u0002\u0002#\u00c6\u0003\u0002\u0002",
    "\u0002%\u00c8\u0003\u0002\u0002\u0002\'\u00cf\u0003\u0002\u0002\u0002",
    ")\u00d3\u0003\u0002\u0002\u0002+\u00d5\u0003\u0002\u0002\u0002-\u00db",
    "\u0003\u0002\u0002\u0002/\u00de\u0003\u0002\u0002\u00021\u00e0\u0003",
    "\u0002\u0002\u00023\u00e5\u0003\u0002\u0002\u000256\u0007>\u0002\u0002",
    "67\u0007#\u0002\u000278\u0007/\u0002\u000289\u0007/\u0002\u00029=\u0003",
    "\u0002\u0002\u0002:<\u000b\u0002\u0002\u0002;:\u0003\u0002\u0002\u0002",
    "<?\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002",
    "\u0002>@\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@A\u0007/",
    "\u0002\u0002AB\u0007/\u0002\u0002BC\u0007@\u0002\u0002C\u0006\u0003",
    "\u0002\u0002\u0002DE\u0007>\u0002\u0002EF\u0007#\u0002\u0002FG\u0007",
    "]\u0002\u0002GH\u0007E\u0002\u0002HI\u0007F\u0002\u0002IJ\u0007C\u0002",
    "\u0002JK\u0007V\u0002\u0002KL\u0007C\u0002\u0002LM\u0007]\u0002\u0002",
    "MQ\u0003\u0002\u0002\u0002NP\u000b\u0002\u0002\u0002ON\u0003\u0002\u0002",
    "\u0002PS\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002QO\u0003\u0002",
    "\u0002\u0002RT\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002TU\u0007",
    "_\u0002\u0002UV\u0007_\u0002\u0002VW\u0007@\u0002\u0002W\b\u0003\u0002",
    "\u0002\u0002XY\u0007>\u0002\u0002YZ\u0007#\u0002\u0002Z^\u0003\u0002",
    "\u0002\u0002[]\u000b\u0002\u0002\u0002\\[\u0003\u0002\u0002\u0002]`",
    "\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002",
    "\u0002_a\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002ab\u0007@",
    "\u0002\u0002bc\u0003\u0002\u0002\u0002cd\b\u0004\u0002\u0002d\n\u0003",
    "\u0002\u0002\u0002ef\u0007(\u0002\u0002fg\u0005%\u0012\u0002gh\u0007",
    "=\u0002\u0002h\f\u0003\u0002\u0002\u0002ij\u0007(\u0002\u0002jk\u0007",
    "%\u0002\u0002km\u0003\u0002\u0002\u0002ln\u0005+\u0015\u0002ml\u0003",
    "\u0002\u0002\u0002no\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002",
    "op\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qr\u0007=\u0002",
    "\u0002r\u007f\u0003\u0002\u0002\u0002st\u0007(\u0002\u0002tu\u0007%",
    "\u0002\u0002uv\u0007z\u0002\u0002vx\u0003\u0002\u0002\u0002wy\u0005",
    ")\u0014\u0002xw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002zx",
    "\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|}\u0007=\u0002\u0002}\u007f\u0003\u0002\u0002\u0002~i\u0003\u0002",
    "\u0002\u0002~s\u0003\u0002\u0002\u0002\u007f\u000e\u0003\u0002\u0002",
    "\u0002\u0080\u0086\t\u0002\u0002\u0002\u0081\u0083\u0007\u000f\u0002",
    "\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0086\u0007\f\u0002",
    "\u0002\u0085\u0080\u0003\u0002\u0002\u0002\u0085\u0082\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0010\u0003\u0002\u0002",
    "\u0002\u0089\u008a\u0007>\u0002\u0002\u008a\u008b\u0003\u0002\u0002",
    "\u0002\u008b\u008c\b\b\u0003\u0002\u008c\u0012\u0003\u0002\u0002\u0002",
    "\u008d\u008e\u0007>\u0002\u0002\u008e\u008f\u0007A\u0002\u0002\u008f",
    "\u0090\u0007z\u0002\u0002\u0090\u0091\u0007o\u0002\u0002\u0091\u0092",
    "\u0007n\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0005\'\u0013\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096",
    "\b\t\u0003\u0002\u0096\u0014\u0003\u0002\u0002\u0002\u0097\u0098\u0007",
    ">\u0002\u0002\u0098\u0099\u0007A\u0002\u0002\u0099\u009a\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0005%\u0012\u0002\u009b\u009c\u0003\u0002",
    "\u0002\u0002\u009c\u009d\b\n\u0004\u0002\u009d\u009e\b\n\u0005\u0002",
    "\u009e\u0016\u0003\u0002\u0002\u0002\u009f\u00a1\n\u0003\u0002\u0002",
    "\u00a0\u009f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002",
    "\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002",
    "\u00a3\u0018\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007@\u0002\u0002",
    "\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7\b\f\u0006\u0002\u00a7",
    "\u001a\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007A\u0002\u0002\u00a9",
    "\u00aa\u0007@\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\b\r\u0006\u0002\u00ac\u001c\u0003\u0002\u0002\u0002\u00ad\u00ae",
    "\u00071\u0002\u0002\u00ae\u00af\u0007@\u0002\u0002\u00af\u00b0\u0003",
    "\u0002\u0002\u0002\u00b0\u00b1\b\u000e\u0006\u0002\u00b1\u001e\u0003",
    "\u0002\u0002\u0002\u00b2\u00b3\u00071\u0002\u0002\u00b3 \u0003\u0002",
    "\u0002\u0002\u00b4\u00b5\u0007?\u0002\u0002\u00b5\"\u0003\u0002\u0002",
    "\u0002\u00b6\u00ba\u0007$\u0002\u0002\u00b7\u00b9\n\u0004\u0002\u0002",
    "\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002\u0002",
    "\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002",
    "\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002",
    "\u00bd\u00c7\u0007$\u0002\u0002\u00be\u00c2\u0007)\u0002\u0002\u00bf",
    "\u00c1\n\u0005\u0002\u0002\u00c0\u00bf\u0003\u0002\u0002\u0002\u00c1",
    "\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c2",
    "\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c5\u0003\u0002\u0002\u0002\u00c4",
    "\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c7\u0007)\u0002\u0002\u00c6",
    "\u00b6\u0003\u0002\u0002\u0002\u00c6\u00be\u0003\u0002\u0002\u0002\u00c7",
    "$\u0003\u0002\u0002\u0002\u00c8\u00cc\u0005/\u0017\u0002\u00c9\u00cb",
    "\u0005-\u0016\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00cb\u00ce",
    "\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cd",
    "\u0003\u0002\u0002\u0002\u00cd&\u0003\u0002\u0002\u0002\u00ce\u00cc",
    "\u0003\u0002\u0002\u0002\u00cf\u00d0\t\u0006\u0002\u0002\u00d0\u00d1",
    "\u0003\u0002\u0002\u0002\u00d1\u00d2\b\u0013\u0002\u0002\u00d2(\u0003",
    "\u0002\u0002\u0002\u00d3\u00d4\t\u0007\u0002\u0002\u00d4*\u0003\u0002",
    "\u0002\u0002\u00d5\u00d6\t\b\u0002\u0002\u00d6,\u0003\u0002\u0002\u0002",
    "\u00d7\u00dc\u0005/\u0017\u0002\u00d8\u00dc\t\t\u0002\u0002\u00d9\u00dc",
    "\u0005+\u0015\u0002\u00da\u00dc\t\n\u0002\u0002\u00db\u00d7\u0003\u0002",
    "\u0002\u0002\u00db\u00d8\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002",
    "\u0002\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00dc.\u0003\u0002",
    "\u0002\u0002\u00dd\u00df\t\u000b\u0002\u0002\u00de\u00dd\u0003\u0002",
    "\u0002\u0002\u00df0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007A\u0002",
    "\u0002\u00e1\u00e2\u0007@\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002",
    "\u0002\u00e3\u00e4\b\u0018\u0006\u0002\u00e42\u0003\u0002\u0002\u0002",
    "\u00e5\u00e6\u000b\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002",
    "\u00e7\u00e8\b\u0019\u0004\u0002\u00e84\u0003\u0002\u0002\u0002\u0015",
    "\u0002\u0003\u0004=Q^oz~\u0082\u0085\u0087\u00a2\u00ba\u00c2\u00c6\u00cc",
    "\u00db\u00de\u0007\b\u0002\u0002\u0007\u0003\u0002\u0005\u0002\u0002",
    "\u0007\u0004\u0002\u0006\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function XMLLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

XMLLexer.prototype = Object.create(antlr4.Lexer.prototype);
XMLLexer.prototype.constructor = XMLLexer;

XMLLexer.EOF = antlr4.Token.EOF;
XMLLexer.COMMENT = 1;
XMLLexer.CDATA = 2;
XMLLexer.DTD = 3;
XMLLexer.EntityRef = 4;
XMLLexer.CharRef = 5;
XMLLexer.SEA_WS = 6;
XMLLexer.OPEN = 7;
XMLLexer.XMLDeclOpen = 8;
XMLLexer.TEXT = 9;
XMLLexer.CLOSE = 10;
XMLLexer.SPECIAL_CLOSE = 11;
XMLLexer.SLASH_CLOSE = 12;
XMLLexer.SLASH = 13;
XMLLexer.EQUALS = 14;
XMLLexer.STRING = 15;
XMLLexer.Name = 16;
XMLLexer.S = 17;
XMLLexer.PI = 18;

XMLLexer.INSIDE = 1;
XMLLexer.PROC_INSTR = 2;

XMLLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

XMLLexer.prototype.modeNames = [ "DEFAULT_MODE", "INSIDE", "PROC_INSTR" ];

XMLLexer.prototype.literalNames = [ null, null, null, null, null, null, 
                                    null, "'<'", null, null, "'>'", null, 
                                    "'/>'", "'/'", "'='" ];

XMLLexer.prototype.symbolicNames = [ null, "COMMENT", "CDATA", "DTD", "EntityRef", 
                                     "CharRef", "SEA_WS", "OPEN", "XMLDeclOpen", 
                                     "TEXT", "CLOSE", "SPECIAL_CLOSE", "SLASH_CLOSE", 
                                     "SLASH", "EQUALS", "STRING", "Name", 
                                     "S", "PI" ];

XMLLexer.prototype.ruleNames = [ "COMMENT", "CDATA", "DTD", "EntityRef", 
                                 "CharRef", "SEA_WS", "OPEN", "XMLDeclOpen", 
                                 "SPECIAL_OPEN", "TEXT", "CLOSE", "SPECIAL_CLOSE", 
                                 "SLASH_CLOSE", "SLASH", "EQUALS", "STRING", 
                                 "Name", "S", "HEXDIGIT", "DIGIT", "NameChar", 
                                 "NameStartChar", "PI", "IGNORE" ];

XMLLexer.prototype.grammarFileName = "XMLLexer.g4";



exports.XMLLexer = XMLLexer;



/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./XML/XMLParser": 168
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 167;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// Generated from XMLParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(18);
var XMLParserListener = __webpack_require__(169).XMLParserListener;
var grammarFileName = "XMLParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0014b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0005\u0002\u0014\n\u0002\u0003\u0002",
    "\u0007\u0002\u0017\n\u0002\f\u0002\u000e\u0002\u001a\u000b\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u0002\u001e\n\u0002\f\u0002\u000e\u0002!\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0007\u0003%\n\u0003\f\u0003\u000e\u0003",
    "(\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0005\u0004-\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "4\n\u0004\u0003\u0004\u0005\u00047\n\u0004\u0007\u00049\n\u0004\f\u0004",
    "\u000e\u0004<\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005A\n\u0005\f\u0005\u000e\u0005D\u000b\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005P\n\u0005\f\u0005\u000e\u0005S\u000b",
    "\u0005\u0003\u0005\u0005\u0005V\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0002\u0002\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0005",
    "\u0003\u0002\u0006\u0007\u0004\u0002\b\b\u000b\u000b\u0005\u0002\u0003",
    "\u0003\b\b\u0014\u0014\u0002g\u0002\u0013\u0003\u0002\u0002\u0002\u0004",
    "\"\u0003\u0002\u0002\u0002\u0006,\u0003\u0002\u0002\u0002\bU\u0003\u0002",
    "\u0002\u0002\nW\u0003\u0002\u0002\u0002\fY\u0003\u0002\u0002\u0002\u000e",
    "]\u0003\u0002\u0002\u0002\u0010_\u0003\u0002\u0002\u0002\u0012\u0014",
    "\u0005\u0004\u0003\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0013\u0014",
    "\u0003\u0002\u0002\u0002\u0014\u0018\u0003\u0002\u0002\u0002\u0015\u0017",
    "\u0005\u0010\t\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u001a",
    "\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019",
    "\u0003\u0002\u0002\u0002\u0019\u001b\u0003\u0002\u0002\u0002\u001a\u0018",
    "\u0003\u0002\u0002\u0002\u001b\u001f\u0005\b\u0005\u0002\u001c\u001e",
    "\u0005\u0010\t\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e!\u0003",
    "\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003",
    "\u0002\u0002\u0002 \u0003\u0003\u0002\u0002\u0002!\u001f\u0003\u0002",
    "\u0002\u0002\"&\u0007\n\u0002\u0002#%\u0005\f\u0007\u0002$#\u0003\u0002",
    "\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&\'",
    "\u0003\u0002\u0002\u0002\')\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002",
    "\u0002)*\u0007\r\u0002\u0002*\u0005\u0003\u0002\u0002\u0002+-\u0005",
    "\u000e\b\u0002,+\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-",
    ":\u0003\u0002\u0002\u0002.4\u0005\b\u0005\u0002/4\u0005\n\u0006\u0002",
    "04\u0007\u0004\u0002\u000214\u0007\u0014\u0002\u000224\u0007\u0003\u0002",
    "\u00023.\u0003\u0002\u0002\u00023/\u0003\u0002\u0002\u000230\u0003\u0002",
    "\u0002\u000231\u0003\u0002\u0002\u000232\u0003\u0002\u0002\u000246\u0003",
    "\u0002\u0002\u000257\u0005\u000e\b\u000265\u0003\u0002\u0002\u00026",
    "7\u0003\u0002\u0002\u000279\u0003\u0002\u0002\u000283\u0003\u0002\u0002",
    "\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002",
    "\u0002\u0002;\u0007\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002",
    "=>\u0007\t\u0002\u0002>B\u0007\u0012\u0002\u0002?A\u0005\f\u0007\u0002",
    "@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002",
    "\u0002BC\u0003\u0002\u0002\u0002CE\u0003\u0002\u0002\u0002DB\u0003\u0002",
    "\u0002\u0002EF\u0007\f\u0002\u0002FG\u0005\u0006\u0004\u0002GH\u0007",
    "\t\u0002\u0002HI\u0007\u000f\u0002\u0002IJ\u0007\u0012\u0002\u0002J",
    "K\u0007\f\u0002\u0002KV\u0003\u0002\u0002\u0002LM\u0007\t\u0002\u0002",
    "MQ\u0007\u0012\u0002\u0002NP\u0005\f\u0007\u0002ON\u0003\u0002\u0002",
    "\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002",
    "\u0002\u0002RT\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002TV\u0007",
    "\u000e\u0002\u0002U=\u0003\u0002\u0002\u0002UL\u0003\u0002\u0002\u0002",
    "V\t\u0003\u0002\u0002\u0002WX\t\u0002\u0002\u0002X\u000b\u0003\u0002",
    "\u0002\u0002YZ\u0007\u0012\u0002\u0002Z[\u0007\u0010\u0002\u0002[\\",
    "\u0007\u0011\u0002\u0002\\\r\u0003\u0002\u0002\u0002]^\t\u0003\u0002",
    "\u0002^\u000f\u0003\u0002\u0002\u0002_`\t\u0004\u0002\u0002`\u0011\u0003",
    "\u0002\u0002\u0002\r\u0013\u0018\u001f&,36:BQU"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, "'<'", null, 
                     null, "'>'", null, "'/>'", "'/'", "'='" ];

var symbolicNames = [ null, "COMMENT", "CDATA", "DTD", "EntityRef", "CharRef", 
                      "SEA_WS", "OPEN", "XMLDeclOpen", "TEXT", "CLOSE", 
                      "SPECIAL_CLOSE", "SLASH_CLOSE", "SLASH", "EQUALS", 
                      "STRING", "Name", "S", "PI" ];

var ruleNames =  [ "document", "prolog", "content", "element", "reference", 
                   "attribute", "chardata", "misc" ];

function XMLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

XMLParser.prototype = Object.create(antlr4.Parser.prototype);
XMLParser.prototype.constructor = XMLParser;

Object.defineProperty(XMLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

XMLParser.EOF = antlr4.Token.EOF;
XMLParser.COMMENT = 1;
XMLParser.CDATA = 2;
XMLParser.DTD = 3;
XMLParser.EntityRef = 4;
XMLParser.CharRef = 5;
XMLParser.SEA_WS = 6;
XMLParser.OPEN = 7;
XMLParser.XMLDeclOpen = 8;
XMLParser.TEXT = 9;
XMLParser.CLOSE = 10;
XMLParser.SPECIAL_CLOSE = 11;
XMLParser.SLASH_CLOSE = 12;
XMLParser.SLASH = 13;
XMLParser.EQUALS = 14;
XMLParser.STRING = 15;
XMLParser.Name = 16;
XMLParser.S = 17;
XMLParser.PI = 18;

XMLParser.RULE_document = 0;
XMLParser.RULE_prolog = 1;
XMLParser.RULE_content = 2;
XMLParser.RULE_element = 3;
XMLParser.RULE_reference = 4;
XMLParser.RULE_attribute = 5;
XMLParser.RULE_chardata = 6;
XMLParser.RULE_misc = 7;

function DocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XMLParser.RULE_document;
    return this;
}

DocumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentContext.prototype.constructor = DocumentContext;

DocumentContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

DocumentContext.prototype.prolog = function() {
    return this.getTypedRuleContext(PrologContext,0);
};

DocumentContext.prototype.misc = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MiscContext);
    } else {
        return this.getTypedRuleContext(MiscContext,i);
    }
};

DocumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.enterDocument(this);
	}
};

DocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.exitDocument(this);
	}
};




XMLParser.DocumentContext = DocumentContext;

XMLParser.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, XMLParser.RULE_document);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===XMLParser.XMLDeclOpen) {
            this.state = 16;
            this.prolog();
        }

        this.state = 22;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
            this.state = 19;
            this.misc();
            this.state = 24;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 25;
        this.element();
        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
            this.state = 26;
            this.misc();
            this.state = 31;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrologContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XMLParser.RULE_prolog;
    return this;
}

PrologContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrologContext.prototype.constructor = PrologContext;

PrologContext.prototype.XMLDeclOpen = function() {
    return this.getToken(XMLParser.XMLDeclOpen, 0);
};

PrologContext.prototype.SPECIAL_CLOSE = function() {
    return this.getToken(XMLParser.SPECIAL_CLOSE, 0);
};

PrologContext.prototype.attribute = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttributeContext);
    } else {
        return this.getTypedRuleContext(AttributeContext,i);
    }
};

PrologContext.prototype.enterRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.enterProlog(this);
	}
};

PrologContext.prototype.exitRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.exitProlog(this);
	}
};




XMLParser.PrologContext = PrologContext;

XMLParser.prototype.prolog = function() {

    var localctx = new PrologContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, XMLParser.RULE_prolog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(XMLParser.XMLDeclOpen);
        this.state = 36;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===XMLParser.Name) {
            this.state = 33;
            this.attribute();
            this.state = 38;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 39;
        this.match(XMLParser.SPECIAL_CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XMLParser.RULE_content;
    return this;
}

ContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentContext.prototype.constructor = ContentContext;

ContentContext.prototype.chardata = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ChardataContext);
    } else {
        return this.getTypedRuleContext(ChardataContext,i);
    }
};

ContentContext.prototype.element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementContext);
    } else {
        return this.getTypedRuleContext(ElementContext,i);
    }
};

ContentContext.prototype.reference = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ReferenceContext);
    } else {
        return this.getTypedRuleContext(ReferenceContext,i);
    }
};

ContentContext.prototype.CDATA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XMLParser.CDATA);
    } else {
        return this.getToken(XMLParser.CDATA, i);
    }
};


ContentContext.prototype.PI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XMLParser.PI);
    } else {
        return this.getToken(XMLParser.PI, i);
    }
};


ContentContext.prototype.COMMENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XMLParser.COMMENT);
    } else {
        return this.getToken(XMLParser.COMMENT, i);
    }
};


ContentContext.prototype.enterRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.enterContent(this);
	}
};

ContentContext.prototype.exitRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.exitContent(this);
	}
};




XMLParser.ContentContext = ContentContext;

XMLParser.prototype.content = function() {

    var localctx = new ContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, XMLParser.RULE_content);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===XMLParser.SEA_WS || _la===XMLParser.TEXT) {
            this.state = 41;
            this.chardata();
        }

        this.state = 56;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 49;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case XMLParser.OPEN:
                    this.state = 44;
                    this.element();
                    break;
                case XMLParser.EntityRef:
                case XMLParser.CharRef:
                    this.state = 45;
                    this.reference();
                    break;
                case XMLParser.CDATA:
                    this.state = 46;
                    this.match(XMLParser.CDATA);
                    break;
                case XMLParser.PI:
                    this.state = 47;
                    this.match(XMLParser.PI);
                    break;
                case XMLParser.COMMENT:
                    this.state = 48;
                    this.match(XMLParser.COMMENT);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===XMLParser.SEA_WS || _la===XMLParser.TEXT) {
                    this.state = 51;
                    this.chardata();
                }
         
            }
            this.state = 58;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XMLParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.Name = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XMLParser.Name);
    } else {
        return this.getToken(XMLParser.Name, i);
    }
};


ElementContext.prototype.content = function() {
    return this.getTypedRuleContext(ContentContext,0);
};

ElementContext.prototype.attribute = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttributeContext);
    } else {
        return this.getTypedRuleContext(AttributeContext,i);
    }
};

ElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.exitElement(this);
	}
};




XMLParser.ElementContext = ElementContext;

XMLParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, XMLParser.RULE_element);
    var _la = 0; // Token type
    try {
        this.state = 83;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 59;
            this.match(XMLParser.OPEN);
            this.state = 60;
            this.match(XMLParser.Name);
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===XMLParser.Name) {
                this.state = 61;
                this.attribute();
                this.state = 66;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 67;
            this.match(XMLParser.CLOSE);
            this.state = 68;
            this.content();
            this.state = 69;
            this.match(XMLParser.OPEN);
            this.state = 70;
            this.match(XMLParser.SLASH);
            this.state = 71;
            this.match(XMLParser.Name);
            this.state = 72;
            this.match(XMLParser.CLOSE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 74;
            this.match(XMLParser.OPEN);
            this.state = 75;
            this.match(XMLParser.Name);
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===XMLParser.Name) {
                this.state = 76;
                this.attribute();
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 82;
            this.match(XMLParser.SLASH_CLOSE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XMLParser.RULE_reference;
    return this;
}

ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceContext.prototype.constructor = ReferenceContext;

ReferenceContext.prototype.EntityRef = function() {
    return this.getToken(XMLParser.EntityRef, 0);
};

ReferenceContext.prototype.CharRef = function() {
    return this.getToken(XMLParser.CharRef, 0);
};

ReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.enterReference(this);
	}
};

ReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.exitReference(this);
	}
};




XMLParser.ReferenceContext = ReferenceContext;

XMLParser.prototype.reference = function() {

    var localctx = new ReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, XMLParser.RULE_reference);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        _la = this._input.LA(1);
        if(!(_la===XMLParser.EntityRef || _la===XMLParser.CharRef)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XMLParser.RULE_attribute;
    return this;
}

AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeContext.prototype.constructor = AttributeContext;

AttributeContext.prototype.Name = function() {
    return this.getToken(XMLParser.Name, 0);
};

AttributeContext.prototype.STRING = function() {
    return this.getToken(XMLParser.STRING, 0);
};

AttributeContext.prototype.enterRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.enterAttribute(this);
	}
};

AttributeContext.prototype.exitRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.exitAttribute(this);
	}
};




XMLParser.AttributeContext = AttributeContext;

XMLParser.prototype.attribute = function() {

    var localctx = new AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, XMLParser.RULE_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.match(XMLParser.Name);
        this.state = 88;
        this.match(XMLParser.EQUALS);
        this.state = 89;
        this.match(XMLParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ChardataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XMLParser.RULE_chardata;
    return this;
}

ChardataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChardataContext.prototype.constructor = ChardataContext;

ChardataContext.prototype.TEXT = function() {
    return this.getToken(XMLParser.TEXT, 0);
};

ChardataContext.prototype.SEA_WS = function() {
    return this.getToken(XMLParser.SEA_WS, 0);
};

ChardataContext.prototype.enterRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.enterChardata(this);
	}
};

ChardataContext.prototype.exitRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.exitChardata(this);
	}
};




XMLParser.ChardataContext = ChardataContext;

XMLParser.prototype.chardata = function() {

    var localctx = new ChardataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, XMLParser.RULE_chardata);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        _la = this._input.LA(1);
        if(!(_la===XMLParser.SEA_WS || _la===XMLParser.TEXT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MiscContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XMLParser.RULE_misc;
    return this;
}

MiscContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MiscContext.prototype.constructor = MiscContext;

MiscContext.prototype.COMMENT = function() {
    return this.getToken(XMLParser.COMMENT, 0);
};

MiscContext.prototype.PI = function() {
    return this.getToken(XMLParser.PI, 0);
};

MiscContext.prototype.SEA_WS = function() {
    return this.getToken(XMLParser.SEA_WS, 0);
};

MiscContext.prototype.enterRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.enterMisc(this);
	}
};

MiscContext.prototype.exitRule = function(listener) {
    if(listener instanceof XMLParserListener ) {
        listener.exitMisc(this);
	}
};




XMLParser.MiscContext = MiscContext;

XMLParser.prototype.misc = function() {

    var localctx = new MiscContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, XMLParser.RULE_misc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.XMLParser = XMLParser;


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Generated from XMLParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(18);

// This class defines a complete listener for a parse tree produced by XMLParser.
function XMLParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

XMLParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
XMLParserListener.prototype.constructor = XMLParserListener;

// Enter a parse tree produced by XMLParser#document.
XMLParserListener.prototype.enterDocument = function(ctx) {
};

// Exit a parse tree produced by XMLParser#document.
XMLParserListener.prototype.exitDocument = function(ctx) {
};


// Enter a parse tree produced by XMLParser#prolog.
XMLParserListener.prototype.enterProlog = function(ctx) {
};

// Exit a parse tree produced by XMLParser#prolog.
XMLParserListener.prototype.exitProlog = function(ctx) {
};


// Enter a parse tree produced by XMLParser#content.
XMLParserListener.prototype.enterContent = function(ctx) {
};

// Exit a parse tree produced by XMLParser#content.
XMLParserListener.prototype.exitContent = function(ctx) {
};


// Enter a parse tree produced by XMLParser#element.
XMLParserListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by XMLParser#element.
XMLParserListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by XMLParser#reference.
XMLParserListener.prototype.enterReference = function(ctx) {
};

// Exit a parse tree produced by XMLParser#reference.
XMLParserListener.prototype.exitReference = function(ctx) {
};


// Enter a parse tree produced by XMLParser#attribute.
XMLParserListener.prototype.enterAttribute = function(ctx) {
};

// Exit a parse tree produced by XMLParser#attribute.
XMLParserListener.prototype.exitAttribute = function(ctx) {
};


// Enter a parse tree produced by XMLParser#chardata.
XMLParserListener.prototype.enterChardata = function(ctx) {
};

// Exit a parse tree produced by XMLParser#chardata.
XMLParserListener.prototype.exitChardata = function(ctx) {
};


// Enter a parse tree produced by XMLParser#misc.
XMLParserListener.prototype.enterMisc = function(ctx) {
};

// Exit a parse tree produced by XMLParser#misc.
XMLParserListener.prototype.exitMisc = function(ctx) {
};



exports.XMLParserListener = XMLParserListener;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

const InspireTree = __webpack_require__( 55 );
const InspireTreeDOM = __webpack_require__( 98 );

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



/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

const $ = __webpack_require__( 29 );
const ace = __webpack_require__( 96 );
__webpack_require__( 172 );

module.exports = new Promise( ( resolve, reject ) => {
  $( function() {
    editor = ace.edit( 'source' );
    editor.getSession().setMode( 'ace/mode/asciidoc' )
 		resolve(editor);
  } );
} );


/***/ }),

/***/ 172:
/***/ (function(module, exports) {

ace.define("ace/mode/asciidoc_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var AsciidocHighlightRules = function() {
    var identifierRe = "[a-zA-Z\u00a1-\uffff]+\\b";

    this.$rules = {
        "start": [
            {token: "empty",   regex: /$/},
            {token: "literal", regex: /^\.{4,}\s*$/,  next: "listingBlock"},
            {token: "literal", regex: /^-{4,}\s*$/,   next: "literalBlock"},
            {token: "string",  regex: /^\+{4,}\s*$/,  next: "passthroughBlock"},
            {token: "keyword", regex: /^={4,}\s*$/},
            {token: "text",    regex: /^\s*$/},
            {token: "empty", regex: "", next: "dissallowDelimitedBlock"}
        ],

        "dissallowDelimitedBlock": [
            {include: "paragraphEnd"},
            {token: "comment", regex: '^//.+$'},
            {token: "keyword", regex: "^(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION):"},

            {include: "listStart"},
            {token: "literal", regex: /^\s+.+$/, next: "indentedBlock"},
            {token: "empty",   regex: "", next: "text"}
        ],

        "paragraphEnd": [
            {token: "doc.comment", regex: /^\/{4,}\s*$/,    next: "commentBlock"},
            {token: "tableBlock",  regex: /^\s*[|!]=+\s*$/, next: "tableBlock"},
            {token: "keyword",     regex: /^(?:--|''')\s*$/, next: "start"},
            {token: "option",      regex: /^\[.*\]\s*$/,     next: "start"},
            {token: "pageBreak",   regex: /^>{3,}$/,         next: "start"},
            {token: "literal",     regex: /^\.{4,}\s*$/,     next: "listingBlock"},
            {token: "titleUnderline",    regex: /^(?:={2,}|-{2,}|~{2,}|\^{2,}|\+{2,})\s*$/, next: "start"},
            {token: "singleLineTitle",   regex: /^={1,5}\s+\S.*$/, next: "start"},

            {token: "otherBlock",    regex: /^(?:\*{2,}|_{2,})\s*$/, next: "start"},
            {token: "optionalTitle", regex: /^\.[^.\s].+$/,  next: "start"}
        ],

        "listStart": [
            {token: "keyword",  regex: /^\s*(?:\d+\.|[a-zA-Z]\.|[ixvmIXVM]+\)|\*{1,5}|-|\.{1,5})\s/, next: "listText"},
            {token: "meta.tag", regex: /^.+(?::{2,4}|;;)(?: |$)/, next: "listText"},
            {token: "support.function.list.callout", regex: /^(?:<\d+>|\d+>|>) /, next: "text"},
            {token: "keyword",  regex: /^\+\s*$/, next: "start"}
        ],

        "text": [
            {token: ["link", "variable.language"], regex: /((?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+)(\[.*?\])/},
            {token: "link", regex: /(?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+/},
            {token: "link", regex: /\b[\w\.\/\-]+@[\w\.\/\-]+\b/},
            {include: "macros"},
            {include: "paragraphEnd"},
            {token: "literal", regex:/\+{3,}/, next:"smallPassthrough"},
            {token: "escape", regex: /\((?:C|TM|R)\)|\.{3}|->|<-|=>|<=|&#(?:\d+|x[a-fA-F\d]+);|(?: |^)--(?=\s+\S)/},
            {token: "escape", regex: /\\[_*'`+#]|\\{2}[_*'`+#]{2}/},
            {token: "keyword", regex: /\s\+$/},
            {token: "text", regex: identifierRe},
            {token: ["keyword", "string", "keyword"],
                regex: /(<<[\w\d\-$]+,)(.*?)(>>|$)/},
            {token: "keyword", regex: /<<[\w\d\-$]+,?|>>/},
            {token: "constant.character", regex: /\({2,3}.*?\){2,3}/},
            {token: "keyword", regex: /\[\[.+?\]\]/},
            {token: "support", regex: /^\[{3}[\w\d =\-]+\]{3}/},

            {include: "quotes"},
            {token: "empty", regex: /^\s*$/, next: "start"}
        ],

        "listText": [
            {include: "listStart"},
            {include: "text"}
        ],

        "indentedBlock": [
            {token: "literal", regex: /^[\s\w].+$/, next: "indentedBlock"},
            {token: "literal", regex: "", next: "start"}
        ],

        "listingBlock": [
            {token: "literal", regex: /^\.{4,}\s*$/, next: "dissallowDelimitedBlock"},
            {token: "constant.numeric", regex: '<\\d+>'},
            {token: "literal", regex: '[^<]+'},
            {token: "literal", regex: '<'}
        ],
        "literalBlock": [
            {token: "literal", regex: /^-{4,}\s*$/, next: "dissallowDelimitedBlock"},
            {token: "constant.numeric", regex: '<\\d+>'},
            {token: "literal", regex: '[^<]+'},
            {token: "literal", regex: '<'}
        ],
        "passthroughBlock": [
            {token: "literal", regex: /^\+{4,}\s*$/, next: "dissallowDelimitedBlock"},
            {token: "literal", regex: identifierRe + "|\\d+"},
            {include: "macros"},
            {token: "literal", regex: "."}
        ],

        "smallPassthrough": [
            {token: "literal", regex: /[+]{3,}/, next: "dissallowDelimitedBlock"},
            {token: "literal", regex: /^\s*$/, next: "dissallowDelimitedBlock"},
            {token: "literal", regex: identifierRe + "|\\d+"},
            {include: "macros"}
        ],

        "commentBlock": [
            {token: "doc.comment", regex: /^\/{4,}\s*$/, next: "dissallowDelimitedBlock"},
            {token: "doc.comment", regex: '^.*$'}
        ],
        "tableBlock": [
            {token: "tableBlock", regex: /^\s*\|={3,}\s*$/, next: "dissallowDelimitedBlock"},
            {token: "tableBlock", regex: /^\s*!={3,}\s*$/, next: "innerTableBlock"},
            {token: "tableBlock", regex: /\|/},
            {include: "text", noEscape: true}
        ],
        "innerTableBlock": [
            {token: "tableBlock", regex: /^\s*!={3,}\s*$/, next: "tableBlock"},
            {token: "tableBlock", regex: /^\s*|={3,}\s*$/, next: "dissallowDelimitedBlock"},
            {token: "tableBlock", regex: /!/}
        ],
        "macros": [
            {token: "macro", regex: /{[\w\-$]+}/},
            {token: ["text", "string", "text", "constant.character", "text"], regex: /({)([\w\-$]+)(:)?(.+)?(})/},
            {token: ["text", "markup.list.macro", "keyword", "string"], regex: /(\w+)(footnote(?:ref)?::?)([^\s\[]+)?(\[.*?\])?/},
            {token: ["markup.list.macro", "keyword", "string"], regex: /([a-zA-Z\-][\w\.\/\-]*::?)([^\s\[]+)(\[.*?\])?/},
            {token: ["markup.list.macro", "keyword"], regex: /([a-zA-Z\-][\w\.\/\-]+::?)(\[.*?\])/},
            {token: "keyword",     regex: /^:.+?:(?= |$)/}
        ],

        "quotes": [
            {token: "string.italic", regex: /__[^_\s].*?__/},
            {token: "string.italic", regex: quoteRule("_")},
            
            {token: "keyword.bold", regex: /\*\*[^*\s].*?\*\*/},
            {token: "keyword.bold", regex: quoteRule("\\*")},
            
            {token: "literal", regex: quoteRule("\\+")},
            {token: "literal", regex: /\+\+[^+\s].*?\+\+/},
            {token: "literal", regex: /\$\$.+?\$\$/},
            {token: "literal", regex: quoteRule("`")},

            {token: "keyword", regex: quoteRule("^")},
            {token: "keyword", regex: quoteRule("~")},
            {token: "keyword", regex: /##?/},
            {token: "keyword", regex: /(?:\B|^)``|\b''/}
        ]

    };

    function quoteRule(ch) {
        var prefix = /\w/.test(ch) ? "\\b" : "(?:\\B|^)";
        return prefix + ch + "[^" + ch + "].*?" + ch + "(?![\\w*])";
    }

    var tokenMap = {
        macro: "constant.character",
        tableBlock: "doc.comment",
        titleUnderline: "markup.heading",
        singleLineTitle: "markup.heading",
        pageBreak: "string",
        option: "string.regexp",
        otherBlock: "markup.list",
        literal: "support.function",
        optionalTitle: "constant.numeric",
        escape: "constant.language.escape",
        link: "markup.underline.list"
    };

    for (var state in this.$rules) {
        var stateRules = this.$rules[state];
        for (var i = stateRules.length; i--; ) {
            var rule = stateRules[i];
            if (rule.include || typeof rule == "string") {
                var args = [i, 1].concat(this.$rules[rule.include || rule]);
                if (rule.noEscape) {
                    args = args.filter(function(x) {
                        return !x.next;
                    });
                }
                stateRules.splice.apply(stateRules, args);
            } else if (rule.token in tokenMap) {
                rule.token = tokenMap[rule.token];
            }
        }
    }
};
oop.inherits(AsciidocHighlightRules, TextHighlightRules);

exports.AsciidocHighlightRules = AsciidocHighlightRules;
});

ace.define("ace/mode/folding/asciidoc",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var BaseFoldMode = acequire("./fold_mode").FoldMode;
var Range = acequire("../../range").Range;

var FoldMode = exports.FoldMode = function() {};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    this.foldingStartMarker = /^(?:\|={10,}|[\.\/=\-~^+]{4,}\s*$|={1,5} )/;
    this.singleLineHeadingRe = /^={1,5}(?=\s+\S)/;

    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
        if (!this.foldingStartMarker.test(line))
            return ""

        if (line[0] == "=") {
            if (this.singleLineHeadingRe.test(line))
                return "start";
            if (session.getLine(row - 1).length != session.getLine(row).length)
                return "";
            return "start";
        }
        if (session.bgTokenizer.getState(row) == "dissallowDelimitedBlock")
            return "end";
        return "start";
    };

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var startColumn = line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;
        if (!line.match(this.foldingStartMarker))
            return;

        var token;
        function getTokenType(row) {
            token = session.getTokens(row)[0];
            return token && token.type;
        }

        var levels = ["=","-","~","^","+"];
        var heading = "markup.heading";
        var singleLineHeadingRe = this.singleLineHeadingRe;
        function getLevel() {
            var match = token.value.match(singleLineHeadingRe);
            if (match)
                return match[0].length;
            var level = levels.indexOf(token.value[0]) + 1;
            if (level == 1) {
                if (session.getLine(row - 1).length != session.getLine(row).length)
                    return Infinity;
            }
            return level;
        }

        if (getTokenType(row) == heading) {
            var startHeadingLevel = getLevel();
            while (++row < maxRow) {
                if (getTokenType(row) != heading)
                    continue;
                var level = getLevel();
                if (level <= startHeadingLevel)
                    break;
            }

            var isSingleLineHeading = token && token.value.match(this.singleLineHeadingRe);
            endRow = isSingleLineHeading ? row - 1 : row - 2;

            if (endRow > startRow) {
                while (endRow > startRow && (!getTokenType(endRow) || token.value[0] == "["))
                    endRow--;
            }

            if (endRow > startRow) {
                var endColumn = session.getLine(endRow).length;
                return new Range(startRow, startColumn, endRow, endColumn);
            }
        } else {
            var state = session.bgTokenizer.getState(row);
            if (state == "dissallowDelimitedBlock") {
                while (row -- > 0) {
                    if (session.bgTokenizer.getState(row).lastIndexOf("Block") == -1)
                        break;
                }
                endRow = row + 1;
                if (endRow < startRow) {
                    var endColumn = session.getLine(row).length;
                    return new Range(endRow, 5, startRow, startColumn - 5);
                }
            } else {
                while (++row < maxRow) {
                    if (session.bgTokenizer.getState(row) == "dissallowDelimitedBlock")
                        break;
                }
                endRow = row;
                if (endRow > startRow) {
                    var endColumn = session.getLine(row).length;
                    return new Range(startRow, 5, endRow, endColumn - 5);
                }
            }
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/asciidoc",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/asciidoc_highlight_rules","ace/mode/folding/asciidoc"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var AsciidocHighlightRules = acequire("./asciidoc_highlight_rules").AsciidocHighlightRules;
var AsciidocFoldMode = acequire("./folding/asciidoc").FoldMode;

var Mode = function() {
    this.HighlightRules = AsciidocHighlightRules;
    
    this.foldingRules = new AsciidocFoldMode();    
};
oop.inherits(Mode, TextMode);

(function() {
    this.type = "text";
    this.getNextLineIndent = function(state, line, tab) {
        if (state == "listblock") {
            var match = /^((?:.+)?)([-+*][ ]+)/.exec(line);
            if (match) {
                return new Array(match[1].length + 1).join(" ") + match[2];
            } else {
                return "";
            }
        } else {
            return this.$getIndent(line);
        }
    };
    this.$id = "ace/mode/asciidoc";
}).call(Mode.prototype);

exports.Mode = Mode;
});


/***/ })

},[159]);