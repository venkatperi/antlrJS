// Generated from AsciidocParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var AsciidocParserListener = require('./AsciidocParserListener').AsciidocParserListener;
var grammarFileName = "AsciidocParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003C\u01ac\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0003\u0002\u0003\u0002\u0007\u0002{\n\u0002",
    "\f\u0002\u000e\u0002~\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0007\u0003\u0084\n\u0003\f\u0003\u000e\u0003\u0087\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u008b\n\u0003\u0003\u0003",
    "\u0007\u0003\u008e\n\u0003\f\u0003\u000e\u0003\u0091\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004\u0097\n\u0004",
    "\u0003\u0005\u0003\u0005\u0005\u0005\u009b\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00a3",
    "\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0007\b\u00aa",
    "\n\b\f\b\u000e\b\u00ad\u000b\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0007\n\u00b4\n\n\f\n\u000e\n\u00b7\u000b\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00bd\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0005\u0010\u00cb\n\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d0\n\u0010\u0003\u0010",
    "\u0005\u0010\u00d3\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d7",
    "\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u00e9\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00ee",
    "\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0005\u0017\u00f5\n\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0007\u001a\u00fc\n\u001a\f\u001a\u000e\u001a\u00ff",
    "\u000b\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0007\u001c\u0108\n\u001c\f\u001c\u000e\u001c",
    "\u010b\u000b\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0007\u001e\u0115\n\u001e",
    "\f\u001e\u000e\u001e\u0118\u000b\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0005\u001e\u011e\n\u001e\u0003\u001f\u0003\u001f",
    "\u0005\u001f\u0122\n\u001f\u0003 \u0007 \u0125\n \f \u000e \u0128\u000b",
    " \u0003 \u0005 \u012b\n \u0003!\u0003!\u0003!\u0005!\u0130\n!\u0003",
    "\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003%",
    "\u0003%\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0007(\u0144",
    "\n(\f(\u000e(\u0147\u000b(\u0003)\u0007)\u014a\n)\f)\u000e)\u014d\u000b",
    ")\u0003)\u0005)\u0150\n)\u0003)\u0003)\u0005)\u0154\n)\u0003*\u0003",
    "*\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0005-\u0168\n-\u0003.\u0003",
    ".\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u00030\u00030\u00030\u0003",
    "0\u00031\u00031\u00031\u00031\u00032\u00032\u00032\u00032\u00033\u0003",
    "3\u00033\u00033\u00034\u00034\u00034\u00034\u00035\u00035\u00035\u0003",
    "5\u00036\u00036\u00036\u00036\u00037\u00037\u00037\u00037\u00038\u0007",
    "8\u0193\n8\f8\u000e8\u0196\u000b8\u00039\u00039\u00039\u00039\u0007",
    "9\u019c\n9\f9\u000e9\u019f\u000b9\u00039\u00039\u0003:\u0003:\u0003",
    ";\u0003;\u0003;\u0005;\u01a8\n;\u0003<\u0003<\u0003<\u0003\u00ab\u0002",
    "=\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtv\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0002\u019b\u0002x\u0003\u0002\u0002\u0002",
    "\u0004\u0085\u0003\u0002\u0002\u0002\u0006\u0094\u0003\u0002\u0002\u0002",
    "\b\u009a\u0003\u0002\u0002\u0002\n\u009c\u0003\u0002\u0002\u0002\f\u009f",
    "\u0003\u0002\u0002\u0002\u000e\u00a6\u0003\u0002\u0002\u0002\u0010\u00ae",
    "\u0003\u0002\u0002\u0002\u0012\u00b0\u0003\u0002\u0002\u0002\u0014\u00ba",
    "\u0003\u0002\u0002\u0002\u0016\u00c1\u0003\u0002\u0002\u0002\u0018\u00c3",
    "\u0003\u0002\u0002\u0002\u001a\u00c5\u0003\u0002\u0002\u0002\u001c\u00c7",
    "\u0003\u0002\u0002\u0002\u001e\u00cf\u0003\u0002\u0002\u0002 \u00da",
    "\u0003\u0002\u0002\u0002\"\u00dc\u0003\u0002\u0002\u0002$\u00de\u0003",
    "\u0002\u0002\u0002&\u00e0\u0003\u0002\u0002\u0002(\u00e8\u0003\u0002",
    "\u0002\u0002*\u00ea\u0003\u0002\u0002\u0002,\u00f4\u0003\u0002\u0002",
    "\u0002.\u00f6\u0003\u0002\u0002\u00020\u00f8\u0003\u0002\u0002\u0002",
    "2\u00fd\u0003\u0002\u0002\u00024\u0102\u0003\u0002\u0002\u00026\u0109",
    "\u0003\u0002\u0002\u00028\u010e\u0003\u0002\u0002\u0002:\u011d\u0003",
    "\u0002\u0002\u0002<\u0121\u0003\u0002\u0002\u0002>\u012a\u0003\u0002",
    "\u0002\u0002@\u012f\u0003\u0002\u0002\u0002B\u0131\u0003\u0002\u0002",
    "\u0002D\u0134\u0003\u0002\u0002\u0002F\u0137\u0003\u0002\u0002\u0002",
    "H\u013a\u0003\u0002\u0002\u0002J\u013e\u0003\u0002\u0002\u0002L\u0140",
    "\u0003\u0002\u0002\u0002N\u0145\u0003\u0002\u0002\u0002P\u014b\u0003",
    "\u0002\u0002\u0002R\u0155\u0003\u0002\u0002\u0002T\u0157\u0003\u0002",
    "\u0002\u0002V\u015a\u0003\u0002\u0002\u0002X\u0167\u0003\u0002\u0002",
    "\u0002Z\u0169\u0003\u0002\u0002\u0002\\\u016d\u0003\u0002\u0002\u0002",
    "^\u0171\u0003\u0002\u0002\u0002`\u0175\u0003\u0002\u0002\u0002b\u0179",
    "\u0003\u0002\u0002\u0002d\u017d\u0003\u0002\u0002\u0002f\u0181\u0003",
    "\u0002\u0002\u0002h\u0185\u0003\u0002\u0002\u0002j\u0189\u0003\u0002",
    "\u0002\u0002l\u018d\u0003\u0002\u0002\u0002n\u0194\u0003\u0002\u0002",
    "\u0002p\u0197\u0003\u0002\u0002\u0002r\u01a2\u0003\u0002\u0002\u0002",
    "t\u01a7\u0003\u0002\u0002\u0002v\u01a9\u0003\u0002\u0002\u0002x|\u0005",
    "\u0004\u0003\u0002y{\u00054\u001b\u0002zy\u0003\u0002\u0002\u0002{~",
    "\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002",
    "\u0002}\u007f\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f",
    "\u0080\u0007\u0002\u0002\u0003\u0080\u0003\u0003\u0002\u0002\u0002\u0081",
    "\u0084\u0005\b\u0005\u0002\u0082\u0084\u0007\u0013\u0002\u0002\u0083",
    "\u0081\u0003\u0002\u0002\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0084",
    "\u0087\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0003\u0002\u0002\u0002\u0086\u0088\u0003\u0002\u0002\u0002\u0087",
    "\u0085\u0003\u0002\u0002\u0002\u0088\u008a\u0005\n\u0006\u0002\u0089",
    "\u008b\u0005\u0006\u0004\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0003\u0002\u0002\u0002\u008b\u008f\u0003\u0002\u0002\u0002\u008c",
    "\u008e\u0005\b\u0005\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008e",
    "\u0091\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f",
    "\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002\u0002\u0002\u0091",
    "\u008f\u0003\u0002\u0002\u0002\u0092\u0093\u0007\u0012\u0002\u0002\u0093",
    "\u0005\u0003\u0002\u0002\u0002\u0094\u0096\u0005\u0012\n\u0002\u0095",
    "\u0097\u0005\u001e\u0010\u0002\u0096\u0095\u0003\u0002\u0002\u0002\u0096",
    "\u0097\u0003\u0002\u0002\u0002\u0097\u0007\u0003\u0002\u0002\u0002\u0098",
    "\u009b\u0005&\u0014\u0002\u0099\u009b\u0005p9\u0002\u009a\u0098\u0003",
    "\u0002\u0002\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\t\u0003",
    "\u0002\u0002\u0002\u009c\u009d\u0007\u000e\u0002\u0002\u009d\u009e\u0005",
    "\f\u0007\u0002\u009e\u000b\u0003\u0002\u0002\u0002\u009f\u00a2\u0005",
    "\u000e\b\u0002\u00a0\u00a1\u0007\u0015\u0002\u0002\u00a1\u00a3\u0005",
    "\u0010\t\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007",
    "\u0017\u0002\u0002\u00a5\r\u0003\u0002\u0002\u0002\u00a6\u00ab\u0007",
    "\u0016\u0002\u0002\u00a7\u00a8\u0007\u0015\u0002\u0002\u00a8\u00aa\u0007",
    "\u0016\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00aa\u00ad\u0003",
    "\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003",
    "\u0002\u0002\u0002\u00ac\u000f\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0007\u0016\u0002\u0002\u00af\u0011\u0003",
    "\u0002\u0002\u0002\u00b0\u00b5\u0005\u0014\u000b\u0002\u00b1\u00b2\u0007",
    "\u001a\u0002\u0002\u00b2\u00b4\u0005\u0014\u000b\u0002\u00b3\u00b1\u0003",
    "\u0002\u0002\u0002\u00b4\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003",
    "\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b8\u0003",
    "\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007",
    "\u001b\u0002\u0002\u00b9\u0013\u0003\u0002\u0002\u0002\u00ba\u00bc\u0005",
    "\u0016\f\u0002\u00bb\u00bd\u0005\u0018\r\u0002\u00bc\u00bb\u0003\u0002",
    "\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002",
    "\u0002\u0002\u00be\u00bf\u0005\u001a\u000e\u0002\u00bf\u00c0\u0005\u001c",
    "\u000f\u0002\u00c0\u0015\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007\u0018",
    "\u0002\u0002\u00c2\u0017\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u0018",
    "\u0002\u0002\u00c4\u0019\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007\u0018",
    "\u0002\u0002\u00c6\u001b\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007\u0019",
    "\u0002\u0002\u00c8\u001d\u0003\u0002\u0002\u0002\u00c9\u00cb\u0007\u001d",
    "\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002",
    "\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00cd\u0005 ",
    "\u0011\u0002\u00cd\u00ce\u0007\u001f\u0002\u0002\u00ce\u00d0\u0003\u0002",
    "\u0002\u0002\u00cf\u00ca\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002",
    "\u0002\u0002\u00d0\u00d2\u0003\u0002\u0002\u0002\u00d1\u00d3\u0005\"",
    "\u0012\u0002\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002",
    "\u0002\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007 ",
    "\u0002\u0002\u00d5\u00d7\u0005$\u0013\u0002\u00d6\u00d4\u0003\u0002",
    "\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002",
    "\u0002\u0002\u00d8\u00d9\u0007!\u0002\u0002\u00d9\u001f\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0007\u001e\u0002\u0002\u00db!\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\u0007\"\u0002\u0002\u00dd#\u0003\u0002\u0002",
    "\u0002\u00de\u00df\u0007#\u0002\u0002\u00df%\u0003\u0002\u0002\u0002",
    "\u00e0\u00e1\u0007\u000f\u0002\u0002\u00e1\u00e2\u0005(\u0015\u0002",
    "\u00e2\u00e3\u0007(\u0002\u0002\u00e3\'\u0003\u0002\u0002\u0002\u00e4",
    "\u00e5\u0005,\u0017\u0002\u00e5\u00e6\u0007&\u0002\u0002\u00e6\u00e9",
    "\u0003\u0002\u0002\u0002\u00e7\u00e9\u0005*\u0016\u0002\u00e8\u00e4",
    "\u0003\u0002\u0002\u0002\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e9)",
    "\u0003\u0002\u0002\u0002\u00ea\u00eb\u0005.\u0018\u0002\u00eb\u00ed",
    "\u0007&\u0002\u0002\u00ec\u00ee\u00050\u0019\u0002\u00ed\u00ec\u0003",
    "\u0002\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee+\u0003",
    "\u0002\u0002\u0002\u00ef\u00f0\u0007%\u0002\u0002\u00f0\u00f5\u0005",
    ".\u0018\u0002\u00f1\u00f2\u0005.\u0018\u0002\u00f2\u00f3\u0007%\u0002",
    "\u0002\u00f3\u00f5\u0003\u0002\u0002\u0002\u00f4\u00ef\u0003\u0002\u0002",
    "\u0002\u00f4\u00f1\u0003\u0002\u0002\u0002\u00f5-\u0003\u0002\u0002",
    "\u0002\u00f6\u00f7\u0007$\u0002\u0002\u00f7/\u0003\u0002\u0002\u0002",
    "\u00f8\u00f9\u0007\'\u0002\u0002\u00f91\u0003\u0002\u0002\u0002\u00fa",
    "\u00fc\u0005P)\u0002\u00fb\u00fa\u0003\u0002\u0002\u0002\u00fc\u00ff",
    "\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fd\u00fe",
    "\u0003\u0002\u0002\u0002\u00fe\u0100\u0003\u0002\u0002\u0002\u00ff\u00fd",
    "\u0003\u0002\u0002\u0002\u0100\u0101\u0007\u0003\u0002\u0002\u01013",
    "\u0003\u0002\u0002\u0002\u0102\u0103\u00056\u001c\u0002\u0103\u0104",
    "\u0005N(\u0002\u0104\u0105\t\u0002\u0002\u0002\u01055\u0003\u0002\u0002",
    "\u0002\u0106\u0108\u0005:\u001e\u0002\u0107\u0106\u0003\u0002\u0002",
    "\u0002\u0108\u010b\u0003\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002",
    "\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010c\u0003\u0002\u0002",
    "\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010c\u010d\u00058\u001d",
    "\u0002\u010d7\u0003\u0002\u0002\u0002\u010e\u010f\u0007)\u0002\u0002",
    "\u010f9\u0003\u0002\u0002\u0002\u0110\u0111\u0007+\u0002\u0002\u0111",
    "\u0116\u0005<\u001f\u0002\u0112\u0113\u00072\u0002\u0002\u0113\u0115",
    "\u0005<\u001f\u0002\u0114\u0112\u0003\u0002\u0002\u0002\u0115\u0118",
    "\u0003\u0002\u0002\u0002\u0116\u0114\u0003\u0002\u0002\u0002\u0116\u0117",
    "\u0003\u0002\u0002\u0002\u0117\u0119\u0003\u0002\u0002\u0002\u0118\u0116",
    "\u0003\u0002\u0002\u0002\u0119\u011a\u00078\u0002\u0002\u011a\u011b",
    "\u00079\u0002\u0002\u011b\u011e\u0003\u0002\u0002\u0002\u011c\u011e",
    "\u0005v<\u0002\u011d\u0110\u0003\u0002\u0002\u0002\u011d\u011c\u0003",
    "\u0002\u0002\u0002\u011e;\u0003\u0002\u0002\u0002\u011f\u0122\u0005",
    "H%\u0002\u0120\u0122\u0005> \u0002\u0121\u011f\u0003\u0002\u0002\u0002",
    "\u0121\u0120\u0003\u0002\u0002\u0002\u0122=\u0003\u0002\u0002\u0002",
    "\u0123\u0125\u0005@!\u0002\u0124\u0123\u0003\u0002\u0002\u0002\u0125",
    "\u0128\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002\u0002\u0126",
    "\u0127\u0003\u0002\u0002\u0002\u0127\u012b\u0003\u0002\u0002\u0002\u0128",
    "\u0126\u0003\u0002\u0002\u0002\u0129\u012b\u0005J&\u0002\u012a\u0126",
    "\u0003\u0002\u0002\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012b?",
    "\u0003\u0002\u0002\u0002\u012c\u0130\u0005B\"\u0002\u012d\u0130\u0005",
    "D#\u0002\u012e\u0130\u0005D#\u0002\u012f\u012c\u0003\u0002\u0002\u0002",
    "\u012f\u012d\u0003\u0002\u0002\u0002\u012f\u012e\u0003\u0002\u0002\u0002",
    "\u0130A\u0003\u0002\u0002\u0002\u0131\u0132\u00074\u0002\u0002\u0132",
    "\u0133\u0005J&\u0002\u0133C\u0003\u0002\u0002\u0002\u0134\u0135\u0007",
    "6\u0002\u0002\u0135\u0136\u0005J&\u0002\u0136E\u0003\u0002\u0002\u0002",
    "\u0137\u0138\u00075\u0002\u0002\u0138\u0139\u0005J&\u0002\u0139G\u0003",
    "\u0002\u0002\u0002\u013a\u013b\u0005J&\u0002\u013b\u013c\u00073\u0002",
    "\u0002\u013c\u013d\u0005L\'\u0002\u013dI\u0003\u0002\u0002\u0002\u013e",
    "\u013f\u00071\u0002\u0002\u013fK\u0003\u0002\u0002\u0002\u0140\u0141",
    "\u0007:\u0002\u0002\u0141M\u0003\u0002\u0002\u0002\u0142\u0144\u0005",
    "P)\u0002\u0143\u0142\u0003\u0002\u0002\u0002\u0144\u0147\u0003\u0002",
    "\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002\u0145\u0146\u0003\u0002",
    "\u0002\u0002\u0146O\u0003\u0002\u0002\u0002\u0147\u0145\u0003\u0002",
    "\u0002\u0002\u0148\u014a\u0005:\u001e\u0002\u0149\u0148\u0003\u0002",
    "\u0002\u0002\u014a\u014d\u0003\u0002\u0002\u0002\u014b\u0149\u0003\u0002",
    "\u0002\u0002\u014b\u014c\u0003\u0002\u0002\u0002\u014c\u014f\u0003\u0002",
    "\u0002\u0002\u014d\u014b\u0003\u0002\u0002\u0002\u014e\u0150\u0005T",
    "+\u0002\u014f\u014e\u0003\u0002\u0002\u0002\u014f\u0150\u0003\u0002",
    "\u0002\u0002\u0150\u0153\u0003\u0002\u0002\u0002\u0151\u0154\u0005R",
    "*\u0002\u0152\u0154\u0005X-\u0002\u0153\u0151\u0003\u0002\u0002\u0002",
    "\u0153\u0152\u0003\u0002\u0002\u0002\u0154Q\u0003\u0002\u0002\u0002",
    "\u0155\u0156\u0007.\u0002\u0002\u0156S\u0003\u0002\u0002\u0002\u0157",
    "\u0158\u0007,\u0002\u0002\u0158\u0159\u0005V,\u0002\u0159U\u0003\u0002",
    "\u0002\u0002\u015a\u015b\u0007;\u0002\u0002\u015b\u015c\u0007<\u0002",
    "\u0002\u015cW\u0003\u0002\u0002\u0002\u015d\u0168\u0005j6\u0002\u015e",
    "\u0168\u0005\\/\u0002\u015f\u0168\u0005^0\u0002\u0160\u0168\u0005`1",
    "\u0002\u0161\u0168\u0005b2\u0002\u0162\u0168\u0005d3\u0002\u0163\u0168",
    "\u0005f4\u0002\u0164\u0168\u0005h5\u0002\u0165\u0168\u0005Z.\u0002\u0166",
    "\u0168\u0005l7\u0002\u0167\u015d\u0003\u0002\u0002\u0002\u0167\u015e",
    "\u0003\u0002\u0002\u0002\u0167\u015f\u0003\u0002\u0002\u0002\u0167\u0160",
    "\u0003\u0002\u0002\u0002\u0167\u0161\u0003\u0002\u0002\u0002\u0167\u0162",
    "\u0003\u0002\u0002\u0002\u0167\u0163\u0003\u0002\u0002\u0002\u0167\u0164",
    "\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002\u0167\u0166",
    "\u0003\u0002\u0002\u0002\u0168Y\u0003\u0002\u0002\u0002\u0169\u016a",
    "\u0007\u0004\u0002\u0002\u016a\u016b\u0005n8\u0002\u016b\u016c\u0007",
    "C\u0002\u0002\u016c[\u0003\u0002\u0002\u0002\u016d\u016e\u0007\u0006",
    "\u0002\u0002\u016e\u016f\u0005n8\u0002\u016f\u0170\u0007C\u0002\u0002",
    "\u0170]\u0003\u0002\u0002\u0002\u0171\u0172\u0007\u0007\u0002\u0002",
    "\u0172\u0173\u0005n8\u0002\u0173\u0174\u0007C\u0002\u0002\u0174_\u0003",
    "\u0002\u0002\u0002\u0175\u0176\u0007\r\u0002\u0002\u0176\u0177\u0005",
    "n8\u0002\u0177\u0178\u0007C\u0002\u0002\u0178a\u0003\u0002\u0002\u0002",
    "\u0179\u017a\u0007\b\u0002\u0002\u017a\u017b\u0005n8\u0002\u017b\u017c",
    "\u0007C\u0002\u0002\u017cc\u0003\u0002\u0002\u0002\u017d\u017e\u0007",
    "\t\u0002\u0002\u017e\u017f\u0005n8\u0002\u017f\u0180\u0007C\u0002\u0002",
    "\u0180e\u0003\u0002\u0002\u0002\u0181\u0182\u0007\n\u0002\u0002\u0182",
    "\u0183\u0005n8\u0002\u0183\u0184\u0007C\u0002\u0002\u0184g\u0003\u0002",
    "\u0002\u0002\u0185\u0186\u0007\f\u0002\u0002\u0186\u0187\u0005n8\u0002",
    "\u0187\u0188\u0007C\u0002\u0002\u0188i\u0003\u0002\u0002\u0002\u0189",
    "\u018a\u0007\u000b\u0002\u0002\u018a\u018b\u0005n8\u0002\u018b\u018c",
    "\u0007C\u0002\u0002\u018ck\u0003\u0002\u0002\u0002\u018d\u018e\u0007",
    "\u0005\u0002\u0002\u018e\u018f\u0005n8\u0002\u018f\u0190\u0007C\u0002",
    "\u0002\u0190m\u0003\u0002\u0002\u0002\u0191\u0193\u0007B\u0002\u0002",
    "\u0192\u0191\u0003\u0002\u0002\u0002\u0193\u0196\u0003\u0002\u0002\u0002",
    "\u0194\u0192\u0003\u0002\u0002\u0002\u0194\u0195\u0003\u0002\u0002\u0002",
    "\u0195o\u0003\u0002\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002",
    "\u0197\u0198\u0007\u0010\u0002\u0002\u0198\u019d\u0005r:\u0002\u0199",
    "\u019a\u0007>\u0002\u0002\u019a\u019c\u0005r:\u0002\u019b\u0199\u0003",
    "\u0002\u0002\u0002\u019c\u019f\u0003\u0002\u0002\u0002\u019d\u019b\u0003",
    "\u0002\u0002\u0002\u019d\u019e\u0003\u0002\u0002\u0002\u019e\u01a0\u0003",
    "\u0002\u0002\u0002\u019f\u019d\u0003\u0002\u0002\u0002\u01a0\u01a1\u0005",
    "t;\u0002\u01a1q\u0003\u0002\u0002\u0002\u01a2\u01a3\u0007=\u0002\u0002",
    "\u01a3s\u0003\u0002\u0002\u0002\u01a4\u01a8\u0007?\u0002\u0002\u01a5",
    "\u01a6\u0007@\u0002\u0002\u01a6\u01a8\u0007A\u0002\u0002\u01a7\u01a4",
    "\u0003\u0002\u0002\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a8u",
    "\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007*\u0002\u0002\u01aaw\u0003",
    "\u0002\u0002\u0002$|\u0083\u0085\u008a\u008f\u0096\u009a\u00a2\u00ab",
    "\u00b5\u00bc\u00ca\u00cf\u00d2\u00d6\u00e8\u00ed\u00f4\u00fd\u0109\u0116",
    "\u011d\u0121\u0126\u012a\u012f\u0145\u014b\u014f\u0153\u0167\u0194\u019d",
    "\u01a7"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "SECTION_END", "BLOCK_TABLE_START", "BLOCK_ANON_START", 
                      "BLOCK_COMMENT_START", "BLOCK_FENCED_START", "BLOCK_LISTING_START", 
                      "BLOCK_LITERAL_START", "BLOCK_PASS_START", "BLOCK_SIDEBAR_START", 
                      "BLOCK_VERSE_START", "BLOCK_EXAMPLE_START", "H0", 
                      "ATTR_BEGIN", "PPD_START", "COMMENT", "END_OF_HEADER", 
                      "EOL", "WS", "DOCTITLE_CSP", "DOCTITLE_PART", "DOCTITLE_EOL", 
                      "AUTHOR_NAME", "AUTHOR_CONTACT", "AUTHOR_SEP", "AUTHOR_EOL", 
                      "AUTHOR_WS", "REV_NUMPREFIX", "REV_NUMBER", "REV_COMMA", 
                      "REV_COLON", "REV_EOL", "REV_DATE", "REV_REMARK", 
                      "ATTR_ID", "ATTR_UNSET", "ATTR_SEP", "ATTR_VALUE", 
                      "ATTR_EOL", "BLOCK_SECTION_TITLE", "BLOCK_ANCHOR", 
                      "BLOCK_ATTR_START", "BLOCK_TITLE_START", "BLOCK_DELIM_START", 
                      "BLOCK_PARA", "BLOCK_COMMENT", "BLOCK_EOP", "BLOCK_ATTR_ID", 
                      "BLOCK_ATTR_COMMA", "BLOCK_ATTR_ASSIGN", "BLOCK_ATTR_TYPE_ROLE", 
                      "BLOCK_ATTR_TYPE_OPTION", "BLOCK_ATTR_TYPE_ID", "BLOCK_ATTR_UNSET", 
                      "BLOCK_ATTR_END", "BLOCK_ATTR_EOL", "BLOCK_ATTR_VALUE", 
                      "BLOCK_TITLE_TEXT", "BLOCK_TITLE_EOL", "PPD_ATTR_ID", 
                      "PPD_ATTR_SEP", "PPD_CONTENT_SINGLELINE", "PPD_CONTENT_START", 
                      "PPD_CONTENT", "DELIM_BLOCK_LINE", "DELIM_BLOCK_END" ];

