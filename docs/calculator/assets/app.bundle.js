webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tree_css__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tree_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_tree_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_css__);



const name = "calculator";
const startRule = "equation";

const parse = __webpack_require__( 162 )( name, startRule );
const tree = __webpack_require__( 173 );
const _ = __webpack_require__( 35 );
const $ = __webpack_require__( 29 );
const theEditor = __webpack_require__( 174 );

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

const antlr4 = __webpack_require__( 9 );
const formatter = __webpack_require__( 163 );
const AnnotatingErrorListener = __webpack_require__( 164 );

module.exports = ( name, startRule ) => {
  const Lexer = __webpack_require__(165)(`./${name.toLowerCase()}/${name}Lexer`)[ `${name}Lexer` ];
  const Parser = __webpack_require__(168)(`./${name.toLowerCase()}/${name}Parser`)[ `${name}Parser` ];

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

const { Utils } = __webpack_require__( 9 );
const { ErrorNode, TerminalNode } = __webpack_require__( 7 );
const { RuleContext } = __webpack_require__( 28 );
const { INVALID_ALT_NUMBER } = __webpack_require__( 12 );

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

const antlr4 = __webpack_require__( 9 );

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
	"./calculator/calculatorLexer": 166,
	"./json/JSONLexer": 167
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

// Generated from calculator/calculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(9);


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0019w\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0005\u0016m\n\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0006\u0018r\n\u0018\r\u0018\u000e\u0018",
    "s\u0003\u0018\u0003\u0018\u0002\u0002\u0019\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u0019\u0003\u0002\u0005\u0004",
    "\u0002GGgg\u0004\u0002C\\c|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "w\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002",
    "+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003",
    "\u0002\u0002\u0002\u00031\u0003\u0002\u0002\u0002\u00055\u0003\u0002",
    "\u0002\u0002\u00079\u0003\u0002\u0002\u0002\t=\u0003\u0002\u0002\u0002",
    "\u000bB\u0003\u0002\u0002\u0002\rG\u0003\u0002\u0002\u0002\u000fL\u0003",
    "\u0002\u0002\u0002\u0011O\u0003\u0002\u0002\u0002\u0013S\u0003\u0002",
    "\u0002\u0002\u0015U\u0003\u0002\u0002\u0002\u0017W\u0003\u0002\u0002",
    "\u0002\u0019Y\u0003\u0002\u0002\u0002\u001b[\u0003\u0002\u0002\u0002",
    "\u001d]\u0003\u0002\u0002\u0002\u001f_\u0003\u0002\u0002\u0002!a\u0003",
    "\u0002\u0002\u0002#c\u0003\u0002\u0002\u0002%e\u0003\u0002\u0002\u0002",
    "\'g\u0003\u0002\u0002\u0002)i\u0003\u0002\u0002\u0002+l\u0003\u0002",
    "\u0002\u0002-n\u0003\u0002\u0002\u0002/q\u0003\u0002\u0002\u000212\u0007",
    "e\u0002\u000223\u0007q\u0002\u000234\u0007u\u0002\u00024\u0004\u0003",
    "\u0002\u0002\u000256\u0007u\u0002\u000267\u0007k\u0002\u000278\u0007",
    "p\u0002\u00028\u0006\u0003\u0002\u0002\u00029:\u0007v\u0002\u0002:;",
    "\u0007c\u0002\u0002;<\u0007p\u0002\u0002<\b\u0003\u0002\u0002\u0002",
    "=>\u0007c\u0002\u0002>?\u0007e\u0002\u0002?@\u0007q\u0002\u0002@A\u0007",
    "u\u0002\u0002A\n\u0003\u0002\u0002\u0002BC\u0007c\u0002\u0002CD\u0007",
    "u\u0002\u0002DE\u0007k\u0002\u0002EF\u0007p\u0002\u0002F\f\u0003\u0002",
    "\u0002\u0002GH\u0007c\u0002\u0002HI\u0007v\u0002\u0002IJ\u0007c\u0002",
    "\u0002JK\u0007p\u0002\u0002K\u000e\u0003\u0002\u0002\u0002LM\u0007n",
    "\u0002\u0002MN\u0007p\u0002\u0002N\u0010\u0003\u0002\u0002\u0002OP\u0007",
    "n\u0002\u0002PQ\u0007q\u0002\u0002QR\u0007i\u0002\u0002R\u0012\u0003",
    "\u0002\u0002\u0002ST\u0007*\u0002\u0002T\u0014\u0003\u0002\u0002\u0002",
    "UV\u0007+\u0002\u0002V\u0016\u0003\u0002\u0002\u0002WX\u0007-\u0002",
    "\u0002X\u0018\u0003\u0002\u0002\u0002YZ\u0007/\u0002\u0002Z\u001a\u0003",
    "\u0002\u0002\u0002[\\\u0007,\u0002\u0002\\\u001c\u0003\u0002\u0002\u0002",
    "]^\u00071\u0002\u0002^\u001e\u0003\u0002\u0002\u0002_`\u0007@\u0002",
    "\u0002` \u0003\u0002\u0002\u0002ab\u0007>\u0002\u0002b\"\u0003\u0002",
    "\u0002\u0002cd\u0007?\u0002\u0002d$\u0003\u0002\u0002\u0002ef\u0007",
    "0\u0002\u0002f&\u0003\u0002\u0002\u0002gh\t\u0002\u0002\u0002h(\u0003",
    "\u0002\u0002\u0002ij\u0007`\u0002\u0002j*\u0003\u0002\u0002\u0002km",
    "\t\u0003\u0002\u0002lk\u0003\u0002\u0002\u0002m,\u0003\u0002\u0002\u0002",
    "no\u00042;\u0002o.\u0003\u0002\u0002\u0002pr\t\u0004\u0002\u0002qp\u0003",
    "\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002",
    "st\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\b\u0018\u0002",
    "\u0002v0\u0003\u0002\u0002\u0002\u0005\u0002ls\u0003\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function calculatorLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

calculatorLexer.prototype = Object.create(antlr4.Lexer.prototype);
calculatorLexer.prototype.constructor = calculatorLexer;

calculatorLexer.EOF = antlr4.Token.EOF;
calculatorLexer.COS = 1;
calculatorLexer.SIN = 2;
calculatorLexer.TAN = 3;
calculatorLexer.ACOS = 4;
calculatorLexer.ASIN = 5;
calculatorLexer.ATAN = 6;
calculatorLexer.LN = 7;
calculatorLexer.LOG = 8;
calculatorLexer.LPAREN = 9;
calculatorLexer.RPAREN = 10;
calculatorLexer.PLUS = 11;
calculatorLexer.MINUS = 12;
calculatorLexer.TIMES = 13;
calculatorLexer.DIV = 14;
calculatorLexer.GT = 15;
calculatorLexer.LT = 16;
calculatorLexer.EQ = 17;
calculatorLexer.POINT = 18;
calculatorLexer.E = 19;
calculatorLexer.POW = 20;
calculatorLexer.LETTER = 21;
calculatorLexer.DIGIT = 22;
calculatorLexer.WS = 23;

calculatorLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

calculatorLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

calculatorLexer.prototype.literalNames = [ null, "'cos'", "'sin'", "'tan'", 
                                           "'acos'", "'asin'", "'atan'", 
                                           "'ln'", "'log'", "'('", "')'", 
                                           "'+'", "'-'", "'*'", "'/'", "'>'", 
                                           "'<'", "'='", "'.'", null, "'^'" ];

calculatorLexer.prototype.symbolicNames = [ null, "COS", "SIN", "TAN", "ACOS", 
                                            "ASIN", "ATAN", "LN", "LOG", 
                                            "LPAREN", "RPAREN", "PLUS", 
                                            "MINUS", "TIMES", "DIV", "GT", 
                                            "LT", "EQ", "POINT", "E", "POW", 
                                            "LETTER", "DIGIT", "WS" ];

calculatorLexer.prototype.ruleNames = [ "COS", "SIN", "TAN", "ACOS", "ASIN", 
                                        "ATAN", "LN", "LOG", "LPAREN", "RPAREN", 
                                        "PLUS", "MINUS", "TIMES", "DIV", 
                                        "GT", "LT", "EQ", "POINT", "E", 
                                        "POW", "LETTER", "DIGIT", "WS" ];

calculatorLexer.prototype.grammarFileName = "calculator.g4";



exports.calculatorLexer = calculatorLexer;



/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Generated from json/JSON.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(9);


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000e\u0088\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0007\u000bE\n\u000b\f\u000b\u000e\u000bH\u000b\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0005\fO\n\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0005\u000f",
    "Z\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0006\u000f_\n\u000f\r",
    "\u000f\u000e\u000f`\u0003\u000f\u0005\u000fd\n\u000f\u0003\u000f\u0005",
    "\u000fg\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000fm\n\u000f\u0003\u000f\u0005\u000fp\n\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0007\u0010u\n\u0010\f\u0010\u000e\u0010x\u000b\u0010\u0005",
    "\u0010z\n\u0010\u0003\u0011\u0003\u0011\u0005\u0011~\n\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0006\u0012\u0083\n\u0012\r\u0012\u000e\u0012",
    "\u0084\u0003\u0012\u0003\u0012\u0002\u0002\u0013\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\u0002\u0019\u0002\u001b\u0002\u001d\r\u001f\u0002!\u0002#\u000e",
    "\u0003\u0002\n\u0004\u0002$$^^\n\u0002$$11^^ddhhppttvv\u0005\u00022",
    ";CHch\u0003\u00022;\u0003\u00023;\u0004\u0002GGgg\u0004\u0002--//\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0002\u0090\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0003%\u0003\u0002\u0002\u0002",
    "\u0005\'\u0003\u0002\u0002\u0002\u0007)\u0003\u0002\u0002\u0002\t+\u0003",
    "\u0002\u0002\u0002\u000b-\u0003\u0002\u0002\u0002\r/\u0003\u0002\u0002",
    "\u0002\u000f1\u0003\u0002\u0002\u0002\u00116\u0003\u0002\u0002\u0002",
    "\u0013<\u0003\u0002\u0002\u0002\u0015A\u0003\u0002\u0002\u0002\u0017",
    "K\u0003\u0002\u0002\u0002\u0019P\u0003\u0002\u0002\u0002\u001bV\u0003",
    "\u0002\u0002\u0002\u001do\u0003\u0002\u0002\u0002\u001fy\u0003\u0002",
    "\u0002\u0002!{\u0003\u0002\u0002\u0002#\u0082\u0003\u0002\u0002\u0002",
    "%&\u0007}\u0002\u0002&\u0004\u0003\u0002\u0002\u0002\'(\u0007.\u0002",
    "\u0002(\u0006\u0003\u0002\u0002\u0002)*\u0007\u007f\u0002\u0002*\b\u0003",
    "\u0002\u0002\u0002+,\u0007<\u0002\u0002,\n\u0003\u0002\u0002\u0002-",
    ".\u0007]\u0002\u0002.\f\u0003\u0002\u0002\u0002/0\u0007_\u0002\u0002",
    "0\u000e\u0003\u0002\u0002\u000212\u0007v\u0002\u000223\u0007t\u0002",
    "\u000234\u0007w\u0002\u000245\u0007g\u0002\u00025\u0010\u0003\u0002",
    "\u0002\u000267\u0007h\u0002\u000278\u0007c\u0002\u000289\u0007n\u0002",
    "\u00029:\u0007u\u0002\u0002:;\u0007g\u0002\u0002;\u0012\u0003\u0002",
    "\u0002\u0002<=\u0007p\u0002\u0002=>\u0007w\u0002\u0002>?\u0007n\u0002",
    "\u0002?@\u0007n\u0002\u0002@\u0014\u0003\u0002\u0002\u0002AF\u0007$",
    "\u0002\u0002BE\u0005\u0017\f\u0002CE\n\u0002\u0002\u0002DB\u0003\u0002",
    "\u0002\u0002DC\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003",
    "\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GI\u0003\u0002\u0002\u0002",
    "HF\u0003\u0002\u0002\u0002IJ\u0007$\u0002\u0002J\u0016\u0003\u0002\u0002",
    "\u0002KN\u0007^\u0002\u0002LO\t\u0003\u0002\u0002MO\u0005\u0019\r\u0002",
    "NL\u0003\u0002\u0002\u0002NM\u0003\u0002\u0002\u0002O\u0018\u0003\u0002",
    "\u0002\u0002PQ\u0007w\u0002\u0002QR\u0005\u001b\u000e\u0002RS\u0005",
    "\u001b\u000e\u0002ST\u0005\u001b\u000e\u0002TU\u0005\u001b\u000e\u0002",
    "U\u001a\u0003\u0002\u0002\u0002VW\t\u0004\u0002\u0002W\u001c\u0003\u0002",
    "\u0002\u0002XZ\u0007/\u0002\u0002YX\u0003\u0002\u0002\u0002YZ\u0003",
    "\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\\u0005\u001f\u0010\u0002",
    "\\^\u00070\u0002\u0002]_\t\u0005\u0002\u0002^]\u0003\u0002\u0002\u0002",
    "_`\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002ac\u0003\u0002\u0002\u0002bd\u0005!\u0011\u0002cb\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002dp\u0003\u0002\u0002\u0002eg\u0007",
    "/\u0002\u0002fe\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gh",
    "\u0003\u0002\u0002\u0002hi\u0005\u001f\u0010\u0002ij\u0005!\u0011\u0002",
    "jp\u0003\u0002\u0002\u0002km\u0007/\u0002\u0002lk\u0003\u0002\u0002",
    "\u0002lm\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002np\u0005\u001f",
    "\u0010\u0002oY\u0003\u0002\u0002\u0002of\u0003\u0002\u0002\u0002ol\u0003",
    "\u0002\u0002\u0002p\u001e\u0003\u0002\u0002\u0002qz\u00072\u0002\u0002",
    "rv\t\u0006\u0002\u0002su\t\u0005\u0002\u0002ts\u0003\u0002\u0002\u0002",
    "ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002",
    "\u0002wz\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yq\u0003\u0002",
    "\u0002\u0002yr\u0003\u0002\u0002\u0002z \u0003\u0002\u0002\u0002{}\t",
    "\u0007\u0002\u0002|~\t\b\u0002\u0002}|\u0003\u0002\u0002\u0002}~\u0003",
    "\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080\u0005",
    "\u001f\u0010\u0002\u0080\"\u0003\u0002\u0002\u0002\u0081\u0083\t\t\u0002",
    "\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002",
    "\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\b\u0012\u0002",
    "\u0002\u0087$\u0003\u0002\u0002\u0002\u0010\u0002DFNY`cflovy}\u0084",
    "\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function JSONLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

JSONLexer.prototype = Object.create(antlr4.Lexer.prototype);
JSONLexer.prototype.constructor = JSONLexer;

JSONLexer.EOF = antlr4.Token.EOF;
JSONLexer.T__0 = 1;
JSONLexer.T__1 = 2;
JSONLexer.T__2 = 3;
JSONLexer.T__3 = 4;
JSONLexer.T__4 = 5;
JSONLexer.T__5 = 6;
JSONLexer.T__6 = 7;
JSONLexer.T__7 = 8;
JSONLexer.T__8 = 9;
JSONLexer.STRING = 10;
JSONLexer.NUMBER = 11;
JSONLexer.WS = 12;

JSONLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

JSONLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

JSONLexer.prototype.literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", 
                                     "']'", "'true'", "'false'", "'null'" ];

JSONLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, "STRING", 
                                      "NUMBER", "WS" ];

JSONLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "T__8", "STRING", 
                                  "ESC", "UNICODE", "HEX", "NUMBER", "INT", 
                                  "EXP", "WS" ];

JSONLexer.prototype.grammarFileName = "JSON.g4";



exports.JSONLexer = JSONLexer;



/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calculator/calculatorParser": 169,
	"./json/JSONParser": 171
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
webpackContext.id = 168;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Generated from calculator/calculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(9);
var calculatorListener = __webpack_require__(170).calculatorListener;
var grammarFileName = "calculator.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0019f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003 \n\u0003\f\u0003\u000e\u0003#\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004(\n\u0004\f\u0004\u000e\u0004+\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u00050\n\u0005\f\u0005",
    "\u000e\u00053\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006<\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007A\n\u0007\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0005\u000bM\n\u000b\u0003\u000b\u0006\u000bP\n\u000b\r\u000b\u000e",
    "\u000bQ\u0003\u000b\u0003\u000b\u0006\u000bV\n\u000b\r\u000b\u000e\u000b",
    "W\u0005\u000bZ\n\u000b\u0003\f\u0005\f]\n\f\u0003\f\u0003\f\u0007\f",
    "a\n\f\f\f\u000e\fd\u000b\f\u0003\f\u0002\u0002\r\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0002\u0007\u0003\u0002\r\u000e\u0003",
    "\u0002\u000f\u0010\u0003\u0002\u0003\n\u0003\u0002\u0011\u0013\u0003",
    "\u0002\u0017\u0018\u0002g\u0002\u0018\u0003\u0002\u0002\u0002\u0004",
    "\u001c\u0003\u0002\u0002\u0002\u0006$\u0003\u0002\u0002\u0002\b,\u0003",
    "\u0002\u0002\u0002\n;\u0003\u0002\u0002\u0002\f=\u0003\u0002\u0002\u0002",
    "\u000eB\u0003\u0002\u0002\u0002\u0010G\u0003\u0002\u0002\u0002\u0012",
    "I\u0003\u0002\u0002\u0002\u0014L\u0003\u0002\u0002\u0002\u0016\\\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0005\u0004\u0003\u0002\u0019\u001a\u0005",
    "\u0012\n\u0002\u001a\u001b\u0005\u0004\u0003\u0002\u001b\u0003\u0003",
    "\u0002\u0002\u0002\u001c!\u0005\u0006\u0004\u0002\u001d\u001e\t\u0002",
    "\u0002\u0002\u001e \u0005\u0006\u0004\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002 #\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "!\"\u0003\u0002\u0002\u0002\"\u0005\u0003\u0002\u0002\u0002#!\u0003",
    "\u0002\u0002\u0002$)\u0005\b\u0005\u0002%&\t\u0003\u0002\u0002&(\u0005",
    "\b\u0005\u0002\'%\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002",
    ")\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\u0007\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002,1\u0005\n\u0006\u0002-.\u0007",
    "\u0016\u0002\u0002.0\u0005\n\u0006\u0002/-\u0003\u0002\u0002\u00020",
    "3\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u00022\t\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u00024<\u0005",
    "\f\u0007\u00025<\u0005\u0016\f\u000267\u0007\u000b\u0002\u000278\u0005",
    "\u0004\u0003\u000289\u0007\f\u0002\u00029<\u0003\u0002\u0002\u0002:",
    "<\u0005\u000e\b\u0002;4\u0003\u0002\u0002\u0002;5\u0003\u0002\u0002",
    "\u0002;6\u0003\u0002\u0002\u0002;:\u0003\u0002\u0002\u0002<\u000b\u0003",
    "\u0002\u0002\u0002=@\u0005\u0014\u000b\u0002>?\u0007\u0015\u0002\u0002",
    "?A\u0005\u0014\u000b\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002A\r\u0003\u0002\u0002\u0002BC\u0005\u0010\t\u0002CD\u0007\u000b",
    "\u0002\u0002DE\u0005\u0004\u0003\u0002EF\u0007\f\u0002\u0002F\u000f",
    "\u0003\u0002\u0002\u0002GH\t\u0004\u0002\u0002H\u0011\u0003\u0002\u0002",
    "\u0002IJ\t\u0005\u0002\u0002J\u0013\u0003\u0002\u0002\u0002KM\u0007",
    "\u000e\u0002\u0002LK\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002",
    "MO\u0003\u0002\u0002\u0002NP\u0007\u0018\u0002\u0002ON\u0003\u0002\u0002",
    "\u0002PQ\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002",
    "\u0002\u0002RY\u0003\u0002\u0002\u0002SU\u0007\u0014\u0002\u0002TV\u0007",
    "\u0018\u0002\u0002UT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002",
    "WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XZ\u0003\u0002\u0002",
    "\u0002YS\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\u0015\u0003",
    "\u0002\u0002\u0002[]\u0007\u000e\u0002\u0002\\[\u0003\u0002\u0002\u0002",
    "\\]\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^b\u0007\u0017",
    "\u0002\u0002_a\t\u0006\u0002\u0002`_\u0003\u0002\u0002\u0002ad\u0003",
    "\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002",
    "c\u0017\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002\r!)1;@LQW",
    "Y\\b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'cos'", "'sin'", "'tan'", "'acos'", "'asin'", 
                     "'atan'", "'ln'", "'log'", "'('", "')'", "'+'", "'-'", 
                     "'*'", "'/'", "'>'", "'<'", "'='", "'.'", null, "'^'" ];

