// Generated from calculator/calculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


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