var ruleNames =  [ "asciidoc", "header", "author_rev", "header_line", "doc_title_line", 
                   "doc_title_def", "doc_title", "doc_subtitle", "authors", 
                   "author", "author_firstname", "author_middlename", "author_lastname", 
                   "author_contact", "revision", "rev_number", "rev_date", 
                   "rev_remark", "global_attr", "attr_def", "attr_set", 
                   "attr_unset", "attr_id", "attr_value", "preamble", "section", 
                   "section_header", "section_title", "block_attr_line", 
                   "block_attr", "block_positional_attr", "block_pos_prefixed_attr", 
                   "block_pos_attr_role", "block_pos_attr_id", "block_pos_attr_option", 
                   "block_named_attr", "block_attr_id", "block_attr_value", 
                   "section_body", "body_item", "paragraph", "block_title_line", 
                   "block_title", "delim_block", "table_block", "comment_block", 
                   "fenced_block", "example_block", "listing_block", "literal_block", 
                   "pass_block", "verse_block", "sidebar_block", "anon_block", 
                   "delim_block_content", "pp_directive", "ppd_attr", "ppd_content", 
                   "anchor" ];

function AsciidocParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

AsciidocParser.prototype = Object.create(antlr4.Parser.prototype);
AsciidocParser.prototype.constructor = AsciidocParser;