var symbolicNames = [ null, "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", 
                      "LN", "LOG", "LPAREN", "RPAREN", "PLUS", "MINUS", 
                      "TIMES", "DIV", "GT", "LT", "EQ", "POINT", "E", "POW", 
                      "LETTER", "DIGIT", "WS" ];

var ruleNames =  [ "equation", "expression", "multiplyingExpression", "powExpression", 
                   "atom", "scientific", "func", "funcname", "relop", "number", 
                   "variable" ];

function calculatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

calculatorParser.prototype = Object.create(antlr4.Parser.prototype);
calculatorParser.prototype.constructor = calculatorParser;

Object.defineProperty(calculatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

calculatorParser.EOF = antlr4.Token.EOF;
calculatorParser.COS = 1;
calculatorParser.SIN = 2;
calculatorParser.TAN = 3;
calculatorParser.ACOS = 4;
calculatorParser.ASIN = 5;
calculatorParser.ATAN = 6;
calculatorParser.LN = 7;
calculatorParser.LOG = 8;
calculatorParser.LPAREN = 9;
calculatorParser.RPAREN = 10;
calculatorParser.PLUS = 11;
calculatorParser.MINUS = 12;
calculatorParser.TIMES = 13;
calculatorParser.DIV = 14;
calculatorParser.GT = 15;
calculatorParser.LT = 16;
calculatorParser.EQ = 17;
calculatorParser.POINT = 18;
calculatorParser.E = 19;
calculatorParser.POW = 20;
calculatorParser.LETTER = 21;
calculatorParser.DIGIT = 22;
calculatorParser.WS = 23;

calculatorParser.RULE_equation = 0;
calculatorParser.RULE_expression = 1;
calculatorParser.RULE_multiplyingExpression = 2;
calculatorParser.RULE_powExpression = 3;
calculatorParser.RULE_atom = 4;
calculatorParser.RULE_scientific = 5;
calculatorParser.RULE_func = 6;
calculatorParser.RULE_funcname = 7;
calculatorParser.RULE_relop = 8;
calculatorParser.RULE_number = 9;
calculatorParser.RULE_variable = 10;

function EquationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_equation;
    return this;
}

EquationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EquationContext.prototype.constructor = EquationContext;

EquationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EquationContext.prototype.relop = function() {
    return this.getTypedRuleContext(RelopContext,0);
};

EquationContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterEquation(this);
	}
};

EquationContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitEquation(this);
	}
};




calculatorParser.EquationContext = EquationContext;

calculatorParser.prototype.equation = function() {

    var localctx = new EquationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, calculatorParser.RULE_equation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.expression();
        this.state = 23;
        this.relop();
        this.state = 24;
        this.expression();
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

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.multiplyingExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultiplyingExpressionContext);
    } else {
        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
    }
};

ExpressionContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.PLUS);
    } else {
        return this.getToken(calculatorParser.PLUS, i);
    }
};


ExpressionContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.MINUS);
    } else {
        return this.getToken(calculatorParser.MINUS, i);
    }
};


ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitExpression(this);
	}
};




calculatorParser.ExpressionContext = ExpressionContext;

calculatorParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, calculatorParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.multiplyingExpression();
        this.state = 31;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calculatorParser.PLUS || _la===calculatorParser.MINUS) {
            this.state = 27;
            _la = this._input.LA(1);
            if(!(_la===calculatorParser.PLUS || _la===calculatorParser.MINUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 28;
            this.multiplyingExpression();
            this.state = 33;
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

function MultiplyingExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_multiplyingExpression;
    return this;
}

MultiplyingExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyingExpressionContext.prototype.constructor = MultiplyingExpressionContext;

MultiplyingExpressionContext.prototype.powExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PowExpressionContext);
    } else {
        return this.getTypedRuleContext(PowExpressionContext,i);
    }
};

