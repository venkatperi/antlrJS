webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tree_css__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_tree_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_tree_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_css__);



const name = "JSON";
const startRule = true;

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
  const Lexer = __webpack_require__(165)(`./${name}/${name}Lexer`)[`${name}Lexer`];
  const Parser = __webpack_require__(167)(`./${name}/${name}Parser`)[`${name}Parser`];

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
    var tree = parser[startRule]();
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
	"./json/JSONLexer": 166
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

// Generated from json/JSON.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(18);


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

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./json/JSONParser": 168
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

// Generated from json/JSON.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(18);
var JSONListener = __webpack_require__(169).JSONListener;
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Generated from json/JSON.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = __webpack_require__(18);

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