Object.defineProperty(AsciidocParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

AsciidocParser.EOF = antlr4.Token.EOF;
AsciidocParser.prototype.EOF = antlr4.Token.EOF;
AsciidocParser.SECTION_END = 1;
AsciidocParser.BLOCK_TABLE_START = 2;
AsciidocParser.BLOCK_ANON_START = 3;
AsciidocParser.BLOCK_COMMENT_START = 4;
AsciidocParser.BLOCK_FENCED_START = 5;
AsciidocParser.BLOCK_LISTING_START = 6;
AsciidocParser.BLOCK_LITERAL_START = 7;
AsciidocParser.BLOCK_PASS_START = 8;
AsciidocParser.BLOCK_SIDEBAR_START = 9;
AsciidocParser.BLOCK_VERSE_START = 10;
AsciidocParser.BLOCK_EXAMPLE_START = 11;
AsciidocParser.H0 = 12;
AsciidocParser.ATTR_BEGIN = 13;
AsciidocParser.PPD_START = 14;
AsciidocParser.COMMENT = 15;
AsciidocParser.END_OF_HEADER = 16;
AsciidocParser.EOL = 17;
AsciidocParser.WS = 18;
AsciidocParser.DOCTITLE_CSP = 19;
AsciidocParser.DOCTITLE_PART = 20;
AsciidocParser.DOCTITLE_EOL = 21;
AsciidocParser.AUTHOR_NAME = 22;
AsciidocParser.AUTHOR_CONTACT = 23;
AsciidocParser.AUTHOR_SEP = 24;
AsciidocParser.AUTHOR_EOL = 25;
AsciidocParser.AUTHOR_WS = 26;
AsciidocParser.REV_NUMPREFIX = 27;
AsciidocParser.REV_NUMBER = 28;
AsciidocParser.REV_COMMA = 29;
AsciidocParser.REV_COLON = 30;
AsciidocParser.REV_EOL = 31;
AsciidocParser.REV_DATE = 32;
AsciidocParser.REV_REMARK = 33;
AsciidocParser.ATTR_ID = 34;
AsciidocParser.ATTR_UNSET = 35;
AsciidocParser.ATTR_SEP = 36;
AsciidocParser.ATTR_VALUE = 37;
AsciidocParser.ATTR_EOL = 38;
AsciidocParser.BLOCK_SECTION_TITLE = 39;
AsciidocParser.BLOCK_ANCHOR = 40;
AsciidocParser.BLOCK_ATTR_START = 41;
AsciidocParser.BLOCK_TITLE_START = 42;
AsciidocParser.BLOCK_DELIM_START = 43;
AsciidocParser.BLOCK_PARA = 44;
AsciidocParser.BLOCK_COMMENT = 45;
AsciidocParser.BLOCK_EOP = 46;
AsciidocParser.BLOCK_ATTR_ID = 47;
AsciidocParser.BLOCK_ATTR_COMMA = 48;
AsciidocParser.BLOCK_ATTR_ASSIGN = 49;
AsciidocParser.BLOCK_ATTR_TYPE_ROLE = 50;
AsciidocParser.BLOCK_ATTR_TYPE_OPTION = 51;
AsciidocParser.BLOCK_ATTR_TYPE_ID = 52;
AsciidocParser.BLOCK_ATTR_UNSET = 53;
AsciidocParser.BLOCK_ATTR_END = 54;
AsciidocParser.BLOCK_ATTR_EOL = 55;
AsciidocParser.BLOCK_ATTR_VALUE = 56;
AsciidocParser.BLOCK_TITLE_TEXT = 57;
AsciidocParser.BLOCK_TITLE_EOL = 58;
AsciidocParser.PPD_ATTR_ID = 59;
AsciidocParser.PPD_ATTR_SEP = 60;
AsciidocParser.PPD_CONTENT_SINGLELINE = 61;
AsciidocParser.PPD_CONTENT_START = 62;
AsciidocParser.PPD_CONTENT = 63;
AsciidocParser.DELIM_BLOCK_LINE = 64;
AsciidocParser.DELIM_BLOCK_END = 65;

AsciidocParser.RULE_asciidoc = 0;
AsciidocParser.RULE_header = 1;
AsciidocParser.RULE_author_rev = 2;
AsciidocParser.RULE_header_line = 3;
AsciidocParser.RULE_doc_title_line = 4;
AsciidocParser.RULE_doc_title_def = 5;
AsciidocParser.RULE_doc_title = 6;
AsciidocParser.RULE_doc_subtitle = 7;
AsciidocParser.RULE_authors = 8;
AsciidocParser.RULE_author = 9;
AsciidocParser.RULE_author_firstname = 10;
AsciidocParser.RULE_author_middlename = 11;
AsciidocParser.RULE_author_lastname = 12;
AsciidocParser.RULE_author_contact = 13;
AsciidocParser.RULE_revision = 14;
AsciidocParser.RULE_rev_number = 15;
AsciidocParser.RULE_rev_date = 16;
AsciidocParser.RULE_rev_remark = 17;
AsciidocParser.RULE_global_attr = 18;
AsciidocParser.RULE_attr_def = 19;
AsciidocParser.RULE_attr_set = 20;
AsciidocParser.RULE_attr_unset = 21;
AsciidocParser.RULE_attr_id = 22;
AsciidocParser.RULE_attr_value = 23;
AsciidocParser.RULE_preamble = 24;
AsciidocParser.RULE_section = 25;
AsciidocParser.RULE_section_header = 26;
AsciidocParser.RULE_section_title = 27;
AsciidocParser.RULE_block_attr_line = 28;
AsciidocParser.RULE_block_attr = 29;
AsciidocParser.RULE_block_positional_attr = 30;
AsciidocParser.RULE_block_pos_prefixed_attr = 31;
AsciidocParser.RULE_block_pos_attr_role = 32;
AsciidocParser.RULE_block_pos_attr_id = 33;
AsciidocParser.RULE_block_pos_attr_option = 34;
AsciidocParser.RULE_block_named_attr = 35;
AsciidocParser.RULE_block_attr_id = 36;
AsciidocParser.RULE_block_attr_value = 37;
AsciidocParser.RULE_section_body = 38;
AsciidocParser.RULE_body_item = 39;
AsciidocParser.RULE_paragraph = 40;
AsciidocParser.RULE_block_title_line = 41;
AsciidocParser.RULE_block_title = 42;
AsciidocParser.RULE_delim_block = 43;
AsciidocParser.RULE_table_block = 44;
AsciidocParser.RULE_comment_block = 45;
AsciidocParser.RULE_fenced_block = 46;
AsciidocParser.RULE_example_block = 47;
AsciidocParser.RULE_listing_block = 48;
AsciidocParser.RULE_literal_block = 49;
AsciidocParser.RULE_pass_block = 50;
AsciidocParser.RULE_verse_block = 51;
AsciidocParser.RULE_sidebar_block = 52;
AsciidocParser.RULE_anon_block = 53;
AsciidocParser.RULE_delim_block_content = 54;
AsciidocParser.RULE_pp_directive = 55;
AsciidocParser.RULE_ppd_attr = 56;
AsciidocParser.RULE_ppd_content = 57;
AsciidocParser.RULE_anchor = 58;

function AsciidocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_asciidoc;
    return this;
}

AsciidocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AsciidocContext.prototype.constructor = AsciidocContext;

AsciidocContext.prototype.header = function() {
    return this.getTypedRuleContext(HeaderContext,0);
};

AsciidocContext.prototype.EOF = function() {
    return this.getToken(AsciidocParser.EOF, 0);
};

AsciidocContext.prototype.section = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SectionContext);
    } else {
        return this.getTypedRuleContext(SectionContext,i);
    }
};

AsciidocContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAsciidoc(this);
	}
};

AsciidocContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAsciidoc(this);
	}
};




AsciidocParser.AsciidocContext = AsciidocContext;

AsciidocParser.prototype.asciidoc = function() {

    var localctx = new AsciidocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, AsciidocParser.RULE_asciidoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.header();
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (AsciidocParser.BLOCK_SECTION_TITLE - 39)) | (1 << (AsciidocParser.BLOCK_ANCHOR - 39)) | (1 << (AsciidocParser.BLOCK_ATTR_START - 39)))) !== 0)) {
            this.state = 119;
            this.section();
            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 125;
        this.match(AsciidocParser.EOF);
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

function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_header;
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.doc_title_line = function() {
    return this.getTypedRuleContext(Doc_title_lineContext,0);
};

HeaderContext.prototype.END_OF_HEADER = function() {
    return this.getToken(AsciidocParser.END_OF_HEADER, 0);
};

HeaderContext.prototype.header_line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Header_lineContext);
    } else {
        return this.getTypedRuleContext(Header_lineContext,i);
    }
};

HeaderContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AsciidocParser.EOL);
    } else {
        return this.getToken(AsciidocParser.EOL, i);
    }
};


HeaderContext.prototype.author_rev = function() {
    return this.getTypedRuleContext(Author_revContext,0);
};

HeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterHeader(this);
	}
};

HeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitHeader(this);
	}
};




AsciidocParser.HeaderContext = HeaderContext;

AsciidocParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, AsciidocParser.RULE_header);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AsciidocParser.ATTR_BEGIN) | (1 << AsciidocParser.PPD_START) | (1 << AsciidocParser.EOL))) !== 0)) {
            this.state = 129;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case AsciidocParser.ATTR_BEGIN:
            case AsciidocParser.PPD_START:
                this.state = 127;
                this.header_line();
                break;
            case AsciidocParser.EOL:
                this.state = 128;
                this.match(AsciidocParser.EOL);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 134;
        this.doc_title_line();
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AsciidocParser.AUTHOR_NAME) {
            this.state = 135;
            this.author_rev();
        }

        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AsciidocParser.ATTR_BEGIN || _la===AsciidocParser.PPD_START) {
            this.state = 138;
            this.header_line();
            this.state = 143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 144;
        this.match(AsciidocParser.END_OF_HEADER);
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

function Author_revContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_author_rev;
    return this;
}

Author_revContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Author_revContext.prototype.constructor = Author_revContext;

Author_revContext.prototype.authors = function() {
    return this.getTypedRuleContext(AuthorsContext,0);
};

Author_revContext.prototype.revision = function() {
    return this.getTypedRuleContext(RevisionContext,0);
};

Author_revContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAuthor_rev(this);
	}
};

Author_revContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAuthor_rev(this);
	}
};




AsciidocParser.Author_revContext = Author_revContext;

AsciidocParser.prototype.author_rev = function() {

    var localctx = new Author_revContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, AsciidocParser.RULE_author_rev);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.authors();
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (AsciidocParser.REV_NUMPREFIX - 27)) | (1 << (AsciidocParser.REV_NUMBER - 27)) | (1 << (AsciidocParser.REV_COLON - 27)) | (1 << (AsciidocParser.REV_EOL - 27)) | (1 << (AsciidocParser.REV_DATE - 27)))) !== 0)) {
            this.state = 147;
            this.revision();
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

function Header_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_header_line;
    return this;
}

Header_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Header_lineContext.prototype.constructor = Header_lineContext;

Header_lineContext.prototype.global_attr = function() {
    return this.getTypedRuleContext(Global_attrContext,0);
};

Header_lineContext.prototype.pp_directive = function() {
    return this.getTypedRuleContext(Pp_directiveContext,0);
};

Header_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterHeader_line(this);
	}
};

Header_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitHeader_line(this);
	}
};




AsciidocParser.Header_lineContext = Header_lineContext;

AsciidocParser.prototype.header_line = function() {

    var localctx = new Header_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, AsciidocParser.RULE_header_line);
    try {
        this.state = 152;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case AsciidocParser.ATTR_BEGIN:
            this.enterOuterAlt(localctx, 1);
            this.state = 150;
            this.global_attr();
            break;
        case AsciidocParser.PPD_START:
            this.enterOuterAlt(localctx, 2);
            this.state = 151;
            this.pp_directive();
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

function Doc_title_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_doc_title_line;
    return this;
}

Doc_title_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Doc_title_lineContext.prototype.constructor = Doc_title_lineContext;

Doc_title_lineContext.prototype.H0 = function() {
    return this.getToken(AsciidocParser.H0, 0);
};

Doc_title_lineContext.prototype.doc_title_def = function() {
    return this.getTypedRuleContext(Doc_title_defContext,0);
};

Doc_title_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterDoc_title_line(this);
	}
};

Doc_title_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitDoc_title_line(this);
	}
};




AsciidocParser.Doc_title_lineContext = Doc_title_lineContext;

AsciidocParser.prototype.doc_title_line = function() {

    var localctx = new Doc_title_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, AsciidocParser.RULE_doc_title_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(AsciidocParser.H0);
        this.state = 155;
        this.doc_title_def();
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

function Doc_title_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_doc_title_def;
    return this;
}

Doc_title_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Doc_title_defContext.prototype.constructor = Doc_title_defContext;

Doc_title_defContext.prototype.doc_title = function() {
    return this.getTypedRuleContext(Doc_titleContext,0);
};

Doc_title_defContext.prototype.DOCTITLE_EOL = function() {
    return this.getToken(AsciidocParser.DOCTITLE_EOL, 0);
};

Doc_title_defContext.prototype.DOCTITLE_CSP = function() {
    return this.getToken(AsciidocParser.DOCTITLE_CSP, 0);
};

Doc_title_defContext.prototype.doc_subtitle = function() {
    return this.getTypedRuleContext(Doc_subtitleContext,0);
};

Doc_title_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterDoc_title_def(this);
	}
};

Doc_title_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitDoc_title_def(this);
	}
};




AsciidocParser.Doc_title_defContext = Doc_title_defContext;

AsciidocParser.prototype.doc_title_def = function() {

    var localctx = new Doc_title_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, AsciidocParser.RULE_doc_title_def);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.doc_title();
        this.state = 160;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AsciidocParser.DOCTITLE_CSP) {
            this.state = 158;
            this.match(AsciidocParser.DOCTITLE_CSP);
            this.state = 159;
            this.doc_subtitle();
        }

        this.state = 162;
        this.match(AsciidocParser.DOCTITLE_EOL);
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

function Doc_titleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_doc_title;
    return this;
}

Doc_titleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Doc_titleContext.prototype.constructor = Doc_titleContext;

Doc_titleContext.prototype.DOCTITLE_PART = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AsciidocParser.DOCTITLE_PART);
    } else {
        return this.getToken(AsciidocParser.DOCTITLE_PART, i);
    }
};


Doc_titleContext.prototype.DOCTITLE_CSP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AsciidocParser.DOCTITLE_CSP);
    } else {
        return this.getToken(AsciidocParser.DOCTITLE_CSP, i);
    }
};


Doc_titleContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterDoc_title(this);
	}
};

Doc_titleContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitDoc_title(this);
	}
};




AsciidocParser.Doc_titleContext = Doc_titleContext;

AsciidocParser.prototype.doc_title = function() {

    var localctx = new Doc_titleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, AsciidocParser.RULE_doc_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(AsciidocParser.DOCTITLE_PART);
        this.state = 169;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 165;
                this.match(AsciidocParser.DOCTITLE_CSP);
                this.state = 166;
                this.match(AsciidocParser.DOCTITLE_PART); 
            }
            this.state = 171;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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

function Doc_subtitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_doc_subtitle;
    return this;
}

Doc_subtitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Doc_subtitleContext.prototype.constructor = Doc_subtitleContext;

Doc_subtitleContext.prototype.DOCTITLE_PART = function() {
    return this.getToken(AsciidocParser.DOCTITLE_PART, 0);
};

Doc_subtitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterDoc_subtitle(this);
	}
};

Doc_subtitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitDoc_subtitle(this);
	}
};




AsciidocParser.Doc_subtitleContext = Doc_subtitleContext;

AsciidocParser.prototype.doc_subtitle = function() {

    var localctx = new Doc_subtitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, AsciidocParser.RULE_doc_subtitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(AsciidocParser.DOCTITLE_PART);
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

function AuthorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_authors;
    return this;
}

AuthorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AuthorsContext.prototype.constructor = AuthorsContext;

AuthorsContext.prototype.author = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AuthorContext);
    } else {
        return this.getTypedRuleContext(AuthorContext,i);
    }
};

AuthorsContext.prototype.AUTHOR_EOL = function() {
    return this.getToken(AsciidocParser.AUTHOR_EOL, 0);
};

AuthorsContext.prototype.AUTHOR_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AsciidocParser.AUTHOR_SEP);
    } else {
        return this.getToken(AsciidocParser.AUTHOR_SEP, i);
    }
};


AuthorsContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAuthors(this);
	}
};

AuthorsContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAuthors(this);
	}
};




AsciidocParser.AuthorsContext = AuthorsContext;

AsciidocParser.prototype.authors = function() {

    var localctx = new AuthorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, AsciidocParser.RULE_authors);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.author();
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AsciidocParser.AUTHOR_SEP) {
            this.state = 175;
            this.match(AsciidocParser.AUTHOR_SEP);
            this.state = 176;
            this.author();
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 182;
        this.match(AsciidocParser.AUTHOR_EOL);
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

function AuthorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_author;
    return this;
}

AuthorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AuthorContext.prototype.constructor = AuthorContext;

AuthorContext.prototype.author_firstname = function() {
    return this.getTypedRuleContext(Author_firstnameContext,0);
};

AuthorContext.prototype.author_lastname = function() {
    return this.getTypedRuleContext(Author_lastnameContext,0);
};

AuthorContext.prototype.author_contact = function() {
    return this.getTypedRuleContext(Author_contactContext,0);
};

AuthorContext.prototype.author_middlename = function() {
    return this.getTypedRuleContext(Author_middlenameContext,0);
};

AuthorContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAuthor(this);
	}
};

AuthorContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAuthor(this);
	}
};




AsciidocParser.AuthorContext = AuthorContext;

AsciidocParser.prototype.author = function() {

    var localctx = new AuthorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, AsciidocParser.RULE_author);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.author_firstname();
        this.state = 186;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 185;
            this.author_middlename();

        }
        this.state = 188;
        this.author_lastname();
        this.state = 189;
        this.author_contact();
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

function Author_firstnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_author_firstname;
    return this;
}

Author_firstnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Author_firstnameContext.prototype.constructor = Author_firstnameContext;

Author_firstnameContext.prototype.AUTHOR_NAME = function() {
    return this.getToken(AsciidocParser.AUTHOR_NAME, 0);
};

Author_firstnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAuthor_firstname(this);
	}
};

Author_firstnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAuthor_firstname(this);
	}
};




AsciidocParser.Author_firstnameContext = Author_firstnameContext;

AsciidocParser.prototype.author_firstname = function() {

    var localctx = new Author_firstnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, AsciidocParser.RULE_author_firstname);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(AsciidocParser.AUTHOR_NAME);
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

function Author_middlenameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_author_middlename;
    return this;
}

Author_middlenameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Author_middlenameContext.prototype.constructor = Author_middlenameContext;

Author_middlenameContext.prototype.AUTHOR_NAME = function() {
    return this.getToken(AsciidocParser.AUTHOR_NAME, 0);
};

Author_middlenameContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAuthor_middlename(this);
	}
};

Author_middlenameContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAuthor_middlename(this);
	}
};




AsciidocParser.Author_middlenameContext = Author_middlenameContext;

AsciidocParser.prototype.author_middlename = function() {

    var localctx = new Author_middlenameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, AsciidocParser.RULE_author_middlename);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(AsciidocParser.AUTHOR_NAME);
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

function Author_lastnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_author_lastname;
    return this;
}

Author_lastnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Author_lastnameContext.prototype.constructor = Author_lastnameContext;

Author_lastnameContext.prototype.AUTHOR_NAME = function() {
    return this.getToken(AsciidocParser.AUTHOR_NAME, 0);
};

Author_lastnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAuthor_lastname(this);
	}
};

Author_lastnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAuthor_lastname(this);
	}
};




AsciidocParser.Author_lastnameContext = Author_lastnameContext;

AsciidocParser.prototype.author_lastname = function() {

    var localctx = new Author_lastnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, AsciidocParser.RULE_author_lastname);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(AsciidocParser.AUTHOR_NAME);
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

function Author_contactContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_author_contact;
    return this;
}