MultiplyingExpressionContext.prototype.TIMES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.TIMES);
    } else {
        return this.getToken(calculatorParser.TIMES, i);
    }
};


MultiplyingExpressionContext.prototype.DIV = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.DIV);
    } else {
        return this.getToken(calculatorParser.DIV, i);
    }
};


MultiplyingExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterMultiplyingExpression(this);
	}
};

MultiplyingExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitMultiplyingExpression(this);
	}
};




calculatorParser.MultiplyingExpressionContext = MultiplyingExpressionContext;

calculatorParser.prototype.multiplyingExpression = function() {

    var localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, calculatorParser.RULE_multiplyingExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.powExpression();
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calculatorParser.TIMES || _la===calculatorParser.DIV) {
            this.state = 35;
            _la = this._input.LA(1);
            if(!(_la===calculatorParser.TIMES || _la===calculatorParser.DIV)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 36;
            this.powExpression();
            this.state = 41;
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

function PowExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_powExpression;
    return this;
}

PowExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowExpressionContext.prototype.constructor = PowExpressionContext;

PowExpressionContext.prototype.atom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AtomContext);
    } else {
        return this.getTypedRuleContext(AtomContext,i);
    }
};

PowExpressionContext.prototype.POW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.POW);
    } else {
        return this.getToken(calculatorParser.POW, i);
    }
};


PowExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterPowExpression(this);
	}
};

PowExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitPowExpression(this);
	}
};




calculatorParser.PowExpressionContext = PowExpressionContext;

calculatorParser.prototype.powExpression = function() {

    var localctx = new PowExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, calculatorParser.RULE_powExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.atom();
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calculatorParser.POW) {
            this.state = 43;
            this.match(calculatorParser.POW);
            this.state = 44;
            this.atom();
            this.state = 49;
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

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.scientific = function() {
    return this.getTypedRuleContext(ScientificContext,0);
};

AtomContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AtomContext.prototype.LPAREN = function() {
    return this.getToken(calculatorParser.LPAREN, 0);
};

AtomContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AtomContext.prototype.RPAREN = function() {
    return this.getToken(calculatorParser.RPAREN, 0);
};

AtomContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitAtom(this);
	}
};




calculatorParser.AtomContext = AtomContext;

calculatorParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, calculatorParser.RULE_atom);
    try {
        this.state = 57;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.scientific();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.variable();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 52;
            this.match(calculatorParser.LPAREN);
            this.state = 53;
            this.expression();
            this.state = 54;
            this.match(calculatorParser.RPAREN);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 56;
            this.func();
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

function ScientificContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_scientific;
    return this;
}

ScientificContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScientificContext.prototype.constructor = ScientificContext;

ScientificContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

ScientificContext.prototype.E = function() {
    return this.getToken(calculatorParser.E, 0);
};

ScientificContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterScientific(this);
	}
};

ScientificContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitScientific(this);
	}
};




calculatorParser.ScientificContext = ScientificContext;

calculatorParser.prototype.scientific = function() {

    var localctx = new ScientificContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, calculatorParser.RULE_scientific);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.number();
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===calculatorParser.E) {
            this.state = 60;
            this.match(calculatorParser.E);
            this.state = 61;
            this.number();
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

function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
};

FuncContext.prototype.LPAREN = function() {
    return this.getToken(calculatorParser.LPAREN, 0);
};

FuncContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FuncContext.prototype.RPAREN = function() {
    return this.getToken(calculatorParser.RPAREN, 0);
};

FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitFunc(this);
	}
};




calculatorParser.FuncContext = FuncContext;

calculatorParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, calculatorParser.RULE_func);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.funcname();
        this.state = 65;
        this.match(calculatorParser.LPAREN);
        this.state = 66;
        this.expression();
        this.state = 67;
        this.match(calculatorParser.RPAREN);
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

function FuncnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_funcname;
    return this;
}

FuncnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncnameContext.prototype.constructor = FuncnameContext;

FuncnameContext.prototype.COS = function() {
    return this.getToken(calculatorParser.COS, 0);
};

FuncnameContext.prototype.TAN = function() {
    return this.getToken(calculatorParser.TAN, 0);
};

FuncnameContext.prototype.SIN = function() {
    return this.getToken(calculatorParser.SIN, 0);
};

FuncnameContext.prototype.ACOS = function() {
    return this.getToken(calculatorParser.ACOS, 0);
};

FuncnameContext.prototype.ATAN = function() {
    return this.getToken(calculatorParser.ATAN, 0);
};

FuncnameContext.prototype.ASIN = function() {
    return this.getToken(calculatorParser.ASIN, 0);
};

FuncnameContext.prototype.LOG = function() {
    return this.getToken(calculatorParser.LOG, 0);
};

FuncnameContext.prototype.LN = function() {
    return this.getToken(calculatorParser.LN, 0);
};

FuncnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterFuncname(this);
	}
};

FuncnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitFuncname(this);
	}
};




calculatorParser.FuncnameContext = FuncnameContext;

calculatorParser.prototype.funcname = function() {

    var localctx = new FuncnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, calculatorParser.RULE_funcname);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << calculatorParser.COS) | (1 << calculatorParser.SIN) | (1 << calculatorParser.TAN) | (1 << calculatorParser.ACOS) | (1 << calculatorParser.ASIN) | (1 << calculatorParser.ATAN) | (1 << calculatorParser.LN) | (1 << calculatorParser.LOG))) !== 0))) {
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

function RelopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_relop;
    return this;
}

RelopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelopContext.prototype.constructor = RelopContext;

RelopContext.prototype.EQ = function() {
    return this.getToken(calculatorParser.EQ, 0);
};

RelopContext.prototype.GT = function() {
    return this.getToken(calculatorParser.GT, 0);
};

RelopContext.prototype.LT = function() {
    return this.getToken(calculatorParser.LT, 0);
};

RelopContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterRelop(this);
	}
};

RelopContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitRelop(this);
	}
};




calculatorParser.RelopContext = RelopContext;

calculatorParser.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, calculatorParser.RULE_relop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << calculatorParser.GT) | (1 << calculatorParser.LT) | (1 << calculatorParser.EQ))) !== 0))) {
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

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.MINUS = function() {
    return this.getToken(calculatorParser.MINUS, 0);
};

NumberContext.prototype.DIGIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.DIGIT);
    } else {
        return this.getToken(calculatorParser.DIGIT, i);
    }
};


NumberContext.prototype.POINT = function() {
    return this.getToken(calculatorParser.POINT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitNumber(this);
	}
};




calculatorParser.NumberContext = NumberContext;

calculatorParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, calculatorParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===calculatorParser.MINUS) {
            this.state = 73;
            this.match(calculatorParser.MINUS);
        }

        this.state = 77; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 76;
            this.match(calculatorParser.DIGIT);
            this.state = 79; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===calculatorParser.DIGIT);
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===calculatorParser.POINT) {
            this.state = 81;
            this.match(calculatorParser.POINT);
            this.state = 83; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 82;
                this.match(calculatorParser.DIGIT);
                this.state = 85; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===calculatorParser.DIGIT);
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

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.LETTER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.LETTER);
    } else {
        return this.getToken(calculatorParser.LETTER, i);
    }
};


VariableContext.prototype.MINUS = function() {
    return this.getToken(calculatorParser.MINUS, 0);
};

VariableContext.prototype.DIGIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.DIGIT);
    } else {
        return this.getToken(calculatorParser.DIGIT, i);
    }
};


VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitVariable(this);
	}
};




calculatorParser.VariableContext = VariableContext;

calculatorParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, calculatorParser.RULE_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===calculatorParser.MINUS) {
            this.state = 89;
            this.match(calculatorParser.MINUS);
        }

        this.state = 92;
        this.match(calculatorParser.LETTER);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calculatorParser.LETTER || _la===calculatorParser.DIGIT) {
            this.state = 93;
            _la = this._input.LA(1);
            if(!(_la===calculatorParser.LETTER || _la===calculatorParser.DIGIT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 98;
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


exports.calculatorParser = calculatorParser;


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// Generated from calculator/calculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(9);

// This class defines a complete listener for a parse tree produced by calculatorParser.
function calculatorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

calculatorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
calculatorListener.prototype.constructor = calculatorListener;

// Enter a parse tree produced by calculatorParser#equation.
calculatorListener.prototype.enterEquation = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#equation.
calculatorListener.prototype.exitEquation = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#expression.
calculatorListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#expression.
calculatorListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#multiplyingExpression.
calculatorListener.prototype.enterMultiplyingExpression = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#multiplyingExpression.
calculatorListener.prototype.exitMultiplyingExpression = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#powExpression.
calculatorListener.prototype.enterPowExpression = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#powExpression.
calculatorListener.prototype.exitPowExpression = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#atom.
calculatorListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#atom.
calculatorListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#scientific.
calculatorListener.prototype.enterScientific = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#scientific.
calculatorListener.prototype.exitScientific = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#func.
calculatorListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#func.
calculatorListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#funcname.
calculatorListener.prototype.enterFuncname = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#funcname.
calculatorListener.prototype.exitFuncname = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#relop.
calculatorListener.prototype.enterRelop = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#relop.
calculatorListener.prototype.exitRelop = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#number.
calculatorListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#number.
calculatorListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#variable.
calculatorListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#variable.
calculatorListener.prototype.exitVariable = function(ctx) {
};



exports.calculatorListener = calculatorListener;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// Generated from json/JSON.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(9);
var JSONListener = __webpack_require__(172).JSONListener;
var grammarFileName = "JSON.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000e:\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0013\n",
    "\u0003\f\u0003\u000e\u0003\u0016\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u001c\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005&\n\u0005\f\u0005\u000e\u0005)\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005/\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u00068\n\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006",
    "\b\n\u0002\u0002\u0002>\u0002\f\u0003\u0002\u0002\u0002\u0004\u001b",
    "\u0003\u0002\u0002\u0002\u0006\u001d\u0003\u0002\u0002\u0002\b.\u0003",
    "\u0002\u0002\u0002\n7\u0003\u0002\u0002\u0002\f\r\u0005\n\u0006\u0002",
    "\r\u0003\u0003\u0002\u0002\u0002\u000e\u000f\u0007\u0003\u0002\u0002",
    "\u000f\u0014\u0005\u0006\u0004\u0002\u0010\u0011\u0007\u0004\u0002\u0002",
    "\u0011\u0013\u0005\u0006\u0004\u0002\u0012\u0010\u0003\u0002\u0002\u0002",
    "\u0013\u0016\u0003\u0002\u0002\u0002\u0014\u0012\u0003\u0002\u0002\u0002",
    "\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0017\u0003\u0002\u0002\u0002",
    "\u0016\u0014\u0003\u0002\u0002\u0002\u0017\u0018\u0007\u0005\u0002\u0002",
    "\u0018\u001c\u0003\u0002\u0002\u0002\u0019\u001a\u0007\u0003\u0002\u0002",
    "\u001a\u001c\u0007\u0005\u0002\u0002\u001b\u000e\u0003\u0002\u0002\u0002",
    "\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u0005\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0007\f\u0002\u0002\u001e\u001f\u0007\u0006\u0002\u0002",
    "\u001f \u0005\n\u0006\u0002 \u0007\u0003\u0002\u0002\u0002!\"\u0007",
    "\u0007\u0002\u0002\"\'\u0005\n\u0006\u0002#$\u0007\u0004\u0002\u0002",
    "$&\u0005\n\u0006\u0002%#\u0003\u0002\u0002\u0002&)\u0003\u0002\u0002",
    "\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(*\u0003",
    "\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002*+\u0007\b\u0002\u0002",
    "+/\u0003\u0002\u0002\u0002,-\u0007\u0007\u0002\u0002-/\u0007\b\u0002",
    "\u0002.!\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002/\t\u0003",
    "\u0002\u0002\u000208\u0007\f\u0002\u000218\u0007\r\u0002\u000228\u0005",
    "\u0004\u0003\u000238\u0005\b\u0005\u000248\u0007\t\u0002\u000258\u0007",
    "\n\u0002\u000268\u0007\u000b\u0002\u000270\u0003\u0002\u0002\u00027",
    "1\u0003\u0002\u0002\u000272\u0003\u0002\u0002\u000273\u0003\u0002\u0002",
    "\u000274\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000276\u0003\u0002",
    "\u0002\u00028\u000b\u0003\u0002\u0002\u0002\u0007\u0014\u001b\'.7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", "']'", "'true'", 
                     "'false'", "'null'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "STRING", "NUMBER", "WS" ];

var ruleNames =  [ "json", "obj", "pair", "array", "value" ];

function JSONParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JSONParser.prototype = Object.create(antlr4.Parser.prototype);
JSONParser.prototype.constructor = JSONParser;

Object.defineProperty(JSONParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JSONParser.EOF = antlr4.Token.EOF;
JSONParser.T__0 = 1;
JSONParser.T__1 = 2;
JSONParser.T__2 = 3;
JSONParser.T__3 = 4;
JSONParser.T__4 = 5;
JSONParser.T__5 = 6;
JSONParser.T__6 = 7;
JSONParser.T__7 = 8;
JSONParser.T__8 = 9;
JSONParser.STRING = 10;
JSONParser.NUMBER = 11;
JSONParser.WS = 12;

JSONParser.RULE_json = 0;
JSONParser.RULE_obj = 1;
JSONParser.RULE_pair = 2;
JSONParser.RULE_array = 3;
JSONParser.RULE_value = 4;

function JsonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_json;
    return this;
}

JsonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonContext.prototype.constructor = JsonContext;

JsonContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

JsonContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterJson(this);
	}
};

JsonContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitJson(this);
	}
};




