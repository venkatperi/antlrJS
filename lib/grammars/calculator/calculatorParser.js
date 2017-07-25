// Generated from calculator/calculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var calculatorListener = require('./calculatorListener').calculatorListener;
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