Author_contactContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Author_contactContext.prototype.constructor = Author_contactContext;

Author_contactContext.prototype.AUTHOR_CONTACT = function() {
    return this.getToken(AsciidocParser.AUTHOR_CONTACT, 0);
};

Author_contactContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAuthor_contact(this);
	}
};

Author_contactContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAuthor_contact(this);
	}
};




AsciidocParser.Author_contactContext = Author_contactContext;

AsciidocParser.prototype.author_contact = function() {

    var localctx = new Author_contactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, AsciidocParser.RULE_author_contact);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(AsciidocParser.AUTHOR_CONTACT);
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

function RevisionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_revision;
    return this;
}

RevisionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RevisionContext.prototype.constructor = RevisionContext;

RevisionContext.prototype.REV_EOL = function() {
    return this.getToken(AsciidocParser.REV_EOL, 0);
};

RevisionContext.prototype.rev_number = function() {
    return this.getTypedRuleContext(Rev_numberContext,0);
};

RevisionContext.prototype.REV_COMMA = function() {
    return this.getToken(AsciidocParser.REV_COMMA, 0);
};

RevisionContext.prototype.rev_date = function() {
    return this.getTypedRuleContext(Rev_dateContext,0);
};

RevisionContext.prototype.REV_COLON = function() {
    return this.getToken(AsciidocParser.REV_COLON, 0);
};

RevisionContext.prototype.rev_remark = function() {
    return this.getTypedRuleContext(Rev_remarkContext,0);
};

RevisionContext.prototype.REV_NUMPREFIX = function() {
    return this.getToken(AsciidocParser.REV_NUMPREFIX, 0);
};

RevisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterRevision(this);
	}
};

RevisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitRevision(this);
	}
};




AsciidocParser.RevisionContext = RevisionContext;

AsciidocParser.prototype.revision = function() {

    var localctx = new RevisionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, AsciidocParser.RULE_revision);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AsciidocParser.REV_NUMPREFIX || _la===AsciidocParser.REV_NUMBER) {
            this.state = 200;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===AsciidocParser.REV_NUMPREFIX) {
                this.state = 199;
                this.match(AsciidocParser.REV_NUMPREFIX);
            }

            this.state = 202;
            this.rev_number();
            this.state = 203;
            this.match(AsciidocParser.REV_COMMA);
        }

        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AsciidocParser.REV_DATE) {
            this.state = 207;
            this.rev_date();
        }

        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AsciidocParser.REV_COLON) {
            this.state = 210;
            this.match(AsciidocParser.REV_COLON);
            this.state = 211;
            this.rev_remark();
        }

        this.state = 214;
        this.match(AsciidocParser.REV_EOL);
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

function Rev_numberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_rev_number;
    return this;
}

Rev_numberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rev_numberContext.prototype.constructor = Rev_numberContext;

Rev_numberContext.prototype.REV_NUMBER = function() {
    return this.getToken(AsciidocParser.REV_NUMBER, 0);
};

Rev_numberContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterRev_number(this);
	}
};

Rev_numberContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitRev_number(this);
	}
};




AsciidocParser.Rev_numberContext = Rev_numberContext;

AsciidocParser.prototype.rev_number = function() {

    var localctx = new Rev_numberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, AsciidocParser.RULE_rev_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(AsciidocParser.REV_NUMBER);
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

function Rev_dateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_rev_date;
    return this;
}

Rev_dateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rev_dateContext.prototype.constructor = Rev_dateContext;

Rev_dateContext.prototype.REV_DATE = function() {
    return this.getToken(AsciidocParser.REV_DATE, 0);
};

Rev_dateContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterRev_date(this);
	}
};

Rev_dateContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitRev_date(this);
	}
};




AsciidocParser.Rev_dateContext = Rev_dateContext;

AsciidocParser.prototype.rev_date = function() {

    var localctx = new Rev_dateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, AsciidocParser.RULE_rev_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.match(AsciidocParser.REV_DATE);
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

function Rev_remarkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_rev_remark;
    return this;
}

Rev_remarkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rev_remarkContext.prototype.constructor = Rev_remarkContext;

Rev_remarkContext.prototype.REV_REMARK = function() {
    return this.getToken(AsciidocParser.REV_REMARK, 0);
};

Rev_remarkContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterRev_remark(this);
	}
};

Rev_remarkContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitRev_remark(this);
	}
};




AsciidocParser.Rev_remarkContext = Rev_remarkContext;

AsciidocParser.prototype.rev_remark = function() {

    var localctx = new Rev_remarkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, AsciidocParser.RULE_rev_remark);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(AsciidocParser.REV_REMARK);
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

function Global_attrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_global_attr;
    return this;
}

Global_attrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Global_attrContext.prototype.constructor = Global_attrContext;

Global_attrContext.prototype.ATTR_BEGIN = function() {
    return this.getToken(AsciidocParser.ATTR_BEGIN, 0);
};

Global_attrContext.prototype.attr_def = function() {
    return this.getTypedRuleContext(Attr_defContext,0);
};

Global_attrContext.prototype.ATTR_EOL = function() {
    return this.getToken(AsciidocParser.ATTR_EOL, 0);
};

Global_attrContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterGlobal_attr(this);
	}
};

Global_attrContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitGlobal_attr(this);
	}
};




AsciidocParser.Global_attrContext = Global_attrContext;

AsciidocParser.prototype.global_attr = function() {

    var localctx = new Global_attrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, AsciidocParser.RULE_global_attr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 222;
        this.match(AsciidocParser.ATTR_BEGIN);
        this.state = 223;
        this.attr_def();
        this.state = 224;
        this.match(AsciidocParser.ATTR_EOL);
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

function Attr_defContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_attr_def;
    return this;
}

Attr_defContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attr_defContext.prototype.constructor = Attr_defContext;

Attr_defContext.prototype.attr_unset = function() {
    return this.getTypedRuleContext(Attr_unsetContext,0);
};

Attr_defContext.prototype.ATTR_SEP = function() {
    return this.getToken(AsciidocParser.ATTR_SEP, 0);
};

Attr_defContext.prototype.attr_set = function() {
    return this.getTypedRuleContext(Attr_setContext,0);
};

Attr_defContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAttr_def(this);
	}
};

Attr_defContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAttr_def(this);
	}
};




AsciidocParser.Attr_defContext = Attr_defContext;

AsciidocParser.prototype.attr_def = function() {

    var localctx = new Attr_defContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, AsciidocParser.RULE_attr_def);
    try {
        this.state = 230;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 226;
            this.attr_unset();
            this.state = 227;
            this.match(AsciidocParser.ATTR_SEP);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 229;
            this.attr_set();
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

function Attr_setContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_attr_set;
    return this;
}

Attr_setContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attr_setContext.prototype.constructor = Attr_setContext;

Attr_setContext.prototype.attr_id = function() {
    return this.getTypedRuleContext(Attr_idContext,0);
};

Attr_setContext.prototype.ATTR_SEP = function() {
    return this.getToken(AsciidocParser.ATTR_SEP, 0);
};

Attr_setContext.prototype.attr_value = function() {
    return this.getTypedRuleContext(Attr_valueContext,0);
};

Attr_setContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAttr_set(this);
	}
};

Attr_setContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAttr_set(this);
	}
};




AsciidocParser.Attr_setContext = Attr_setContext;

AsciidocParser.prototype.attr_set = function() {

    var localctx = new Attr_setContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, AsciidocParser.RULE_attr_set);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.attr_id();
        this.state = 233;
        this.match(AsciidocParser.ATTR_SEP);
        this.state = 235;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AsciidocParser.ATTR_VALUE) {
            this.state = 234;
            this.attr_value();
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

function Attr_unsetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_attr_unset;
    return this;
}

Attr_unsetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attr_unsetContext.prototype.constructor = Attr_unsetContext;

Attr_unsetContext.prototype.ATTR_UNSET = function() {
    return this.getToken(AsciidocParser.ATTR_UNSET, 0);
};

Attr_unsetContext.prototype.attr_id = function() {
    return this.getTypedRuleContext(Attr_idContext,0);
};

Attr_unsetContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAttr_unset(this);
	}
};

Attr_unsetContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAttr_unset(this);
	}
};




AsciidocParser.Attr_unsetContext = Attr_unsetContext;

AsciidocParser.prototype.attr_unset = function() {

    var localctx = new Attr_unsetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, AsciidocParser.RULE_attr_unset);
    try {
        this.state = 242;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case AsciidocParser.ATTR_UNSET:
            this.enterOuterAlt(localctx, 1);
            this.state = 237;
            this.match(AsciidocParser.ATTR_UNSET);
            this.state = 238;
            this.attr_id();
            break;
        case AsciidocParser.ATTR_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 239;
            this.attr_id();
            this.state = 240;
            this.match(AsciidocParser.ATTR_UNSET);
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

function Attr_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_attr_id;
    return this;
}

Attr_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attr_idContext.prototype.constructor = Attr_idContext;

Attr_idContext.prototype.ATTR_ID = function() {
    return this.getToken(AsciidocParser.ATTR_ID, 0);
};

Attr_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAttr_id(this);
	}
};

Attr_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAttr_id(this);
	}
};




AsciidocParser.Attr_idContext = Attr_idContext;

AsciidocParser.prototype.attr_id = function() {

    var localctx = new Attr_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, AsciidocParser.RULE_attr_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(AsciidocParser.ATTR_ID);
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

function Attr_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_attr_value;
    return this;
}

Attr_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attr_valueContext.prototype.constructor = Attr_valueContext;

Attr_valueContext.prototype.ATTR_VALUE = function() {
    return this.getToken(AsciidocParser.ATTR_VALUE, 0);
};

Attr_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAttr_value(this);
	}
};

Attr_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAttr_value(this);
	}
};




AsciidocParser.Attr_valueContext = Attr_valueContext;

AsciidocParser.prototype.attr_value = function() {

    var localctx = new Attr_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, AsciidocParser.RULE_attr_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(AsciidocParser.ATTR_VALUE);
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

function PreambleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_preamble;
    return this;
}

PreambleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PreambleContext.prototype.constructor = PreambleContext;

PreambleContext.prototype.SECTION_END = function() {
    return this.getToken(AsciidocParser.SECTION_END, 0);
};

PreambleContext.prototype.body_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Body_itemContext);
    } else {
        return this.getTypedRuleContext(Body_itemContext,i);
    }
};

PreambleContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterPreamble(this);
	}
};

PreambleContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitPreamble(this);
	}
};




AsciidocParser.PreambleContext = PreambleContext;

AsciidocParser.prototype.preamble = function() {

    var localctx = new PreambleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, AsciidocParser.RULE_preamble);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AsciidocParser.BLOCK_TABLE_START) | (1 << AsciidocParser.BLOCK_ANON_START) | (1 << AsciidocParser.BLOCK_COMMENT_START) | (1 << AsciidocParser.BLOCK_FENCED_START) | (1 << AsciidocParser.BLOCK_LISTING_START) | (1 << AsciidocParser.BLOCK_LITERAL_START) | (1 << AsciidocParser.BLOCK_PASS_START) | (1 << AsciidocParser.BLOCK_SIDEBAR_START) | (1 << AsciidocParser.BLOCK_VERSE_START) | (1 << AsciidocParser.BLOCK_EXAMPLE_START))) !== 0) || ((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (AsciidocParser.BLOCK_ANCHOR - 40)) | (1 << (AsciidocParser.BLOCK_ATTR_START - 40)) | (1 << (AsciidocParser.BLOCK_TITLE_START - 40)) | (1 << (AsciidocParser.BLOCK_PARA - 40)))) !== 0)) {
            this.state = 248;
            this.body_item();
            this.state = 253;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 254;
        this.match(AsciidocParser.SECTION_END);
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

function SectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_section;
    return this;
}

SectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SectionContext.prototype.constructor = SectionContext;

SectionContext.prototype.section_header = function() {
    return this.getTypedRuleContext(Section_headerContext,0);
};

SectionContext.prototype.section_body = function() {
    return this.getTypedRuleContext(Section_bodyContext,0);
};