JSONParser.JsonContext = JsonContext;

JSONParser.prototype.json = function() {

    var localctx = new JsonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JSONParser.RULE_json);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.value();
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

function ObjContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_obj;
    return this;
}

ObjContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjContext.prototype.constructor = ObjContext;

ObjContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

ObjContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterObj(this);
	}
};

ObjContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitObj(this);
	}
};




JSONParser.ObjContext = ObjContext;

JSONParser.prototype.obj = function() {

    var localctx = new ObjContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JSONParser.RULE_obj);
    var _la = 0; // Token type
    try {
        this.state = 25;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            this.match(JSONParser.T__0);
            this.state = 13;
            this.pair();
            this.state = 18;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONParser.T__1) {
                this.state = 14;
                this.match(JSONParser.T__1);
                this.state = 15;
                this.pair();
                this.state = 20;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 21;
            this.match(JSONParser.T__2);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 23;
            this.match(JSONParser.T__0);
            this.state = 24;
            this.match(JSONParser.T__2);
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

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.STRING = function() {
    return this.getToken(JSONParser.STRING, 0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterPair(this);
	}
};

PairContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitPair(this);
	}
};




JSONParser.PairContext = PairContext;

JSONParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, JSONParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.match(JSONParser.STRING);
        this.state = 28;
        this.match(JSONParser.T__3);
        this.state = 29;
        this.value();
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

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitArray(this);
	}
};




JSONParser.ArrayContext = ArrayContext;

JSONParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JSONParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 44;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.match(JSONParser.T__4);
            this.state = 32;
            this.value();
            this.state = 37;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONParser.T__1) {
                this.state = 33;
                this.match(JSONParser.T__1);
                this.state = 34;
                this.value();
                this.state = 39;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 40;
            this.match(JSONParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.match(JSONParser.T__4);
            this.state = 43;
            this.match(JSONParser.T__5);
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(JSONParser.STRING, 0);
};

ValueContext.prototype.NUMBER = function() {
    return this.getToken(JSONParser.NUMBER, 0);
};

ValueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

ValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JSONListener ) {
        listener.exitValue(this);
	}
};




JSONParser.ValueContext = ValueContext;

JSONParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JSONParser.RULE_value);
    try {
        this.state = 53;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JSONParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.match(JSONParser.STRING);
            break;
        case JSONParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 47;
            this.match(JSONParser.NUMBER);
            break;
        case JSONParser.T__0:
            this.enterOuterAlt(localctx, 3);
            this.state = 48;
            this.obj();
            break;
        case JSONParser.T__4:
            this.enterOuterAlt(localctx, 4);
            this.state = 49;
            this.array();
            break;
        case JSONParser.T__6:
            this.enterOuterAlt(localctx, 5);
            this.state = 50;
            this.match(JSONParser.T__6);
            break;
        case JSONParser.T__7:
            this.enterOuterAlt(localctx, 6);
            this.state = 51;
            this.match(JSONParser.T__7);
            break;
        case JSONParser.T__8:
            this.enterOuterAlt(localctx, 7);
            this.state = 52;
            this.match(JSONParser.T__8);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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


exports.JSONParser = JSONParser;


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// Generated from json/JSON.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(9);

// This class defines a complete listener for a parse tree produced by JSONParser.
function JSONListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

JSONListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
JSONListener.prototype.constructor = JSONListener;

// Enter a parse tree produced by JSONParser#json.
JSONListener.prototype.enterJson = function(ctx) {
};

// Exit a parse tree produced by JSONParser#json.
JSONListener.prototype.exitJson = function(ctx) {
};


// Enter a parse tree produced by JSONParser#obj.
JSONListener.prototype.enterObj = function(ctx) {
};

// Exit a parse tree produced by JSONParser#obj.
JSONListener.prototype.exitObj = function(ctx) {
};


// Enter a parse tree produced by JSONParser#pair.
JSONListener.prototype.enterPair = function(ctx) {
};

// Exit a parse tree produced by JSONParser#pair.
JSONListener.prototype.exitPair = function(ctx) {
};


// Enter a parse tree produced by JSONParser#array.
JSONListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by JSONParser#array.
JSONListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by JSONParser#value.
JSONListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by JSONParser#value.
JSONListener.prototype.exitValue = function(ctx) {
};



exports.JSONListener = JSONListener;

/***/ }),

/***/ 173:
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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

const $ = __webpack_require__( 29 );
const ace = __webpack_require__( 96 );
__webpack_require__( 175 );

module.exports = new Promise( ( resolve, reject ) => {
  $( function() {
    editor = ace.edit( 'source' );
    editor.getSession().setMode( 'ace/mode/asciidoc' )
 		resolve(editor);
  } );
} );


/***/ }),

/***/ 175:
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