SectionContext.prototype.SECTION_END = function() {
    return this.getToken(AsciidocParser.SECTION_END, 0);
};

SectionContext.prototype.EOF = function() {
    return this.getToken(AsciidocParser.EOF, 0);
};

SectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterSection(this);
	}
};

SectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitSection(this);
	}
};




AsciidocParser.SectionContext = SectionContext;

AsciidocParser.prototype.section = function() {

    var localctx = new SectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, AsciidocParser.RULE_section);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        this.section_header();
        this.state = 257;
        this.section_body();
        this.state = 258;
        _la = this._input.LA(1);
        if(!(_la===AsciidocParser.EOF || _la===AsciidocParser.SECTION_END)) {
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

function Section_headerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_section_header;
    return this;
}

Section_headerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Section_headerContext.prototype.constructor = Section_headerContext;

Section_headerContext.prototype.section_title = function() {
    return this.getTypedRuleContext(Section_titleContext,0);
};

Section_headerContext.prototype.block_attr_line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Block_attr_lineContext);
    } else {
        return this.getTypedRuleContext(Block_attr_lineContext,i);
    }
};

Section_headerContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterSection_header(this);
	}
};

Section_headerContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitSection_header(this);
	}
};




AsciidocParser.Section_headerContext = Section_headerContext;

AsciidocParser.prototype.section_header = function() {

    var localctx = new Section_headerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, AsciidocParser.RULE_section_header);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AsciidocParser.BLOCK_ANCHOR || _la===AsciidocParser.BLOCK_ATTR_START) {
            this.state = 260;
            this.block_attr_line();
            this.state = 265;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 266;
        this.section_title();
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

function Section_titleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_section_title;
    return this;
}

Section_titleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Section_titleContext.prototype.constructor = Section_titleContext;

Section_titleContext.prototype.BLOCK_SECTION_TITLE = function() {
    return this.getToken(AsciidocParser.BLOCK_SECTION_TITLE, 0);
};

Section_titleContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterSection_title(this);
	}
};

Section_titleContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitSection_title(this);
	}
};




AsciidocParser.Section_titleContext = Section_titleContext;

AsciidocParser.prototype.section_title = function() {

    var localctx = new Section_titleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, AsciidocParser.RULE_section_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(AsciidocParser.BLOCK_SECTION_TITLE);
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

function Block_attr_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_attr_line;
    return this;
}

Block_attr_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_attr_lineContext.prototype.constructor = Block_attr_lineContext;

Block_attr_lineContext.prototype.BLOCK_ATTR_START = function() {
    return this.getToken(AsciidocParser.BLOCK_ATTR_START, 0);
};

Block_attr_lineContext.prototype.block_attr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Block_attrContext);
    } else {
        return this.getTypedRuleContext(Block_attrContext,i);
    }
};

Block_attr_lineContext.prototype.BLOCK_ATTR_END = function() {
    return this.getToken(AsciidocParser.BLOCK_ATTR_END, 0);
};

Block_attr_lineContext.prototype.BLOCK_ATTR_EOL = function() {
    return this.getToken(AsciidocParser.BLOCK_ATTR_EOL, 0);
};

Block_attr_lineContext.prototype.BLOCK_ATTR_COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AsciidocParser.BLOCK_ATTR_COMMA);
    } else {
        return this.getToken(AsciidocParser.BLOCK_ATTR_COMMA, i);
    }
};


Block_attr_lineContext.prototype.anchor = function() {
    return this.getTypedRuleContext(AnchorContext,0);
};

Block_attr_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_attr_line(this);
	}
};

Block_attr_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_attr_line(this);
	}
};




AsciidocParser.Block_attr_lineContext = Block_attr_lineContext;

AsciidocParser.prototype.block_attr_line = function() {

    var localctx = new Block_attr_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, AsciidocParser.RULE_block_attr_line);
    var _la = 0; // Token type
    try {
        this.state = 283;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case AsciidocParser.BLOCK_ATTR_START:
            this.enterOuterAlt(localctx, 1);
            this.state = 270;
            this.match(AsciidocParser.BLOCK_ATTR_START);
            this.state = 271;
            this.block_attr();
            this.state = 276;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===AsciidocParser.BLOCK_ATTR_COMMA) {
                this.state = 272;
                this.match(AsciidocParser.BLOCK_ATTR_COMMA);
                this.state = 273;
                this.block_attr();
                this.state = 278;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 279;
            this.match(AsciidocParser.BLOCK_ATTR_END);
            this.state = 280;
            this.match(AsciidocParser.BLOCK_ATTR_EOL);
            break;
        case AsciidocParser.BLOCK_ANCHOR:
            this.enterOuterAlt(localctx, 2);
            this.state = 282;
            this.anchor();
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

function Block_attrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_attr;
    return this;
}

Block_attrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_attrContext.prototype.constructor = Block_attrContext;

Block_attrContext.prototype.block_named_attr = function() {
    return this.getTypedRuleContext(Block_named_attrContext,0);
};

Block_attrContext.prototype.block_positional_attr = function() {
    return this.getTypedRuleContext(Block_positional_attrContext,0);
};

Block_attrContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_attr(this);
	}
};

Block_attrContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_attr(this);
	}
};




AsciidocParser.Block_attrContext = Block_attrContext;

AsciidocParser.prototype.block_attr = function() {

    var localctx = new Block_attrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, AsciidocParser.RULE_block_attr);
    try {
        this.state = 287;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 285;
            this.block_named_attr();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 286;
            this.block_positional_attr();
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

function Block_positional_attrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_positional_attr;
    return this;
}

Block_positional_attrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_positional_attrContext.prototype.constructor = Block_positional_attrContext;

Block_positional_attrContext.prototype.block_pos_prefixed_attr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Block_pos_prefixed_attrContext);
    } else {
        return this.getTypedRuleContext(Block_pos_prefixed_attrContext,i);
    }
};

Block_positional_attrContext.prototype.block_attr_id = function() {
    return this.getTypedRuleContext(Block_attr_idContext,0);
};

Block_positional_attrContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_positional_attr(this);
	}
};

Block_positional_attrContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_positional_attr(this);
	}
};




AsciidocParser.Block_positional_attrContext = Block_positional_attrContext;

AsciidocParser.prototype.block_positional_attr = function() {

    var localctx = new Block_positional_attrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, AsciidocParser.RULE_block_positional_attr);
    var _la = 0; // Token type
    try {
        this.state = 296;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case AsciidocParser.BLOCK_ATTR_COMMA:
        case AsciidocParser.BLOCK_ATTR_TYPE_ROLE:
        case AsciidocParser.BLOCK_ATTR_TYPE_ID:
        case AsciidocParser.BLOCK_ATTR_END:
            this.enterOuterAlt(localctx, 1);
            this.state = 292;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===AsciidocParser.BLOCK_ATTR_TYPE_ROLE || _la===AsciidocParser.BLOCK_ATTR_TYPE_ID) {
                this.state = 289;
                this.block_pos_prefixed_attr();
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case AsciidocParser.BLOCK_ATTR_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 295;
            this.block_attr_id();
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

function Block_pos_prefixed_attrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_pos_prefixed_attr;
    return this;
}

Block_pos_prefixed_attrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_pos_prefixed_attrContext.prototype.constructor = Block_pos_prefixed_attrContext;

Block_pos_prefixed_attrContext.prototype.block_pos_attr_role = function() {
    return this.getTypedRuleContext(Block_pos_attr_roleContext,0);
};

Block_pos_prefixed_attrContext.prototype.block_pos_attr_id = function() {
    return this.getTypedRuleContext(Block_pos_attr_idContext,0);
};

Block_pos_prefixed_attrContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_pos_prefixed_attr(this);
	}
};

Block_pos_prefixed_attrContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_pos_prefixed_attr(this);
	}
};




AsciidocParser.Block_pos_prefixed_attrContext = Block_pos_prefixed_attrContext;

AsciidocParser.prototype.block_pos_prefixed_attr = function() {

    var localctx = new Block_pos_prefixed_attrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, AsciidocParser.RULE_block_pos_prefixed_attr);
    try {
        this.state = 301;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 298;
            this.block_pos_attr_role();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 299;
            this.block_pos_attr_id();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 300;
            this.block_pos_attr_id();
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

function Block_pos_attr_roleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_pos_attr_role;
    return this;
}

Block_pos_attr_roleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_pos_attr_roleContext.prototype.constructor = Block_pos_attr_roleContext;

Block_pos_attr_roleContext.prototype.BLOCK_ATTR_TYPE_ROLE = function() {
    return this.getToken(AsciidocParser.BLOCK_ATTR_TYPE_ROLE, 0);
};

Block_pos_attr_roleContext.prototype.block_attr_id = function() {
    return this.getTypedRuleContext(Block_attr_idContext,0);
};

Block_pos_attr_roleContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_pos_attr_role(this);
	}
};

Block_pos_attr_roleContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_pos_attr_role(this);
	}
};




AsciidocParser.Block_pos_attr_roleContext = Block_pos_attr_roleContext;

AsciidocParser.prototype.block_pos_attr_role = function() {

    var localctx = new Block_pos_attr_roleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, AsciidocParser.RULE_block_pos_attr_role);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.match(AsciidocParser.BLOCK_ATTR_TYPE_ROLE);
        this.state = 304;
        this.block_attr_id();
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

function Block_pos_attr_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_pos_attr_id;
    return this;
}

Block_pos_attr_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_pos_attr_idContext.prototype.constructor = Block_pos_attr_idContext;

Block_pos_attr_idContext.prototype.BLOCK_ATTR_TYPE_ID = function() {
    return this.getToken(AsciidocParser.BLOCK_ATTR_TYPE_ID, 0);
};

Block_pos_attr_idContext.prototype.block_attr_id = function() {
    return this.getTypedRuleContext(Block_attr_idContext,0);
};

Block_pos_attr_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_pos_attr_id(this);
	}
};

Block_pos_attr_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_pos_attr_id(this);
	}
};




AsciidocParser.Block_pos_attr_idContext = Block_pos_attr_idContext;

AsciidocParser.prototype.block_pos_attr_id = function() {

    var localctx = new Block_pos_attr_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, AsciidocParser.RULE_block_pos_attr_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        this.match(AsciidocParser.BLOCK_ATTR_TYPE_ID);
        this.state = 307;
        this.block_attr_id();
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

function Block_pos_attr_optionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_pos_attr_option;
    return this;
}

Block_pos_attr_optionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_pos_attr_optionContext.prototype.constructor = Block_pos_attr_optionContext;

Block_pos_attr_optionContext.prototype.BLOCK_ATTR_TYPE_OPTION = function() {
    return this.getToken(AsciidocParser.BLOCK_ATTR_TYPE_OPTION, 0);
};

Block_pos_attr_optionContext.prototype.block_attr_id = function() {
    return this.getTypedRuleContext(Block_attr_idContext,0);
};

Block_pos_attr_optionContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_pos_attr_option(this);
	}
};

Block_pos_attr_optionContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_pos_attr_option(this);
	}
};




AsciidocParser.Block_pos_attr_optionContext = Block_pos_attr_optionContext;

AsciidocParser.prototype.block_pos_attr_option = function() {

    var localctx = new Block_pos_attr_optionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, AsciidocParser.RULE_block_pos_attr_option);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(AsciidocParser.BLOCK_ATTR_TYPE_OPTION);
        this.state = 310;
        this.block_attr_id();
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

function Block_named_attrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_named_attr;
    return this;
}

Block_named_attrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_named_attrContext.prototype.constructor = Block_named_attrContext;

Block_named_attrContext.prototype.block_attr_id = function() {
    return this.getTypedRuleContext(Block_attr_idContext,0);
};

Block_named_attrContext.prototype.BLOCK_ATTR_ASSIGN = function() {
    return this.getToken(AsciidocParser.BLOCK_ATTR_ASSIGN, 0);
};

Block_named_attrContext.prototype.block_attr_value = function() {
    return this.getTypedRuleContext(Block_attr_valueContext,0);
};

Block_named_attrContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_named_attr(this);
	}
};

Block_named_attrContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_named_attr(this);
	}
};




AsciidocParser.Block_named_attrContext = Block_named_attrContext;

AsciidocParser.prototype.block_named_attr = function() {

    var localctx = new Block_named_attrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, AsciidocParser.RULE_block_named_attr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
        this.block_attr_id();
        this.state = 313;
        this.match(AsciidocParser.BLOCK_ATTR_ASSIGN);
        this.state = 314;
        this.block_attr_value();
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

function Block_attr_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_attr_id;
    return this;
}

Block_attr_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_attr_idContext.prototype.constructor = Block_attr_idContext;

Block_attr_idContext.prototype.BLOCK_ATTR_ID = function() {
    return this.getToken(AsciidocParser.BLOCK_ATTR_ID, 0);
};

Block_attr_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_attr_id(this);
	}
};

Block_attr_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_attr_id(this);
	}
};




AsciidocParser.Block_attr_idContext = Block_attr_idContext;

AsciidocParser.prototype.block_attr_id = function() {

    var localctx = new Block_attr_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, AsciidocParser.RULE_block_attr_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this.match(AsciidocParser.BLOCK_ATTR_ID);
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

function Block_attr_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_attr_value;
    return this;
}

Block_attr_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_attr_valueContext.prototype.constructor = Block_attr_valueContext;

Block_attr_valueContext.prototype.BLOCK_ATTR_VALUE = function() {
    return this.getToken(AsciidocParser.BLOCK_ATTR_VALUE, 0);
};

Block_attr_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_attr_value(this);
	}
};

Block_attr_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_attr_value(this);
	}
};




AsciidocParser.Block_attr_valueContext = Block_attr_valueContext;

AsciidocParser.prototype.block_attr_value = function() {

    var localctx = new Block_attr_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, AsciidocParser.RULE_block_attr_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this.match(AsciidocParser.BLOCK_ATTR_VALUE);
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

function Section_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_section_body;
    return this;
}

Section_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Section_bodyContext.prototype.constructor = Section_bodyContext;

Section_bodyContext.prototype.body_item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Body_itemContext);
    } else {
        return this.getTypedRuleContext(Body_itemContext,i);
    }
};

Section_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterSection_body(this);
	}
};

Section_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitSection_body(this);
	}
};




AsciidocParser.Section_bodyContext = Section_bodyContext;

AsciidocParser.prototype.section_body = function() {

    var localctx = new Section_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, AsciidocParser.RULE_section_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << AsciidocParser.BLOCK_TABLE_START) | (1 << AsciidocParser.BLOCK_ANON_START) | (1 << AsciidocParser.BLOCK_COMMENT_START) | (1 << AsciidocParser.BLOCK_FENCED_START) | (1 << AsciidocParser.BLOCK_LISTING_START) | (1 << AsciidocParser.BLOCK_LITERAL_START) | (1 << AsciidocParser.BLOCK_PASS_START) | (1 << AsciidocParser.BLOCK_SIDEBAR_START) | (1 << AsciidocParser.BLOCK_VERSE_START) | (1 << AsciidocParser.BLOCK_EXAMPLE_START))) !== 0) || ((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (AsciidocParser.BLOCK_ANCHOR - 40)) | (1 << (AsciidocParser.BLOCK_ATTR_START - 40)) | (1 << (AsciidocParser.BLOCK_TITLE_START - 40)) | (1 << (AsciidocParser.BLOCK_PARA - 40)))) !== 0)) {
            this.state = 320;
            this.body_item();
            this.state = 325;
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

function Body_itemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_body_item;
    return this;
}

Body_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Body_itemContext.prototype.constructor = Body_itemContext;

Body_itemContext.prototype.paragraph = function() {
    return this.getTypedRuleContext(ParagraphContext,0);
};

Body_itemContext.prototype.delim_block = function() {
    return this.getTypedRuleContext(Delim_blockContext,0);
};

Body_itemContext.prototype.block_attr_line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Block_attr_lineContext);
    } else {
        return this.getTypedRuleContext(Block_attr_lineContext,i);
    }
};

Body_itemContext.prototype.block_title_line = function() {
    return this.getTypedRuleContext(Block_title_lineContext,0);
};

Body_itemContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBody_item(this);
	}
};

Body_itemContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBody_item(this);
	}
};




AsciidocParser.Body_itemContext = Body_itemContext;

AsciidocParser.prototype.body_item = function() {

    var localctx = new Body_itemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, AsciidocParser.RULE_body_item);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AsciidocParser.BLOCK_ANCHOR || _la===AsciidocParser.BLOCK_ATTR_START) {
            this.state = 326;
            this.block_attr_line();
            this.state = 331;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 333;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AsciidocParser.BLOCK_TITLE_START) {
            this.state = 332;
            this.block_title_line();
        }

        this.state = 337;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case AsciidocParser.BLOCK_PARA:
            this.state = 335;
            this.paragraph();
            break;
        case AsciidocParser.BLOCK_TABLE_START:
        case AsciidocParser.BLOCK_ANON_START:
        case AsciidocParser.BLOCK_COMMENT_START:
        case AsciidocParser.BLOCK_FENCED_START:
        case AsciidocParser.BLOCK_LISTING_START:
        case AsciidocParser.BLOCK_LITERAL_START:
        case AsciidocParser.BLOCK_PASS_START:
        case AsciidocParser.BLOCK_SIDEBAR_START:
        case AsciidocParser.BLOCK_VERSE_START:
        case AsciidocParser.BLOCK_EXAMPLE_START:
            this.state = 336;
            this.delim_block();
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

function ParagraphContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_paragraph;
    return this;
}

ParagraphContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParagraphContext.prototype.constructor = ParagraphContext;

ParagraphContext.prototype.BLOCK_PARA = function() {
    return this.getToken(AsciidocParser.BLOCK_PARA, 0);
};

ParagraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterParagraph(this);
	}
};

ParagraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitParagraph(this);
	}
};




AsciidocParser.ParagraphContext = ParagraphContext;

AsciidocParser.prototype.paragraph = function() {

    var localctx = new ParagraphContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, AsciidocParser.RULE_paragraph);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this.match(AsciidocParser.BLOCK_PARA);
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

function Block_title_lineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_title_line;
    return this;
}

Block_title_lineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_title_lineContext.prototype.constructor = Block_title_lineContext;

Block_title_lineContext.prototype.BLOCK_TITLE_START = function() {
    return this.getToken(AsciidocParser.BLOCK_TITLE_START, 0);
};

Block_title_lineContext.prototype.block_title = function() {
    return this.getTypedRuleContext(Block_titleContext,0);
};

Block_title_lineContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_title_line(this);
	}
};

Block_title_lineContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_title_line(this);
	}
};




AsciidocParser.Block_title_lineContext = Block_title_lineContext;

AsciidocParser.prototype.block_title_line = function() {

    var localctx = new Block_title_lineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, AsciidocParser.RULE_block_title_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this.match(AsciidocParser.BLOCK_TITLE_START);
        this.state = 342;
        this.block_title();
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

function Block_titleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_block_title;
    return this;
}

Block_titleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_titleContext.prototype.constructor = Block_titleContext;

Block_titleContext.prototype.BLOCK_TITLE_TEXT = function() {
    return this.getToken(AsciidocParser.BLOCK_TITLE_TEXT, 0);
};

Block_titleContext.prototype.BLOCK_TITLE_EOL = function() {
    return this.getToken(AsciidocParser.BLOCK_TITLE_EOL, 0);
};

Block_titleContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterBlock_title(this);
	}
};

Block_titleContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitBlock_title(this);
	}
};




AsciidocParser.Block_titleContext = Block_titleContext;

AsciidocParser.prototype.block_title = function() {

    var localctx = new Block_titleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, AsciidocParser.RULE_block_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        this.match(AsciidocParser.BLOCK_TITLE_TEXT);
        this.state = 345;
        this.match(AsciidocParser.BLOCK_TITLE_EOL);
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

function Delim_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_delim_block;
    return this;
}

Delim_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Delim_blockContext.prototype.constructor = Delim_blockContext;

Delim_blockContext.prototype.sidebar_block = function() {
    return this.getTypedRuleContext(Sidebar_blockContext,0);
};

Delim_blockContext.prototype.comment_block = function() {
    return this.getTypedRuleContext(Comment_blockContext,0);
};

Delim_blockContext.prototype.fenced_block = function() {
    return this.getTypedRuleContext(Fenced_blockContext,0);
};

Delim_blockContext.prototype.example_block = function() {
    return this.getTypedRuleContext(Example_blockContext,0);
};

Delim_blockContext.prototype.listing_block = function() {
    return this.getTypedRuleContext(Listing_blockContext,0);
};

Delim_blockContext.prototype.literal_block = function() {
    return this.getTypedRuleContext(Literal_blockContext,0);
};

Delim_blockContext.prototype.pass_block = function() {
    return this.getTypedRuleContext(Pass_blockContext,0);
};

Delim_blockContext.prototype.verse_block = function() {
    return this.getTypedRuleContext(Verse_blockContext,0);
};

Delim_blockContext.prototype.table_block = function() {
    return this.getTypedRuleContext(Table_blockContext,0);
};

Delim_blockContext.prototype.anon_block = function() {
    return this.getTypedRuleContext(Anon_blockContext,0);
};

Delim_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterDelim_block(this);
	}
};

Delim_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitDelim_block(this);
	}
};




AsciidocParser.Delim_blockContext = Delim_blockContext;

AsciidocParser.prototype.delim_block = function() {

    var localctx = new Delim_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, AsciidocParser.RULE_delim_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case AsciidocParser.BLOCK_SIDEBAR_START:
            this.state = 347;
            this.sidebar_block();
            break;
        case AsciidocParser.BLOCK_COMMENT_START:
            this.state = 348;
            this.comment_block();
            break;
        case AsciidocParser.BLOCK_FENCED_START:
            this.state = 349;
            this.fenced_block();
            break;
        case AsciidocParser.BLOCK_EXAMPLE_START:
            this.state = 350;
            this.example_block();
            break;
        case AsciidocParser.BLOCK_LISTING_START:
            this.state = 351;
            this.listing_block();
            break;
        case AsciidocParser.BLOCK_LITERAL_START:
            this.state = 352;
            this.literal_block();
            break;
        case AsciidocParser.BLOCK_PASS_START:
            this.state = 353;
            this.pass_block();
            break;
        case AsciidocParser.BLOCK_VERSE_START:
            this.state = 354;
            this.verse_block();
            break;
        case AsciidocParser.BLOCK_TABLE_START:
            this.state = 355;
            this.table_block();
            break;
        case AsciidocParser.BLOCK_ANON_START:
            this.state = 356;
            this.anon_block();
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

function Table_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_table_block;
    return this;
}

Table_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Table_blockContext.prototype.constructor = Table_blockContext;

Table_blockContext.prototype.BLOCK_TABLE_START = function() {
    return this.getToken(AsciidocParser.BLOCK_TABLE_START, 0);
};

Table_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Table_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Table_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterTable_block(this);
	}
};

Table_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitTable_block(this);
	}
};




AsciidocParser.Table_blockContext = Table_blockContext;

AsciidocParser.prototype.table_block = function() {

    var localctx = new Table_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, AsciidocParser.RULE_table_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 359;
        this.match(AsciidocParser.BLOCK_TABLE_START);
        this.state = 360;
        this.delim_block_content();
        this.state = 361;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Comment_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_comment_block;
    return this;
}

Comment_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Comment_blockContext.prototype.constructor = Comment_blockContext;

Comment_blockContext.prototype.BLOCK_COMMENT_START = function() {
    return this.getToken(AsciidocParser.BLOCK_COMMENT_START, 0);
};

Comment_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Comment_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Comment_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterComment_block(this);
	}
};

Comment_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitComment_block(this);
	}
};




AsciidocParser.Comment_blockContext = Comment_blockContext;

AsciidocParser.prototype.comment_block = function() {

    var localctx = new Comment_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, AsciidocParser.RULE_comment_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 363;
        this.match(AsciidocParser.BLOCK_COMMENT_START);
        this.state = 364;
        this.delim_block_content();
        this.state = 365;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Fenced_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_fenced_block;
    return this;
}

Fenced_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Fenced_blockContext.prototype.constructor = Fenced_blockContext;

Fenced_blockContext.prototype.BLOCK_FENCED_START = function() {
    return this.getToken(AsciidocParser.BLOCK_FENCED_START, 0);
};

Fenced_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Fenced_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Fenced_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterFenced_block(this);
	}
};

Fenced_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitFenced_block(this);
	}
};




AsciidocParser.Fenced_blockContext = Fenced_blockContext;

AsciidocParser.prototype.fenced_block = function() {

    var localctx = new Fenced_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, AsciidocParser.RULE_fenced_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.match(AsciidocParser.BLOCK_FENCED_START);
        this.state = 368;
        this.delim_block_content();
        this.state = 369;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Example_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_example_block;
    return this;
}

Example_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Example_blockContext.prototype.constructor = Example_blockContext;

Example_blockContext.prototype.BLOCK_EXAMPLE_START = function() {
    return this.getToken(AsciidocParser.BLOCK_EXAMPLE_START, 0);
};

Example_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Example_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Example_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterExample_block(this);
	}
};

Example_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitExample_block(this);
	}
};




AsciidocParser.Example_blockContext = Example_blockContext;

AsciidocParser.prototype.example_block = function() {

    var localctx = new Example_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, AsciidocParser.RULE_example_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this.match(AsciidocParser.BLOCK_EXAMPLE_START);
        this.state = 372;
        this.delim_block_content();
        this.state = 373;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Listing_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_listing_block;
    return this;
}

Listing_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Listing_blockContext.prototype.constructor = Listing_blockContext;

Listing_blockContext.prototype.BLOCK_LISTING_START = function() {
    return this.getToken(AsciidocParser.BLOCK_LISTING_START, 0);
};

Listing_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Listing_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Listing_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterListing_block(this);
	}
};

Listing_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitListing_block(this);
	}
};




AsciidocParser.Listing_blockContext = Listing_blockContext;

AsciidocParser.prototype.listing_block = function() {

    var localctx = new Listing_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, AsciidocParser.RULE_listing_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        this.match(AsciidocParser.BLOCK_LISTING_START);
        this.state = 376;
        this.delim_block_content();
        this.state = 377;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Literal_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_literal_block;
    return this;
}

Literal_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Literal_blockContext.prototype.constructor = Literal_blockContext;

Literal_blockContext.prototype.BLOCK_LITERAL_START = function() {
    return this.getToken(AsciidocParser.BLOCK_LITERAL_START, 0);
};

Literal_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Literal_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Literal_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterLiteral_block(this);
	}
};

Literal_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitLiteral_block(this);
	}
};




AsciidocParser.Literal_blockContext = Literal_blockContext;

AsciidocParser.prototype.literal_block = function() {

    var localctx = new Literal_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, AsciidocParser.RULE_literal_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(AsciidocParser.BLOCK_LITERAL_START);
        this.state = 380;
        this.delim_block_content();
        this.state = 381;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Pass_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_pass_block;
    return this;
}

Pass_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pass_blockContext.prototype.constructor = Pass_blockContext;

Pass_blockContext.prototype.BLOCK_PASS_START = function() {
    return this.getToken(AsciidocParser.BLOCK_PASS_START, 0);
};

Pass_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Pass_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Pass_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterPass_block(this);
	}
};

Pass_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitPass_block(this);
	}
};




AsciidocParser.Pass_blockContext = Pass_blockContext;

AsciidocParser.prototype.pass_block = function() {

    var localctx = new Pass_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, AsciidocParser.RULE_pass_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this.match(AsciidocParser.BLOCK_PASS_START);
        this.state = 384;
        this.delim_block_content();
        this.state = 385;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Verse_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_verse_block;
    return this;
}

Verse_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Verse_blockContext.prototype.constructor = Verse_blockContext;

Verse_blockContext.prototype.BLOCK_VERSE_START = function() {
    return this.getToken(AsciidocParser.BLOCK_VERSE_START, 0);
};

Verse_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Verse_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Verse_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterVerse_block(this);
	}
};

Verse_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitVerse_block(this);
	}
};




AsciidocParser.Verse_blockContext = Verse_blockContext;

AsciidocParser.prototype.verse_block = function() {

    var localctx = new Verse_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, AsciidocParser.RULE_verse_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 387;
        this.match(AsciidocParser.BLOCK_VERSE_START);
        this.state = 388;
        this.delim_block_content();
        this.state = 389;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Sidebar_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_sidebar_block;
    return this;
}

Sidebar_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sidebar_blockContext.prototype.constructor = Sidebar_blockContext;

Sidebar_blockContext.prototype.BLOCK_SIDEBAR_START = function() {
    return this.getToken(AsciidocParser.BLOCK_SIDEBAR_START, 0);
};

Sidebar_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Sidebar_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Sidebar_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterSidebar_block(this);
	}
};

Sidebar_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitSidebar_block(this);
	}
};




AsciidocParser.Sidebar_blockContext = Sidebar_blockContext;

AsciidocParser.prototype.sidebar_block = function() {

    var localctx = new Sidebar_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, AsciidocParser.RULE_sidebar_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 391;
        this.match(AsciidocParser.BLOCK_SIDEBAR_START);
        this.state = 392;
        this.delim_block_content();
        this.state = 393;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Anon_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_anon_block;
    return this;
}

Anon_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Anon_blockContext.prototype.constructor = Anon_blockContext;

Anon_blockContext.prototype.BLOCK_ANON_START = function() {
    return this.getToken(AsciidocParser.BLOCK_ANON_START, 0);
};

Anon_blockContext.prototype.delim_block_content = function() {
    return this.getTypedRuleContext(Delim_block_contentContext,0);
};

Anon_blockContext.prototype.DELIM_BLOCK_END = function() {
    return this.getToken(AsciidocParser.DELIM_BLOCK_END, 0);
};

Anon_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAnon_block(this);
	}
};

Anon_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAnon_block(this);
	}
};




AsciidocParser.Anon_blockContext = Anon_blockContext;

AsciidocParser.prototype.anon_block = function() {

    var localctx = new Anon_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, AsciidocParser.RULE_anon_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395;
        this.match(AsciidocParser.BLOCK_ANON_START);
        this.state = 396;
        this.delim_block_content();
        this.state = 397;
        this.match(AsciidocParser.DELIM_BLOCK_END);
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

function Delim_block_contentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_delim_block_content;
    return this;
}

Delim_block_contentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Delim_block_contentContext.prototype.constructor = Delim_block_contentContext;

Delim_block_contentContext.prototype.DELIM_BLOCK_LINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AsciidocParser.DELIM_BLOCK_LINE);
    } else {
        return this.getToken(AsciidocParser.DELIM_BLOCK_LINE, i);
    }
};


Delim_block_contentContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterDelim_block_content(this);
	}
};

Delim_block_contentContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitDelim_block_content(this);
	}
};




AsciidocParser.Delim_block_contentContext = Delim_block_contentContext;

AsciidocParser.prototype.delim_block_content = function() {

    var localctx = new Delim_block_contentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, AsciidocParser.RULE_delim_block_content);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AsciidocParser.DELIM_BLOCK_LINE) {
            this.state = 399;
            this.match(AsciidocParser.DELIM_BLOCK_LINE);
            this.state = 404;
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

function Pp_directiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_pp_directive;
    return this;
}

Pp_directiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pp_directiveContext.prototype.constructor = Pp_directiveContext;

Pp_directiveContext.prototype.PPD_START = function() {
    return this.getToken(AsciidocParser.PPD_START, 0);
};

Pp_directiveContext.prototype.ppd_attr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Ppd_attrContext);
    } else {
        return this.getTypedRuleContext(Ppd_attrContext,i);
    }
};

Pp_directiveContext.prototype.ppd_content = function() {
    return this.getTypedRuleContext(Ppd_contentContext,0);
};

Pp_directiveContext.prototype.PPD_ATTR_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AsciidocParser.PPD_ATTR_SEP);
    } else {
        return this.getToken(AsciidocParser.PPD_ATTR_SEP, i);
    }
};


Pp_directiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterPp_directive(this);
	}
};

Pp_directiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitPp_directive(this);
	}
};




AsciidocParser.Pp_directiveContext = Pp_directiveContext;

AsciidocParser.prototype.pp_directive = function() {

    var localctx = new Pp_directiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, AsciidocParser.RULE_pp_directive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.match(AsciidocParser.PPD_START);
        this.state = 406;
        this.ppd_attr();
        this.state = 411;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AsciidocParser.PPD_ATTR_SEP) {
            this.state = 407;
            this.match(AsciidocParser.PPD_ATTR_SEP);
            this.state = 408;
            this.ppd_attr();
            this.state = 413;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 414;
        this.ppd_content();
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

function Ppd_attrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_ppd_attr;
    return this;
}

Ppd_attrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ppd_attrContext.prototype.constructor = Ppd_attrContext;

Ppd_attrContext.prototype.PPD_ATTR_ID = function() {
    return this.getToken(AsciidocParser.PPD_ATTR_ID, 0);
};

Ppd_attrContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterPpd_attr(this);
	}
};

Ppd_attrContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitPpd_attr(this);
	}
};




AsciidocParser.Ppd_attrContext = Ppd_attrContext;

AsciidocParser.prototype.ppd_attr = function() {

    var localctx = new Ppd_attrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, AsciidocParser.RULE_ppd_attr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 416;
        this.match(AsciidocParser.PPD_ATTR_ID);
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

function Ppd_contentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_ppd_content;
    return this;
}

Ppd_contentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ppd_contentContext.prototype.constructor = Ppd_contentContext;

Ppd_contentContext.prototype.PPD_CONTENT_SINGLELINE = function() {
    return this.getToken(AsciidocParser.PPD_CONTENT_SINGLELINE, 0);
};

Ppd_contentContext.prototype.PPD_CONTENT_START = function() {
    return this.getToken(AsciidocParser.PPD_CONTENT_START, 0);
};

Ppd_contentContext.prototype.PPD_CONTENT = function() {
    return this.getToken(AsciidocParser.PPD_CONTENT, 0);
};

Ppd_contentContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterPpd_content(this);
	}
};

Ppd_contentContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitPpd_content(this);
	}
};




AsciidocParser.Ppd_contentContext = Ppd_contentContext;

AsciidocParser.prototype.ppd_content = function() {

    var localctx = new Ppd_contentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, AsciidocParser.RULE_ppd_content);
    try {
        this.state = 421;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case AsciidocParser.PPD_CONTENT_SINGLELINE:
            this.enterOuterAlt(localctx, 1);
            this.state = 418;
            this.match(AsciidocParser.PPD_CONTENT_SINGLELINE);
            break;
        case AsciidocParser.PPD_CONTENT_START:
            this.enterOuterAlt(localctx, 2);
            this.state = 419;
            this.match(AsciidocParser.PPD_CONTENT_START);
            this.state = 420;
            this.match(AsciidocParser.PPD_CONTENT);
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

function AnchorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AsciidocParser.RULE_anchor;
    return this;
}

AnchorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnchorContext.prototype.constructor = AnchorContext;

AnchorContext.prototype.BLOCK_ANCHOR = function() {
    return this.getToken(AsciidocParser.BLOCK_ANCHOR, 0);
};

AnchorContext.prototype.enterRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.enterAnchor(this);
	}
};

AnchorContext.prototype.exitRule = function(listener) {
    if(listener instanceof AsciidocParserListener ) {
        listener.exitAnchor(this);
	}
};




AsciidocParser.AnchorContext = AnchorContext;

AsciidocParser.prototype.anchor = function() {

    var localctx = new AnchorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, AsciidocParser.RULE_anchor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 423;
        this.match(AsciidocParser.BLOCK_ANCHOR);
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


exports.AsciidocParser = AsciidocParser;