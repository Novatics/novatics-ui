"use strict";
(self["webpackChunknovatics_ui"] = self["webpackChunknovatics_ui"] || []).push([[904],{

/***/ 59449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(82526);
__webpack_require__(41817);
__webpack_require__(41539);
__webpack_require__(32165);
__webpack_require__(78783);
__webpack_require__(66992);
__webpack_require__(33948);
__webpack_require__(69070);
__webpack_require__(74819);
__webpack_require__(24812);
__webpack_require__(38880);
__webpack_require__(78011);
__webpack_require__(68304);
__webpack_require__(12419);
__webpack_require__(30489);
__webpack_require__(4129);
__webpack_require__(68309);
__webpack_require__(47042);
__webpack_require__(91058);
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var XHTMLEntities = __webpack_require__(60856);
var hexNumber = /^[\da-fA-F]+$/;
var decimalNumber = /^\d+$/;

// The map to `acorn-jsx` tokens from `acorn` namespace objects.
var acornJsxMap = new WeakMap();

// Get the original tokens for the given `acorn` namespace object.
function getJsxTokens(acorn) {
  acorn = acorn.Parser.acorn || acorn;
  var acornJsx = acornJsxMap.get(acorn);
  if (!acornJsx) {
    var tt = acorn.tokTypes;
    var TokContext = acorn.TokContext;
    var TokenType = acorn.TokenType;
    var tc_oTag = new TokContext('<tag', false);
    var tc_cTag = new TokContext('</tag', false);
    var tc_expr = new TokContext('<tag>...</tag>', true, true);
    var tokContexts = {
      tc_oTag: tc_oTag,
      tc_cTag: tc_cTag,
      tc_expr: tc_expr
    };
    var tokTypes = {
      jsxName: new TokenType('jsxName'),
      jsxText: new TokenType('jsxText', {
        beforeExpr: true
      }),
      jsxTagStart: new TokenType('jsxTagStart', {
        startsExpr: true
      }),
      jsxTagEnd: new TokenType('jsxTagEnd')
    };
    tokTypes.jsxTagStart.updateContext = function () {
      this.context.push(tc_expr); // treat as beginning of JSX expression
      this.context.push(tc_oTag); // start opening tag context
      this.exprAllowed = false;
    };
    tokTypes.jsxTagEnd.updateContext = function (prevType) {
      var out = this.context.pop();
      if (out === tc_oTag && prevType === tt.slash || out === tc_cTag) {
        this.context.pop();
        this.exprAllowed = this.curContext() === tc_expr;
      } else {
        this.exprAllowed = true;
      }
    };
    acornJsx = {
      tokContexts: tokContexts,
      tokTypes: tokTypes
    };
    acornJsxMap.set(acorn, acornJsx);
  }
  return acornJsx;
}

// Transforms JSX element name to string.

function getQualifiedJSXName(object) {
  if (!object) return object;
  if (object.type === 'JSXIdentifier') return object.name;
  if (object.type === 'JSXNamespacedName') return object.namespace.name + ':' + object.name.name;
  if (object.type === 'JSXMemberExpression') return getQualifiedJSXName(object.object) + '.' + getQualifiedJSXName(object.property);
}
module.exports = function (options) {
  options = options || {};
  return function (Parser) {
    return plugin({
      allowNamespaces: options.allowNamespaces !== false,
      allowNamespacedObjects: !!options.allowNamespacedObjects
    }, Parser);
  };
};

// This is `tokTypes` of the peer dep.
// This can be different instances from the actual `tokTypes` this plugin uses.
Object.defineProperty(module.exports, "tokTypes", ({
  get: function get_tokTypes() {
    return getJsxTokens(__webpack_require__(11464)).tokTypes;
  },
  configurable: true,
  enumerable: true
}));
function plugin(options, Parser) {
  var acorn = Parser.acorn || __webpack_require__(11464);
  var acornJsx = getJsxTokens(acorn);
  var tt = acorn.tokTypes;
  var tok = acornJsx.tokTypes;
  var tokContexts = acorn.tokContexts;
  var tc_oTag = acornJsx.tokContexts.tc_oTag;
  var tc_cTag = acornJsx.tokContexts.tc_cTag;
  var tc_expr = acornJsx.tokContexts.tc_expr;
  var isNewLine = acorn.isNewLine;
  var isIdentifierStart = acorn.isIdentifierStart;
  var isIdentifierChar = acorn.isIdentifierChar;
  return /*#__PURE__*/function (_Parser) {
    _inherits(_class, _Parser);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "jsx_readToken",
      value:
      // Reads inline JSX contents token.
      function jsx_readToken() {
        var out = '',
          chunkStart = this.pos;
        for (;;) {
          if (this.pos >= this.input.length) this.raise(this.start, 'Unterminated JSX contents');
          var ch = this.input.charCodeAt(this.pos);
          switch (ch) {
            case 60: // '<'
            case 123:
              // '{'
              if (this.pos === this.start) {
                if (ch === 60 && this.exprAllowed) {
                  ++this.pos;
                  return this.finishToken(tok.jsxTagStart);
                }
                return this.getTokenFromCode(ch);
              }
              out += this.input.slice(chunkStart, this.pos);
              return this.finishToken(tok.jsxText, out);
            case 38:
              // '&'
              out += this.input.slice(chunkStart, this.pos);
              out += this.jsx_readEntity();
              chunkStart = this.pos;
              break;
            case 62: // '>'
            case 125:
              // '}'
              this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (ch === 62 ? "&gt;" : "&rbrace;") + "` or " + "`{\"" + this.input[this.pos] + "\"}" + "`?");
            default:
              if (isNewLine(ch)) {
                out += this.input.slice(chunkStart, this.pos);
                out += this.jsx_readNewLine(true);
                chunkStart = this.pos;
              } else {
                ++this.pos;
              }
          }
        }
      }
    }, {
      key: "jsx_readNewLine",
      value: function jsx_readNewLine(normalizeCRLF) {
        var ch = this.input.charCodeAt(this.pos);
        var out;
        ++this.pos;
        if (ch === 13 && this.input.charCodeAt(this.pos) === 10) {
          ++this.pos;
          out = normalizeCRLF ? '\n' : '\r\n';
        } else {
          out = String.fromCharCode(ch);
        }
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        return out;
      }
    }, {
      key: "jsx_readString",
      value: function jsx_readString(quote) {
        var out = '',
          chunkStart = ++this.pos;
        for (;;) {
          if (this.pos >= this.input.length) this.raise(this.start, 'Unterminated string constant');
          var ch = this.input.charCodeAt(this.pos);
          if (ch === quote) break;
          if (ch === 38) {
            // '&'
            out += this.input.slice(chunkStart, this.pos);
            out += this.jsx_readEntity();
            chunkStart = this.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.jsx_readNewLine(false);
            chunkStart = this.pos;
          } else {
            ++this.pos;
          }
        }
        out += this.input.slice(chunkStart, this.pos++);
        return this.finishToken(tt.string, out);
      }
    }, {
      key: "jsx_readEntity",
      value: function jsx_readEntity() {
        var str = '',
          count = 0,
          entity;
        var ch = this.input[this.pos];
        if (ch !== '&') this.raise(this.pos, 'Entity must start with an ampersand');
        var startPos = ++this.pos;
        while (this.pos < this.input.length && count++ < 10) {
          ch = this.input[this.pos++];
          if (ch === ';') {
            if (str[0] === '#') {
              if (str[1] === 'x') {
                str = str.substr(2);
                if (hexNumber.test(str)) entity = String.fromCharCode(parseInt(str, 16));
              } else {
                str = str.substr(1);
                if (decimalNumber.test(str)) entity = String.fromCharCode(parseInt(str, 10));
              }
            } else {
              entity = XHTMLEntities[str];
            }
            break;
          }
          str += ch;
        }
        if (!entity) {
          this.pos = startPos;
          return '&';
        }
        return entity;
      }

      // Read a JSX identifier (valid tag or attribute name).
      //
      // Optimized version since JSX identifiers can't contain
      // escape characters and so can be read as single slice.
      // Also assumes that first character was already checked
      // by isIdentifierStart in readToken.
    }, {
      key: "jsx_readWord",
      value: function jsx_readWord() {
        var ch,
          start = this.pos;
        do {
          ch = this.input.charCodeAt(++this.pos);
        } while (isIdentifierChar(ch) || ch === 45); // '-'
        return this.finishToken(tok.jsxName, this.input.slice(start, this.pos));
      }

      // Parse next token as JSX identifier
    }, {
      key: "jsx_parseIdentifier",
      value: function jsx_parseIdentifier() {
        var node = this.startNode();
        if (this.type === tok.jsxName) node.name = this.value;else if (this.type.keyword) node.name = this.type.keyword;else this.unexpected();
        this.next();
        return this.finishNode(node, 'JSXIdentifier');
      }

      // Parse namespaced identifier.
    }, {
      key: "jsx_parseNamespacedName",
      value: function jsx_parseNamespacedName() {
        var startPos = this.start,
          startLoc = this.startLoc;
        var name = this.jsx_parseIdentifier();
        if (!options.allowNamespaces || !this.eat(tt.colon)) return name;
        var node = this.startNodeAt(startPos, startLoc);
        node.namespace = name;
        node.name = this.jsx_parseIdentifier();
        return this.finishNode(node, 'JSXNamespacedName');
      }

      // Parses element name in any form - namespaced, member
      // or single identifier.
    }, {
      key: "jsx_parseElementName",
      value: function jsx_parseElementName() {
        if (this.type === tok.jsxTagEnd) return '';
        var startPos = this.start,
          startLoc = this.startLoc;
        var node = this.jsx_parseNamespacedName();
        if (this.type === tt.dot && node.type === 'JSXNamespacedName' && !options.allowNamespacedObjects) {
          this.unexpected();
        }
        while (this.eat(tt.dot)) {
          var newNode = this.startNodeAt(startPos, startLoc);
          newNode.object = node;
          newNode.property = this.jsx_parseIdentifier();
          node = this.finishNode(newNode, 'JSXMemberExpression');
        }
        return node;
      }

      // Parses any type of JSX attribute value.
    }, {
      key: "jsx_parseAttributeValue",
      value: function jsx_parseAttributeValue() {
        switch (this.type) {
          case tt.braceL:
            var node = this.jsx_parseExpressionContainer();
            if (node.expression.type === 'JSXEmptyExpression') this.raise(node.start, 'JSX attributes must only be assigned a non-empty expression');
            return node;
          case tok.jsxTagStart:
          case tt.string:
            return this.parseExprAtom();
          default:
            this.raise(this.start, 'JSX value should be either an expression or a quoted JSX text');
        }
      }

      // JSXEmptyExpression is unique type since it doesn't actually parse anything,
      // and so it should start at the end of last read token (left brace) and finish
      // at the beginning of the next one (right brace).
    }, {
      key: "jsx_parseEmptyExpression",
      value: function jsx_parseEmptyExpression() {
        var node = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(node, 'JSXEmptyExpression', this.start, this.startLoc);
      }

      // Parses JSX expression enclosed into curly brackets.
    }, {
      key: "jsx_parseExpressionContainer",
      value: function jsx_parseExpressionContainer() {
        var node = this.startNode();
        this.next();
        node.expression = this.type === tt.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression();
        this.expect(tt.braceR);
        return this.finishNode(node, 'JSXExpressionContainer');
      }

      // Parses following JSX attribute name-value pair.
    }, {
      key: "jsx_parseAttribute",
      value: function jsx_parseAttribute() {
        var node = this.startNode();
        if (this.eat(tt.braceL)) {
          this.expect(tt.ellipsis);
          node.argument = this.parseMaybeAssign();
          this.expect(tt.braceR);
          return this.finishNode(node, 'JSXSpreadAttribute');
        }
        node.name = this.jsx_parseNamespacedName();
        node.value = this.eat(tt.eq) ? this.jsx_parseAttributeValue() : null;
        return this.finishNode(node, 'JSXAttribute');
      }

      // Parses JSX opening tag starting after '<'.
    }, {
      key: "jsx_parseOpeningElementAt",
      value: function jsx_parseOpeningElementAt(startPos, startLoc) {
        var node = this.startNodeAt(startPos, startLoc);
        node.attributes = [];
        var nodeName = this.jsx_parseElementName();
        if (nodeName) node.name = nodeName;
        while (this.type !== tt.slash && this.type !== tok.jsxTagEnd) {
          node.attributes.push(this.jsx_parseAttribute());
        }
        node.selfClosing = this.eat(tt.slash);
        this.expect(tok.jsxTagEnd);
        return this.finishNode(node, nodeName ? 'JSXOpeningElement' : 'JSXOpeningFragment');
      }

      // Parses JSX closing tag starting after '</'.
    }, {
      key: "jsx_parseClosingElementAt",
      value: function jsx_parseClosingElementAt(startPos, startLoc) {
        var node = this.startNodeAt(startPos, startLoc);
        var nodeName = this.jsx_parseElementName();
        if (nodeName) node.name = nodeName;
        this.expect(tok.jsxTagEnd);
        return this.finishNode(node, nodeName ? 'JSXClosingElement' : 'JSXClosingFragment');
      }

      // Parses entire JSX element, including it's opening tag
      // (starting after '<'), attributes, contents and closing tag.
    }, {
      key: "jsx_parseElementAt",
      value: function jsx_parseElementAt(startPos, startLoc) {
        var node = this.startNodeAt(startPos, startLoc);
        var children = [];
        var openingElement = this.jsx_parseOpeningElementAt(startPos, startLoc);
        var closingElement = null;
        if (!openingElement.selfClosing) {
          contents: for (;;) {
            switch (this.type) {
              case tok.jsxTagStart:
                startPos = this.start;
                startLoc = this.startLoc;
                this.next();
                if (this.eat(tt.slash)) {
                  closingElement = this.jsx_parseClosingElementAt(startPos, startLoc);
                  break contents;
                }
                children.push(this.jsx_parseElementAt(startPos, startLoc));
                break;
              case tok.jsxText:
                children.push(this.parseExprAtom());
                break;
              case tt.braceL:
                children.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
          }
          if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
            this.raise(closingElement.start, 'Expected corresponding JSX closing tag for <' + getQualifiedJSXName(openingElement.name) + '>');
          }
        }
        var fragmentOrElement = openingElement.name ? 'Element' : 'Fragment';
        node['opening' + fragmentOrElement] = openingElement;
        node['closing' + fragmentOrElement] = closingElement;
        node.children = children;
        if (this.type === tt.relational && this.value === "<") {
          this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
        }
        return this.finishNode(node, 'JSX' + fragmentOrElement);
      }

      // Parse JSX text
    }, {
      key: "jsx_parseText",
      value: function jsx_parseText() {
        var node = this.parseLiteral(this.value);
        node.type = "JSXText";
        return node;
      }

      // Parses entire JSX element from current position.
    }, {
      key: "jsx_parseElement",
      value: function jsx_parseElement() {
        var startPos = this.start,
          startLoc = this.startLoc;
        this.next();
        return this.jsx_parseElementAt(startPos, startLoc);
      }
    }, {
      key: "parseExprAtom",
      value: function parseExprAtom(refShortHandDefaultPos) {
        if (this.type === tok.jsxText) return this.jsx_parseText();else if (this.type === tok.jsxTagStart) return this.jsx_parseElement();else return _get(_getPrototypeOf(_class.prototype), "parseExprAtom", this).call(this, refShortHandDefaultPos);
      }
    }, {
      key: "readToken",
      value: function readToken(code) {
        var context = this.curContext();
        if (context === tc_expr) return this.jsx_readToken();
        if (context === tc_oTag || context === tc_cTag) {
          if (isIdentifierStart(code)) return this.jsx_readWord();
          if (code == 62) {
            ++this.pos;
            return this.finishToken(tok.jsxTagEnd);
          }
          if ((code === 34 || code === 39) && context == tc_oTag) return this.jsx_readString(code);
        }
        if (code === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) {
          ++this.pos;
          return this.finishToken(tok.jsxTagStart);
        }
        return _get(_getPrototypeOf(_class.prototype), "readToken", this).call(this, code);
      }
    }, {
      key: "updateContext",
      value: function updateContext(prevType) {
        if (this.type == tt.braceL) {
          var curContext = this.curContext();
          if (curContext == tc_oTag) this.context.push(tokContexts.b_expr);else if (curContext == tc_expr) this.context.push(tokContexts.b_tmpl);else _get(_getPrototypeOf(_class.prototype), "updateContext", this).call(this, prevType);
          this.exprAllowed = true;
        } else if (this.type === tt.slash && prevType === tok.jsxTagStart) {
          this.context.length -= 2; // do not consider JSX expr -> JSX open tag -> ... anymore
          this.context.push(tc_cTag); // reconsider as closing tag context
          this.exprAllowed = false;
        } else {
          return _get(_getPrototypeOf(_class.prototype), "updateContext", this).call(this, prevType);
        }
      }
    }], [{
      key: "acornJsx",
      get:
      // Expose actual `tokTypes` and `tokContexts` to other plugins.
      function get() {
        return acornJsx;
      }
    }]);
    return _class;
  }(Parser);
}

/***/ }),

/***/ 60856:
/***/ ((module) => {



module.exports = {
  quot: "\"",
  amp: '&',
  apos: "'",
  lt: '<',
  gt: '>',
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  'int': "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};

/***/ }),

/***/ 63133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ str)
/* harmony export */ });
var str = function str(obj) {
  if (!obj) {
    return '';
  }

  if (typeof obj === 'string') {
    return obj;
  }

  throw new Error("Description: expected string, got: ".concat(JSON.stringify(obj)));
};

/***/ }),

/***/ 88425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ PreviewWeb)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(30489);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(12419);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.get.js
var es_reflect_get = __webpack_require__(74819);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(38880);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(47042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(43371);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(32165);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(35666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(66992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(41539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(78783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(21249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(57327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(82526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(92222);
// EXTERNAL MODULE: ./node_modules/util-deprecate/browser.js
var browser = __webpack_require__(94927);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__(18464);
// EXTERNAL MODULE: ./node_modules/global/window.js
var global_window = __webpack_require__(58908);
var window_default = /*#__PURE__*/__webpack_require__.n(global_window);
// EXTERNAL MODULE: ./node_modules/@storybook/core-events/dist/esm/index.js
var dist_esm = __webpack_require__(50114);
// EXTERNAL MODULE: ./node_modules/@storybook/client-logger/dist/esm/index.js
var client_logger_dist_esm = __webpack_require__(23827);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(91038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(69826);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(70189);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(47941);
// EXTERNAL MODULE: ./node_modules/synchronous-promise/index.js
var synchronous_promise = __webpack_require__(76891);
// EXTERNAL MODULE: ./node_modules/@storybook/addons/dist/esm/index.js
var addons_dist_esm = __webpack_require__(1173);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/StoryStore.js + 4 modules
var StoryStore = __webpack_require__(58343);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(26699);
;// CONCATENATED MODULE: ./node_modules/@storybook/preview-web/dist/esm/StoryRender.js







function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var AbortController = (window_default()).AbortController;

function createController() {
  if (AbortController) return new AbortController(); // Polyfill for IE11

  return {
    signal: {
      aborted: false
    },
    abort: function abort() {
      this.signal.aborted = true;
    }
  };
}

var PREPARE_ABORTED = new Error('prepareAborted');
var StoryRender = /*#__PURE__*/function () {
  function StoryRender(channel, store, renderToScreen, callbacks, id, viewMode, story) {
    _classCallCheck(this, StoryRender);

    this.channel = channel;
    this.store = store;
    this.renderToScreen = renderToScreen;
    this.callbacks = callbacks;
    this.id = id;
    this.viewMode = viewMode;
    this.story = void 0;
    this.phase = void 0;
    this.abortController = void 0;
    this.canvasElement = void 0;
    this.notYetRendered = true;
    this.disableKeyListeners = false;
    this.abortController = createController(); // Allow short-circuiting preparing if we happen to already
    // have the story (this is used by docs mode)

    if (story) {
      this.story = story; // TODO -- what should the phase be now?
      // TODO -- should we emit the render phase changed event?

      this.phase = 'preparing';
    }
  }

  _createClass(StoryRender, [{
    key: "runPhase",
    value: function () {
      var _runPhase = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(signal, phase, phaseFn) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.phase = phase;
                this.channel.emit(dist_esm.STORY_RENDER_PHASE_CHANGED, {
                  newPhase: this.phase,
                  storyId: this.id
                });

                if (!phaseFn) {
                  _context.next = 5;
                  break;
                }

                _context.next = 5;
                return phaseFn();

              case 5:
                if (signal.aborted) {
                  this.phase = 'aborted';
                  this.channel.emit(dist_esm.STORY_RENDER_PHASE_CHANGED, {
                    newPhase: this.phase,
                    storyId: this.id
                  });
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function runPhase(_x, _x2, _x3) {
        return _runPhase.apply(this, arguments);
      }

      return runPhase;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.runPhase(this.abortController.signal, 'preparing', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this.store.loadStory({
                            storyId: _this.id
                          });

                        case 2:
                          _this.story = _context2.sent;

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })));

              case 2:
                if (!this.abortController.signal.aborted) {
                  _context3.next = 5;
                  break;
                }

                this.store.cleanupStory(this.story);
                throw PREPARE_ABORTED;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function prepare() {
        return _prepare.apply(this, arguments);
      }

      return prepare;
    }() // The two story "renders" are equal and have both loaded the same story

  }, {
    key: "isEqual",
    value: function isEqual(other) {
      return other && this.id === other.id && this.story && this.story === other.story;
    }
  }, {
    key: "isPreparing",
    value: function isPreparing() {
      return ['preparing'].includes(this.phase);
    }
  }, {
    key: "isPending",
    value: function isPending() {
      return ['rendering', 'playing'].includes(this.phase);
    }
  }, {
    key: "context",
    value: function context() {
      return this.store.getStoryContext(this.story);
    }
  }, {
    key: "renderToElement",
    value: function () {
      var _renderToElement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(canvasElement) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.canvasElement = canvasElement; // FIXME: this comment
                // Start the first (initial) render. We don't await here because we need to return the "cleanup"
                // function below right away, so if the user changes story during the first render we can cancel
                // it without having to first wait for it to finish.
                // Whenever the selection changes we want to force the component to be remounted.

                return _context4.abrupt("return", this.render({
                  initial: true,
                  forceRemount: true
                }));

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function renderToElement(_x4) {
        return _renderToElement.apply(this, arguments);
      }

      return renderToElement;
    }()
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var _this2 = this;

        var _ref2,
            _ref2$initial,
            initial,
            _ref2$forceRemount,
            forceRemount,
            _this$story,
            id,
            componentId,
            title,
            name,
            applyLoaders,
            unboundStoryFn,
            playFunction,
            abortSignal,
            loadedContext,
            renderStoryContext,
            _renderContext,
            _args9 = arguments;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _ref2 = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : {}, _ref2$initial = _ref2.initial, initial = _ref2$initial === void 0 ? false : _ref2$initial, _ref2$forceRemount = _ref2.forceRemount, forceRemount = _ref2$forceRemount === void 0 ? false : _ref2$forceRemount;

                if (this.story) {
                  _context9.next = 3;
                  break;
                }

                throw new Error('cannot render when not prepared');

              case 3:
                _this$story = this.story, id = _this$story.id, componentId = _this$story.componentId, title = _this$story.title, name = _this$story.name, applyLoaders = _this$story.applyLoaders, unboundStoryFn = _this$story.unboundStoryFn, playFunction = _this$story.playFunction;

                if (forceRemount && !initial) {
                  // NOTE: we don't check the cancel actually worked here, so the previous
                  // render could conceivably still be running after this call.
                  // We might want to change that in the future.
                  this.cancelRender();
                  this.abortController = createController();
                } // We need a stable reference to the signal -- if a re-mount happens the
                // abort controller may be torn down (above) before we actually check the signal.


                abortSignal = this.abortController.signal;
                _context9.prev = 6;
                _context9.next = 9;
                return this.runPhase(abortSignal, 'loading', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return applyLoaders(Object.assign({}, _this2.context(), {
                            viewMode: _this2.viewMode
                          }));

                        case 2:
                          loadedContext = _context5.sent;

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));

              case 9:
                if (!abortSignal.aborted) {
                  _context9.next = 11;
                  break;
                }

                return _context9.abrupt("return");

              case 11:
                renderStoryContext = Object.assign({}, loadedContext, this.context(), {
                  abortSignal: abortSignal,
                  canvasElement: this.canvasElement
                });
                _renderContext = Object.assign({
                  componentId: componentId,
                  title: title,
                  kind: title,
                  id: id,
                  name: name,
                  story: name
                }, this.callbacks, {
                  forceRemount: forceRemount || this.notYetRendered,
                  storyContext: renderStoryContext,
                  storyFn: function storyFn() {
                    return unboundStoryFn(renderStoryContext);
                  },
                  unboundStoryFn: unboundStoryFn
                });
                _context9.next = 15;
                return this.runPhase(abortSignal, 'rendering', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          return _context6.abrupt("return", _this2.renderToScreen(_renderContext, _this2.canvasElement));

                        case 1:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                })));

              case 15:
                this.notYetRendered = false;

                if (!abortSignal.aborted) {
                  _context9.next = 18;
                  break;
                }

                return _context9.abrupt("return");

              case 18:
                if (!(forceRemount && playFunction)) {
                  _context9.next = 27;
                  break;
                }

                this.disableKeyListeners = true;
                _context9.next = 22;
                return this.runPhase(abortSignal, 'playing', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          return _context7.abrupt("return", playFunction(_renderContext.storyContext));

                        case 1:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })));

              case 22:
                _context9.next = 24;
                return this.runPhase(abortSignal, 'played');

              case 24:
                this.disableKeyListeners = false;

                if (!abortSignal.aborted) {
                  _context9.next = 27;
                  break;
                }

                return _context9.abrupt("return");

              case 27:
                _context9.next = 29;
                return this.runPhase(abortSignal, 'completed', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          return _context8.abrupt("return", _this2.channel.emit(dist_esm.STORY_RENDERED, id));

                        case 1:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                })));

              case 29:
                _context9.next = 34;
                break;

              case 31:
                _context9.prev = 31;
                _context9.t0 = _context9["catch"](6);
                this.callbacks.showException(_context9.t0);

              case 34:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[6, 31]]);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "rerender",
    value: function () {
      var _rerender = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.render());

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function rerender() {
        return _rerender.apply(this, arguments);
      }

      return rerender;
    }()
  }, {
    key: "remount",
    value: function () {
      var _remount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.render({
                  forceRemount: true
                }));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function remount() {
        return _remount.apply(this, arguments);
      }

      return remount;
    }() // If the story is torn down (either a new story is rendered or the docs page removes it)
    // we need to consider the fact that the initial render may not be finished
    // (possibly the loaders or the play function are still running). We use the controller
    // as a method to abort them, ASAP, but this is not foolproof as we cannot control what
    // happens inside the user's code.

  }, {
    key: "cancelRender",
    value: function cancelRender() {
      this.abortController.abort();
    }
  }, {
    key: "teardown",
    value: function () {
      var _teardown = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var options,
            i,
            _args12 = arguments;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                options = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {};
                this.cancelRender(); // If the story has loaded, we need to cleanup

                if (this.story) this.store.cleanupStory(this.story); // Check if we're done rendering/playing. If not, we may have to reload the page.
                // Wait several ticks that may be needed to handle the abort, then try again.
                // Note that there's a max of 5 nested timeouts before they're no longer "instant".

                i = 0;

              case 4:
                if (!(i < 3)) {
                  _context12.next = 12;
                  break;
                }

                if (this.isPending()) {
                  _context12.next = 7;
                  break;
                }

                return _context12.abrupt("return");

              case 7:
                _context12.next = 9;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 0);
                });

              case 9:
                i += 1;
                _context12.next = 4;
                break;

              case 12:
                // If we still haven't completed, reload the page (iframe) to ensure we have a clean slate
                // for the next render. Since the reload can take a brief moment to happen, we want to stop
                // further rendering by awaiting a never-resolving promise (which is destroyed on reload).
                window_default().window.location.reload();
                _context12.next = 15;
                return new Promise(function () {});

              case 15:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function teardown() {
        return _teardown.apply(this, arguments);
      }

      return teardown;
    }()
  }]);

  return StoryRender;
}();
StoryRender.displayName = "StoryRender";
;// CONCATENATED MODULE: ./node_modules/@storybook/preview-web/dist/esm/Preview.js









var _templateObject, _templateObject2;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function Preview_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Preview_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Preview_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Preview_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Preview_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Preview_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Preview_createClass(Constructor, protoProps, staticProps) { if (protoProps) Preview_defineProperties(Constructor.prototype, protoProps); if (staticProps) Preview_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




















var fetch = (window_default()).fetch;
var STORY_INDEX_PATH = './stories.json';
var Preview = /*#__PURE__*/function () {
  function Preview() {
    var _global$FEATURES;

    Preview_classCallCheck(this, Preview);

    this.channel = void 0;
    this.serverChannel = void 0;
    this.storyStore = void 0;
    this.getStoryIndex = void 0;
    this.importFn = void 0;
    this.renderToDOM = void 0;
    this.storyRenders = [];
    this.previewEntryError = void 0;
    this.channel = addons_dist_esm/* addons.getChannel */.KP.getChannel();

    if ((_global$FEATURES = (window_default()).FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.storyStoreV7 && addons_dist_esm/* addons.hasServerChannel */.KP.hasServerChannel()) {
      this.serverChannel = addons_dist_esm/* addons.getServerChannel */.KP.getServerChannel();
    }

    this.storyStore = new StoryStore/* StoryStore */.a();
  } // INITIALIZATION
  // NOTE: the reason that the preview and store's initialization code is written in a promise
  // style and not `async-await`, and the use of `SynchronousPromise`s is in order to allow
  // storyshots to immediately call `raw()` on the store without waiting for a later tick.
  // (Even simple things like `Promise.resolve()` and `await` involve the callback happening
  // in the next promise "tick").
  // See the comment in `storyshots-core/src/api/index.ts` for more detail.


  Preview_createClass(Preview, [{
    key: "initialize",
    value: function initialize(_ref) {
      var _this = this;

      var getStoryIndex = _ref.getStoryIndex,
          importFn = _ref.importFn,
          getProjectAnnotations = _ref.getProjectAnnotations;
      // We save these two on initialization in case `getProjectAnnotations` errors,
      // in which case we may need them later when we recover.
      this.getStoryIndex = getStoryIndex;
      this.importFn = importFn;
      this.setupListeners();
      return this.getProjectAnnotationsOrRenderError(getProjectAnnotations).then(function (projectAnnotations) {
        return _this.initializeWithProjectAnnotations(projectAnnotations);
      });
    }
  }, {
    key: "setupListeners",
    value: function setupListeners() {
      var _this$serverChannel;

      (_this$serverChannel = this.serverChannel) === null || _this$serverChannel === void 0 ? void 0 : _this$serverChannel.on(dist_esm.STORY_INDEX_INVALIDATED, this.onStoryIndexChanged.bind(this));
      this.channel.on(dist_esm.UPDATE_GLOBALS, this.onUpdateGlobals.bind(this));
      this.channel.on(dist_esm.UPDATE_STORY_ARGS, this.onUpdateArgs.bind(this));
      this.channel.on(dist_esm.RESET_STORY_ARGS, this.onResetArgs.bind(this));
      this.channel.on(dist_esm.FORCE_RE_RENDER, this.onForceReRender.bind(this));
      this.channel.on(dist_esm.FORCE_REMOUNT, this.onForceRemount.bind(this));
    }
  }, {
    key: "getProjectAnnotationsOrRenderError",
    value: function getProjectAnnotationsOrRenderError(getProjectAnnotations) {
      var _this2 = this;

      return synchronous_promise.SynchronousPromise.resolve().then(getProjectAnnotations).then(function (projectAnnotations) {
        _this2.renderToDOM = projectAnnotations.renderToDOM;

        if (!_this2.renderToDOM) {
          throw new Error((0,esm/* default */.C)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            Expected your framework's preset to export a `renderToDOM` field.\n\n            Perhaps it needs to be upgraded for Storybook 6.4?\n\n            More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field          \n          "], ["\n            Expected your framework's preset to export a \\`renderToDOM\\` field.\n\n            Perhaps it needs to be upgraded for Storybook 6.4?\n\n            More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field          \n          "]))));
        }

        return projectAnnotations;
      }).catch(function (err) {
        // This is an error extracting the projectAnnotations (i.e. evaluating the previewEntries) and
        // needs to be show to the user as a simple error
        _this2.renderPreviewEntryError('Error reading preview.js:', err);

        throw err;
      });
    } // If initialization gets as far as project annotations, this function runs.

  }, {
    key: "initializeWithProjectAnnotations",
    value: function initializeWithProjectAnnotations(projectAnnotations) {
      var _global$FEATURES2,
          _this3 = this;

      this.storyStore.setProjectAnnotations(projectAnnotations);
      this.setInitialGlobals();
      var storyIndexPromise;

      if ((_global$FEATURES2 = (window_default()).FEATURES) !== null && _global$FEATURES2 !== void 0 && _global$FEATURES2.storyStoreV7) {
        storyIndexPromise = this.getStoryIndexFromServer();
      } else {
        if (!this.getStoryIndex) {
          throw new Error('No `getStoryIndex` passed defined in v6 mode');
        }

        storyIndexPromise = synchronous_promise.SynchronousPromise.resolve().then(this.getStoryIndex);
      }

      return storyIndexPromise.then(function (storyIndex) {
        return _this3.initializeWithStoryIndex(storyIndex);
      }).catch(function (err) {
        _this3.renderPreviewEntryError('Error loading story index:', err);

        throw err;
      });
    }
  }, {
    key: "setInitialGlobals",
    value: function () {
      var _setInitialGlobals = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.emitGlobals();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setInitialGlobals() {
        return _setInitialGlobals.apply(this, arguments);
      }

      return setInitialGlobals;
    }()
  }, {
    key: "emitGlobals",
    value: function emitGlobals() {
      this.channel.emit(dist_esm.SET_GLOBALS, {
        globals: this.storyStore.globals.get() || {},
        globalTypes: this.storyStore.projectAnnotations.globalTypes || {}
      });
    }
  }, {
    key: "getStoryIndexFromServer",
    value: function () {
      var _getStoryIndexFromServer = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(STORY_INDEX_PATH);

              case 2:
                result = _context2.sent;

                if (!(result.status === 200)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", result.json());

              case 5:
                _context2.t0 = Error;
                _context2.next = 8;
                return result.text();

              case 8:
                _context2.t1 = _context2.sent;
                throw new _context2.t0(_context2.t1);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getStoryIndexFromServer() {
        return _getStoryIndexFromServer.apply(this, arguments);
      }

      return getStoryIndexFromServer;
    }() // If initialization gets as far as the story index, this function runs.

  }, {
    key: "initializeWithStoryIndex",
    value: function initializeWithStoryIndex(storyIndex) {
      var _global$FEATURES3;

      return this.storyStore.initialize({
        storyIndex: storyIndex,
        importFn: this.importFn,
        cache: !((_global$FEATURES3 = (window_default()).FEATURES) !== null && _global$FEATURES3 !== void 0 && _global$FEATURES3.storyStoreV7)
      });
    } // EVENT HANDLERS
    // This happens when a config file gets reloaded

  }, {
    key: "onGetProjectAnnotationsChanged",
    value: function () {
      var _onGetProjectAnnotationsChanged = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref2) {
        var getProjectAnnotations, projectAnnotations;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                getProjectAnnotations = _ref2.getProjectAnnotations;
                delete this.previewEntryError;
                _context3.next = 4;
                return this.getProjectAnnotationsOrRenderError(getProjectAnnotations);

              case 4:
                projectAnnotations = _context3.sent;

                if (this.storyStore.projectAnnotations) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 8;
                return this.initializeWithProjectAnnotations(projectAnnotations);

              case 8:
                return _context3.abrupt("return");

              case 9:
                _context3.next = 11;
                return this.storyStore.setProjectAnnotations(projectAnnotations);

              case 11:
                this.emitGlobals();

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onGetProjectAnnotationsChanged(_x) {
        return _onGetProjectAnnotationsChanged.apply(this, arguments);
      }

      return onGetProjectAnnotationsChanged;
    }()
  }, {
    key: "onStoryIndexChanged",
    value: function () {
      var _onStoryIndexChanged = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var storyIndex;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                delete this.previewEntryError;

                if (this.storyStore.projectAnnotations) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                _context4.prev = 3;
                _context4.next = 6;
                return this.getStoryIndexFromServer();

              case 6:
                storyIndex = _context4.sent;

                if (this.storyStore.storyIndex) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 10;
                return this.initializeWithStoryIndex(storyIndex);

              case 10:
                _context4.next = 12;
                return this.onStoriesChanged({
                  storyIndex: storyIndex
                });

              case 12:
                _context4.next = 18;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](3);
                this.renderPreviewEntryError('Error loading story index:', _context4.t0);
                throw _context4.t0;

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 14]]);
      }));

      function onStoryIndexChanged() {
        return _onStoryIndexChanged.apply(this, arguments);
      }

      return onStoryIndexChanged;
    }() // This happens when a glob gets HMR-ed

  }, {
    key: "onStoriesChanged",
    value: function () {
      var _onStoriesChanged = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref3) {
        var importFn, storyIndex;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                importFn = _ref3.importFn, storyIndex = _ref3.storyIndex;
                _context5.next = 3;
                return this.storyStore.onStoriesChanged({
                  importFn: importFn,
                  storyIndex: storyIndex
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onStoriesChanged(_x2) {
        return _onStoriesChanged.apply(this, arguments);
      }

      return onStoriesChanged;
    }()
  }, {
    key: "onUpdateGlobals",
    value: function () {
      var _onUpdateGlobals = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref4) {
        var globals;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                globals = _ref4.globals;
                this.storyStore.globals.update(globals);
                _context6.next = 4;
                return Promise.all(this.storyRenders.map(function (r) {
                  return r.rerender();
                }));

              case 4:
                this.channel.emit(dist_esm.GLOBALS_UPDATED, {
                  globals: this.storyStore.globals.get(),
                  initialGlobals: this.storyStore.globals.initialGlobals
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onUpdateGlobals(_x3) {
        return _onUpdateGlobals.apply(this, arguments);
      }

      return onUpdateGlobals;
    }()
  }, {
    key: "onUpdateArgs",
    value: function () {
      var _onUpdateArgs = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref5) {
        var storyId, updatedArgs;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                storyId = _ref5.storyId, updatedArgs = _ref5.updatedArgs;
                this.storyStore.args.update(storyId, updatedArgs);
                _context7.next = 4;
                return Promise.all(this.storyRenders.filter(function (r) {
                  return r.id === storyId;
                }).map(function (r) {
                  return r.rerender();
                }));

              case 4:
                this.channel.emit(dist_esm.STORY_ARGS_UPDATED, {
                  storyId: storyId,
                  args: this.storyStore.args.get(storyId)
                });

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onUpdateArgs(_x4) {
        return _onUpdateArgs.apply(this, arguments);
      }

      return onUpdateArgs;
    }()
  }, {
    key: "onResetArgs",
    value: function () {
      var _onResetArgs = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref6) {
        var storyId, argNames, render, story, argNamesToReset, updatedArgs;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                storyId = _ref6.storyId, argNames = _ref6.argNames;
                // NOTE: we have to be careful here and avoid await-ing when updating a rendered's args.
                // That's because below in `renderStoryToElement` we have also bound to this event and will
                // render the story in the same tick.
                // However, we can do that safely as the current story is available in `this.storyRenders`
                render = this.storyRenders.find(function (r) {
                  return r.id === storyId;
                });
                _context8.t0 = render === null || render === void 0 ? void 0 : render.story;

                if (_context8.t0) {
                  _context8.next = 7;
                  break;
                }

                _context8.next = 6;
                return this.storyStore.loadStory({
                  storyId: storyId
                });

              case 6:
                _context8.t0 = _context8.sent;

              case 7:
                story = _context8.t0;
                argNamesToReset = argNames || _toConsumableArray(new Set([].concat(_toConsumableArray(Object.keys(story.initialArgs)), _toConsumableArray(Object.keys(this.storyStore.args.get(storyId))))));
                updatedArgs = argNamesToReset.reduce(function (acc, argName) {
                  acc[argName] = story.initialArgs[argName];
                  return acc;
                }, {});
                _context8.next = 12;
                return this.onUpdateArgs({
                  storyId: storyId,
                  updatedArgs: updatedArgs
                });

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function onResetArgs(_x5) {
        return _onResetArgs.apply(this, arguments);
      }

      return onResetArgs;
    }() // ForceReRender does not include a story id, so we simply must
    // re-render all stories in case they are relevant

  }, {
    key: "onForceReRender",
    value: function () {
      var _onForceReRender = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return Promise.all(this.storyRenders.map(function (r) {
                  return r.rerender();
                }));

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function onForceReRender() {
        return _onForceReRender.apply(this, arguments);
      }

      return onForceReRender;
    }()
  }, {
    key: "onForceRemount",
    value: function () {
      var _onForceRemount = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref7) {
        var storyId;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                storyId = _ref7.storyId;
                _context10.next = 3;
                return Promise.all(this.storyRenders.filter(function (r) {
                  return r.id === storyId;
                }).map(function (r) {
                  return r.remount();
                }));

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function onForceRemount(_x6) {
        return _onForceRemount.apply(this, arguments);
      }

      return onForceRemount;
    }() // Used by docs' modernInlineRender to render a story to a given element
    // Note this short-circuits the `prepare()` phase of the StoryRender,
    // main to be consistent with the previous behaviour. In the future,
    // we will change it to go ahead and load the story, which will end up being
    // "instant", although async.

  }, {
    key: "renderStoryToElement",
    value: function renderStoryToElement(story, element) {
      var _this4 = this;

      var render = new StoryRender(this.channel, this.storyStore, this.renderToDOM, this.inlineStoryCallbacks(story.id), story.id, 'docs', story);
      render.renderToElement(element);
      this.storyRenders.push(render);
      return /*#__PURE__*/Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _this4.teardownRender(render);

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));
    }
  }, {
    key: "teardownRender",
    value: function () {
      var _teardownRender = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(render) {
        var _ref9,
            viewModeChanged,
            _args12 = arguments;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _ref9 = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {}, viewModeChanged = _ref9.viewModeChanged;
                this.storyRenders = this.storyRenders.filter(function (r) {
                  return r !== render;
                });
                _context12.next = 4;
                return render === null || render === void 0 ? void 0 : render.teardown({
                  viewModeChanged: viewModeChanged
                });

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function teardownRender(_x7) {
        return _teardownRender.apply(this, arguments);
      }

      return teardownRender;
    }() // API

  }, {
    key: "extract",
    value: function () {
      var _extract = Preview_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(options) {
        var _global$FEATURES4;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!this.previewEntryError) {
                  _context13.next = 2;
                  break;
                }

                throw this.previewEntryError;

              case 2:
                if (this.storyStore.projectAnnotations) {
                  _context13.next = 4;
                  break;
                }

                throw new Error((0,esm/* default */.C)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Failed to initialize Storybook.\n      \n      Do you have an error in your `preview.js`? Check your Storybook's browser console for errors."], ["Failed to initialize Storybook.\n      \n      Do you have an error in your \\`preview.js\\`? Check your Storybook's browser console for errors."]))));

              case 4:
                if (!((_global$FEATURES4 = (window_default()).FEATURES) !== null && _global$FEATURES4 !== void 0 && _global$FEATURES4.storyStoreV7)) {
                  _context13.next = 7;
                  break;
                }

                _context13.next = 7;
                return this.storyStore.cacheAllCSFFiles();

              case 7:
                return _context13.abrupt("return", this.storyStore.extract(options));

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function extract(_x8) {
        return _extract.apply(this, arguments);
      }

      return extract;
    }() // UTILITIES

  }, {
    key: "inlineStoryCallbacks",
    value: function inlineStoryCallbacks(storyId) {
      return {
        showMain: function showMain() {},
        showError: function showError(err) {
          return client_logger_dist_esm/* logger.error */.kg.error("Error rendering docs story (".concat(storyId, ")"), err);
        },
        showException: function showException(err) {
          return client_logger_dist_esm/* logger.error */.kg.error("Error rendering docs story (".concat(storyId, ")"), err);
        }
      };
    }
  }, {
    key: "renderPreviewEntryError",
    value: function renderPreviewEntryError(reason, err) {
      this.previewEntryError = err;
      client_logger_dist_esm/* logger.error */.kg.error(reason);
      client_logger_dist_esm/* logger.error */.kg.error(err);
      this.channel.emit(dist_esm.CONFIG_ERROR, err);
    }
  }]);

  return Preview;
}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(64765);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(26833);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(80129);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(69720);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(39714);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(23157);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(27852);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(69600);
// EXTERNAL MODULE: ./node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(68630);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);
;// CONCATENATED MODULE: ./node_modules/@storybook/preview-web/dist/esm/parseArgsParam.js










var parseArgsParam_templateObject;

function parseArgsParam_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || parseArgsParam_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function parseArgsParam_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return parseArgsParam_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return parseArgsParam_arrayLikeToArray(o, minLen); }

function parseArgsParam_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















 // Keep this in sync with validateArgs in router/src/utils.ts

var VALIDATION_REGEXP = /^[a-zA-Z0-9 _-]*$/;
var NUMBER_REGEXP = /^-?[0-9]+(\.[0-9]+)?$/;
var HEX_REGEXP = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i;
var COLOR_REGEXP = /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i;

var validateArgs = function validateArgs() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = arguments.length > 1 ? arguments[1] : undefined;
  if (key === null) return false;
  if (key === '' || !VALIDATION_REGEXP.test(key)) return false;
  if (value === null || value === undefined) return true; // encoded as `!null` or `!undefined`

  if (value instanceof Date) return true; // encoded as modified ISO string

  if (typeof value === 'number' || typeof value === 'boolean') return true;

  if (typeof value === 'string') {
    return VALIDATION_REGEXP.test(value) || NUMBER_REGEXP.test(value) || HEX_REGEXP.test(value) || COLOR_REGEXP.test(value);
  }

  if (Array.isArray(value)) return value.every(function (v) {
    return validateArgs(key, v);
  });
  if (isPlainObject_default()(value)) return Object.entries(value).every(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return validateArgs(k, v);
  });
  return false;
};

var QS_OPTIONS = {
  delimiter: ';',
  // we're parsing a single query param
  allowDots: true,
  // objects are encoded using dot notation
  allowSparse: true,
  // arrays will be merged on top of their initial value
  decoder: function (_decoder) {
    function decoder(_x, _x2, _x3, _x4) {
      return _decoder.apply(this, arguments);
    }

    decoder.toString = function () {
      return _decoder.toString();
    };

    return decoder;
  }(function (str, defaultDecoder, charset, type) {
    if (type === 'value' && str.startsWith('!')) {
      if (str === '!undefined') return undefined;
      if (str === '!null') return null;
      if (str.startsWith('!date(') && str.endsWith(')')) return new Date(str.slice(6, -1));
      if (str.startsWith('!hex(') && str.endsWith(')')) return "#".concat(str.slice(5, -1));
      var color = str.slice(1).match(COLOR_REGEXP);

      if (color) {
        if (str.startsWith('!rgba')) return "".concat(color[1], "(").concat(color[2], ", ").concat(color[3], ", ").concat(color[4], ", ").concat(color[5], ")");
        if (str.startsWith('!hsla')) return "".concat(color[1], "(").concat(color[2], ", ").concat(color[3], "%, ").concat(color[4], "%, ").concat(color[5], ")");
        return str.startsWith('!rgb') ? "".concat(color[1], "(").concat(color[2], ", ").concat(color[3], ", ").concat(color[4], ")") : "".concat(color[1], "(").concat(color[2], ", ").concat(color[3], "%, ").concat(color[4], "%)");
      }
    }

    if (type === 'value' && NUMBER_REGEXP.test(str)) return Number(str);
    return defaultDecoder(str, defaultDecoder, charset);
  })
};
var parseArgsParam = function parseArgsParam(argsString) {
  var parts = argsString.split(';').map(function (part) {
    return part.replace('=', '~').replace(':', '=');
  });
  return Object.entries(lib_default().parse(parts.join(';'), QS_OPTIONS)).reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    if (validateArgs(key, value)) return Object.assign(acc, _defineProperty({}, key, value));
    client_logger_dist_esm/* once.warn */.IH.warn((0,esm/* default */.C)(parseArgsParam_templateObject || (parseArgsParam_templateObject = parseArgsParam_taggedTemplateLiteral(["\n      Omitted potentially unsafe URL args.\n\n      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url\n    "]))));
    return acc;
  }, {});
};
;// CONCATENATED MODULE: ./node_modules/@storybook/preview-web/dist/esm/UrlStore.js








var _excluded = ["path", "selectedKind", "selectedStory"];

function UrlStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UrlStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UrlStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) UrlStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) UrlStore_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var UrlStore_history = (window_default()).history,
    UrlStore_document = (window_default()).document;
function pathToId(path) {
  var match = (path || '').match(/^\/story\/(.+)/);

  if (!match) {
    throw new Error("Invalid path '".concat(path, "',  must start with '/story/'"));
  }

  return match[1];
}

var getQueryString = function getQueryString(_ref) {
  var selection = _ref.selection,
      extraParams = _ref.extraParams;
  var _document$location$se = UrlStore_document.location.search,
      search = _document$location$se === void 0 ? '' : _document$location$se;

  var _qs$parse = lib_default().parse(search, {
    ignoreQueryPrefix: true
  }),
      path = _qs$parse.path,
      selectedKind = _qs$parse.selectedKind,
      selectedStory = _qs$parse.selectedStory,
      rest = _objectWithoutProperties(_qs$parse, _excluded);

  return lib_default().stringify(Object.assign({}, rest, extraParams, selection && {
    id: selection.storyId,
    viewMode: selection.viewMode
  }), {
    encode: false,
    addQueryPrefix: true
  });
};

var setPath = function setPath(selection) {
  if (!selection) return;
  var query = getQueryString({
    selection: selection
  });
  var _document$location$ha = UrlStore_document.location.hash,
      hash = _document$location$ha === void 0 ? '' : _document$location$ha;
  UrlStore_document.title = selection.storyId;
  UrlStore_history.replaceState({}, '', "".concat(UrlStore_document.location.pathname).concat(query).concat(hash));
};

var isObject = function isObject(val) {
  return val != null && _typeof(val) === 'object' && Array.isArray(val) === false;
};

var getFirstString = function getFirstString(v) {
  if (typeof v === 'string') {
    return v;
  }

  if (Array.isArray(v)) {
    return getFirstString(v[0]);
  }

  if (isObject(v)) {
    // @ts-ignore
    return getFirstString(Object.values(v));
  }

  return undefined;
};

var deprecatedLegacyQuery = browser_default()(function () {
  return 0;
}, "URL formats with `selectedKind` and `selectedName` query parameters are deprecated.\nUse `id=$storyId` instead.\nSee https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-url-structure");
var getSelectionSpecifierFromPath = function getSelectionSpecifierFromPath() {
  var query = lib_default().parse(UrlStore_document.location.search, {
    ignoreQueryPrefix: true
  });
  var args = typeof query.args === 'string' ? parseArgsParam(query.args) : undefined;
  var globals = typeof query.globals === 'string' ? parseArgsParam(query.globals) : undefined;
  var viewMode = getFirstString(query.viewMode);

  if (typeof viewMode !== 'string' || !viewMode.match(/docs|story/)) {
    viewMode = 'story';
  }

  var path = getFirstString(query.path);
  var storyId = path ? pathToId(path) : getFirstString(query.id);

  if (storyId) {
    return {
      storySpecifier: storyId,
      args: args,
      globals: globals,
      viewMode: viewMode
    };
  } // Legacy URL format


  var title = getFirstString(query.selectedKind);
  var name = getFirstString(query.selectedStory);

  if (title && name) {
    deprecatedLegacyQuery();
    return {
      storySpecifier: {
        title: title,
        name: name
      },
      args: args,
      globals: globals,
      viewMode: viewMode
    };
  }

  return null;
};
var UrlStore = /*#__PURE__*/function () {
  function UrlStore() {
    UrlStore_classCallCheck(this, UrlStore);

    this.selectionSpecifier = void 0;
    this.selection = void 0;
    this.selectionSpecifier = getSelectionSpecifierFromPath();
  }

  UrlStore_createClass(UrlStore, [{
    key: "setSelection",
    value: function setSelection(selection) {
      this.selection = selection;
      setPath(this.selection);
    }
  }, {
    key: "setQueryParams",
    value: function setQueryParams(queryParams) {
      var query = getQueryString({
        extraParams: queryParams
      });
      var _document$location$ha2 = UrlStore_document.location.hash,
          hash = _document$location$ha2 === void 0 ? '' : _document$location$ha2;
      UrlStore_history.replaceState({}, '', "".concat(UrlStore_document.location.pathname).concat(query).concat(hash));
    }
  }]);

  return UrlStore;
}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(54747);
// EXTERNAL MODULE: ./node_modules/ansi-to-html/lib/ansi_to_html.js
var ansi_to_html = __webpack_require__(7174);
var ansi_to_html_default = /*#__PURE__*/__webpack_require__.n(ansi_to_html);
;// CONCATENATED MODULE: ./node_modules/@storybook/preview-web/dist/esm/WebView.js










var WebView_templateObject;

function WebView_slicedToArray(arr, i) { return WebView_arrayWithHoles(arr) || WebView_iterableToArrayLimit(arr, i) || WebView_unsupportedIterableToArray(arr, i) || WebView_nonIterableRest(); }

function WebView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function WebView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return WebView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return WebView_arrayLikeToArray(o, minLen); }

function WebView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function WebView_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function WebView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function WebView_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










function WebView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WebView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WebView_createClass(Constructor, protoProps, staticProps) { if (protoProps) WebView_defineProperties(Constructor.prototype, protoProps); if (staticProps) WebView_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var WebView_document = (window_default()).document;
var PREPARING_DELAY = 100;
var layoutClassMap = {
  centered: 'sb-main-centered',
  fullscreen: 'sb-main-fullscreen',
  padded: 'sb-main-padded'
};
var Mode;

(function (Mode) {
  Mode["MAIN"] = "MAIN";
  Mode["NOPREVIEW"] = "NOPREVIEW";
  Mode["PREPARING_STORY"] = "PREPARING_STORY";
  Mode["PREPARING_DOCS"] = "PREPARING_DOCS";
  Mode["ERROR"] = "ERROR";
})(Mode || (Mode = {}));

var classes = {
  PREPARING_STORY: 'sb-show-preparing-story',
  PREPARING_DOCS: 'sb-show-preparing-docs',
  MAIN: 'sb-show-main',
  NOPREVIEW: 'sb-show-nopreview',
  ERROR: 'sb-show-errordisplay'
};
var ansiConverter = new (ansi_to_html_default())({
  escapeXML: true
});
var WebView = /*#__PURE__*/function () {
  function WebView() {
    WebView_classCallCheck(this, WebView);

    this.currentLayoutClass = void 0;
    this.testing = false;
    this.preparingTimeout = null;

    // Special code for testing situations
    var _qs$parse = lib_default().parse(WebView_document.location.search, {
      ignoreQueryPrefix: true
    }),
        __SPECIAL_TEST_PARAMETER__ = _qs$parse.__SPECIAL_TEST_PARAMETER__;

    switch (__SPECIAL_TEST_PARAMETER__) {
      case 'preparing-story':
        {
          this.showPreparingStory();
          this.testing = true;
          break;
        }

      case 'preparing-docs':
        {
          this.showPreparingDocs();
          this.testing = true;
          break;
        }

      default: // pass;

    }
  } // Get ready to render a story, returning the element to render to


  WebView_createClass(WebView, [{
    key: "prepareForStory",
    value: function prepareForStory(story) {
      this.showStory();
      this.applyLayout(story.parameters.layout);
      WebView_document.documentElement.scrollTop = 0;
      WebView_document.documentElement.scrollLeft = 0;
      return this.storyRoot();
    }
  }, {
    key: "storyRoot",
    value: function storyRoot() {
      return WebView_document.getElementById('root');
    }
  }, {
    key: "prepareForDocs",
    value: function prepareForDocs() {
      this.showMain();
      this.showDocs();
      this.applyLayout('fullscreen');
      return this.docsRoot();
    }
  }, {
    key: "docsRoot",
    value: function docsRoot() {
      return WebView_document.getElementById('docs-root');
    }
  }, {
    key: "applyLayout",
    value: function applyLayout() {
      var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'padded';

      if (layout === 'none') {
        WebView_document.body.classList.remove(this.currentLayoutClass);
        this.currentLayoutClass = null;
        return;
      }

      this.checkIfLayoutExists(layout);
      var layoutClass = layoutClassMap[layout];
      WebView_document.body.classList.remove(this.currentLayoutClass);
      WebView_document.body.classList.add(layoutClass);
      this.currentLayoutClass = layoutClass;
    }
  }, {
    key: "checkIfLayoutExists",
    value: function checkIfLayoutExists(layout) {
      if (!layoutClassMap[layout]) {
        client_logger_dist_esm/* logger.warn */.kg.warn((0,esm/* default */.C)(WebView_templateObject || (WebView_templateObject = WebView_taggedTemplateLiteral(["The desired layout: ", " is not a valid option.\n         The possible options are: ", ", none."])), layout, Object.keys(layoutClassMap).join(', ')));
      }
    }
  }, {
    key: "showMode",
    value: function showMode(mode) {
      clearTimeout(this.preparingTimeout);
      Object.keys(Mode).forEach(function (otherMode) {
        if (otherMode === mode) {
          WebView_document.body.classList.add(classes[otherMode]);
        } else {
          WebView_document.body.classList.remove(classes[otherMode]);
        }
      });
    }
  }, {
    key: "showErrorDisplay",
    value: function showErrorDisplay(_ref) {
      var _ref$message = _ref.message,
          message = _ref$message === void 0 ? '' : _ref$message,
          _ref$stack = _ref.stack,
          stack = _ref$stack === void 0 ? '' : _ref$stack;
      var header = message;
      var detail = stack;
      var parts = message.split('\n');

      if (parts.length > 1) {
        var _parts = WebView_slicedToArray(parts, 1);

        header = _parts[0];
        detail = parts.slice(1).join('\n');
      }

      WebView_document.getElementById('error-message').innerHTML = ansiConverter.toHtml(header);
      WebView_document.getElementById('error-stack').innerHTML = ansiConverter.toHtml(detail);
      this.showMode(Mode.ERROR);
    }
  }, {
    key: "showNoPreview",
    value: function showNoPreview() {
      var _this$storyRoot, _this$docsRoot;

      if (this.testing) return;
      this.showMode(Mode.NOPREVIEW); // In storyshots this can get called and these two can be null

      (_this$storyRoot = this.storyRoot()) === null || _this$storyRoot === void 0 ? void 0 : _this$storyRoot.setAttribute('hidden', 'true');
      (_this$docsRoot = this.docsRoot()) === null || _this$docsRoot === void 0 ? void 0 : _this$docsRoot.setAttribute('hidden', 'true');
    }
  }, {
    key: "showPreparingStory",
    value: function showPreparingStory() {
      var _this = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$immediate = _ref2.immediate,
          immediate = _ref2$immediate === void 0 ? false : _ref2$immediate;

      clearTimeout(this.preparingTimeout);

      if (immediate) {
        this.showMode(Mode.PREPARING_STORY);
      } else {
        this.preparingTimeout = setTimeout(function () {
          return _this.showMode(Mode.PREPARING_STORY);
        }, PREPARING_DELAY);
      }
    }
  }, {
    key: "showPreparingDocs",
    value: function showPreparingDocs() {
      var _this2 = this;

      clearTimeout(this.preparingTimeout);
      this.preparingTimeout = setTimeout(function () {
        return _this2.showMode(Mode.PREPARING_DOCS);
      }, PREPARING_DELAY);
    }
  }, {
    key: "showMain",
    value: function showMain() {
      this.showMode(Mode.MAIN);
    }
  }, {
    key: "showDocs",
    value: function showDocs() {
      this.storyRoot().setAttribute('hidden', 'true');
      this.docsRoot().removeAttribute('hidden');
    }
  }, {
    key: "showStory",
    value: function showStory() {
      this.docsRoot().setAttribute('hidden', 'true');
      this.storyRoot().removeAttribute('hidden');
    }
  }, {
    key: "showStoryDuringRender",
    value: function showStoryDuringRender() {
      // When 'showStory' is called (at the start of rendering) we get rid of our display:none
      // from all children of the root (but keep the preparing spinner visible). This may mean
      // that very weird and high z-index stories are briefly visible.
      // See https://github.com/storybookjs/storybook/issues/16847 and
      //   http://localhost:9011/?path=/story/core-rendering--auto-focus (official SB)
      WebView_document.body.classList.add(classes.MAIN);
    }
  }]);

  return WebView;
}();
;// CONCATENATED MODULE: ./node_modules/@storybook/preview-web/dist/esm/DocsRender.js






function DocsRender_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function DocsRender_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { DocsRender_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { DocsRender_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function DocsRender_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DocsRender_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DocsRender_createClass(Constructor, protoProps, staticProps) { if (protoProps) DocsRender_defineProperties(Constructor.prototype, protoProps); if (staticProps) DocsRender_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var DocsRender = /*#__PURE__*/function () {
  // eslint-disable-next-line no-useless-constructor
  function DocsRender(channel, store, id, story) {
    DocsRender_classCallCheck(this, DocsRender);

    this.channel = channel;
    this.store = store;
    this.id = id;
    this.story = story;
    this.canvasElement = void 0;
    this.context = void 0;
    this.disableKeyListeners = false;
  } // DocsRender doesn't prepare, it is created *from* a prepared StoryRender


  DocsRender_createClass(DocsRender, [{
    key: "isPreparing",
    value: function isPreparing() {
      return false;
    }
  }, {
    key: "renderToElement",
    value: function () {
      var _renderToElement = DocsRender_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(canvasElement, renderStoryToElement) {
        var _this = this,
            _global$FEATURES;

        var _this$story, id, title, name, csfFile;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.canvasElement = canvasElement;
                _this$story = this.story, id = _this$story.id, title = _this$story.title, name = _this$story.name;
                _context.next = 4;
                return this.store.loadCSFFileByStoryId(this.id);

              case 4:
                csfFile = _context.sent;
                this.context = Object.assign({
                  id: id,
                  title: title,
                  name: name,
                  // NOTE: these two functions are *sync* so cannot access stories from other CSF files
                  storyById: function storyById(storyId) {
                    return _this.store.storyFromCSFFile({
                      storyId: storyId,
                      csfFile: csfFile
                    });
                  },
                  componentStories: function componentStories() {
                    return _this.store.componentStoriesFromCSFFile({
                      csfFile: csfFile
                    });
                  },
                  loadStory: function loadStory(storyId) {
                    return _this.store.loadStory({
                      storyId: storyId
                    });
                  },
                  renderStoryToElement: renderStoryToElement,
                  getStoryContext: function getStoryContext(renderedStory) {
                    return Object.assign({}, _this.store.getStoryContext(renderedStory), {
                      viewMode: 'docs'
                    });
                  }
                }, !((_global$FEATURES = (window_default()).FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.breakingChangesV7) && this.store.getStoryContext(this.story));
                return _context.abrupt("return", this.render());

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderToElement(_x, _x2) {
        return _renderToElement.apply(this, arguments);
      }

      return renderToElement;
    }()
  }, {
    key: "render",
    value: function () {
      var _render = DocsRender_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var renderer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!this.story || !this.context || !this.canvasElement)) {
                  _context2.next = 2;
                  break;
                }

                throw new Error('DocsRender not ready to render');

              case 2:
                _context2.next = 4;
                return __webpack_require__.e(/* import() */ 701).then(__webpack_require__.bind(__webpack_require__, 66701));

              case 4:
                renderer = _context2.sent;
                renderer.renderDocs(this.story, this.context, this.canvasElement, function () {
                  return _this2.channel.emit(dist_esm.DOCS_RENDERED, _this2.id);
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "rerender",
    value: function () {
      var _rerender = DocsRender_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(isGlobals) {
        var _global$FEATURES2;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!((_global$FEATURES2 = (window_default()).FEATURES) !== null && _global$FEATURES2 !== void 0 && _global$FEATURES2.modernInlineRender) || isGlobals)) {
                  _context3.next = 3;
                  break;
                }

                _context3.next = 3;
                return this.render();

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function rerender(_x3) {
        return _rerender.apply(this, arguments);
      }

      return rerender;
    }()
  }, {
    key: "teardown",
    value: function () {
      var _teardown = DocsRender_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _ref,
            viewModeChanged,
            renderer,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {}, viewModeChanged = _ref.viewModeChanged;

                if (!(!viewModeChanged || !this.canvasElement)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                _context4.next = 5;
                return __webpack_require__.e(/* import() */ 701).then(__webpack_require__.bind(__webpack_require__, 66701));

              case 5:
                renderer = _context4.sent;
                renderer.unmountDocs(this.canvasElement);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function teardown() {
        return _teardown.apply(this, arguments);
      }

      return teardown;
    }()
  }], [{
    key: "fromStoryRender",
    value: function fromStoryRender(storyRender) {
      var channel = storyRender.channel,
          store = storyRender.store,
          id = storyRender.id,
          story = storyRender.story;
      return new DocsRender(channel, store, id, story);
    }
  }]);

  return DocsRender;
}();
DocsRender.displayName = "DocsRender";
;// CONCATENATED MODULE: ./node_modules/@storybook/preview-web/dist/esm/PreviewWeb.js
function PreviewWeb_typeof(obj) { "@babel/helpers - typeof"; return PreviewWeb_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PreviewWeb_typeof(obj); }









var PreviewWeb_templateObject, PreviewWeb_templateObject2, _templateObject3, _templateObject4;



function PreviewWeb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function PreviewWeb_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { PreviewWeb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { PreviewWeb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function PreviewWeb_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function PreviewWeb_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PreviewWeb_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PreviewWeb_createClass(Constructor, protoProps, staticProps) { if (protoProps) PreviewWeb_defineProperties(Constructor.prototype, protoProps); if (staticProps) PreviewWeb_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (PreviewWeb_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }























var globalWindow = (window_default()).window;

function focusInInput(event) {
  var target = event.target;
  return /input|textarea/i.test(target.tagName) || target.getAttribute('contenteditable') !== null;
}

var PreviewWeb = /*#__PURE__*/function (_Preview) {
  _inherits(PreviewWeb, _Preview);

  var _super = _createSuper(PreviewWeb);

  function PreviewWeb() {
    var _this;

    PreviewWeb_classCallCheck(this, PreviewWeb);

    _this = _super.call(this);
    _this.urlStore = void 0;
    _this.view = void 0;
    _this.previewEntryError = void 0;
    _this.currentSelection = void 0;
    _this.currentRender = void 0;
    _this.view = new WebView();
    _this.urlStore = new UrlStore(); // Add deprecated APIs for back-compat
    // @ts-ignore

    _this.storyStore.getSelection = browser_default()(function () {
      return _this.urlStore.selection;
    }, (0,esm/* default */.C)(PreviewWeb_templateObject || (PreviewWeb_templateObject = PreviewWeb_taggedTemplateLiteral(["\n        `__STORYBOOK_STORY_STORE__.getSelection()` is deprecated and will be removed in 7.0.\n  \n        To get the current selection, use the `useStoryContext()` hook from `@storybook/addons`.\n      "], ["\n        \\`__STORYBOOK_STORY_STORE__.getSelection()\\` is deprecated and will be removed in 7.0.\n  \n        To get the current selection, use the \\`useStoryContext()\\` hook from \\`@storybook/addons\\`.\n      "]))));
    return _this;
  }

  PreviewWeb_createClass(PreviewWeb, [{
    key: "setupListeners",
    value: function setupListeners() {
      _get(_getPrototypeOf(PreviewWeb.prototype), "setupListeners", this).call(this);

      globalWindow.onkeydown = this.onKeydown.bind(this);
      this.channel.on(dist_esm.SET_CURRENT_STORY, this.onSetCurrentStory.bind(this));
      this.channel.on(dist_esm.UPDATE_QUERY_PARAMS, this.onUpdateQueryParams.bind(this));
      this.channel.on(dist_esm.PRELOAD_STORIES, this.onPreloadStories.bind(this));
    }
  }, {
    key: "initializeWithProjectAnnotations",
    value: function initializeWithProjectAnnotations(projectAnnotations) {
      var _this2 = this;

      return _get(_getPrototypeOf(PreviewWeb.prototype), "initializeWithProjectAnnotations", this).call(this, projectAnnotations).then(function () {
        return _this2.setInitialGlobals();
      });
    }
  }, {
    key: "setInitialGlobals",
    value: function () {
      var _setInitialGlobals = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref, globals;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref = this.urlStore.selectionSpecifier || {}, globals = _ref.globals;

                if (globals) {
                  this.storyStore.globals.updateFromPersisted(globals);
                }

                this.emitGlobals();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setInitialGlobals() {
        return _setInitialGlobals.apply(this, arguments);
      }

      return setInitialGlobals;
    }() // If initialization gets as far as the story index, this function runs.

  }, {
    key: "initializeWithStoryIndex",
    value: function initializeWithStoryIndex(storyIndex) {
      var _this3 = this;

      return _get(_getPrototypeOf(PreviewWeb.prototype), "initializeWithStoryIndex", this).call(this, storyIndex).then(function () {
        var _global$FEATURES;

        if (!((_global$FEATURES = (window_default()).FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.storyStoreV7)) {
          _this3.channel.emit(dist_esm.SET_STORIES, _this3.storyStore.getSetStoriesPayload());
        }

        return _this3.selectSpecifiedStory();
      });
    } // Use the selection specifier to choose a story, then render it

  }, {
    key: "selectSpecifiedStory",
    value: function () {
      var _selectSpecifiedStory = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this$urlStore$select, storySpecifier, viewMode, args, storyId;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.urlStore.selectionSpecifier) {
                  _context2.next = 3;
                  break;
                }

                this.renderMissingStory();
                return _context2.abrupt("return");

              case 3:
                _this$urlStore$select = this.urlStore.selectionSpecifier, storySpecifier = _this$urlStore$select.storySpecifier, viewMode = _this$urlStore$select.viewMode, args = _this$urlStore$select.args;
                storyId = this.storyStore.storyIndex.storyIdFromSpecifier(storySpecifier);

                if (storyId) {
                  _context2.next = 8;
                  break;
                }

                if (storySpecifier === '*') {
                  this.renderStoryLoadingException(storySpecifier, new Error((0,esm/* default */.C)(PreviewWeb_templateObject2 || (PreviewWeb_templateObject2 = PreviewWeb_taggedTemplateLiteral(["\n            Couldn't find any stories in your Storybook.\n            - Please check your stories field of your main.js config.\n            - Also check the browser console and terminal for error messages.\n          "])))));
                } else {
                  this.renderStoryLoadingException(storySpecifier, new Error((0,esm/* default */.C)(_templateObject3 || (_templateObject3 = PreviewWeb_taggedTemplateLiteral(["\n            Couldn't find story matching '", "'.\n            - Are you sure a story with that id exists?\n            - Please check your stories field of your main.js config.\n            - Also check the browser console and terminal for error messages.\n          "])), storySpecifier)));
                }

                return _context2.abrupt("return");

              case 8:
                this.urlStore.setSelection({
                  storyId: storyId,
                  viewMode: viewMode
                });
                this.channel.emit(dist_esm.STORY_SPECIFIED, this.urlStore.selection);
                this.channel.emit(dist_esm.CURRENT_STORY_WAS_SET, this.urlStore.selection);
                _context2.next = 13;
                return this.renderSelection({
                  persistedArgs: args
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function selectSpecifiedStory() {
        return _selectSpecifiedStory.apply(this, arguments);
      }

      return selectSpecifiedStory;
    }() // EVENT HANDLERS
    // This happens when a config file gets reloaded

  }, {
    key: "onGetProjectAnnotationsChanged",
    value: function () {
      var _onGetProjectAnnotationsChanged = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref2) {
        var getProjectAnnotations;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                getProjectAnnotations = _ref2.getProjectAnnotations;
                _context3.next = 3;
                return _get(_getPrototypeOf(PreviewWeb.prototype), "onGetProjectAnnotationsChanged", this).call(this, {
                  getProjectAnnotations: getProjectAnnotations
                });

              case 3:
                this.renderSelection();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onGetProjectAnnotationsChanged(_x) {
        return _onGetProjectAnnotationsChanged.apply(this, arguments);
      }

      return onGetProjectAnnotationsChanged;
    }() // This happens when a glob gets HMR-ed

  }, {
    key: "onStoriesChanged",
    value: function () {
      var _onStoriesChanged = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref3) {
        var _global$FEATURES2;

        var importFn, storyIndex;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                importFn = _ref3.importFn, storyIndex = _ref3.storyIndex;

                _get(_getPrototypeOf(PreviewWeb.prototype), "onStoriesChanged", this).call(this, {
                  importFn: importFn,
                  storyIndex: storyIndex
                });

                if ((_global$FEATURES2 = (window_default()).FEATURES) !== null && _global$FEATURES2 !== void 0 && _global$FEATURES2.storyStoreV7) {
                  _context4.next = 9;
                  break;
                }

                _context4.t0 = this.channel;
                _context4.t1 = dist_esm.SET_STORIES;
                _context4.next = 7;
                return this.storyStore.getSetStoriesPayload();

              case 7:
                _context4.t2 = _context4.sent;

                _context4.t0.emit.call(_context4.t0, _context4.t1, _context4.t2);

              case 9:
                if (!this.urlStore.selection) {
                  _context4.next = 14;
                  break;
                }

                _context4.next = 12;
                return this.renderSelection();

              case 12:
                _context4.next = 16;
                break;

              case 14:
                _context4.next = 16;
                return this.selectSpecifiedStory();

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onStoriesChanged(_x2) {
        return _onStoriesChanged.apply(this, arguments);
      }

      return onStoriesChanged;
    }()
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      var _this$currentRender;

      if (!((_this$currentRender = this.currentRender) !== null && _this$currentRender !== void 0 && _this$currentRender.disableKeyListeners) && !focusInInput(event)) {
        // We have to pick off the keys of the event that we need on the other side
        var altKey = event.altKey,
            ctrlKey = event.ctrlKey,
            metaKey = event.metaKey,
            shiftKey = event.shiftKey,
            key = event.key,
            code = event.code,
            keyCode = event.keyCode;
        this.channel.emit(dist_esm.PREVIEW_KEYDOWN, {
          event: {
            altKey: altKey,
            ctrlKey: ctrlKey,
            metaKey: metaKey,
            shiftKey: shiftKey,
            key: key,
            code: code,
            keyCode: keyCode
          }
        });
      }
    }
  }, {
    key: "onSetCurrentStory",
    value: function onSetCurrentStory(selection) {
      this.urlStore.setSelection(Object.assign({
        viewMode: 'story'
      }, selection));
      this.channel.emit(dist_esm.CURRENT_STORY_WAS_SET, this.urlStore.selection);
      this.renderSelection();
    }
  }, {
    key: "onUpdateQueryParams",
    value: function onUpdateQueryParams(queryParams) {
      this.urlStore.setQueryParams(queryParams);
    }
  }, {
    key: "onUpdateGlobals",
    value: function () {
      var _onUpdateGlobals = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref4) {
        var globals;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                globals = _ref4.globals;

                _get(_getPrototypeOf(PreviewWeb.prototype), "onUpdateGlobals", this).call(this, {
                  globals: globals
                });

                if (!(this.currentRender instanceof DocsRender)) {
                  _context5.next = 5;
                  break;
                }

                _context5.next = 5;
                return this.currentRender.rerender(true);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onUpdateGlobals(_x3) {
        return _onUpdateGlobals.apply(this, arguments);
      }

      return onUpdateGlobals;
    }()
  }, {
    key: "onUpdateArgs",
    value: function () {
      var _onUpdateArgs = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref5) {
        var storyId, updatedArgs;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                storyId = _ref5.storyId, updatedArgs = _ref5.updatedArgs;

                _get(_getPrototypeOf(PreviewWeb.prototype), "onUpdateArgs", this).call(this, {
                  storyId: storyId,
                  updatedArgs: updatedArgs
                }); // NOTE: we aren't checking to see the story args are targetted at the "right" story.
                // This is because we may render >1 story on the page and there is no easy way to keep track
                // of which ones were rendered by the docs page.
                // However, in `modernInlineRender`, the individual stories track their own events as they
                // each call `renderStoryToElement` below.


                if (!(this.currentRender instanceof DocsRender)) {
                  _context6.next = 5;
                  break;
                }

                _context6.next = 5;
                return this.currentRender.rerender(false);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onUpdateArgs(_x4) {
        return _onUpdateArgs.apply(this, arguments);
      }

      return onUpdateArgs;
    }()
  }, {
    key: "onPreloadStories",
    value: function () {
      var _onPreloadStories = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(ids) {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Promise.all(ids.map(function (id) {
                  return _this4.storyStore.loadStory({
                    storyId: id
                  });
                }));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function onPreloadStories(_x5) {
        return _onPreloadStories.apply(this, arguments);
      }

      return onPreloadStories;
    }() // RENDERING
    // We can either have:
    // - a story selected in "story" viewMode,
    //     in which case we render it to the root element, OR
    // - a story selected in "docs" viewMode,
    //     in which case we render the docsPage for that story

  }, {
    key: "renderSelection",
    value: function () {
      var _renderSelection = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _this$currentSelectio,
            _this$currentSelectio2,
            _lastRender,
            _this5 = this,
            _global$FEATURES3;

        var _ref6,
            persistedArgs,
            selection,
            storyId,
            storyIdChanged,
            viewModeChanged,
            lastSelection,
            lastRender,
            storyRender,
            implementationChanged,
            _storyRender$context,
            parameters,
            initialArgs,
            argTypes,
            args,
            _args8 = arguments;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _ref6 = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {}, persistedArgs = _ref6.persistedArgs;
                selection = this.urlStore.selection;

                if (selection) {
                  _context8.next = 4;
                  break;
                }

                throw new Error('Cannot render story as no selection was made');

              case 4:
                storyId = selection.storyId;
                storyIdChanged = ((_this$currentSelectio = this.currentSelection) === null || _this$currentSelectio === void 0 ? void 0 : _this$currentSelectio.storyId) !== storyId;
                viewModeChanged = ((_this$currentSelectio2 = this.currentSelection) === null || _this$currentSelectio2 === void 0 ? void 0 : _this$currentSelectio2.viewMode) !== selection.viewMode; // Show a spinner while we load the next story

                if (selection.viewMode === 'story') {
                  this.view.showPreparingStory({
                    immediate: viewModeChanged
                  });
                } else {
                  this.view.showPreparingDocs();
                }

                lastSelection = this.currentSelection;
                lastRender = this.currentRender; // If the last render is still preparing, let's drop it right now. Either
                //   (a) it is a different story, which means we would drop it later, OR
                //   (b) it is the *same* story, in which case we will resolve our own .prepare() at the
                //       same moment anyway, and we should just "take over" the rendering.
                // (We can't tell which it is yet, because it is possible that an HMR is going on and
                //  even though the storyId is the same, the story itself is not).

                if (!((_lastRender = lastRender) !== null && _lastRender !== void 0 && _lastRender.isPreparing())) {
                  _context8.next = 14;
                  break;
                }

                _context8.next = 13;
                return this.teardownRender(lastRender);

              case 13:
                lastRender = null;

              case 14:
                storyRender = new StoryRender(this.channel, this.storyStore, function () {
                  // At the start of renderToDOM we make the story visible (see note in WebView)
                  _this5.view.showStoryDuringRender();

                  return _this5.renderToDOM.apply(_this5, arguments);
                }, this.mainStoryCallbacks(storyId), storyId, 'story'); // We need to store this right away, so if the story changes during
                // the async `.prepare()` below, we can (potentially) cancel it

                this.currentSelection = selection; // Note this may be replaced by a docsRender after preparing

                this.currentRender = storyRender;
                _context8.prev = 17;
                _context8.next = 20;
                return storyRender.prepare();

              case 20:
                _context8.next = 29;
                break;

              case 22:
                _context8.prev = 22;
                _context8.t0 = _context8["catch"](17);

                if (!(_context8.t0 !== PREPARE_ABORTED)) {
                  _context8.next = 28;
                  break;
                }

                _context8.next = 27;
                return this.teardownRender(lastRender);

              case 27:
                this.renderStoryLoadingException(storyId, _context8.t0);

              case 28:
                return _context8.abrupt("return");

              case 29:
                implementationChanged = !storyIdChanged && !storyRender.isEqual(lastRender);
                if (persistedArgs) this.storyStore.args.updateFromPersisted(storyRender.story, persistedArgs);
                _storyRender$context = storyRender.context(), parameters = _storyRender$context.parameters, initialArgs = _storyRender$context.initialArgs, argTypes = _storyRender$context.argTypes, args = _storyRender$context.args; // Don't re-render the story if nothing has changed to justify it

                if (!(lastRender && !storyIdChanged && !implementationChanged && !viewModeChanged)) {
                  _context8.next = 37;
                  break;
                }

                this.currentRender = lastRender;
                this.channel.emit(dist_esm.STORY_UNCHANGED, storyId);
                this.view.showMain();
                return _context8.abrupt("return");

              case 37:
                _context8.next = 39;
                return this.teardownRender(lastRender, {
                  viewModeChanged: viewModeChanged
                });

              case 39:
                // If we are rendering something new (as opposed to re-rendering the same or first story), emit
                if (lastSelection && (storyIdChanged || viewModeChanged)) {
                  this.channel.emit(dist_esm.STORY_CHANGED, storyId);
                }

                if ((_global$FEATURES3 = (window_default()).FEATURES) !== null && _global$FEATURES3 !== void 0 && _global$FEATURES3.storyStoreV7) {
                  this.channel.emit(dist_esm.STORY_PREPARED, {
                    id: storyId,
                    parameters: parameters,
                    initialArgs: initialArgs,
                    argTypes: argTypes,
                    args: args
                  });
                } // For v6 mode / compatibility
                // If the implementation changed, or args were persisted, the args may have changed,
                // and the STORY_PREPARED event above may not be respected.


                if (implementationChanged || persistedArgs) {
                  this.channel.emit(dist_esm.STORY_ARGS_UPDATED, {
                    storyId: storyId,
                    args: args
                  });
                }

                if (selection.viewMode === 'docs' || parameters.docsOnly) {
                  this.currentRender = DocsRender.fromStoryRender(storyRender);
                  this.currentRender.renderToElement(this.view.prepareForDocs(), this.renderStoryToElement.bind(this));
                } else {
                  this.storyRenders.push(storyRender);
                  this.currentRender.renderToElement(this.view.prepareForStory(storyRender.story));
                }

              case 43:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[17, 22]]);
      }));

      function renderSelection() {
        return _renderSelection.apply(this, arguments);
      }

      return renderSelection;
    }() // Used by docs' modernInlineRender to render a story to a given element
    // Note this short-circuits the `prepare()` phase of the StoryRender,
    // main to be consistent with the previous behaviour. In the future,
    // we will change it to go ahead and load the story, which will end up being
    // "instant", although async.

  }, {
    key: "renderStoryToElement",
    value: function renderStoryToElement(story, element) {
      var _this6 = this;

      var render = new StoryRender(this.channel, this.storyStore, this.renderToDOM, this.inlineStoryCallbacks(story.id), story.id, 'docs', story);
      render.renderToElement(element);
      this.storyRenders.push(render);
      return /*#__PURE__*/PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this6.teardownRender(render);

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));
    }
  }, {
    key: "teardownRender",
    value: function () {
      var _teardownRender = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(render) {
        var _ref8,
            viewModeChanged,
            _args10 = arguments;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _ref8 = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {}, viewModeChanged = _ref8.viewModeChanged;
                this.storyRenders = this.storyRenders.filter(function (r) {
                  return r !== render;
                });
                _context10.next = 4;
                return render === null || render === void 0 ? void 0 : render.teardown({
                  viewModeChanged: viewModeChanged
                });

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function teardownRender(_x6) {
        return _teardownRender.apply(this, arguments);
      }

      return teardownRender;
    }() // API

  }, {
    key: "extract",
    value: function () {
      var _extract = PreviewWeb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(options) {
        var _global$FEATURES4;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!this.previewEntryError) {
                  _context11.next = 2;
                  break;
                }

                throw this.previewEntryError;

              case 2:
                if (this.storyStore.projectAnnotations) {
                  _context11.next = 4;
                  break;
                }

                throw new Error((0,esm/* default */.C)(_templateObject4 || (_templateObject4 = PreviewWeb_taggedTemplateLiteral(["Failed to initialize Storybook.\n      \n      Do you have an error in your `preview.js`? Check your Storybook's browser console for errors."], ["Failed to initialize Storybook.\n      \n      Do you have an error in your \\`preview.js\\`? Check your Storybook's browser console for errors."]))));

              case 4:
                if (!((_global$FEATURES4 = (window_default()).FEATURES) !== null && _global$FEATURES4 !== void 0 && _global$FEATURES4.storyStoreV7)) {
                  _context11.next = 7;
                  break;
                }

                _context11.next = 7;
                return this.storyStore.cacheAllCSFFiles();

              case 7:
                return _context11.abrupt("return", this.storyStore.extract(options));

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function extract(_x7) {
        return _extract.apply(this, arguments);
      }

      return extract;
    }() // UTILITIES

  }, {
    key: "mainStoryCallbacks",
    value: function mainStoryCallbacks(storyId) {
      var _this7 = this;

      return {
        showMain: function showMain() {
          return _this7.view.showMain();
        },
        showError: function showError(err) {
          return _this7.renderError(storyId, err);
        },
        showException: function showException(err) {
          return _this7.renderException(storyId, err);
        }
      };
    }
  }, {
    key: "inlineStoryCallbacks",
    value: function inlineStoryCallbacks(storyId) {
      return {
        showMain: function showMain() {},
        showError: function showError(err) {
          return client_logger_dist_esm/* logger.error */.kg.error("Error rendering docs story (".concat(storyId, ")"), err);
        },
        showException: function showException(err) {
          return client_logger_dist_esm/* logger.error */.kg.error("Error rendering docs story (".concat(storyId, ")"), err);
        }
      };
    }
  }, {
    key: "renderPreviewEntryError",
    value: function renderPreviewEntryError(reason, err) {
      _get(_getPrototypeOf(PreviewWeb.prototype), "renderPreviewEntryError", this).call(this, reason, err);

      this.view.showErrorDisplay(err);
    }
  }, {
    key: "renderMissingStory",
    value: function renderMissingStory() {
      this.view.showNoPreview();
      this.channel.emit(dist_esm.STORY_MISSING);
    }
  }, {
    key: "renderStoryLoadingException",
    value: function renderStoryLoadingException(storySpecifier, err) {
      client_logger_dist_esm/* logger.error */.kg.error("Unable to load story '".concat(storySpecifier, "':"));
      client_logger_dist_esm/* logger.error */.kg.error(err);
      this.view.showErrorDisplay(err);
      this.channel.emit(dist_esm.STORY_MISSING, storySpecifier);
    } // renderException is used if we fail to render the story and it is uncaught by the app layer

  }, {
    key: "renderException",
    value: function renderException(storyId, err) {
      this.channel.emit(dist_esm.STORY_THREW_EXCEPTION, err);
      this.channel.emit(dist_esm.STORY_RENDER_PHASE_CHANGED, {
        newPhase: 'errored',
        storyId: storyId
      }); // Ignored exceptions exist for control flow purposes, and are typically handled elsewhere.

      if (err !== dist_esm.IGNORED_EXCEPTION) {
        this.view.showErrorDisplay(err);
        client_logger_dist_esm/* logger.error */.kg.error("Error rendering story '".concat(storyId, "':"));
        client_logger_dist_esm/* logger.error */.kg.error(err);
      }
    } // renderError is used by the various app layers to inform the user they have done something
    // wrong -- for instance returned the wrong thing from a story

  }, {
    key: "renderError",
    value: function renderError(storyId, _ref9) {
      var title = _ref9.title,
          description = _ref9.description;
      client_logger_dist_esm/* logger.error */.kg.error("Error rendering story ".concat(title, ": ").concat(description));
      this.channel.emit(dist_esm.STORY_ERRORED, {
        title: title,
        description: description
      });
      this.channel.emit(dist_esm.STORY_RENDER_PHASE_CHANGED, {
        newPhase: 'errored',
        storyId: storyId
      });
      this.view.showErrorDisplay({
        message: title,
        stack: description
      });
    }
  }]);

  return PreviewWeb;
}(Preview);

/***/ }),

/***/ 23301:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// NAMESPACE OBJECT: ./node_modules/@storybook/react/dist/esm/client/docs/config.js
var config_namespaceObject = {};
__webpack_require__.r(config_namespaceObject);
__webpack_require__.d(config_namespaceObject, {
  "argTypesEnhancers": () => (argTypesEnhancers),
  "decorators": () => (decorators),
  "parameters": () => (config_parameters)
});

// EXTERNAL MODULE: ./node_modules/@storybook/client-api/dist/esm/ClientApi.js + 1 modules
var ClientApi = __webpack_require__(40917);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(21249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(47941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(57327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(41539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(82526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(26699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(32023);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(92222);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(69600);
// EXTERNAL MODULE: ./node_modules/doctrine/lib/doctrine.js
var doctrine = __webpack_require__(5291);
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/jsdocParser.js












function containsJsDoc(value) {
  return value != null && value.includes('@');
}

function parse(content, tags) {
  var ast;

  try {
    ast = doctrine.parse(content, {
      tags: tags,
      sloppy: true
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    throw new Error('Cannot parse JSDoc tags.');
  }

  return ast;
}

var DEFAULT_OPTIONS = {
  tags: ['param', 'arg', 'argument', 'returns', 'ignore']
};
var parseJsDoc = function parseJsDoc(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;

  if (!containsJsDoc(value)) {
    return {
      includesJsDoc: false,
      ignore: false
    };
  }

  var jsDocAst = parse(value, options.tags);
  var extractedTags = extractJsDocTags(jsDocAst);

  if (extractedTags.ignore) {
    // There is no point in doing other stuff since this prop will not be rendered.
    return {
      includesJsDoc: true,
      ignore: true
    };
  }

  return {
    includesJsDoc: true,
    ignore: false,
    // Always use the parsed description to ensure JSDoc is removed from the description.
    description: jsDocAst.description,
    extractedTags: extractedTags
  };
};

function extractJsDocTags(ast) {
  var extractedTags = {
    params: null,
    returns: null,
    ignore: false
  };

  for (var i = 0; i < ast.tags.length; i += 1) {
    var tag = ast.tags[i];

    if (tag.title === 'ignore') {
      extractedTags.ignore = true; // Once we reach an @ignore tag, there is no point in parsing the other tags since we will not render the prop.

      break;
    } else {
      switch (tag.title) {
        // arg & argument are aliases for param.
        case 'param':
        case 'arg':
        case 'argument':
          {
            var paramTag = extractParam(tag);

            if (paramTag != null) {
              if (extractedTags.params == null) {
                extractedTags.params = [];
              }

              extractedTags.params.push(paramTag);
            }

            break;
          }

        case 'returns':
          {
            var returnsTag = extractReturns(tag);

            if (returnsTag != null) {
              extractedTags.returns = returnsTag;
            }

            break;
          }

        default:
          break;
      }
    }
  }

  return extractedTags;
}

function extractParam(tag) {
  var paramName = tag.name; // When the @param doesn't have a name but have a type and a description, "null-null" is returned.

  if (paramName != null && paramName !== 'null-null') {
    return {
      name: tag.name,
      type: tag.type,
      description: tag.description,
      getPrettyName: function getPrettyName() {
        if (paramName.includes('null')) {
          // There is a few cases in which the returned param name contains "null".
          // - @param {SyntheticEvent} event- Original SyntheticEvent
          // - @param {SyntheticEvent} event.\n@returns {string}
          return paramName.replace('-null', '').replace('.null', '');
        }

        return tag.name;
      },
      getTypeName: function getTypeName() {
        return tag.type != null ? extractTypeName(tag.type) : null;
      }
    };
  }

  return null;
}

function extractReturns(tag) {
  if (tag.type != null) {
    return {
      type: tag.type,
      description: tag.description,
      getTypeName: function getTypeName() {
        return extractTypeName(tag.type);
      }
    };
  }

  return null;
}

function extractTypeName(type) {
  if (type.type === 'NameExpression') {
    return type.name;
  }

  if (type.type === 'RecordType') {
    var recordFields = type.fields.map(function (field) {
      if (field.value != null) {
        var valueTypeName = extractTypeName(field.value);
        return "".concat(field.key, ": ").concat(valueTypeName);
      }

      return field.key;
    });
    return "({".concat(recordFields.join(', '), "})");
  }

  if (type.type === 'UnionType') {
    var unionElements = type.elements.map(extractTypeName);
    return "(".concat(unionElements.join('|'), ")");
  } // Only support untyped array: []. Might add more support later if required.


  if (type.type === 'ArrayType') {
    return '[]';
  }

  if (type.type === 'TypeApplication') {
    if (type.expression != null) {
      if (type.expression.name === 'Array') {
        var arrayType = extractTypeName(type.applications[0]);
        return "".concat(arrayType, "[]");
      }
    }
  }

  if (type.type === 'NullableType' || type.type === 'NonNullableType' || type.type === 'OptionalType') {
    return extractTypeName(type.expression);
  }

  if (type.type === 'AllLiteral') {
    return 'any';
  }

  return null;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/types.js
// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export type DocgenType = DocgenPropType | DocgenFlowType | DocgenTypeScriptType;
var TypeSystem;

(function (TypeSystem) {
  TypeSystem["JAVASCRIPT"] = "JavaScript";
  TypeSystem["FLOW"] = "Flow";
  TypeSystem["TYPESCRIPT"] = "TypeScript";
  TypeSystem["UNKNOWN"] = "Unknown";
})(TypeSystem || (TypeSystem = {}));
// EXTERNAL MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/utils/string.js
var string = __webpack_require__(63133);
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/utils/docgenInfo.js




/* eslint-disable no-underscore-dangle */

function hasDocgen(component) {
  return !!component.__docgenInfo;
}
function isValidDocgenSection(docgenSection) {
  return docgenSection != null && Object.keys(docgenSection).length > 0;
}
function getDocgenSection(component, section) {
  return hasDocgen(component) ? component.__docgenInfo[section] : null;
}
function getDocgenDescription(component) {
  return hasDocgen(component) && (0,string/* str */.B)(component.__docgenInfo.description);
}
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/utils.js


var MAX_TYPE_SUMMARY_LENGTH = 90;
var MAX_DEFAULT_VALUE_SUMMARY_LENGTH = 50;
function isTooLongForTypeSummary(value) {
  return value.length > MAX_TYPE_SUMMARY_LENGTH;
}
function isTooLongForDefaultValueSummary(value) {
  return value.length > MAX_DEFAULT_VALUE_SUMMARY_LENGTH;
}
function createSummaryValue(summary, detail) {
  if (summary === detail) {
    return {
      summary: summary
    };
  }

  return {
    summary: summary,
    detail: detail
  };
}
var normalizeNewlines = function normalizeNewlines(string) {
  return string.replace(/\\r\\n/g, '\\n');
};
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/flow/createType.js






var FlowTypesType;

(function (FlowTypesType) {
  FlowTypesType["UNION"] = "union";
  FlowTypesType["SIGNATURE"] = "signature";
})(FlowTypesType || (FlowTypesType = {}));

function generateUnionElement(_ref) {
  var name = _ref.name,
      value = _ref.value,
      elements = _ref.elements,
      raw = _ref.raw;

  if (value != null) {
    return value;
  }

  if (elements != null) {
    return elements.map(generateUnionElement).join(' | ');
  }

  if (raw != null) {
    return raw;
  }

  return name;
}

function generateUnion(_ref2) {
  var name = _ref2.name,
      raw = _ref2.raw,
      elements = _ref2.elements;

  if (elements != null) {
    return createSummaryValue(elements.map(generateUnionElement).join(' | '));
  }

  if (raw != null) {
    // Flow Unions can be defined with or without a leading `|` character, so try to remove it.
    return createSummaryValue(raw.replace(/^\|\s*/, ''));
  }

  return createSummaryValue(name);
}

function generateFuncSignature(_ref3) {
  var type = _ref3.type,
      raw = _ref3.raw;

  if (raw != null) {
    return createSummaryValue(raw);
  }

  return createSummaryValue(type);
}

function generateObjectSignature(_ref4) {
  var type = _ref4.type,
      raw = _ref4.raw;

  if (raw != null) {
    return !isTooLongForTypeSummary(raw) ? createSummaryValue(raw) : createSummaryValue(type, raw);
  }

  return createSummaryValue(type);
}

function generateSignature(flowType) {
  var type = flowType.type;
  return type === 'object' ? generateObjectSignature(flowType) : generateFuncSignature(flowType);
}

function generateDefault(_ref5) {
  var name = _ref5.name,
      raw = _ref5.raw;

  if (raw != null) {
    return !isTooLongForTypeSummary(raw) ? createSummaryValue(raw) : createSummaryValue(name, raw);
  }

  return createSummaryValue(name);
}

function createType(type) {
  // A type could be null if a defaultProp has been provided without a type definition.
  if (type == null) {
    return null;
  }

  switch (type.name) {
    case FlowTypesType.UNION:
      return generateUnion(type);

    case FlowTypesType.SIGNATURE:
      return generateSignature(type);

    default:
      return generateDefault(type);
  }
}
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/utils/defaultValue.js

var BLACKLIST = ['null', 'undefined'];
function isDefaultValueBlacklisted(value) {
  return BLACKLIST.some(function (x) {
    return x === value;
  });
}
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/flow/createDefaultValue.js



function createDefaultValue(defaultValue, type) {
  if (defaultValue != null) {
    var value = defaultValue.value;

    if (!isDefaultValueBlacklisted(value)) {
      return !isTooLongForDefaultValueSummary(value) ? createSummaryValue(value) : createSummaryValue(type.name, value);
    }
  }

  return null;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/flow/createPropDef.js




var createFlowPropDef = function createFlowPropDef(propName, docgenInfo) {
  var flowType = docgenInfo.flowType,
      description = docgenInfo.description,
      required = docgenInfo.required,
      defaultValue = docgenInfo.defaultValue;
  return {
    name: propName,
    type: createType(flowType),
    required: required,
    description: description,
    defaultValue: createDefaultValue(defaultValue, flowType)
  };
};
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/typeScript/createType.js




function createType_createType(_ref) {
  var tsType = _ref.tsType,
      required = _ref.required;

  // A type could be null if a defaultProp has been provided without a type definition.
  if (tsType == null) {
    return null;
  }

  if (!required) {
    return createSummaryValue(tsType.name.replace(' | undefined', ''));
  }

  return createSummaryValue(tsType.name);
}
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/typeScript/createDefaultValue.js


function createDefaultValue_createDefaultValue(_ref) {
  var defaultValue = _ref.defaultValue;

  if (defaultValue != null) {
    var value = defaultValue.value;

    if (!isDefaultValueBlacklisted(value)) {
      return createSummaryValue(value);
    }
  }

  return null;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/typeScript/createPropDef.js




var createTsPropDef = function createTsPropDef(propName, docgenInfo) {
  var description = docgenInfo.description,
      required = docgenInfo.required;
  return {
    name: propName,
    type: createType_createType(docgenInfo),
    required: required,
    description: description,
    defaultValue: createDefaultValue_createDefaultValue(docgenInfo)
  };
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(54747);
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/convert/typescript/convert.js






/* eslint-disable no-case-declarations */
var convertSig = function convertSig(type) {
  switch (type.type) {
    case 'function':
      return {
        name: 'function'
      };

    case 'object':
      var values = {};
      type.signature.properties.forEach(function (prop) {
        values[prop.key] = convert_convert(prop.value);
      });
      return {
        name: 'object',
        value: values
      };

    default:
      throw new Error("Unknown: ".concat(type));
  }
};

var convert_convert = function convert(type) {
  var name = type.name,
      raw = type.raw;
  var base = {};
  if (typeof raw !== 'undefined') base.raw = raw;

  switch (type.name) {
    case 'string':
    case 'number':
    case 'symbol':
    case 'boolean':
      {
        return Object.assign({}, base, {
          name: name
        });
      }

    case 'Array':
      {
        return Object.assign({}, base, {
          name: 'array',
          value: type.elements.map(convert)
        });
      }

    case 'signature':
      return Object.assign({}, base, convertSig(type));

    case 'union':
    case 'intersection':
      return Object.assign({}, base, {
        name: name,
        value: type.elements.map(convert)
      });

    default:
      return Object.assign({}, base, {
        name: 'other',
        value: name
      });
  }
};
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/convert/flow/convert.js








/* eslint-disable no-case-declarations */
var isLiteral = function isLiteral(type) {
  return type.name === 'literal';
};

var toEnumOption = function toEnumOption(element) {
  return element.value.replace(/['|"]/g, '');
};

var convert_convertSig = function convertSig(type) {
  switch (type.type) {
    case 'function':
      return {
        name: 'function'
      };

    case 'object':
      var values = {};
      type.signature.properties.forEach(function (prop) {
        values[prop.key] = flow_convert_convert(prop.value);
      });
      return {
        name: 'object',
        value: values
      };

    default:
      throw new Error("Unknown: ".concat(type));
  }
};

var flow_convert_convert = function convert(type) {
  var name = type.name,
      raw = type.raw;
  var base = {};
  if (typeof raw !== 'undefined') base.raw = raw;

  switch (type.name) {
    case 'literal':
      return Object.assign({}, base, {
        name: 'other',
        value: type.value
      });

    case 'string':
    case 'number':
    case 'symbol':
    case 'boolean':
      {
        return Object.assign({}, base, {
          name: name
        });
      }

    case 'Array':
      {
        return Object.assign({}, base, {
          name: 'array',
          value: type.elements.map(convert)
        });
      }

    case 'signature':
      return Object.assign({}, base, convert_convertSig(type));

    case 'union':
      if (type.elements.every(isLiteral)) {
        return Object.assign({}, base, {
          name: 'enum',
          value: type.elements.map(toEnumOption)
        });
      }

      return Object.assign({}, base, {
        name: name,
        value: type.elements.map(convert)
      });

    case 'intersection':
      return Object.assign({}, base, {
        name: name,
        value: type.elements.map(convert)
      });

    default:
      return Object.assign({}, base, {
        name: 'other',
        value: name
      });
  }
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-nan.js
var es_number_is_nan = __webpack_require__(44048);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/lodash/mapValues.js
var mapValues = __webpack_require__(66604);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/convert/utils.js


var QUOTE_REGEX = /^['"]|['"]$/g;
var trimQuotes = function trimQuotes(str) {
  return str.replace(QUOTE_REGEX, '');
};
var includesQuotes = function includesQuotes(str) {
  return QUOTE_REGEX.test(str);
};
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/convert/proptypes/convert.js









/* eslint-disable no-case-declarations */


var SIGNATURE_REGEXP = /^\(.*\) => /;
var proptypes_convert_convert = function convert(type) {
  var name = type.name,
      raw = type.raw,
      computed = type.computed,
      value = type.value;
  var base = {};
  if (typeof raw !== 'undefined') base.raw = raw;

  switch (name) {
    case 'enum':
      {
        var _values = computed ? value : value.map(function (v) {
          var trimmedValue = trimQuotes(v.value);
          return includesQuotes(v.value) || Number.isNaN(Number(trimmedValue)) ? trimmedValue : Number(trimmedValue);
        });

        return Object.assign({}, base, {
          name: name,
          value: _values
        });
      }

    case 'string':
    case 'number':
    case 'symbol':
      return Object.assign({}, base, {
        name: name
      });

    case 'func':
      return Object.assign({}, base, {
        name: 'function'
      });

    case 'bool':
    case 'boolean':
      return Object.assign({}, base, {
        name: 'boolean'
      });

    case 'arrayOf':
    case 'array':
      return Object.assign({}, base, {
        name: 'array',
        value: value && convert(value)
      });

    case 'object':
      return Object.assign({}, base, {
        name: name
      });

    case 'objectOf':
      return Object.assign({}, base, {
        name: name,
        value: convert(value)
      });

    case 'shape':
    case 'exact':
      var values = mapValues_default()(value, function (field) {
        return convert(field);
      });
      return Object.assign({}, base, {
        name: 'object',
        value: values
      });

    case 'union':
      return Object.assign({}, base, {
        name: 'union',
        value: value.map(function (v) {
          return convert(v);
        })
      });

    case 'instanceOf':
    case 'element':
    case 'elementType':
    default:
      {
        if ((name === null || name === void 0 ? void 0 : name.indexOf('|')) > 0) {
          // react-docgen-typescript-plugin doesn't always produce enum-like unions
          // (like if a user has turned off shouldExtractValuesFromUnion) so here we
          // try to recover and construct one.
          try {
            var literalValues = name.split('|').map(function (v) {
              return JSON.parse(v);
            });
            return Object.assign({}, base, {
              name: 'enum',
              value: literalValues
            });
          } catch (err) {// fall through
          }
        }

        var otherVal = value ? "".concat(name, "(").concat(value, ")") : name;
        var otherName = SIGNATURE_REGEXP.test(name) ? 'function' : 'other';
        return Object.assign({}, base, {
          name: otherName,
          value: otherVal
        });
      }
  }
};
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/convert/index.js



var convert = function convert(docgenInfo) {
  var type = docgenInfo.type,
      tsType = docgenInfo.tsType,
      flowType = docgenInfo.flowType;
  if (type != null) return proptypes_convert_convert(type);
  if (tsType != null) return convert_convert(tsType);
  if (flowType != null) return flow_convert_convert(flowType);
  return null;
};
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/createPropDef.js












function createPropDef_createType(type) {
  // A type could be null if a defaultProp has been provided without a type definition.
  return type != null ? createSummaryValue(type.name) : null;
} // A heuristic to tell if a defaultValue comes from RDT


function isReactDocgenTypescript(defaultValue) {
  var computed = defaultValue.computed,
      func = defaultValue.func;
  return typeof computed === 'undefined' && typeof func === 'undefined';
}

function isStringValued(type) {
  if (!type) {
    return false;
  }

  if (type.name === 'string') {
    return true;
  }

  if (type.name === 'enum') {
    return Array.isArray(type.value) && type.value.every(function (_ref) {
      var tv = _ref.value;
      return typeof tv === 'string' && tv[0] === '"' && tv[tv.length - 1] === '"';
    });
  }

  return false;
}

function createPropDef_createDefaultValue(defaultValue, type) {
  if (defaultValue != null) {
    var value = defaultValue.value;

    if (!isDefaultValueBlacklisted(value)) {
      // Work around a bug in `react-docgen-typescript-loader`, which returns 'string' for a string
      // default, instead of "'string'" -- which is incorrect
      if (isReactDocgenTypescript(defaultValue) && isStringValued(type)) {
        return createSummaryValue(JSON.stringify(value));
      }

      return createSummaryValue(value);
    }
  }

  return null;
}

function createBasicPropDef(name, type, docgenInfo) {
  var description = docgenInfo.description,
      required = docgenInfo.required,
      defaultValue = docgenInfo.defaultValue;
  return {
    name: name,
    type: createPropDef_createType(type),
    required: required,
    description: description,
    defaultValue: createPropDef_createDefaultValue(defaultValue, type)
  };
}

function applyJsDocResult(propDef, jsDocParsingResult) {
  if (jsDocParsingResult.includesJsDoc) {
    var description = jsDocParsingResult.description,
        extractedTags = jsDocParsingResult.extractedTags;

    if (description != null) {
      // eslint-disable-next-line no-param-reassign
      propDef.description = jsDocParsingResult.description;
    }

    var hasParams = extractedTags.params != null;
    var hasReturns = extractedTags.returns != null && extractedTags.returns.type != null;

    if (hasParams || hasReturns) {
      // eslint-disable-next-line no-param-reassign
      propDef.jsDocTags = {
        params: hasParams && extractedTags.params.map(function (x) {
          return {
            name: x.getPrettyName(),
            description: x.description
          };
        }),
        returns: hasReturns && {
          description: extractedTags.returns.description
        }
      };
    }
  }

  return propDef;
}

var javaScriptFactory = function javaScriptFactory(propName, docgenInfo, jsDocParsingResult) {
  var propDef = createBasicPropDef(propName, docgenInfo.type, docgenInfo);
  propDef.sbType = convert(docgenInfo);
  return applyJsDocResult(propDef, jsDocParsingResult);
};
var tsFactory = function tsFactory(propName, docgenInfo, jsDocParsingResult) {
  var propDef = createTsPropDef(propName, docgenInfo);
  propDef.sbType = convert(docgenInfo);
  return applyJsDocResult(propDef, jsDocParsingResult);
};
var flowFactory = function flowFactory(propName, docgenInfo, jsDocParsingResult) {
  var propDef = createFlowPropDef(propName, docgenInfo);
  propDef.sbType = convert(docgenInfo);
  return applyJsDocResult(propDef, jsDocParsingResult);
};
var unknownFactory = function unknownFactory(propName, docgenInfo, jsDocParsingResult) {
  var propDef = createBasicPropDef(propName, {
    name: 'unknown'
  }, docgenInfo);
  return applyJsDocResult(propDef, jsDocParsingResult);
};
var getPropDefFactory = function getPropDefFactory(typeSystem) {
  switch (typeSystem) {
    case TypeSystem.JAVASCRIPT:
      return javaScriptFactory;

    case TypeSystem.TYPESCRIPT:
      return tsFactory;

    case TypeSystem.FLOW:
      return flowFactory;

    default:
      return unknownFactory;
  }
};
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/extractDocgenProps.js













var getTypeSystem = function getTypeSystem(docgenInfo) {
  if (docgenInfo.type != null) {
    return TypeSystem.JAVASCRIPT;
  }

  if (docgenInfo.flowType != null) {
    return TypeSystem.FLOW;
  }

  if (docgenInfo.tsType != null) {
    return TypeSystem.TYPESCRIPT;
  }

  return TypeSystem.UNKNOWN;
};

var extractComponentSectionArray = function extractComponentSectionArray(docgenSection) {
  var typeSystem = getTypeSystem(docgenSection[0]);
  var createPropDef = getPropDefFactory(typeSystem);
  return docgenSection.map(function (item) {
    var _item$type;

    var sanitizedItem = item;

    if ((_item$type = item.type) !== null && _item$type !== void 0 && _item$type.elements) {
      sanitizedItem = Object.assign({}, item, {
        type: Object.assign({}, item.type, {
          value: item.type.elements
        })
      });
    }

    return extractProp(sanitizedItem.name, sanitizedItem, typeSystem, createPropDef);
  });
};
var extractComponentSectionObject = function extractComponentSectionObject(docgenSection) {
  var docgenPropsKeys = Object.keys(docgenSection);
  var typeSystem = getTypeSystem(docgenSection[docgenPropsKeys[0]]);
  var createPropDef = getPropDefFactory(typeSystem);
  return docgenPropsKeys.map(function (propName) {
    var docgenInfo = docgenSection[propName];
    return docgenInfo != null ? extractProp(propName, docgenInfo, typeSystem, createPropDef) : null;
  }).filter(Boolean);
};
var extractComponentProps = function extractComponentProps(component, section) {
  var docgenSection = getDocgenSection(component, section);

  if (!isValidDocgenSection(docgenSection)) {
    return [];
  } // vue-docgen-api has diverged from react-docgen and returns an array


  return Array.isArray(docgenSection) ? extractComponentSectionArray(docgenSection) : extractComponentSectionObject(docgenSection);
};

function extractProp(propName, docgenInfo, typeSystem, createPropDef) {
  var jsDocParsingResult = parseJsDoc(docgenInfo.description);
  var isIgnored = jsDocParsingResult.includesJsDoc && jsDocParsingResult.ignore;

  if (!isIgnored) {
    var propDef = createPropDef(propName, docgenInfo, jsDocParsingResult);
    return {
      propDef: propDef,
      jsDocTags: jsDocParsingResult.extractedTags,
      docgenInfo: docgenInfo,
      typeSystem: typeSystem
    };
  }

  return null;
}

function extractComponentDescription(component) {
  return component != null && getDocgenDescription(component);
}
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/parameters.js
var parameters = __webpack_require__(18673);
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/enhanceArgTypes.js

var enhanceArgTypes = function enhanceArgTypes(context) {
  var component = context.component,
      userArgTypes = context.argTypes,
      _context$parameters$d = context.parameters.docs,
      docs = _context$parameters$d === void 0 ? {} : _context$parameters$d;
  var extractArgTypes = docs.extractArgTypes;
  var extractedArgTypes = extractArgTypes && component ? extractArgTypes(component) : {};
  var withExtractedTypes = extractedArgTypes ? (0,parameters/* combineParameters */.f)(extractedArgTypes, userArgTypes) : userArgTypes;
  return withExtractedTypes;
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(66992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(51532);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(78783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/propTypes/generateFuncSignature.js





function generateFuncSignature_generateFuncSignature(params, returns) {
  var hasParams = params != null;
  var hasReturns = returns != null;

  if (!hasParams && !hasReturns) {
    return '';
  }

  var funcParts = [];

  if (hasParams) {
    var funcParams = params.map(function (x) {
      var prettyName = x.getPrettyName();
      var typeName = x.getTypeName();

      if (typeName != null) {
        return "".concat(prettyName, ": ").concat(typeName);
      }

      return prettyName;
    });
    funcParts.push("(".concat(funcParams.join(', '), ")"));
  } else {
    funcParts.push('()');
  }

  if (hasReturns) {
    funcParts.push("=> ".concat(returns.getTypeName()));
  }

  return funcParts.join(' ');
}
function generateShortFuncSignature(params, returns) {
  var hasParams = params != null;
  var hasReturns = returns != null;

  if (!hasParams && !hasReturns) {
    return '';
  }

  var funcParts = [];

  if (hasParams) {
    funcParts.push('( ... )');
  } else {
    funcParts.push('()');
  }

  if (hasReturns) {
    funcParts.push("=> ".concat(returns.getTypeName()));
  }

  return funcParts.join(' ');
}
function toMultilineSignature(signature) {
  return signature.replace(/,/g, ',\r\n');
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/captions.js
var CUSTOM_CAPTION = 'custom';
var OBJECT_CAPTION = 'object';
var ARRAY_CAPTION = 'array';
var CLASS_CAPTION = 'class';
var FUNCTION_CAPTION = 'func';
var ELEMENT_CAPTION = 'element';
// EXTERNAL MODULE: ./node_modules/html-tags/index.js
var html_tags = __webpack_require__(12988);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/isHtmlTag.js



function isHtmlTag(tagName) {
  return html_tags.includes(tagName.toLowerCase());
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(27852);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(47042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(23157);
// EXTERNAL MODULE: ./node_modules/escodegen/escodegen.js
var escodegen = __webpack_require__(90312);
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__(18464);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/generateCode.js








var BASIC_OPTIONS = {
  format: {
    indent: {
      style: '  '
    },
    semicolons: false
  }
};
var COMPACT_OPTIONS = Object.assign({}, BASIC_OPTIONS, {
  format: {
    newline: ''
  }
});
var PRETTY_OPTIONS = Object.assign({}, BASIC_OPTIONS);
function generateCode(ast) {
  var compact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0,escodegen/* generate */.R_)(ast, compact ? COMPACT_OPTIONS : PRETTY_OPTIONS);
}
function generateObjectCode(ast) {
  var compact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return !compact ? generateCode(ast) : generateCompactObjectCode(ast);
}

function generateCompactObjectCode(ast) {
  var result = generateCode(ast, true); // Cannot get escodegen to add a space before the last } with the compact mode settings.
  // Fix it until a better solution is found.

  if (!result.endsWith(' }')) {
    result = "".concat(result.slice(0, -1), " }");
  }

  return result;
}

function generateArrayCode(ast) {
  var compact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return !compact ? generateMultilineArrayCode(ast) : generateCompactArrayCode(ast);
}

function generateMultilineArrayCode(ast) {
  var result = generateCode(ast); // escodegen add extra spacing before the closing bracket of a multiple line array with a nested object.
  // Fix it until a better solution is found.

  if (result.endsWith('  }]')) {
    result = (0,esm/* default */.C)(result);
  }

  return result;
}

function generateCompactArrayCode(ast) {
  var result = generateCode(ast, true); // escodegen add extra an extra before the opening bracket of a compact array that contains primitive values.
  // Fix it until a better solution is found.

  if (result.startsWith('[    ')) {
    result = result.replace('[    ', '[');
  }

  return result;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/componentTypes.js



var isMemo = function isMemo(component) {
  return component.$$typeof === Symbol.for('react.memo');
};
var isForwardRef = function isForwardRef(component) {
  return component.$$typeof === Symbol.for('react.forward_ref');
};
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/index.js




;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/inspection/types.js
var InspectionType;

(function (InspectionType) {
  InspectionType["IDENTIFIER"] = "Identifier";
  InspectionType["LITERAL"] = "Literal";
  InspectionType["OBJECT"] = "Object";
  InspectionType["ARRAY"] = "Array";
  InspectionType["FUNCTION"] = "Function";
  InspectionType["CLASS"] = "Class";
  InspectionType["ELEMENT"] = "Element";
  InspectionType["UNKNOWN"] = "Unknown";
})(InspectionType || (InspectionType = {}));
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/acorn/dist/acorn.mjs
var acorn = __webpack_require__(11464);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/acorn-jsx/index.js
var acorn_jsx = __webpack_require__(59449);
var acorn_jsx_default = /*#__PURE__*/__webpack_require__.n(acorn_jsx);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/node_modules/acorn-walk/dist/walk.mjs
// AST walker module for Mozilla Parser API compatible trees

// A simple walk is one where you simply specify callbacks to be
// called on specific nodes. The last two arguments are optional. A
// simple use would be
//
//     walk.simple(myTree, {
//         Expression: function(node) { ... }
//     });
//
// to do something with all expressions. All Parser API node types
// can be used to identify node types, as well as Expression and
// Statement, which denote categories of nodes.
//
// The base argument can be used to pass a custom (recursive)
// walker, and state can be used to give this walked an initial
// state.

function simple(node, visitors, baseVisitor, state, override) {
  if (!baseVisitor) { baseVisitor = base
  ; }(function c(node, st, override) {
    var type = override || node.type, found = visitors[type];
    baseVisitor[type](node, st, c);
    if (found) { found(node, st); }
  })(node, state, override);
}

// An ancestor walk keeps an array of ancestor nodes (including the
// current node) and passes them to the callback as third parameter
// (and also as state parameter when no other state is present).
function ancestor(node, visitors, baseVisitor, state, override) {
  var ancestors = [];
  if (!baseVisitor) { baseVisitor = base
  ; }(function c(node, st, override) {
    var type = override || node.type, found = visitors[type];
    var isNew = node !== ancestors[ancestors.length - 1];
    if (isNew) { ancestors.push(node); }
    baseVisitor[type](node, st, c);
    if (found) { found(node, st || ancestors, ancestors); }
    if (isNew) { ancestors.pop(); }
  })(node, state, override);
}

// A recursive walk is one where your functions override the default
// walkers. They can modify and replace the state parameter that's
// threaded through the walk, and can opt how and whether to walk
// their child nodes (by calling their third argument on these
// nodes).
function recursive(node, state, funcs, baseVisitor, override) {
  var visitor = funcs ? make(funcs, baseVisitor || undefined) : baseVisitor
  ;(function c(node, st, override) {
    visitor[override || node.type](node, st, c);
  })(node, state, override);
}

function makeTest(test) {
  if (typeof test === "string")
    { return function (type) { return type === test; } }
  else if (!test)
    { return function () { return true; } }
  else
    { return test }
}

var Found = function Found(node, state) { this.node = node; this.state = state; };

// A full walk triggers the callback on each node
function full(node, callback, baseVisitor, state, override) {
  if (!baseVisitor) { baseVisitor = base
  ; }(function c(node, st, override) {
    var type = override || node.type;
    baseVisitor[type](node, st, c);
    if (!override) { callback(node, st, type); }
  })(node, state, override);
}

// An fullAncestor walk is like an ancestor walk, but triggers
// the callback on each node
function fullAncestor(node, callback, baseVisitor, state) {
  if (!baseVisitor) { baseVisitor = base; }
  var ancestors = []
  ;(function c(node, st, override) {
    var type = override || node.type;
    var isNew = node !== ancestors[ancestors.length - 1];
    if (isNew) { ancestors.push(node); }
    baseVisitor[type](node, st, c);
    if (!override) { callback(node, st || ancestors, ancestors, type); }
    if (isNew) { ancestors.pop(); }
  })(node, state);
}

// Find a node with a given start, end, and type (all are optional,
// null can be used as wildcard). Returns a {node, state} object, or
// undefined when it doesn't find a matching node.
function findNodeAt(node, start, end, test, baseVisitor, state) {
  if (!baseVisitor) { baseVisitor = base; }
  test = makeTest(test);
  try {
    (function c(node, st, override) {
      var type = override || node.type;
      if ((start == null || node.start <= start) &&
          (end == null || node.end >= end))
        { baseVisitor[type](node, st, c); }
      if ((start == null || node.start === start) &&
          (end == null || node.end === end) &&
          test(type, node))
        { throw new Found(node, st) }
    })(node, state);
  } catch (e) {
    if (e instanceof Found) { return e }
    throw e
  }
}

// Find the innermost node of a given type that contains the given
// position. Interface similar to findNodeAt.
function findNodeAround(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) { baseVisitor = base; }
  try {
    (function c(node, st, override) {
      var type = override || node.type;
      if (node.start > pos || node.end < pos) { return }
      baseVisitor[type](node, st, c);
      if (test(type, node)) { throw new Found(node, st) }
    })(node, state);
  } catch (e) {
    if (e instanceof Found) { return e }
    throw e
  }
}

// Find the outermost matching node after a given position.
function findNodeAfter(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) { baseVisitor = base; }
  try {
    (function c(node, st, override) {
      if (node.end < pos) { return }
      var type = override || node.type;
      if (node.start >= pos && test(type, node)) { throw new Found(node, st) }
      baseVisitor[type](node, st, c);
    })(node, state);
  } catch (e) {
    if (e instanceof Found) { return e }
    throw e
  }
}

// Find the outermost matching node before a given position.
function findNodeBefore(node, pos, test, baseVisitor, state) {
  test = makeTest(test);
  if (!baseVisitor) { baseVisitor = base; }
  var max
  ;(function c(node, st, override) {
    if (node.start > pos) { return }
    var type = override || node.type;
    if (node.end <= pos && (!max || max.node.end < node.end) && test(type, node))
      { max = new Found(node, st); }
    baseVisitor[type](node, st, c);
  })(node, state);
  return max
}

// Fallback to an Object.create polyfill for older environments.
var create = Object.create || function(proto) {
  function Ctor() {}
  Ctor.prototype = proto;
  return new Ctor
};

// Used to create a custom walker. Will fill in all missing node
// type properties with the defaults.
function make(funcs, baseVisitor) {
  var visitor = create(baseVisitor || base);
  for (var type in funcs) { visitor[type] = funcs[type]; }
  return visitor
}

function skipThrough(node, st, c) { c(node, st); }
function ignore(_node, _st, _c) {}

// Node walkers.

var base = {};

base.Program = base.BlockStatement = function (node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1)
    {
    var stmt = list[i];

    c(stmt, st, "Statement");
  }
};
base.Statement = skipThrough;
base.EmptyStatement = ignore;
base.ExpressionStatement = base.ParenthesizedExpression = base.ChainExpression =
  function (node, st, c) { return c(node.expression, st, "Expression"); };
base.IfStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Statement");
  if (node.alternate) { c(node.alternate, st, "Statement"); }
};
base.LabeledStatement = function (node, st, c) { return c(node.body, st, "Statement"); };
base.BreakStatement = base.ContinueStatement = ignore;
base.WithStatement = function (node, st, c) {
  c(node.object, st, "Expression");
  c(node.body, st, "Statement");
};
base.SwitchStatement = function (node, st, c) {
  c(node.discriminant, st, "Expression");
  for (var i$1 = 0, list$1 = node.cases; i$1 < list$1.length; i$1 += 1) {
    var cs = list$1[i$1];

    if (cs.test) { c(cs.test, st, "Expression"); }
    for (var i = 0, list = cs.consequent; i < list.length; i += 1)
      {
      var cons = list[i];

      c(cons, st, "Statement");
    }
  }
};
base.SwitchCase = function (node, st, c) {
  if (node.test) { c(node.test, st, "Expression"); }
  for (var i = 0, list = node.consequent; i < list.length; i += 1)
    {
    var cons = list[i];

    c(cons, st, "Statement");
  }
};
base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function (node, st, c) {
  if (node.argument) { c(node.argument, st, "Expression"); }
};
base.ThrowStatement = base.SpreadElement =
  function (node, st, c) { return c(node.argument, st, "Expression"); };
base.TryStatement = function (node, st, c) {
  c(node.block, st, "Statement");
  if (node.handler) { c(node.handler, st); }
  if (node.finalizer) { c(node.finalizer, st, "Statement"); }
};
base.CatchClause = function (node, st, c) {
  if (node.param) { c(node.param, st, "Pattern"); }
  c(node.body, st, "Statement");
};
base.WhileStatement = base.DoWhileStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForStatement = function (node, st, c) {
  if (node.init) { c(node.init, st, "ForInit"); }
  if (node.test) { c(node.test, st, "Expression"); }
  if (node.update) { c(node.update, st, "Expression"); }
  c(node.body, st, "Statement");
};
base.ForInStatement = base.ForOfStatement = function (node, st, c) {
  c(node.left, st, "ForInit");
  c(node.right, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForInit = function (node, st, c) {
  if (node.type === "VariableDeclaration") { c(node, st); }
  else { c(node, st, "Expression"); }
};
base.DebuggerStatement = ignore;

base.FunctionDeclaration = function (node, st, c) { return c(node, st, "Function"); };
base.VariableDeclaration = function (node, st, c) {
  for (var i = 0, list = node.declarations; i < list.length; i += 1)
    {
    var decl = list[i];

    c(decl, st);
  }
};
base.VariableDeclarator = function (node, st, c) {
  c(node.id, st, "Pattern");
  if (node.init) { c(node.init, st, "Expression"); }
};

base.Function = function (node, st, c) {
  if (node.id) { c(node.id, st, "Pattern"); }
  for (var i = 0, list = node.params; i < list.length; i += 1)
    {
    var param = list[i];

    c(param, st, "Pattern");
  }
  c(node.body, st, node.expression ? "Expression" : "Statement");
};

base.Pattern = function (node, st, c) {
  if (node.type === "Identifier")
    { c(node, st, "VariablePattern"); }
  else if (node.type === "MemberExpression")
    { c(node, st, "MemberPattern"); }
  else
    { c(node, st); }
};
base.VariablePattern = ignore;
base.MemberPattern = skipThrough;
base.RestElement = function (node, st, c) { return c(node.argument, st, "Pattern"); };
base.ArrayPattern = function (node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];

    if (elt) { c(elt, st, "Pattern"); }
  }
};
base.ObjectPattern = function (node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1) {
    var prop = list[i];

    if (prop.type === "Property") {
      if (prop.computed) { c(prop.key, st, "Expression"); }
      c(prop.value, st, "Pattern");
    } else if (prop.type === "RestElement") {
      c(prop.argument, st, "Pattern");
    }
  }
};

base.Expression = skipThrough;
base.ThisExpression = base.Super = base.MetaProperty = ignore;
base.ArrayExpression = function (node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];

    if (elt) { c(elt, st, "Expression"); }
  }
};
base.ObjectExpression = function (node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1)
    {
    var prop = list[i];

    c(prop, st);
  }
};
base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
base.SequenceExpression = function (node, st, c) {
  for (var i = 0, list = node.expressions; i < list.length; i += 1)
    {
    var expr = list[i];

    c(expr, st, "Expression");
  }
};
base.TemplateLiteral = function (node, st, c) {
  for (var i = 0, list = node.quasis; i < list.length; i += 1)
    {
    var quasi = list[i];

    c(quasi, st);
  }

  for (var i$1 = 0, list$1 = node.expressions; i$1 < list$1.length; i$1 += 1)
    {
    var expr = list$1[i$1];

    c(expr, st, "Expression");
  }
};
base.TemplateElement = ignore;
base.UnaryExpression = base.UpdateExpression = function (node, st, c) {
  c(node.argument, st, "Expression");
};
base.BinaryExpression = base.LogicalExpression = function (node, st, c) {
  c(node.left, st, "Expression");
  c(node.right, st, "Expression");
};
base.AssignmentExpression = base.AssignmentPattern = function (node, st, c) {
  c(node.left, st, "Pattern");
  c(node.right, st, "Expression");
};
base.ConditionalExpression = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Expression");
  c(node.alternate, st, "Expression");
};
base.NewExpression = base.CallExpression = function (node, st, c) {
  c(node.callee, st, "Expression");
  if (node.arguments)
    { for (var i = 0, list = node.arguments; i < list.length; i += 1)
      {
        var arg = list[i];

        c(arg, st, "Expression");
      } }
};
base.MemberExpression = function (node, st, c) {
  c(node.object, st, "Expression");
  if (node.computed) { c(node.property, st, "Expression"); }
};
base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function (node, st, c) {
  if (node.declaration)
    { c(node.declaration, st, node.type === "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression"); }
  if (node.source) { c(node.source, st, "Expression"); }
};
base.ExportAllDeclaration = function (node, st, c) {
  if (node.exported)
    { c(node.exported, st); }
  c(node.source, st, "Expression");
};
base.ImportDeclaration = function (node, st, c) {
  for (var i = 0, list = node.specifiers; i < list.length; i += 1)
    {
    var spec = list[i];

    c(spec, st);
  }
  c(node.source, st, "Expression");
};
base.ImportExpression = function (node, st, c) {
  c(node.source, st, "Expression");
};
base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.Literal = ignore;

base.TaggedTemplateExpression = function (node, st, c) {
  c(node.tag, st, "Expression");
  c(node.quasi, st, "Expression");
};
base.ClassDeclaration = base.ClassExpression = function (node, st, c) { return c(node, st, "Class"); };
base.Class = function (node, st, c) {
  if (node.id) { c(node.id, st, "Pattern"); }
  if (node.superClass) { c(node.superClass, st, "Expression"); }
  c(node.body, st);
};
base.ClassBody = function (node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1)
    {
    var elt = list[i];

    c(elt, st);
  }
};
base.MethodDefinition = base.Property = function (node, st, c) {
  if (node.computed) { c(node.key, st, "Expression"); }
  c(node.value, st, "Expression");
};



;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/inspection/acornParser.js








var ACORN_WALK_VISITORS = Object.assign({}, base, {
  JSXElement: function JSXElement() {}
});
var acornParser = acorn.Parser.extend(acorn_jsx_default()()); // Cannot use "estree.Identifier" type because this function also support "JSXIdentifier".

function extractIdentifierName(identifierNode) {
  return identifierNode != null ? identifierNode.name : null;
}

function filterAncestors(ancestors) {
  return ancestors.filter(function (x) {
    return x.type === 'ObjectExpression' || x.type === 'ArrayExpression';
  });
}

function calculateNodeDepth(node) {
  var depths = [];
  ancestor( // @ts-ignore
  node, {
    ObjectExpression: function ObjectExpression(_, ancestors) {
      depths.push(filterAncestors(ancestors).length);
    },
    ArrayExpression: function ArrayExpression(_, ancestors) {
      depths.push(filterAncestors(ancestors).length);
    }
  }, ACORN_WALK_VISITORS);
  return Math.max.apply(Math, depths);
}

function parseIdentifier(identifierNode) {
  return {
    inferredType: {
      type: InspectionType.IDENTIFIER,
      identifier: extractIdentifierName(identifierNode)
    },
    ast: identifierNode
  };
}

function parseLiteral(literalNode) {
  return {
    inferredType: {
      type: InspectionType.LITERAL
    },
    ast: literalNode
  };
}

function parseFunction(funcNode) {
  var innerJsxElementNode; // If there is at least a JSXElement in the body of the function, then it's a React component.

  simple( // @ts-ignore
  funcNode.body, {
    JSXElement: function JSXElement(node) {
      innerJsxElementNode = node;
    }
  }, ACORN_WALK_VISITORS);
  var isJsx = innerJsxElementNode != null;
  var inferredType = {
    type: isJsx ? InspectionType.ELEMENT : InspectionType.FUNCTION,
    params: funcNode.params,
    hasParams: funcNode.params.length !== 0
  };
  var identifierName = extractIdentifierName(funcNode.id);

  if (identifierName != null) {
    inferredType.identifier = identifierName;
  }

  return {
    inferredType: inferredType,
    ast: funcNode
  };
}

function parseClass(classNode) {
  var innerJsxElementNode; // If there is at least a JSXElement in the body of the class, then it's a React component.

  simple( // @ts-ignore
  classNode.body, {
    JSXElement: function JSXElement(node) {
      innerJsxElementNode = node;
    }
  }, ACORN_WALK_VISITORS);
  var inferredType = {
    type: innerJsxElementNode != null ? InspectionType.ELEMENT : InspectionType.CLASS,
    identifier: extractIdentifierName(classNode.id)
  };
  return {
    inferredType: inferredType,
    ast: classNode
  };
}

function parseJsxElement(jsxElementNode) {
  var inferredType = {
    type: InspectionType.ELEMENT
  };
  var identifierName = extractIdentifierName(jsxElementNode.openingElement.name);

  if (identifierName != null) {
    inferredType.identifier = identifierName;
  }

  return {
    inferredType: inferredType,
    ast: jsxElementNode
  };
}

function parseCall(callNode) {
  var identifierNode = callNode.callee.type === 'MemberExpression' ? callNode.callee.property : callNode.callee;
  var identifierName = extractIdentifierName(identifierNode);

  if (identifierName === 'shape') {
    return parseObject(callNode.arguments[0]);
  }

  return null;
}

function parseObject(objectNode) {
  return {
    inferredType: {
      type: InspectionType.OBJECT,
      depth: calculateNodeDepth(objectNode)
    },
    ast: objectNode
  };
}

function parseArray(arrayNode) {
  return {
    inferredType: {
      type: InspectionType.ARRAY,
      depth: calculateNodeDepth(arrayNode)
    },
    ast: arrayNode
  };
} // Cannot set "expression" type to "estree.Expression" because the type doesn't include JSX.


function parseExpression(expression) {
  switch (expression.type) {
    case 'Identifier':
      return parseIdentifier(expression);

    case 'Literal':
      return parseLiteral(expression);

    case 'FunctionExpression':
    case 'ArrowFunctionExpression':
      return parseFunction(expression);

    case 'ClassExpression':
      return parseClass(expression);

    case 'JSXElement':
      return parseJsxElement(expression);

    case 'CallExpression':
      return parseCall(expression);

    case 'ObjectExpression':
      return parseObject(expression);

    case 'ArrayExpression':
      return parseArray(expression);

    default:
      return null;
  }
}

function acornParser_parse(value) {
  var ast = acornParser.parse("(".concat(value, ")"));
  var parsingResult = {
    inferredType: {
      type: InspectionType.UNKNOWN
    },
    ast: ast
  };

  if (ast.body[0] != null) {
    var rootNode = ast.body[0];

    switch (rootNode.type) {
      case 'ExpressionStatement':
        {
          var expressionResult = parseExpression(rootNode.expression);

          if (expressionResult != null) {
            parsingResult = expressionResult;
          }

          break;
        }

      default:
        break;
    }
  }

  return parsingResult;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/inspection/inspectValue.js



function inspectValue(value) {
  try {
    var parsingResult = acornParser_parse(value);
    return Object.assign({}, parsingResult);
  } catch (e) {// do nothing.
  }

  return {
    inferredType: {
      type: InspectionType.UNKNOWN
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/inspection/index.js


;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/propTypes/createType.js













var MAX_FUNC_LENGTH = 150;
var PropTypesType;

(function (PropTypesType) {
  PropTypesType["CUSTOM"] = "custom";
  PropTypesType["ANY"] = "any";
  PropTypesType["FUNC"] = "func";
  PropTypesType["SHAPE"] = "shape";
  PropTypesType["OBJECT"] = "object";
  PropTypesType["INSTANCEOF"] = "instanceOf";
  PropTypesType["OBJECTOF"] = "objectOf";
  PropTypesType["UNION"] = "union";
  PropTypesType["ENUM"] = "enum";
  PropTypesType["ARRAYOF"] = "arrayOf";
  PropTypesType["ELEMENT"] = "element";
  PropTypesType["ELEMENTTYPE"] = "elementType";
  PropTypesType["NODE"] = "node";
})(PropTypesType || (PropTypesType = {}));

function createTypeDef(_ref) {
  var name = _ref.name,
      short = _ref.short,
      compact = _ref.compact,
      full = _ref.full,
      inferredType = _ref.inferredType;
  return {
    name: name,
    short: short,
    compact: compact,
    full: full != null ? full : short,
    inferredType: inferredType
  };
}

function cleanPropTypes(value) {
  return value.replace(/PropTypes./g, '').replace(/.isRequired/g, '');
}

function splitIntoLines(value) {
  return value.split(/\r?\n/);
}

function prettyObject(ast) {
  var compact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return cleanPropTypes(generateObjectCode(ast, compact));
}

function prettyArray(ast) {
  var compact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return cleanPropTypes(generateCode(ast, compact));
}

function getCaptionForInspectionType(type) {
  switch (type) {
    case InspectionType.OBJECT:
      return OBJECT_CAPTION;

    case InspectionType.ARRAY:
      return ARRAY_CAPTION;

    case InspectionType.CLASS:
      return CLASS_CAPTION;

    case InspectionType.FUNCTION:
      return FUNCTION_CAPTION;

    case InspectionType.ELEMENT:
      return ELEMENT_CAPTION;

    default:
      return CUSTOM_CAPTION;
  }
}

function generateTypeFromString(value, originalTypeName) {
  var _inspectValue = inspectValue(value),
      inferredType = _inspectValue.inferredType,
      ast = _inspectValue.ast;

  var type = inferredType.type;
  var short;
  var compact;
  var full;

  switch (type) {
    case InspectionType.IDENTIFIER:
    case InspectionType.LITERAL:
      short = value;
      compact = value;
      break;

    case InspectionType.OBJECT:
      {
        var _ref2 = inferredType,
            depth = _ref2.depth;
        short = OBJECT_CAPTION;
        compact = depth === 1 ? prettyObject(ast, true) : null;
        full = prettyObject(ast);
        break;
      }

    case InspectionType.ELEMENT:
      {
        var _ref3 = inferredType,
            identifier = _ref3.identifier;
        short = identifier != null && !isHtmlTag(identifier) ? identifier : ELEMENT_CAPTION;
        compact = splitIntoLines(value).length === 1 ? value : null;
        full = value;
        break;
      }

    case InspectionType.ARRAY:
      {
        var _ref4 = inferredType,
            _depth = _ref4.depth;
        short = ARRAY_CAPTION;
        compact = _depth <= 2 ? prettyArray(ast, true) : null;
        full = prettyArray(ast);
        break;
      }

    default:
      short = getCaptionForInspectionType(type);
      compact = splitIntoLines(value).length === 1 ? value : null;
      full = value;
      break;
  }

  return createTypeDef({
    name: originalTypeName,
    short: short,
    compact: compact,
    full: full,
    inferredType: type
  });
}

function generateCustom(_ref5) {
  var raw = _ref5.raw;

  if (raw != null) {
    return generateTypeFromString(raw, PropTypesType.CUSTOM);
  }

  return createTypeDef({
    name: PropTypesType.CUSTOM,
    short: CUSTOM_CAPTION,
    compact: CUSTOM_CAPTION
  });
}

function generateFunc(extractedProp) {
  var jsDocTags = extractedProp.jsDocTags;

  if (jsDocTags != null) {
    if (jsDocTags.params != null || jsDocTags.returns != null) {
      return createTypeDef({
        name: PropTypesType.FUNC,
        short: generateShortFuncSignature(jsDocTags.params, jsDocTags.returns),
        compact: null,
        full: generateFuncSignature_generateFuncSignature(jsDocTags.params, jsDocTags.returns)
      });
    }
  }

  return createTypeDef({
    name: PropTypesType.FUNC,
    short: FUNCTION_CAPTION,
    compact: FUNCTION_CAPTION
  });
}

function generateShape(type, extractedProp) {
  var fields = Object.keys(type.value).map(function (key) {
    return "".concat(key, ": ").concat(generateType(type.value[key], extractedProp).full);
  }).join(', ');

  var _inspectValue2 = inspectValue("{ ".concat(fields, " }")),
      inferredType = _inspectValue2.inferredType,
      ast = _inspectValue2.ast;

  var _ref6 = inferredType,
      depth = _ref6.depth;
  return createTypeDef({
    name: PropTypesType.SHAPE,
    short: OBJECT_CAPTION,
    compact: depth === 1 && ast ? prettyObject(ast, true) : null,
    full: ast ? prettyObject(ast) : null
  });
}

function objectOf(of) {
  return "objectOf(".concat(of, ")");
}

function generateObjectOf(type, extractedProp) {
  var _generateType = generateType(type.value, extractedProp),
      short = _generateType.short,
      compact = _generateType.compact,
      full = _generateType.full;

  return createTypeDef({
    name: PropTypesType.OBJECTOF,
    short: objectOf(short),
    compact: compact != null ? objectOf(compact) : null,
    full: objectOf(full)
  });
}

function createType_generateUnion(type, extractedProp) {
  if (Array.isArray(type.value)) {
    var values = type.value.reduce(function (acc, v) {
      var _generateType2 = generateType(v, extractedProp),
          short = _generateType2.short,
          compact = _generateType2.compact,
          full = _generateType2.full;

      acc.short.push(short);
      acc.compact.push(compact);
      acc.full.push(full);
      return acc;
    }, {
      short: [],
      compact: [],
      full: []
    });
    return createTypeDef({
      name: PropTypesType.UNION,
      short: values.short.join(' | '),
      compact: values.compact.every(function (x) {
        return x != null;
      }) ? values.compact.join(' | ') : null,
      full: values.full.join(' | ')
    });
  }

  return createTypeDef({
    name: PropTypesType.UNION,
    short: type.value,
    compact: null
  });
}

function generateEnumValue(_ref7) {
  var value = _ref7.value,
      computed = _ref7.computed;
  return computed ? generateTypeFromString(value, 'enumvalue') : createTypeDef({
    name: 'enumvalue',
    short: value,
    compact: value
  });
}

function generateEnum(type) {
  if (Array.isArray(type.value)) {
    var values = type.value.reduce(function (acc, v) {
      var _generateEnumValue = generateEnumValue(v),
          short = _generateEnumValue.short,
          compact = _generateEnumValue.compact,
          full = _generateEnumValue.full;

      acc.short.push(short);
      acc.compact.push(compact);
      acc.full.push(full);
      return acc;
    }, {
      short: [],
      compact: [],
      full: []
    });
    return createTypeDef({
      name: PropTypesType.ENUM,
      short: values.short.join(' | '),
      compact: values.compact.every(function (x) {
        return x != null;
      }) ? values.compact.join(' | ') : null,
      full: values.full.join(' | ')
    });
  }

  return createTypeDef({
    name: PropTypesType.ENUM,
    short: type.value,
    compact: type.value
  });
}

function braceAfter(of) {
  return "".concat(of, "[]");
}

function braceAround(of) {
  return "[".concat(of, "]");
}

function createArrayOfObjectTypeDef(short, compact, full) {
  return createTypeDef({
    name: PropTypesType.ARRAYOF,
    short: braceAfter(short),
    compact: compact != null ? braceAround(compact) : null,
    full: braceAround(full)
  });
}

function generateArray(type, extractedProp) {
  var _generateType3 = generateType(type.value, extractedProp),
      name = _generateType3.name,
      short = _generateType3.short,
      compact = _generateType3.compact,
      full = _generateType3.full,
      inferredType = _generateType3.inferredType;

  if (name === PropTypesType.CUSTOM) {
    if (inferredType === InspectionType.OBJECT) {
      return createArrayOfObjectTypeDef(short, compact, full);
    }
  } else if (name === PropTypesType.SHAPE) {
    return createArrayOfObjectTypeDef(short, compact, full);
  }

  return createTypeDef({
    name: PropTypesType.ARRAYOF,
    short: braceAfter(short),
    compact: braceAfter(short)
  });
}

function generateType(type, extractedProp) {
  try {
    switch (type.name) {
      case PropTypesType.CUSTOM:
        return generateCustom(type);

      case PropTypesType.FUNC:
        return generateFunc(extractedProp);

      case PropTypesType.SHAPE:
        return generateShape(type, extractedProp);

      case PropTypesType.INSTANCEOF:
        return createTypeDef({
          name: PropTypesType.INSTANCEOF,
          short: type.value,
          compact: type.value
        });

      case PropTypesType.OBJECTOF:
        return generateObjectOf(type, extractedProp);

      case PropTypesType.UNION:
        return createType_generateUnion(type, extractedProp);

      case PropTypesType.ENUM:
        return generateEnum(type);

      case PropTypesType.ARRAYOF:
        return generateArray(type, extractedProp);

      default:
        return createTypeDef({
          name: type.name,
          short: type.name,
          compact: type.name
        });
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return createTypeDef({
    name: 'unknown',
    short: 'unknown',
    compact: 'unknown'
  });
}

function propTypes_createType_createType(extractedProp) {
  var type = extractedProp.docgenInfo.type; // A type could be null if a defaultProp has been provided without a type definition.

  if (type == null) {
    return null;
  }

  try {
    switch (type.name) {
      case PropTypesType.CUSTOM:
      case PropTypesType.SHAPE:
      case PropTypesType.INSTANCEOF:
      case PropTypesType.OBJECTOF:
      case PropTypesType.UNION:
      case PropTypesType.ENUM:
      case PropTypesType.ARRAYOF:
        {
          var _generateType4 = generateType(type, extractedProp),
              short = _generateType4.short,
              compact = _generateType4.compact,
              full = _generateType4.full;

          if (compact != null) {
            if (!isTooLongForTypeSummary(compact)) {
              return createSummaryValue(compact);
            }
          }

          return createSummaryValue(short, full);
        }

      case PropTypesType.FUNC:
        {
          var _generateType5 = generateType(type, extractedProp),
              _short = _generateType5.short,
              _full = _generateType5.full;

          var summary = _short;
          var detail;

          if (_full.length < MAX_FUNC_LENGTH) {
            summary = _full;
          } else {
            detail = toMultilineSignature(_full);
          }

          return createSummaryValue(summary, detail);
        }

      default:
        return null;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return null;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/defaultValues/generateObject.js



function generateObject(_ref) {
  var inferredType = _ref.inferredType,
      ast = _ref.ast;
  var _ref2 = inferredType,
      depth = _ref2.depth;

  if (depth === 1) {
    var compactObject = generateObjectCode(ast, true);

    if (!isTooLongForDefaultValueSummary(compactObject)) {
      return createSummaryValue(compactObject);
    }
  }

  return createSummaryValue(OBJECT_CAPTION, generateObjectCode(ast));
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/defaultValues/generateArray.js



function generateArray_generateArray(_ref) {
  var inferredType = _ref.inferredType,
      ast = _ref.ast;
  var _ref2 = inferredType,
      depth = _ref2.depth;

  if (depth <= 2) {
    var compactArray = generateArrayCode(ast, true);

    if (!isTooLongForDefaultValueSummary(compactArray)) {
      return createSummaryValue(compactArray);
    }
  }

  return createSummaryValue(ARRAY_CAPTION, generateArrayCode(ast));
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/defaultValues/prettyIdentifier.js

function getPrettyIdentifier(inferredType) {
  var type = inferredType.type,
      identifier = inferredType.identifier;

  switch (type) {
    case InspectionType.FUNCTION:
      return getPrettyFuncIdentifier(identifier, inferredType.hasParams);

    case InspectionType.ELEMENT:
      return getPrettyElementIdentifier(identifier);

    default:
      return identifier;
  }
}
function getPrettyFuncIdentifier(identifier, hasArguments) {
  return hasArguments ? "".concat(identifier, "( ... )") : "".concat(identifier, "()");
}
function getPrettyElementIdentifier(identifier) {
  return "<".concat(identifier, " />");
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/defaultValues/createDefaultValue.js









function createDefaultValue_generateFunc(_ref) {
  var inferredType = _ref.inferredType,
      ast = _ref.ast;
  var _ref2 = inferredType,
      identifier = _ref2.identifier;

  if (identifier != null) {
    return createSummaryValue(getPrettyIdentifier(inferredType), generateCode(ast));
  }

  var prettyCaption = generateCode(ast, true);
  return !isTooLongForDefaultValueSummary(prettyCaption) ? createSummaryValue(prettyCaption) : createSummaryValue(FUNCTION_CAPTION, generateCode(ast));
} // All elements are JSX elements.
// JSX elements are not supported by escodegen.


function generateElement(defaultValue, inspectionResult) {
  var inferredType = inspectionResult.inferredType;
  var _ref3 = inferredType,
      identifier = _ref3.identifier;

  if (identifier != null) {
    if (!isHtmlTag(identifier)) {
      var prettyIdentifier = getPrettyIdentifier(inferredType);
      return createSummaryValue(prettyIdentifier, defaultValue);
    }
  }

  return !isTooLongForDefaultValueSummary(defaultValue) ? createSummaryValue(defaultValue) : createSummaryValue(ELEMENT_CAPTION, defaultValue);
}

function defaultValues_createDefaultValue_createDefaultValue(defaultValue) {
  try {
    var inspectionResult = inspectValue(defaultValue);

    switch (inspectionResult.inferredType.type) {
      case InspectionType.OBJECT:
        return generateObject(inspectionResult);

      case InspectionType.FUNCTION:
        return createDefaultValue_generateFunc(inspectionResult);

      case InspectionType.ELEMENT:
        return generateElement(defaultValue, inspectionResult);

      case InspectionType.ARRAY:
        return generateArray_generateArray(inspectionResult);

      default:
        return null;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return null;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(39714);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(32165);
// EXTERNAL MODULE: ./node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(68630);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);
// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(23560);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(47037);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: ./node_modules/react-element-to-jsx-string/dist/cjs/index.js
var cjs = __webpack_require__(87413);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/defaultValues/createFromRawDefaultProp.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















 // @ts-ignore










function isReactElement(element) {
  return element.$$typeof != null;
}

function extractFunctionName(func, propName) {
  var name = func.name; // Comparison with the prop name is to discard inferred function names.

  if (name !== '' && name !== 'anonymous' && name !== propName) {
    return name;
  }

  return null;
}

var stringResolver = function stringResolver(rawDefaultProp) {
  return createSummaryValue(JSON.stringify(rawDefaultProp));
};

function generateReactObject(rawDefaultProp) {
  var type = rawDefaultProp.type;
  var displayName = type.displayName;
  var jsx = (0,cjs/* default */.ZP)(rawDefaultProp, {});

  if (displayName != null) {
    var prettyIdentifier = getPrettyElementIdentifier(displayName);
    return createSummaryValue(prettyIdentifier, jsx);
  }

  if (isString_default()(type)) {
    // This is an HTML element.
    if (isHtmlTag(type)) {
      var jsxCompact = (0,cjs/* default */.ZP)(rawDefaultProp, {
        tabStop: 0
      });
      var jsxSummary = jsxCompact.replace(/\r?\n|\r/g, '');

      if (!isTooLongForDefaultValueSummary(jsxSummary)) {
        return createSummaryValue(jsxSummary);
      }
    }
  }

  return createSummaryValue(ELEMENT_CAPTION, jsx);
}

var objectResolver = function objectResolver(rawDefaultProp) {
  if (isReactElement(rawDefaultProp) && rawDefaultProp.type != null) {
    return generateReactObject(rawDefaultProp);
  }

  if (isPlainObject_default()(rawDefaultProp)) {
    var inspectionResult = inspectValue(JSON.stringify(rawDefaultProp));
    return generateObject(inspectionResult);
  }

  if (Array.isArray(rawDefaultProp)) {
    var _inspectionResult = inspectValue(JSON.stringify(rawDefaultProp));

    return generateArray_generateArray(_inspectionResult);
  }

  return createSummaryValue(OBJECT_CAPTION);
};

var functionResolver = function functionResolver(rawDefaultProp, propDef) {
  var isElement = false;
  var inspectionResult; // Try to display the name of the component. The body of the component is omitted since the code has been transpiled.

  if (isFunction_default()(rawDefaultProp.render)) {
    isElement = true;
  } else if (rawDefaultProp.prototype != null && isFunction_default()(rawDefaultProp.prototype.render)) {
    isElement = true;
  } else {
    var innerElement;

    try {
      inspectionResult = inspectValue(rawDefaultProp.toString());
      var _ref = inspectionResult.inferredType,
          hasParams = _ref.hasParams,
          params = _ref.params;

      if (hasParams) {
        // It might be a functional component accepting props.
        if (params.length === 1 && params[0].type === 'ObjectPattern') {
          innerElement = rawDefaultProp({});
        }
      } else {
        innerElement = rawDefaultProp();
      }

      if (innerElement != null) {
        if (isReactElement(innerElement)) {
          isElement = true;
        }
      }
    } catch (e) {// do nothing.
    }
  }

  var funcName = extractFunctionName(rawDefaultProp, propDef.name);

  if (funcName != null) {
    if (isElement) {
      return createSummaryValue(getPrettyElementIdentifier(funcName));
    }

    if (inspectionResult != null) {
      inspectionResult = inspectValue(rawDefaultProp.toString());
    }

    var _ref2 = inspectionResult.inferredType,
        _hasParams = _ref2.hasParams;
    return createSummaryValue(getPrettyFuncIdentifier(funcName, _hasParams));
  }

  return createSummaryValue(isElement ? ELEMENT_CAPTION : FUNCTION_CAPTION);
};

var defaultResolver = function defaultResolver(rawDefaultProp) {
  return createSummaryValue(rawDefaultProp.toString());
};

var DEFAULT_TYPE_RESOLVERS = {
  string: stringResolver,
  object: objectResolver,
  function: functionResolver,
  default: defaultResolver
};
function createTypeResolvers() {
  var customResolvers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, DEFAULT_TYPE_RESOLVERS, customResolvers);
} // When react-docgen cannot provide a defaultValue we take it from the raw defaultProp.
// It works fine for types that are not transpiled. For the types that are transpiled, we can only provide partial support.
// This means that:
//   - The detail might not be available.
//   - Identifiers might not be "prettified" for all the types.

function createDefaultValueFromRawDefaultProp(rawDefaultProp, propDef) {
  var typeResolvers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_TYPE_RESOLVERS;

  try {
    // Keep the extra () otherwise it will fail for functions.
    switch (_typeof(rawDefaultProp)) {
      case 'string':
        return typeResolvers.string(rawDefaultProp, propDef);

      case 'object':
        return typeResolvers.object(rawDefaultProp, propDef);

      case 'function':
        {
          return typeResolvers.function(rawDefaultProp, propDef);
        }

      default:
        return typeResolvers.default(rawDefaultProp, propDef);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return null;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/defaultValues/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(69826);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/propTypes/sortProps.js






// react-docgen doesn't returned the props in the order they were defined in the "propTypes" object of the component.
// This function re-order them by their original definition order.
function keepOriginalDefinitionOrder(extractedProps, component) {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  var propTypes = component.propTypes;

  if (propTypes != null) {
    return Object.keys(propTypes).map(function (x) {
      return extractedProps.find(function (y) {
        return y.name === x;
      });
    }).filter(function (x) {
      return x;
    });
  }

  return extractedProps;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/propTypes/rawDefaultPropResolvers.js









var funcResolver = function funcResolver(rawDefaultProp, _ref) {
  var name = _ref.name,
      type = _ref.type;
  var isElement = type.summary === 'element' || type.summary === 'elementType';
  var funcName = extractFunctionName(rawDefaultProp, name);

  if (funcName != null) {
    // Try to display the name of the component. The body of the component is omitted since the code has been transpiled.
    if (isElement) {
      return createSummaryValue(getPrettyElementIdentifier(funcName));
    }

    var _ref2 = inspectValue(rawDefaultProp.toString()).inferredType,
        hasParams = _ref2.hasParams;
    return createSummaryValue(getPrettyFuncIdentifier(funcName, hasParams));
  }

  return createSummaryValue(isElement ? ELEMENT_CAPTION : FUNCTION_CAPTION);
};

var rawDefaultPropTypeResolvers = createTypeResolvers({
  function: funcResolver
});
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/propTypes/handleProp.js






function enhancePropTypesProp(extractedProp, rawDefaultProp) {
  var propDef = extractedProp.propDef;
  var newtype = propTypes_createType_createType(extractedProp);

  if (newtype != null) {
    propDef.type = newtype;
  }

  var defaultValue = extractedProp.docgenInfo.defaultValue;

  if (defaultValue != null && defaultValue.value != null) {
    var newDefaultValue = defaultValues_createDefaultValue_createDefaultValue(defaultValue.value);

    if (newDefaultValue != null) {
      propDef.defaultValue = newDefaultValue;
    }
  } else if (rawDefaultProp != null) {
    var _newDefaultValue = createDefaultValueFromRawDefaultProp(rawDefaultProp, propDef, rawDefaultPropTypeResolvers);

    if (_newDefaultValue != null) {
      propDef.defaultValue = _newDefaultValue;
    }
  }

  return propDef;
}
function enhancePropTypesProps(extractedProps, component) {
  var rawDefaultProps = component.defaultProps != null ? component.defaultProps : {};
  var enhancedProps = extractedProps.map(function (x) {
    return enhancePropTypesProp(x, rawDefaultProps[x.propDef.name]);
  });
  return keepOriginalDefinitionOrder(enhancedProps, component);
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/typeScript/handleProp.js


function enhanceTypeScriptProp(extractedProp, rawDefaultProp) {
  var propDef = extractedProp.propDef;
  var defaultValue = extractedProp.docgenInfo.defaultValue;

  if (defaultValue != null && defaultValue.value != null) {
    var newDefaultValue = defaultValues_createDefaultValue_createDefaultValue(defaultValue.value);

    if (newDefaultValue != null) {
      propDef.defaultValue = newDefaultValue;
    }
  } else if (rawDefaultProp != null) {
    var _newDefaultValue = createDefaultValueFromRawDefaultProp(rawDefaultProp, propDef);

    if (_newDefaultValue != null) {
      propDef.defaultValue = _newDefaultValue;
    }
  }

  return propDef;
}
function enhanceTypeScriptProps(extractedProps) {
  return extractedProps.map(function (prop) {
    return enhanceTypeScriptProp(prop);
  });
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/extractProps.js












 // FIXME

var propTypesMap = new Map();
Object.keys((prop_types_default())).forEach(function (typeName) {
  // @ts-ignore
  var type = (prop_types_default())[typeName];
  propTypesMap.set(type, typeName);
  propTypesMap.set(type.isRequired, typeName);
});

function getPropDefs(component, section) {
  var processedComponent = component; // eslint-disable-next-line react/forbid-foreign-prop-types

  if (!hasDocgen(component) && !component.propTypes && isMemo(component)) {
    processedComponent = component.type;
  }

  var extractedProps = extractComponentProps(processedComponent, section);

  if (extractedProps.length === 0) {
    return [];
  }

  switch (extractedProps[0].typeSystem) {
    case TypeSystem.JAVASCRIPT:
      return enhancePropTypesProps(extractedProps, component);

    case TypeSystem.TYPESCRIPT:
      return enhanceTypeScriptProps(extractedProps);

    default:
      return extractedProps.map(function (x) {
        return x.propDef;
      });
  }
}

var extractProps = function extractProps(component) {
  return {
    rows: getPropDefs(component, 'props')
  };
};
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/extractArgTypes.js






var extractArgTypes = function extractArgTypes(component) {
  if (component) {
    var _extractProps = extractProps(component),
        rows = _extractProps.rows;

    if (rows) {
      return rows.reduce(function (acc, row) {
        var name = row.name,
            description = row.description,
            type = row.type,
            sbType = row.sbType,
            defaultSummary = row.defaultValue,
            jsDocTags = row.jsDocTags,
            required = row.required;
        acc[name] = {
          name: name,
          description: description,
          type: Object.assign({
            required: required
          }, sbType),
          table: {
            type: type,
            jsDocTags: jsDocTags,
            defaultValue: defaultSummary
          }
        };
        return acc;
      }, {});
    }
  }

  return null;
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(43371);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(91038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/util-deprecate/browser.js
var browser = __webpack_require__(94927);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./node_modules/@storybook/addons/dist/esm/index.js
var dist_esm = __webpack_require__(1173);
// EXTERNAL MODULE: ./node_modules/@storybook/addons/dist/esm/hooks.js
var hooks = __webpack_require__(45406);
;// CONCATENATED MODULE: ./node_modules/@storybook/docs-tools/dist/esm/shared.js
var ADDON_ID = 'storybook/docs';
var PANEL_ID = "".concat(ADDON_ID, "/panel");
var PARAM_KEY = "docs";
var SNIPPET_RENDERED = "".concat(ADDON_ID, "/snippet-rendered");
var SourceType;

(function (SourceType) {
  SourceType["AUTO"] = "auto";
  SourceType["CODE"] = "code";
  SourceType["DYNAMIC"] = "dynamic";
})(SourceType || (SourceType = {}));
// EXTERNAL MODULE: ./node_modules/@storybook/client-logger/dist/esm/index.js
var client_logger_dist_esm = __webpack_require__(23827);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/jsxDecorator.js










var _excluded = ["mdxType", "originalType", "children"];

var _templateObject;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










/** Run the user supplied onBeforeRender function if it exists */
var applyBeforeRender = function applyBeforeRender(domString, options) {
  if (typeof options.onBeforeRender !== 'function') {
    return domString;
  }

  var deprecatedOnBeforeRender = browser_default()(options.onBeforeRender, (0,esm/* default */.C)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      StoryFn.parameters.jsx.onBeforeRender was deprecated.\n      Prefer StoryFn.parameters.jsx.transformSource instead.\n      See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-onbeforerender for details.\n    "]))));
  return deprecatedOnBeforeRender(domString);
};
/** Run the user supplied transformSource function if it exists */


var applyTransformSource = function applyTransformSource(domString, options, context) {
  if (typeof options.transformSource !== 'function') {
    return domString;
  }

  return options.transformSource(domString, context);
};
/** Apply the users parameters and render the jsx for a story */


var renderJsx = function renderJsx(code, options) {
  if (typeof code === 'undefined') {
    client_logger_dist_esm/* logger.warn */.kg.warn('Too many skip or undefined component');
    return null;
  }

  var renderedJSX = code;
  var Type = renderedJSX.type;

  for (var i = 0; i < options.skip; i += 1) {
    if (typeof renderedJSX === 'undefined') {
      client_logger_dist_esm/* logger.warn */.kg.warn('Cannot skip undefined element');
      return null;
    }

    if (react.Children.count(renderedJSX) > 1) {
      client_logger_dist_esm/* logger.warn */.kg.warn('Trying to skip an array of elements');
      return null;
    }

    if (typeof renderedJSX.props.children === 'undefined') {
      client_logger_dist_esm/* logger.warn */.kg.warn('Not enough children to skip elements.');

      if (typeof renderedJSX.type === 'function' && renderedJSX.type.name === '') {
        renderedJSX = /*#__PURE__*/react.createElement(Type, renderedJSX.props);
      }
    } else if (typeof renderedJSX.props.children === 'function') {
      renderedJSX = renderedJSX.props.children();
    } else {
      renderedJSX = renderedJSX.props.children;
    }
  }

  var displayNameDefaults = typeof options.displayName === 'string' ? {
    showFunctions: true,
    displayName: function displayName() {
      return options.displayName;
    }
  } : {
    // To get exotic component names resolving properly
    displayName: function displayName(el) {
      return el.type.displayName || getDocgenSection(el.type, 'displayName') || (el.type.name !== '_default' ? el.type.name : null) || (typeof el.type === 'function' ? 'No Display Name' : null) || (isForwardRef(el.type) ? el.type.render.name : null) || (isMemo(el.type) ? el.type.type.name : null) || el.type;
    }
  };
  var filterDefaults = {
    filterProps: function filterProps(value, key) {
      return value !== undefined;
    }
  };
  var opts = Object.assign({}, displayNameDefaults, filterDefaults, options);
  var result = react.Children.map(code, function (c) {
    // @ts-ignore FIXME: workaround react-element-to-jsx-string
    var child = typeof c === 'number' ? c.toString() : c;
    var string = applyBeforeRender((0,cjs/* default */.ZP)(child, opts), options);

    if (string.indexOf('&quot;') > -1) {
      var matches = string.match(/\S+=\\"([^"]*)\\"/g);

      if (matches) {
        matches.forEach(function (match) {
          string = string.replace(match, match.replace(/&quot;/g, "'"));
        });
      }
    }

    return string;
  }).join('\n');
  return result.replace(/function\s+noRefCheck\(\)\s+\{\}/, '() => {}');
};
var defaultOpts = {
  skip: 0,
  showFunctions: false,
  enableBeautify: true,
  showDefaultProps: false
};
var skipJsxRender = function skipJsxRender(context) {
  var _context$parameters$d;

  var sourceParams = context === null || context === void 0 ? void 0 : (_context$parameters$d = context.parameters.docs) === null || _context$parameters$d === void 0 ? void 0 : _context$parameters$d.source;
  var isArgsStory = context === null || context === void 0 ? void 0 : context.parameters.__isArgsStory; // always render if the user forces it

  if ((sourceParams === null || sourceParams === void 0 ? void 0 : sourceParams.type) === SourceType.DYNAMIC) {
    return false;
  } // never render if the user is forcing the block to render code, or
  // if the user provides code, or if it's not an args story.


  return !isArgsStory || (sourceParams === null || sourceParams === void 0 ? void 0 : sourceParams.code) || (sourceParams === null || sourceParams === void 0 ? void 0 : sourceParams.type) === SourceType.CODE;
};

var isMdx = function isMdx(node) {
  var _node$type, _node$props;

  return ((_node$type = node.type) === null || _node$type === void 0 ? void 0 : _node$type.displayName) === 'MDXCreateElement' && !!((_node$props = node.props) !== null && _node$props !== void 0 && _node$props.mdxType);
};

var mdxToJsx = function mdxToJsx(node) {
  if (!isMdx(node)) return node;

  var _node$props2 = node.props,
      mdxType = _node$props2.mdxType,
      originalType = _node$props2.originalType,
      children = _node$props2.children,
      rest = _objectWithoutProperties(_node$props2, _excluded);

  var jsxChildren = [];

  if (children) {
    var array = Array.isArray(children) ? children : [children];
    jsxChildren = array.map(mdxToJsx);
  }

  return /*#__PURE__*/react.createElement.apply(void 0, [originalType, rest].concat(_toConsumableArray(jsxChildren)));
};

var jsxDecorator = function jsxDecorator(storyFn, context) {
  var _context$parameters$d2, _context$parameters$d3;

  var channel = dist_esm/* addons.getChannel */.KP.getChannel();
  var skip = skipJsxRender(context);
  var story = storyFn();
  var jsx = '';
  (0,hooks/* useEffect */.d4)(function () {
    if (!skip) channel.emit(SNIPPET_RENDERED, (context || {}).id, jsx);
  }); // We only need to render JSX if the source block is actually going to
  // consume it. Otherwise it's just slowing us down.

  if (skip) {
    return story;
  }

  var options = Object.assign({}, defaultOpts, (context === null || context === void 0 ? void 0 : context.parameters.jsx) || {}); // Exclude decorators from source code snippet by default

  var storyJsx = context !== null && context !== void 0 && (_context$parameters$d2 = context.parameters.docs) !== null && _context$parameters$d2 !== void 0 && (_context$parameters$d3 = _context$parameters$d2.source) !== null && _context$parameters$d3 !== void 0 && _context$parameters$d3.excludeDecorators ? context.originalStoryFn(context.args, context) : story;
  var sourceJsx = mdxToJsx(storyJsx);
  var rendered = renderJsx(sourceJsx, options);

  if (rendered) {
    jsx = applyTransformSource(rendered, options, context);
  }

  return story;
};
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/config.js



var config_parameters = {
  docs: {
    inlineStories: true,
    // NOTE: that the result is a react element. Hooks support is provided by the outer code.
    prepareForInline: function prepareForInline(storyFn) {
      return storyFn();
    },
    extractArgTypes: extractArgTypes,
    extractComponentDescription: extractComponentDescription
  }
};
var decorators = [jsxDecorator];
var argTypesEnhancers = [enhanceArgTypes];
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/no-unresolved */


Object.keys(config_namespaceObject).forEach(function (key) {
  var value = config_namespaceObject[key];

  switch (key) {
    case 'args':
      {
        return (0,ClientApi/* addArgs */.uc)(value);
      }

    case 'argTypes':
      {
        return (0,ClientApi/* addArgTypes */.v9)(value);
      }

    case 'decorators':
      {
        return value.forEach(function (decorator) {
          return (0,ClientApi/* addDecorator */.$9)(decorator, false);
        });
      }

    case 'loaders':
      {
        return value.forEach(function (loader) {
          return (0,ClientApi/* addLoader */.HZ)(loader, false);
        });
      }

    case 'parameters':
      {
        return (0,ClientApi/* addParameters */.h1)(_objectSpread({}, value), false);
      }

    case 'argTypesEnhancers':
      {
        return value.forEach(function (enhancer) {
          return (0,ClientApi/* addArgTypesEnhancer */.My)(enhancer);
        });
      }

    case 'argsEnhancers':
      {
        return value.forEach(function (enhancer) {
          return (0,ClientApi/* addArgsEnhancer */._C)(enhancer);
        });
      }

    case 'render':
      {
        return (0,ClientApi/* setGlobalRender */.$P)(value);
      }

    case 'globals':
    case 'globalTypes':
      {
        var v = {};
        v[key] = value;
        return (0,ClientApi/* addParameters */.h1)(v, false);
      }

    case '__namedExportsOrder':
    case 'decorateStory':
    case 'renderToDOM':
      {
        return null; // This key is not handled directly in v6 mode.
      }

    default:
      {
        // eslint-disable-next-line prefer-template
        return console.log(key + ' was not supported :( !');
      }
  }
});

/***/ }),

/***/ 46441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addDecorator": () => (/* reexport */ addDecorator),
  "addParameters": () => (/* reexport */ addParameters),
  "composeStories": () => (/* reexport */ testing_composeStories),
  "composeStory": () => (/* reexport */ testing_composeStory),
  "configure": () => (/* reexport */ configure),
  "forceReRender": () => (/* reexport */ forceReRender),
  "getStorybook": () => (/* reexport */ getStorybook),
  "raw": () => (/* reexport */ raw),
  "setAddon": () => (/* reexport */ setAddon),
  "setGlobalConfig": () => (/* reexport */ setGlobalConfig),
  "setProjectAnnotations": () => (/* reexport */ testing_setProjectAnnotations),
  "storiesOf": () => (/* reexport */ storiesOf)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(92222);
// EXTERNAL MODULE: ./node_modules/@storybook/core/dist/esm/index.js + 5 modules
var esm = __webpack_require__(33978);
// EXTERNAL MODULE: ./node_modules/global/window.js
var global_window = __webpack_require__(58908);
var window_default = /*#__PURE__*/__webpack_require__.n(global_window);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/globals.js

var globalWindow = (window_default()).window;

if (globalWindow) {
  globalWindow.STORYBOOK_ENV = 'react';
}
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/render.js
var render = __webpack_require__(82235);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/index.js


/* eslint-disable prefer-destructuring */



var framework = 'react';
var api = (0,esm/* start */.BL)(render/* renderToDOM */.A, {
  render: render/* render */.s
});
var storiesOf = function storiesOf(kind, m) {
  return api.clientApi.storiesOf(kind, m).addParameters({
    framework: framework
  });
};
var configure = function configure() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return api.configure.apply(api, [framework].concat(args));
};
var addDecorator = api.clientApi.addDecorator;
var addParameters = api.clientApi.addParameters;
var clearDecorators = api.clientApi.clearDecorators;
var setAddon = api.clientApi.setAddon;
var forceReRender = api.forceReRender;
var getStorybook = api.clientApi.getStorybook;
var raw = api.clientApi.raw;
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(47941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(82526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(32165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(66992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(78783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(47042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(91038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(41539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(69720);
// EXTERNAL MODULE: ./node_modules/@storybook/csf/dist/index.js
var dist = __webpack_require__(35032);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(57327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(21249);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/parameters.js
var parameters = __webpack_require__(18673);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/csf/composeConfigs.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

















function getField(moduleExportList, field) {
  return moduleExportList.map(function (xs) {
    return xs[field];
  }).filter(Boolean);
}
function getArrayField(moduleExportList, field) {
  return getField(moduleExportList, field).reduce(function (a, b) {
    return [].concat(_toConsumableArray(a), _toConsumableArray(b));
  }, []);
}
function getObjectField(moduleExportList, field) {
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(getField(moduleExportList, field))));
}
function getSingletonField(moduleExportList, field) {
  return getField(moduleExportList, field).pop();
}
function composeConfigs(moduleExportList) {
  var allArgTypeEnhancers = getArrayField(moduleExportList, 'argTypesEnhancers');
  return {
    parameters: parameters/* combineParameters.apply */.f.apply(void 0, _toConsumableArray(getField(moduleExportList, 'parameters'))),
    decorators: getArrayField(moduleExportList, 'decorators'),
    args: getObjectField(moduleExportList, 'args'),
    argsEnhancers: getArrayField(moduleExportList, 'argsEnhancers'),
    argTypes: getObjectField(moduleExportList, 'argTypes'),
    argTypesEnhancers: [].concat(_toConsumableArray(allArgTypeEnhancers.filter(function (e) {
      return !e.secondPass;
    })), _toConsumableArray(allArgTypeEnhancers.filter(function (e) {
      return e.secondPass;
    }))),
    globals: getObjectField(moduleExportList, 'globals'),
    globalTypes: getObjectField(moduleExportList, 'globalTypes'),
    loaders: getArrayField(moduleExportList, 'loaders'),
    render: getSingletonField(moduleExportList, 'render'),
    renderToDOM: getSingletonField(moduleExportList, 'renderToDOM'),
    applyDecorators: getSingletonField(moduleExportList, 'applyDecorators')
  };
}
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/prepareStory.js + 1 modules
var prepareStory = __webpack_require__(81360);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/normalizeStory.js
var normalizeStory = __webpack_require__(92381);
// EXTERNAL MODULE: ./node_modules/@storybook/addons/dist/esm/hooks.js
var hooks = __webpack_require__(45406);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/normalizeComponentAnnotations.js
var normalizeComponentAnnotations = __webpack_require__(72809);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/getValuesFromArgTypes.js
var getValuesFromArgTypes = __webpack_require__(55740);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/normalizeProjectAnnotations.js + 2 modules
var normalizeProjectAnnotations = __webpack_require__(39422);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/csf/testing-utils/index.js










var _excluded = ["default", "__esModule", "__namedExportsOrder"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || testing_utils_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function testing_utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return testing_utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return testing_utils_arrayLikeToArray(o, minLen); }

function testing_utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














var GLOBAL_STORYBOOK_PROJECT_ANNOTATIONS = {};
function setProjectAnnotations(projectAnnotations) {
  var annotations = Array.isArray(projectAnnotations) ? projectAnnotations : [projectAnnotations];
  GLOBAL_STORYBOOK_PROJECT_ANNOTATIONS = composeConfigs(annotations);
}
function composeStory(storyAnnotations, componentAnnotations) {
  var _componentAnnotations, _storyAnnotations$sto;

  var projectAnnotations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GLOBAL_STORYBOOK_PROJECT_ANNOTATIONS;
  var defaultConfig = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var exportsName = arguments.length > 4 ? arguments[4] : undefined;

  if (storyAnnotations === undefined) {
    throw new Error('Expected a story but received undefined.');
  } // @TODO: Support auto title
  // eslint-disable-next-line no-param-reassign


  componentAnnotations.title = (_componentAnnotations = componentAnnotations.title) !== null && _componentAnnotations !== void 0 ? _componentAnnotations : 'ComposedStory';
  var normalizedComponentAnnotations = (0,normalizeComponentAnnotations/* normalizeComponentAnnotations */._)(componentAnnotations);
  var storyName = exportsName || storyAnnotations.storyName || ((_storyAnnotations$sto = storyAnnotations.story) === null || _storyAnnotations$sto === void 0 ? void 0 : _storyAnnotations$sto.name) || storyAnnotations.name;
  var normalizedStory = (0,normalizeStory/* normalizeStory */.K)(storyName, storyAnnotations, normalizedComponentAnnotations);
  var normalizedProjectAnnotations = (0,normalizeProjectAnnotations/* normalizeProjectAnnotations */.J)(Object.assign({}, projectAnnotations, defaultConfig));
  var story = (0,prepareStory/* prepareStory */.u)(normalizedStory, normalizedComponentAnnotations, normalizedProjectAnnotations);
  var defaultGlobals = (0,getValuesFromArgTypes/* getValuesFromArgTypes */.V)(projectAnnotations.globalTypes);

  var composedStory = function composedStory(extraArgs) {
    var context = Object.assign({}, story, {
      hooks: new hooks/* HooksContext */.c8(),
      globals: defaultGlobals,
      args: Object.assign({}, story.initialArgs, extraArgs)
    });
    return story.unboundStoryFn(context);
  };

  composedStory.storyName = storyName;
  composedStory.args = story.initialArgs;
  composedStory.play = story.playFunction;
  composedStory.parameters = story.parameters;
  return composedStory;
}
function composeStories(storiesImport, globalConfig, composeStoryFn) {
  var meta = storiesImport.default,
      __esModule = storiesImport.__esModule,
      __namedExportsOrder = storiesImport.__namedExportsOrder,
      stories = _objectWithoutProperties(storiesImport, _excluded);

  var composedStories = Object.entries(stories).reduce(function (storiesMap, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        exportsName = _ref2[0],
        story = _ref2[1];

    if (!(0,dist.isExportStory)(exportsName, meta)) {
      return storiesMap;
    }

    var result = Object.assign(storiesMap, _defineProperty({}, exportsName, composeStoryFn(story, meta, globalConfig, exportsName)));
    return result;
  }, {});
  return composedStories;
}
// EXTERNAL MODULE: ./node_modules/@storybook/client-logger/dist/esm/index.js
var dist_esm = __webpack_require__(23827);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/testing/index.js




/** Function that sets the globalConfig of your storybook. The global config is the preview module of your .storybook folder.
 *
 * It should be run a single time, so that your global config (e.g. decorators) is applied to your stories when using `composeStories` or `composeStory`.
 *
 * Example:
 *```jsx
 * // setup.js (for jest)
 * import { setProjectAnnotations } from '@storybook/react';
 * import * as projectAnnotations from './.storybook/preview';
 *
 * setProjectAnnotations(projectAnnotations);
 *```
 *
 * @param projectAnnotations - e.g. (import * as projectAnnotations from '../.storybook/preview')
 */
function testing_setProjectAnnotations(projectAnnotations) {
  setProjectAnnotations(projectAnnotations);
}
/** Preserved for users migrating from `@storybook/testing-react`.
 *
 * @deprecated Use setProjectAnnotations instead
 */

function setGlobalConfig(projectAnnotations) {
  dist_esm/* once.warn */.IH.warn("setGlobalConfig is deprecated. Use setProjectAnnotations instead.");
  testing_setProjectAnnotations(projectAnnotations);
} // This will not be necessary once we have auto preset loading

var defaultProjectAnnotations = {
  render: render/* render */.s
};
/**
 * Function that will receive a story along with meta (e.g. a default export from a .stories file)
 * and optionally projectAnnotations e.g. (import * from '../.storybook/preview)
 * and will return a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing a story in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/react';
 * import { composeStory } from '@storybook/react';
 * import Meta, { Primary as PrimaryStory } from './Button.stories';
 *
 * const Primary = composeStory(PrimaryStory, Meta);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param story
 * @param componentAnnotations - e.g. (import Meta from './Button.stories')
 * @param [projectAnnotations] - e.g. (import * as projectAnnotations from '../.storybook/preview') this can be applied automatically if you use `setProjectAnnotations` in your setup files.
 * @param [exportsName] - in case your story does not contain a name and you want it to have a name.
 */

function testing_composeStory(story, componentAnnotations, projectAnnotations, exportsName) {
  return composeStory(story, componentAnnotations, projectAnnotations, defaultProjectAnnotations, exportsName);
}
/**
 * Function that will receive a stories import (e.g. `import * as stories from './Button.stories'`)
 * and optionally projectAnnotations (e.g. `import * from '../.storybook/preview`)
 * and will return an object containing all the stories passed, but now as a composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 *
 * It's very useful for reusing stories in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *```jsx
 * import { render } from '@testing-library/react';
 * import { composeStories } from '@storybook/react';
 * import * as stories from './Button.stories';
 *
 * const { Primary, Secondary } = composeStories(stories);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 *```
 *
 * @param csfExports - e.g. (import * as stories from './Button.stories')
 * @param [projectAnnotations] - e.g. (import * as projectAnnotations from '../.storybook/preview') this can be applied automatically if you use `setProjectAnnotations` in your setup files.
 */

function testing_composeStories(csfExports, projectAnnotations) {
  var composedStories = composeStories(csfExports, projectAnnotations, testing_composeStory);
  return composedStories;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/index.js
/* module decorator */ module = __webpack_require__.hmd(module);




if (module && module.hot && 0) {}

/***/ }),

/***/ 42898:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// NAMESPACE OBJECT: ./node_modules/@storybook/react/dist/esm/client/preview/config.js
var config_namespaceObject = {};
__webpack_require__.r(config_namespaceObject);
__webpack_require__.d(config_namespaceObject, {
  "parameters": () => (parameters),
  "render": () => (render/* render */.s),
  "renderToDOM": () => (render/* renderToDOM */.A)
});

// EXTERNAL MODULE: ./node_modules/@storybook/client-api/dist/esm/ClientApi.js + 1 modules
var ClientApi = __webpack_require__(40917);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/render.js
var render = __webpack_require__(82235);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/config.js

var parameters = {
  framework: 'react'
};
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/no-unresolved */


Object.keys(config_namespaceObject).forEach(function (key) {
  var value = config_namespaceObject[key];

  switch (key) {
    case 'args':
      {
        return (0,ClientApi/* addArgs */.uc)(value);
      }

    case 'argTypes':
      {
        return (0,ClientApi/* addArgTypes */.v9)(value);
      }

    case 'decorators':
      {
        return value.forEach(function (decorator) {
          return (0,ClientApi/* addDecorator */.$9)(decorator, false);
        });
      }

    case 'loaders':
      {
        return value.forEach(function (loader) {
          return (0,ClientApi/* addLoader */.HZ)(loader, false);
        });
      }

    case 'parameters':
      {
        return (0,ClientApi/* addParameters */.h1)(_objectSpread({}, value), false);
      }

    case 'argTypesEnhancers':
      {
        return value.forEach(function (enhancer) {
          return (0,ClientApi/* addArgTypesEnhancer */.My)(enhancer);
        });
      }

    case 'argsEnhancers':
      {
        return value.forEach(function (enhancer) {
          return (0,ClientApi/* addArgsEnhancer */._C)(enhancer);
        });
      }

    case 'render':
      {
        return (0,ClientApi/* setGlobalRender */.$P)(value);
      }

    case 'globals':
    case 'globalTypes':
      {
        var v = {};
        v[key] = value;
        return (0,ClientApi/* addParameters */.h1)(v, false);
      }

    case '__namedExportsOrder':
    case 'decorateStory':
    case 'renderToDOM':
      {
        return null; // This key is not handled directly in v6 mode.
      }

    default:
      {
        // eslint-disable-next-line prefer-template
        return console.log(key + ' was not supported :( !');
      }
  }
});

/***/ }),

/***/ 82235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ renderToDOM),
/* harmony export */   "s": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35666);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51532);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23157);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92222);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30489);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12419);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58908);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73935);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

















var FRAMEWORK_OPTIONS = (global__WEBPACK_IMPORTED_MODULE_14___default().FRAMEWORK_OPTIONS); // A map of all rendered React 18 nodes

var nodes = new Map();
var render = function render(args, context) {
  var id = context.id,
      Component = context.component;

  if (!Component) {
    throw new Error("Unable to render story ".concat(id, " as the component annotation is missing from the default export"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(Component, args);
};

var WithCallback = function WithCallback(_ref) {
  var callback = _ref.callback,
      children = _ref.children;
  // See https://github.com/reactwg/react-18/discussions/5#discussioncomment-2276079
  var once = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useLayoutEffect)(function () {
    if (once.current === callback) return;
    once.current = callback;
    callback();
  }, [callback]);
  return children;
};

var renderElement = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, el) {
    var root;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getReactRoot(el);

          case 2:
            root = _context.sent;
            return _context.abrupt("return", new Promise(function (resolve) {
              if (root) {
                root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(WithCallback, {
                  callback: function callback() {
                    return resolve(null);
                  }
                }, node));
              } else {
                react_dom__WEBPACK_IMPORTED_MODULE_16__.render(node, el, function () {
                  return resolve(null);
                });
              }
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderElement(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var canUseNewReactRootApi = react_dom__WEBPACK_IMPORTED_MODULE_16__.version && (react_dom__WEBPACK_IMPORTED_MODULE_16__.version.startsWith('18') || react_dom__WEBPACK_IMPORTED_MODULE_16__.version.startsWith('0.0.0'));
var shouldUseNewRootApi = (FRAMEWORK_OPTIONS === null || FRAMEWORK_OPTIONS === void 0 ? void 0 : FRAMEWORK_OPTIONS.legacyRootApi) !== true;
var isUsingNewReactRootApi = shouldUseNewRootApi && canUseNewReactRootApi;

var unmountElement = function unmountElement(el) {
  var root = nodes.get(el);

  if (root && isUsingNewReactRootApi) {
    root.unmount();
    nodes.delete(el);
  } else {
    react_dom__WEBPACK_IMPORTED_MODULE_16__.unmountComponentAtNode(el);
  }
};

var getReactRoot = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(el) {
    var root, reactDomClient;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (isUsingNewReactRootApi) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", null);

          case 2:
            root = nodes.get(el);

            if (root) {
              _context2.next = 9;
              break;
            }

            _context2.next = 6;
            return __webpack_require__.e(/* import() */ 745).then(__webpack_require__.t.bind(__webpack_require__, 20745, 19));

          case 6:
            reactDomClient = _context2.sent.default;
            root = reactDomClient.createRoot(el);
            nodes.set(el, root);

          case 9:
            return _context2.abrupt("return", root);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getReactRoot(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var ErrorBoundary = /*#__PURE__*/function (_ReactComponent) {
  _inherits(ErrorBoundary, _ReactComponent);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var hasError = this.state.hasError;
      var showMain = this.props.showMain;

      if (!hasError) {
        showMain();
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      var showException = this.props.showException; // message partially duplicates stack, strip it

      showException(err);
    }
  }, {
    key: "render",
    value: function render() {
      var hasError = this.state.hasError;
      var children = this.props.children;
      return hasError ? null : children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_15__.Component);

var Wrapper = FRAMEWORK_OPTIONS !== null && FRAMEWORK_OPTIONS !== void 0 && FRAMEWORK_OPTIONS.strictMode ? react__WEBPACK_IMPORTED_MODULE_15__.StrictMode : react__WEBPACK_IMPORTED_MODULE_15__.Fragment;
function renderToDOM(_x4, _x5) {
  return _renderToDOM.apply(this, arguments);
}

function _renderToDOM() {
  _renderToDOM = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref4, domElement) {
    var storyContext, unboundStoryFn, showMain, showException, forceRemount, Story, content, element;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            storyContext = _ref4.storyContext, unboundStoryFn = _ref4.unboundStoryFn, showMain = _ref4.showMain, showException = _ref4.showException, forceRemount = _ref4.forceRemount;
            Story = unboundStoryFn;
            content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(ErrorBoundary, {
              showMain: showMain,
              showException: showException
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(Story, storyContext)); // For React 15, StrictMode & Fragment doesn't exists.

            element = Wrapper ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15__.createElement(Wrapper, null, content) : content; // In most cases, we need to unmount the existing set of components in the DOM node.
            // Otherwise, React may not recreate instances for every story run.
            // This could leads to issues like below:
            // https://github.com/storybookjs/react-storybook/issues/81
            // (This is not the case when we change args or globals to the story however)

            if (forceRemount) {
              unmountElement(domElement);
            }

            _context3.next = 7;
            return renderElement(element, domElement);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _renderToDOM.apply(this, arguments);
}

/***/ }),

/***/ 58343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ StoryStore)
});

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(35666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(41539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(54747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(69720);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(21249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(57327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(47941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(2707);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(47042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(26833);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(82526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(32165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(66992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(78783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(91038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/memoizerific/memoizerific.js
var memoizerific = __webpack_require__(52326);
var memoizerific_default = /*#__PURE__*/__webpack_require__.n(memoizerific);
// EXTERNAL MODULE: ./node_modules/lodash/mapValues.js
var mapValues = __webpack_require__(66604);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/global/window.js
var global_window = __webpack_require__(58908);
var window_default = /*#__PURE__*/__webpack_require__.n(global_window);
// EXTERNAL MODULE: ./node_modules/synchronous-promise/index.js
var synchronous_promise = __webpack_require__(76891);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(69826);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(23157);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(43371);
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__(18464);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/StoryIndexStore.js
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var StoryIndexStore = /*#__PURE__*/function () {
  function StoryIndexStore() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      v: 3,
      stories: {}
    },
        stories = _ref.stories;

    _classCallCheck(this, StoryIndexStore);

    this.channel = void 0;
    this.stories = void 0;
    this.stories = stories;
  }

  _createClass(StoryIndexStore, [{
    key: "storyIdFromSpecifier",
    value: function storyIdFromSpecifier(specifier) {
      var storyIds = Object.keys(this.stories);

      if (specifier === '*') {
        // '*' means select the first story. If there is none, we have no selection.
        return storyIds[0];
      }

      if (typeof specifier === 'string') {
        // Find the story with the exact id that matches the specifier (see #11571)
        if (storyIds.indexOf(specifier) >= 0) {
          return specifier;
        } // Fallback to the first story that starts with the specifier


        return storyIds.find(function (storyId) {
          return storyId.startsWith(specifier);
        });
      } // Try and find a story matching the name/kind, setting no selection if they don't exist.


      var name = specifier.name,
          title = specifier.title;
      var match = Object.entries(this.stories).find(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            id = _ref3[0],
            story = _ref3[1];

        return story.name === name && story.title === title;
      });
      return match && match[0];
    }
  }, {
    key: "storyIdToEntry",
    value: function storyIdToEntry(storyId) {
      var storyEntry = this.stories[storyId];

      if (!storyEntry) {
        throw new Error((0,esm/* default */.C)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Couldn't find story matching '", "' after HMR.\n      - Did you remove it from your CSF file?\n      - Are you sure a story with that id exists?\n      - Please check your stories field of your main.js config.\n      - Also check the browser console and terminal for error messages."])), storyId));
      }

      return storyEntry;
    }
  }]);

  return StoryIndexStore;
}();
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/args.js
var args = __webpack_require__(5223);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/ArgsStore.js
function ArgsStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ArgsStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ArgsStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) ArgsStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) ArgsStore_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







function deleteUndefined(obj) {
  // eslint-disable-next-line no-param-reassign
  Object.keys(obj).forEach(function (key) {
    return obj[key] === undefined && delete obj[key];
  });
  return obj;
}

var ArgsStore = /*#__PURE__*/function () {
  function ArgsStore() {
    ArgsStore_classCallCheck(this, ArgsStore);

    this.initialArgsByStoryId = {};
    this.argsByStoryId = {};
  }

  ArgsStore_createClass(ArgsStore, [{
    key: "get",
    value: function get(storyId) {
      if (!(storyId in this.argsByStoryId)) {
        throw new Error("No args known for ".concat(storyId, " -- has it been rendered yet?"));
      }

      return this.argsByStoryId[storyId];
    }
  }, {
    key: "setInitial",
    value: function setInitial(story) {
      if (!this.initialArgsByStoryId[story.id]) {
        this.initialArgsByStoryId[story.id] = story.initialArgs;
        this.argsByStoryId[story.id] = story.initialArgs;
      } else if (this.initialArgsByStoryId[story.id] !== story.initialArgs) {
        // When we get a new version of a story (with new initialArgs), we re-apply the same diff
        // that we had previously applied to the old version of the story
        var delta = (0,args/* deepDiff */.xF)(this.initialArgsByStoryId[story.id], this.argsByStoryId[story.id]);
        this.initialArgsByStoryId[story.id] = story.initialArgs;
        this.argsByStoryId[story.id] = story.initialArgs;

        if (delta !== args/* DEEPLY_EQUAL */.Nq) {
          this.updateFromDelta(story, delta);
        }
      }
    }
  }, {
    key: "updateFromDelta",
    value: function updateFromDelta(story, delta) {
      // Use the argType to ensure we setting a type with defined options to something outside of that
      var validatedDelta = (0,args/* validateOptions */.ng)(delta, story.argTypes); // NOTE: we use `combineArgs` here rather than `combineParameters` because changes to arg
      // array values are persisted in the URL as sparse arrays, and we have to take that into
      // account when overriding the initialArgs (e.g. we patch [,'changed'] over ['initial', 'val'])

      this.argsByStoryId[story.id] = (0,args/* combineArgs */.P7)(this.argsByStoryId[story.id], validatedDelta);
    }
  }, {
    key: "updateFromPersisted",
    value: function updateFromPersisted(story, persisted) {
      // Use the argType to ensure we aren't persisting the wrong type of value to the type.
      // For instance you could try and set a string-valued arg to a number by changing the URL
      var mappedPersisted = (0,args/* mapArgsToTypes */.T4)(persisted, story.argTypes);
      return this.updateFromDelta(story, mappedPersisted);
    }
  }, {
    key: "update",
    value: function update(storyId, argsUpdate) {
      if (!(storyId in this.argsByStoryId)) {
        throw new Error("No args known for ".concat(storyId, " -- has it been rendered yet?"));
      }

      this.argsByStoryId[storyId] = deleteUndefined(Object.assign({}, this.argsByStoryId[storyId], argsUpdate));
    }
  }]);

  return ArgsStore;
}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(70189);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(92222);
// EXTERNAL MODULE: ./node_modules/util-deprecate/browser.js
var browser = __webpack_require__(94927);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/getValuesFromArgTypes.js
var getValuesFromArgTypes = __webpack_require__(55740);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/GlobalsStore.js









var GlobalsStore_templateObject;

function GlobalsStore_slicedToArray(arr, i) { return GlobalsStore_arrayWithHoles(arr) || GlobalsStore_iterableToArrayLimit(arr, i) || GlobalsStore_unsupportedIterableToArray(arr, i) || GlobalsStore_nonIterableRest(); }

function GlobalsStore_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GlobalsStore_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function GlobalsStore_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || GlobalsStore_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GlobalsStore_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GlobalsStore_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GlobalsStore_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return GlobalsStore_arrayLikeToArray(arr); }

function GlobalsStore_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












function GlobalsStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GlobalsStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GlobalsStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) GlobalsStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) GlobalsStore_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function GlobalsStore_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var setUndeclaredWarning = browser_default()(function () {}, (0,esm/* default */.C)(GlobalsStore_templateObject || (GlobalsStore_templateObject = GlobalsStore_taggedTemplateLiteral(["\n    Setting a global value that is undeclared (i.e. not in the user's initial set of globals\n    or globalTypes) is deprecated and will have no effect in 7.0.\n  "]))));
var GlobalsStore = /*#__PURE__*/function () {
  function GlobalsStore() {
    GlobalsStore_classCallCheck(this, GlobalsStore);

    this.allowedGlobalNames = void 0;
    this.initialGlobals = void 0;
    this.globals = {};
  }

  GlobalsStore_createClass(GlobalsStore, [{
    key: "set",
    value: function set(_ref) {
      var _ref$globals = _ref.globals,
          globals = _ref$globals === void 0 ? {} : _ref$globals,
          _ref$globalTypes = _ref.globalTypes,
          globalTypes = _ref$globalTypes === void 0 ? {} : _ref$globalTypes;
      var delta = this.initialGlobals && (0,args/* deepDiff */.xF)(this.initialGlobals, this.globals);
      this.allowedGlobalNames = new Set([].concat(_toConsumableArray(Object.keys(globals)), _toConsumableArray(Object.keys(globalTypes))));
      var defaultGlobals = (0,getValuesFromArgTypes/* getValuesFromArgTypes */.V)(globalTypes);
      this.initialGlobals = Object.assign({}, defaultGlobals, globals);
      this.globals = this.initialGlobals;

      if (delta && delta !== args/* DEEPLY_EQUAL */.Nq) {
        this.updateFromPersisted(delta);
      }
    }
  }, {
    key: "filterAllowedGlobals",
    value: function filterAllowedGlobals(globals) {
      var _this = this;

      return Object.entries(globals).reduce(function (acc, _ref2) {
        var _ref3 = GlobalsStore_slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        if (_this.allowedGlobalNames.has(key)) acc[key] = value;
        return acc;
      }, {});
    }
  }, {
    key: "updateFromPersisted",
    value: function updateFromPersisted(persisted) {
      var allowedUrlGlobals = this.filterAllowedGlobals(persisted); // Note that unlike args, we do not have the same type information for globals to allow us
      // to type check them here, so we just set them naively

      this.globals = Object.assign({}, this.globals, allowedUrlGlobals);
    }
  }, {
    key: "get",
    value: function get() {
      return this.globals;
    }
  }, {
    key: "update",
    value: function update(newGlobals) {
      var _this2 = this;

      Object.keys(newGlobals).forEach(function (key) {
        if (!_this2.allowedGlobalNames.has(key)) {
          setUndeclaredWarning();
        }
      });
      this.globals = Object.assign({}, this.globals, newGlobals);
    }
  }]);

  return GlobalsStore;
}();
// EXTERNAL MODULE: ./node_modules/@storybook/csf/dist/index.js
var dist = __webpack_require__(35032);
// EXTERNAL MODULE: ./node_modules/@storybook/client-logger/dist/esm/index.js
var dist_esm = __webpack_require__(23827);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/normalizeStory.js
var normalizeStory = __webpack_require__(92381);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/normalizeComponentAnnotations.js
var normalizeComponentAnnotations = __webpack_require__(72809);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/csf/processCSFFile.js

var _excluded = ["default", "__namedExportsOrder"];




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var checkGlobals = function checkGlobals(parameters) {
  var globals = parameters.globals,
      globalTypes = parameters.globalTypes;

  if (globals || globalTypes) {
    dist_esm/* logger.error */.kg.error('Global args/argTypes can only be set globally', JSON.stringify({
      globals: globals,
      globalTypes: globalTypes
    }));
  }
};

var checkStorySort = function checkStorySort(parameters) {
  var options = parameters.options;
  if (options !== null && options !== void 0 && options.storySort) dist_esm/* logger.error */.kg.error('The storySort option parameter can only be set globally');
};

var checkDisallowedParameters = function checkDisallowedParameters(parameters) {
  if (!parameters) {
    return;
  }

  checkGlobals(parameters);
  checkStorySort(parameters);
}; // Given the raw exports of a CSF file, check and normalize it.


function processCSFFile(moduleExports, importPath, title) {
  var defaultExport = moduleExports.default,
      __namedExportsOrder = moduleExports.__namedExportsOrder,
      namedExports = _objectWithoutProperties(moduleExports, _excluded);

  var meta = (0,normalizeComponentAnnotations/* normalizeComponentAnnotations */._)(defaultExport, title, importPath);
  checkDisallowedParameters(meta.parameters);
  var csfFile = {
    meta: meta,
    stories: {}
  };
  Object.keys(namedExports).forEach(function (key) {
    if ((0,dist.isExportStory)(key, meta)) {
      var storyMeta = (0,normalizeStory/* normalizeStory */.K)(key, namedExports[key], meta);
      checkDisallowedParameters(storyMeta.parameters);
      csfFile.stories[storyMeta.id] = storyMeta;
    }
  });
  return csfFile;
}
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/prepareStory.js + 1 modules
var prepareStory = __webpack_require__(81360);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/normalizeProjectAnnotations.js + 2 modules
var normalizeProjectAnnotations = __webpack_require__(39422);
// EXTERNAL MODULE: ./node_modules/@storybook/addons/dist/esm/hooks.js
var hooks = __webpack_require__(45406);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/StoryStore.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function StoryStore_slicedToArray(arr, i) { return StoryStore_arrayWithHoles(arr) || StoryStore_iterableToArrayLimit(arr, i) || StoryStore_unsupportedIterableToArray(arr, i) || StoryStore_nonIterableRest(); }

function StoryStore_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function StoryStore_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StoryStore_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StoryStore_arrayLikeToArray(o, minLen); }

function StoryStore_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function StoryStore_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function StoryStore_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






















function StoryStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StoryStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StoryStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) StoryStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) StoryStore_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }










 // TODO -- what are reasonable values for these?

var CSF_CACHE_SIZE = 1000;
var STORY_CACHE_SIZE = 10000;
var StoryStore = /*#__PURE__*/function () {
  function StoryStore() {
    var _this = this;

    StoryStore_classCallCheck(this, StoryStore);

    this.storyIndex = void 0;
    this.importFn = void 0;
    this.projectAnnotations = void 0;
    this.globals = void 0;
    this.args = void 0;
    this.hooks = void 0;
    this.cachedCSFFiles = void 0;
    this.processCSFFileWithCache = void 0;
    this.prepareStoryWithCache = void 0;
    this.initializationPromise = void 0;
    this.resolveInitializationPromise = void 0;

    this.getStoriesJsonData = function () {
      var value = _this.getSetStoriesPayload();

      var allowedParameters = ['fileName', 'docsOnly', 'framework', '__id', '__isArgsStory'];
      var stories = mapValues_default()(value.stories, function (story) {
        var _global$FEATURES;

        return Object.assign({}, pick_default()(story, ['id', 'name', 'title']), {
          importPath: _this.storyIndex.stories[story.id].importPath
        }, !((_global$FEATURES = (window_default()).FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.breakingChangesV7) && {
          kind: story.title,
          story: story.name,
          parameters: Object.assign({}, pick_default()(story.parameters, allowedParameters), {
            fileName: _this.storyIndex.stories[story.id].importPath
          })
        });
      });
      return {
        v: 3,
        stories: stories
      };
    };

    this.globals = new GlobalsStore();
    this.args = new ArgsStore();
    this.hooks = {}; // We use a cache for these two functions for two reasons:
    //  1. For performance
    //  2. To ensure that when the same story is prepared with the same inputs you get the same output

    this.processCSFFileWithCache = memoizerific_default()(CSF_CACHE_SIZE)(processCSFFile);
    this.prepareStoryWithCache = memoizerific_default()(STORY_CACHE_SIZE)(prepareStory/* prepareStory */.u); // We cannot call `loadStory()` until we've been initialized properly. But we can wait for it.

    this.initializationPromise = new synchronous_promise.SynchronousPromise(function (resolve) {
      _this.resolveInitializationPromise = resolve;
    });
  }

  StoryStore_createClass(StoryStore, [{
    key: "setProjectAnnotations",
    value: function setProjectAnnotations(projectAnnotations) {
      // By changing `this.projectAnnotations, we implicitly invalidate the `prepareStoryWithCache`
      this.projectAnnotations = (0,normalizeProjectAnnotations/* normalizeProjectAnnotations */.J)(projectAnnotations);
      var globals = projectAnnotations.globals,
          globalTypes = projectAnnotations.globalTypes;
      this.globals.set({
        globals: globals,
        globalTypes: globalTypes
      });
    }
  }, {
    key: "initialize",
    value: function initialize(_ref) {
      var storyIndex = _ref.storyIndex,
          importFn = _ref.importFn,
          _ref$cache = _ref.cache,
          cache = _ref$cache === void 0 ? false : _ref$cache;
      this.storyIndex = new StoryIndexStore(storyIndex);
      this.importFn = importFn; // We don't need the cache to be loaded to call `loadStory`, we just need the index ready

      this.resolveInitializationPromise();
      return cache ? this.cacheAllCSFFiles() : synchronous_promise.SynchronousPromise.resolve();
    } // This means that one of the CSF files has changed.
    // If the `importFn` has changed, we will invalidate both caches.
    // If the `storyIndex` data has changed, we may or may not invalidate the caches, depending
    // on whether we've loaded the relevant files yet.

  }, {
    key: "onStoriesChanged",
    value: function () {
      var _onStoriesChanged = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var importFn, storyIndex;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                importFn = _ref2.importFn, storyIndex = _ref2.storyIndex;
                if (importFn) this.importFn = importFn;
                if (storyIndex) this.storyIndex.stories = storyIndex.stories;

                if (!this.cachedCSFFiles) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return this.cacheAllCSFFiles();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onStoriesChanged(_x) {
        return _onStoriesChanged.apply(this, arguments);
      }

      return onStoriesChanged;
    }() // To load a single CSF file to service a story we need to look up the importPath in the index

  }, {
    key: "loadCSFFileByStoryId",
    value: function loadCSFFileByStoryId(storyId) {
      var _this2 = this;

      var _this$storyIndex$stor = this.storyIndex.storyIdToEntry(storyId),
          importPath = _this$storyIndex$stor.importPath,
          title = _this$storyIndex$stor.title;

      return this.importFn(importPath).then(function (moduleExports) {
        return (// We pass the title in here as it may have been generated by autoTitle on the server.
          _this2.processCSFFileWithCache(moduleExports, importPath, title)
        );
      });
    }
  }, {
    key: "loadAllCSFFiles",
    value: function loadAllCSFFiles() {
      var _this3 = this;

      var importPaths = {};
      Object.entries(this.storyIndex.stories).forEach(function (_ref3) {
        var _ref4 = StoryStore_slicedToArray(_ref3, 2),
            storyId = _ref4[0],
            importPath = _ref4[1].importPath;

        importPaths[importPath] = storyId;
      });
      var csfFilePromiseList = Object.entries(importPaths).map(function (_ref5) {
        var _ref6 = StoryStore_slicedToArray(_ref5, 2),
            importPath = _ref6[0],
            storyId = _ref6[1];

        return _this3.loadCSFFileByStoryId(storyId).then(function (csfFile) {
          return {
            importPath: importPath,
            csfFile: csfFile
          };
        });
      });
      return synchronous_promise.SynchronousPromise.all(csfFilePromiseList).then(function (list) {
        return list.reduce(function (acc, _ref7) {
          var importPath = _ref7.importPath,
              csfFile = _ref7.csfFile;
          acc[importPath] = csfFile;
          return acc;
        }, {});
      });
    }
  }, {
    key: "cacheAllCSFFiles",
    value: function cacheAllCSFFiles() {
      var _this4 = this;

      return this.initializationPromise.then(function () {
        return _this4.loadAllCSFFiles().then(function (csfFiles) {
          _this4.cachedCSFFiles = csfFiles;
        });
      });
    } // Load the CSF file for a story and prepare the story from it and the project annotations.

  }, {
    key: "loadStory",
    value: function () {
      var _loadStory = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref8) {
        var storyId, csfFile;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                storyId = _ref8.storyId;
                _context2.next = 3;
                return this.initializationPromise;

              case 3:
                _context2.next = 5;
                return this.loadCSFFileByStoryId(storyId);

              case 5:
                csfFile = _context2.sent;
                return _context2.abrupt("return", this.storyFromCSFFile({
                  storyId: storyId,
                  csfFile: csfFile
                }));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadStory(_x2) {
        return _loadStory.apply(this, arguments);
      }

      return loadStory;
    }() // This function is synchronous for convenience -- often times if you have a CSF file already
    // it is easier not to have to await `loadStory`.

  }, {
    key: "storyFromCSFFile",
    value: function storyFromCSFFile(_ref9) {
      var storyId = _ref9.storyId,
          csfFile = _ref9.csfFile;
      var storyAnnotations = csfFile.stories[storyId];

      if (!storyAnnotations) {
        throw new Error("Didn't find '".concat(storyId, "' in CSF file, this is unexpected"));
      }

      var componentAnnotations = csfFile.meta;
      var story = this.prepareStoryWithCache(storyAnnotations, componentAnnotations, this.projectAnnotations);
      this.args.setInitial(story);
      this.hooks[story.id] = this.hooks[story.id] || new hooks/* HooksContext */.c8();
      return story;
    } // If we have a CSF file we can get all the stories from it synchronously

  }, {
    key: "componentStoriesFromCSFFile",
    value: function componentStoriesFromCSFFile(_ref10) {
      var _this5 = this;

      var csfFile = _ref10.csfFile;
      return Object.keys(this.storyIndex.stories).filter(function (storyId) {
        return !!csfFile.stories[storyId];
      }).map(function (storyId) {
        return _this5.storyFromCSFFile({
          storyId: storyId,
          csfFile: csfFile
        });
      });
    } // A prepared story does not include args, globals or hooks. These are stored in the story store
    // and updated separtely to the (immutable) story.

  }, {
    key: "getStoryContext",
    value: function getStoryContext(story) {
      return Object.assign({}, story, {
        args: this.args.get(story.id),
        globals: this.globals.get(),
        hooks: this.hooks[story.id]
      });
    }
  }, {
    key: "cleanupStory",
    value: function cleanupStory(story) {
      this.hooks[story.id].clean();
    }
  }, {
    key: "extract",
    value: function extract() {
      var _this6 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        includeDocsOnly: false
      };

      if (!this.cachedCSFFiles) {
        throw new Error('Cannot call extract() unless you call cacheAllCSFFiles() first.');
      }

      return Object.entries(this.storyIndex.stories).reduce(function (acc, _ref11) {
        var _ref12 = StoryStore_slicedToArray(_ref11, 2),
            storyId = _ref12[0],
            importPath = _ref12[1].importPath;

        var csfFile = _this6.cachedCSFFiles[importPath];

        var story = _this6.storyFromCSFFile({
          storyId: storyId,
          csfFile: csfFile
        });

        if (!options.includeDocsOnly && story.parameters.docsOnly) {
          return acc;
        }

        acc[storyId] = Object.entries(story).reduce(function (storyAcc, _ref13) {
          var _ref14 = StoryStore_slicedToArray(_ref13, 2),
              key = _ref14[0],
              value = _ref14[1];

          if (typeof value === 'function') {
            return storyAcc;
          }

          if (Array.isArray(value)) {
            return Object.assign(storyAcc, _defineProperty({}, key, value.slice().sort()));
          }

          return Object.assign(storyAcc, _defineProperty({}, key, value));
        }, {
          args: story.initialArgs
        });
        return acc;
      }, {});
    }
  }, {
    key: "getSetStoriesPayload",
    value: function getSetStoriesPayload() {
      var stories = this.extract({
        includeDocsOnly: true
      });
      var kindParameters = Object.values(stories).reduce(function (acc, _ref15) {
        var title = _ref15.title;
        acc[title] = {};
        return acc;
      }, {});
      return {
        v: 2,
        globals: this.globals.get(),
        globalParameters: {},
        kindParameters: kindParameters,
        stories: stories
      };
    }
  }, {
    key: "raw",
    value: function raw() {
      var _this7 = this;

      return Object.values(this.extract()).map(function (_ref16) {
        var id = _ref16.id;
        return _this7.fromId(id);
      });
    }
  }, {
    key: "fromId",
    value: function fromId(storyId) {
      var _this8 = this;

      if (!this.cachedCSFFiles) {
        throw new Error('Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.');
      }

      var importPath;

      try {
        var _this$storyIndex$stor2 = this.storyIndex.storyIdToEntry(storyId);

        importPath = _this$storyIndex$stor2.importPath;
      } catch (err) {
        return null;
      }

      var csfFile = this.cachedCSFFiles[importPath];
      var story = this.storyFromCSFFile({
        storyId: storyId,
        csfFile: csfFile
      });
      return Object.assign({}, story, {
        storyFn: function storyFn(update) {
          var context = Object.assign({}, _this8.getStoryContext(story), {
            viewMode: 'story'
          });
          return story.unboundStoryFn(Object.assign({}, context, update));
        }
      });
    }
  }]);

  return StoryStore;
}();

/***/ }),

/***/ 5223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nq": () => (/* binding */ DEEPLY_EQUAL),
/* harmony export */   "P7": () => (/* binding */ combineArgs),
/* harmony export */   "T4": () => (/* binding */ mapArgsToTypes),
/* harmony export */   "kY": () => (/* binding */ NO_TARGET_NAME),
/* harmony export */   "ng": () => (/* binding */ validateOptions),
/* harmony export */   "pU": () => (/* binding */ groupArgsByTarget),
/* harmony export */   "xF": () => (/* binding */ deepDiff)
/* harmony export */ });
/* unused harmony export noTargetArgs */
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43371);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9653);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69720);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(26699);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(34553);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(32023);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92222);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(69600);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(21249);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(43290);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(54747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64063);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(23827);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(68630);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var ts_dedent__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(18464);









var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






















var INCOMPATIBLE = Symbol('incompatible');

var map = function map(arg, argType) {
  var type = argType.type;
  if (arg === undefined || arg === null || !type) return arg;

  if (argType.mapping) {
    return arg;
  }

  switch (type.name) {
    case 'string':
      return String(arg);

    case 'enum':
      return arg;

    case 'number':
      return Number(arg);

    case 'boolean':
      return arg === 'true';

    case 'array':
      if (!type.value || !Array.isArray(arg)) return INCOMPATIBLE;
      return arg.reduce(function (acc, item, index) {
        var mapped = map(item, {
          type: type.value
        });
        if (mapped !== INCOMPATIBLE) acc[index] = mapped;
        return acc;
      }, new Array(arg.length));

    case 'object':
      if (typeof arg === 'string' || typeof arg === 'number') return arg;
      if (!type.value || _typeof(arg) !== 'object') return INCOMPATIBLE;
      return Object.entries(arg).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];

        var mapped = map(val, {
          type: type.value[key]
        });
        return mapped === INCOMPATIBLE ? acc : Object.assign(acc, _defineProperty({}, key, mapped));
      }, {});

    default:
      return INCOMPATIBLE;
  }
};

var mapArgsToTypes = function mapArgsToTypes(args, argTypes) {
  return Object.entries(args).reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    if (!argTypes[key]) return acc;
    var mapped = map(value, argTypes[key]);
    return mapped === INCOMPATIBLE ? acc : Object.assign(acc, _defineProperty({}, key, mapped));
  }, {});
};
var combineArgs = function combineArgs(value, update) {
  if (Array.isArray(value) && Array.isArray(update)) {
    return update.reduce(function (acc, upd, index) {
      acc[index] = combineArgs(value[index], update[index]);
      return acc;
    }, _toConsumableArray(value)).filter(function (v) {
      return v !== undefined;
    });
  }

  if (!lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_26___default()(value) || !lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_26___default()(update)) return update;
  return Object.keys(Object.assign({}, value, update)).reduce(function (acc, key) {
    if (key in update) {
      var combined = combineArgs(value[key], update[key]);
      if (combined !== undefined) acc[key] = combined;
    } else {
      acc[key] = value[key];
    }

    return acc;
  }, {});
};
var validateOptions = function validateOptions(args, argTypes) {
  return Object.entries(argTypes).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        options = _ref6[1].options;

    // Don't set args that are not defined in `args` (they can be undefined in there)
    // see https://github.com/storybookjs/storybook/issues/15630 and
    //   https://github.com/storybookjs/storybook/issues/17063
    function allowArg() {
      if (key in args) {
        acc[key] = args[key];
      }

      return acc;
    }

    if (!options) return allowArg();

    if (!Array.isArray(options)) {
      _storybook_client_logger__WEBPACK_IMPORTED_MODULE_27__/* .once.error */ .IH.error((0,ts_dedent__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .C)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        Invalid argType: '", ".options' should be an array.\n\n        More info: https://storybook.js.org/docs/react/api/argtypes\n      "])), key));
      return allowArg();
    }

    if (options.some(function (opt) {
      return opt && ['object', 'function'].includes(_typeof(opt));
    })) {
      _storybook_client_logger__WEBPACK_IMPORTED_MODULE_27__/* .once.error */ .IH.error((0,ts_dedent__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .C)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        Invalid argType: '", ".options' should only contain primitives. Use a 'mapping' for complex values.\n\n        More info: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values\n      "])), key));
      return allowArg();
    }

    var isArray = Array.isArray(args[key]);
    var invalidIndex = isArray && args[key].findIndex(function (val) {
      return !options.includes(val);
    });
    var isValidArray = isArray && invalidIndex === -1;

    if (args[key] === undefined || options.includes(args[key]) || isValidArray) {
      return allowArg();
    }

    var field = isArray ? "".concat(key, "[").concat(invalidIndex, "]") : key;
    var supportedOptions = options.map(function (opt) {
      return typeof opt === 'string' ? "'".concat(opt, "'") : String(opt);
    }).join(', ');
    _storybook_client_logger__WEBPACK_IMPORTED_MODULE_27__/* .once.warn */ .IH.warn("Received illegal value for '".concat(field, "'. Supported options: ").concat(supportedOptions));
    return acc;
  }, {});
}; // TODO -- copied from router, needs to be in a shared location

var DEEPLY_EQUAL = Symbol('Deeply equal');
var deepDiff = function deepDiff(value, update) {
  if (_typeof(value) !== _typeof(update)) return update;
  if (fast_deep_equal__WEBPACK_IMPORTED_MODULE_25___default()(value, update)) return DEEPLY_EQUAL;

  if (Array.isArray(value) && Array.isArray(update)) {
    var res = update.reduce(function (acc, upd, index) {
      var diff = deepDiff(value[index], upd);
      if (diff !== DEEPLY_EQUAL) acc[index] = diff;
      return acc;
    }, new Array(update.length));
    if (update.length >= value.length) return res;
    return res.concat(new Array(value.length - update.length).fill(undefined));
  }

  if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_26___default()(value) && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_26___default()(update)) {
    return Object.keys(Object.assign({}, value, update)).reduce(function (acc, key) {
      var diff = deepDiff(value === null || value === void 0 ? void 0 : value[key], update === null || update === void 0 ? void 0 : update[key]);
      return diff === DEEPLY_EQUAL ? acc : Object.assign(acc, _defineProperty({}, key, diff));
    }, {});
  }

  return update;
};
var NO_TARGET_NAME = '';
function groupArgsByTarget(_ref7) {
  var args = _ref7.args,
      argTypes = _ref7.argTypes;
  var groupedArgs = {};
  Object.entries(args).forEach(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        name = _ref9[0],
        value = _ref9[1];

    var _ref10 = argTypes[name] || {},
        _ref10$target = _ref10.target,
        target = _ref10$target === void 0 ? NO_TARGET_NAME : _ref10$target;

    groupedArgs[target] = groupedArgs[target] || {};
    groupedArgs[target][name] = value;
  });
  return groupedArgs;
}
function noTargetArgs(context) {
  return groupArgsByTarget(context)[NO_TARGET_NAME];
}

/***/ }),

/***/ 39734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ userOrAutoTitle)
/* harmony export */ });
/* unused harmony export userOrAutoTitleFromSpecifier */
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43371);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24603);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(39714);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(69600);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23123);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var slash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(79969);
/* harmony import */ var slash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(slash__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ts_dedent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(18464);
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23827);










var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // FIXME: types duplicated type from `core-common', to be
// removed when we remove v6 back-compat.

var stripExtension = function stripExtension(path) {
  var parts = _toConsumableArray(path);

  var last = parts[parts.length - 1];
  var dotIndex = last.indexOf('.');
  var stripped = dotIndex > 0 ? last.substr(0, dotIndex) : last;
  parts[parts.length - 1] = stripped;

  var _parts = parts,
      _parts2 = _toArray(_parts),
      first = _parts2[0],
      rest = _parts2.slice(1);

  if (first === '') {
    parts = rest;
  }

  return parts;
};

var indexRe = /^index$/i; // deal with files like "atoms/button/{button,index}.stories.js"

var removeRedundantFilename = function removeRedundantFilename(paths) {
  var prevVal;
  return paths.filter(function (val, index) {
    if (index === paths.length - 1 && (val === prevVal || indexRe.test(val))) {
      return false;
    }

    prevVal = val;
    return true;
  });
};
/**
 * Combines path parts together, without duplicating separators (slashes).  Used instead of `path.join`
 * because this code runs in the browser.
 *
 * @param paths array of paths to join together.
 * @returns joined path string, with single '/' between parts
 */


function pathJoin(paths) {
  var slashes = new RegExp('/{1,}', 'g');
  return paths.join('/').replace(slashes, '/');
}

var userOrAutoTitleFromSpecifier = function userOrAutoTitleFromSpecifier(fileName, entry, userTitle) {
  var _ref = entry || {},
      directory = _ref.directory,
      importPathMatcher = _ref.importPathMatcher,
      _ref$titlePrefix = _ref.titlePrefix,
      titlePrefix = _ref$titlePrefix === void 0 ? '' : _ref$titlePrefix; // On Windows, backslashes are used in paths, which can cause problems here
  // slash makes sure we always handle paths with unix-style forward slash


  if (typeof fileName === 'number') {
    _storybook_client_logger__WEBPACK_IMPORTED_MODULE_19__/* .once.warn */ .IH.warn((0,ts_dedent__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .C)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      CSF Auto-title received a numeric fileName. This typically happens when\n      webpack is mis-configured in production mode. To force webpack to produce\n      filenames, set optimization.moduleIds = \"named\" in your webpack config.\n    "]))));
  }

  var normalizedFileName = slash__WEBPACK_IMPORTED_MODULE_18___default()(String(fileName));

  if (importPathMatcher.exec(normalizedFileName)) {
    if (!userTitle) {
      var suffix = normalizedFileName.replace(directory, '');
      var titleAndSuffix = slash__WEBPACK_IMPORTED_MODULE_18___default()(pathJoin([titlePrefix, suffix]));
      var path = titleAndSuffix.split('/');
      path = stripExtension(path);
      path = removeRedundantFilename(path);
      return path.join('/');
    }

    if (!titlePrefix) {
      return userTitle;
    }

    return slash__WEBPACK_IMPORTED_MODULE_18___default()(pathJoin([titlePrefix, userTitle]));
  }

  return undefined;
};
var userOrAutoTitle = function userOrAutoTitle(fileName, storiesEntries, userTitle) {
  for (var i = 0; i < storiesEntries.length; i += 1) {
    var title = userOrAutoTitleFromSpecifier(fileName, storiesEntries[i], userTitle);
    if (title) return title;
  }

  return userTitle || undefined;
};

/***/ }),

/***/ 55740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getValuesFromArgTypes)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69720);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var getValuesFromArgTypes = function getValuesFromArgTypes() {
  var argTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.entries(argTypes).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        arg = _ref2[0],
        defaultValue = _ref2[1].defaultValue;

    if (typeof defaultValue !== 'undefined') {
      acc[arg] = defaultValue;
    }

    return acc;
  }, {});
};

/***/ }),

/***/ 72809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ normalizeComponentAnnotations)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_csf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35032);
/* harmony import */ var _storybook_csf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_csf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _normalizeInputTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58801);



function normalizeComponentAnnotations(defaultExport) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultExport.title;
  var importPath = arguments.length > 2 ? arguments[2] : undefined;
  var id = defaultExport.id,
      argTypes = defaultExport.argTypes;
  return Object.assign({
    id: (0,_storybook_csf__WEBPACK_IMPORTED_MODULE_1__.sanitize)(id || title)
  }, defaultExport, {
    title: title
  }, argTypes && {
    argTypes: (0,_normalizeInputTypes__WEBPACK_IMPORTED_MODULE_2__/* .normalizeInputTypes */ .x)(argTypes)
  }, {
    parameters: Object.assign({
      fileName: importPath
    }, defaultExport.parameters)
  });
}

/***/ }),

/***/ 58801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ normalizeInputTypes)
/* harmony export */ });
/* unused harmony export normalizeInputType */
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66604);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["type", "control"];


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var normalizeType = function normalizeType(type) {
  return typeof type === 'string' ? {
    name: type
  } : type;
};

var normalizeControl = function normalizeControl(control) {
  return typeof control === 'string' ? {
    type: control
  } : control;
};

var normalizeInputType = function normalizeInputType(inputType, key) {
  var type = inputType.type,
      control = inputType.control,
      rest = _objectWithoutProperties(inputType, _excluded);

  var normalized = Object.assign({
    name: key
  }, rest);
  if (type) normalized.type = normalizeType(type);

  if (control) {
    normalized.control = normalizeControl(control);
  } else if (control === false) {
    normalized.control = {
      disable: true
    };
  }

  return normalized;
};
var normalizeInputTypes = function normalizeInputTypes(inputTypes) {
  return lodash_mapValues__WEBPACK_IMPORTED_MODULE_3___default()(inputTypes, normalizeInputType);
};

/***/ }),

/***/ 39422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ normalizeProjectAnnotations)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(47941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(82526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(41539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(32165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(66992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(78783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(91038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(47042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(92222);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(43371);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(70189);
// EXTERNAL MODULE: ./node_modules/lodash/mapValues.js
var mapValues = __webpack_require__(66604);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__(18464);
// EXTERNAL MODULE: ./node_modules/@storybook/client-logger/dist/esm/index.js
var dist_esm = __webpack_require__(23827);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/parameters.js
var parameters = __webpack_require__(18673);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/inferArgTypes.js



var _templateObject;











function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






var inferType = function inferType(value, name, visited) {
  var type = _typeof(value);

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'function':
    case 'symbol':
      return {
        name: type
      };

    default:
      break;
  }

  if (value) {
    if (visited.has(value)) {
      dist_esm/* logger.warn */.kg.warn((0,esm/* default */.C)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        We've detected a cycle in arg '", "'. Args should be JSON-serializable.\n\n        Consider using the mapping feature or fully custom args:\n        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values\n        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args\n      "])), name));
      return {
        name: 'other',
        value: 'cyclic object'
      };
    }

    visited.add(value);

    if (Array.isArray(value)) {
      var childType = value.length > 0 ? inferType(value[0], name, new Set(visited)) : {
        name: 'other',
        value: 'unknown'
      };
      return {
        name: 'array',
        value: childType
      };
    }

    var fieldTypes = mapValues_default()(value, function (field) {
      return inferType(field, name, new Set(visited));
    });
    return {
      name: 'object',
      value: fieldTypes
    };
  }

  return {
    name: 'object',
    value: {}
  };
};

var inferArgTypes = function inferArgTypes(context) {
  var id = context.id,
      _context$argTypes = context.argTypes,
      userArgTypes = _context$argTypes === void 0 ? {} : _context$argTypes,
      _context$initialArgs = context.initialArgs,
      initialArgs = _context$initialArgs === void 0 ? {} : _context$initialArgs;
  var argTypes = mapValues_default()(initialArgs, function (arg, key) {
    return {
      name: key,
      type: inferType(arg, "".concat(id, ".").concat(key), new Set())
    };
  });
  var userArgTypesNames = mapValues_default()(userArgTypes, function (argType, key) {
    return {
      name: key
    };
  });
  return (0,parameters/* combineParameters */.f)(argTypes, userArgTypesNames, userArgTypes);
};
inferArgTypes.secondPass = true;
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/filterArgTypes.js
var filterArgTypes = __webpack_require__(71374);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/inferControls.js







var inferControl = function inferControl(argType, name, matchers) {
  var type = argType.type,
      options = argType.options;

  if (!type && !options) {
    return undefined;
  } // args that end with background or color e.g. iconColor


  if (matchers.color && matchers.color.test(name)) {
    var controlType = argType.type.name;

    if (controlType === 'string') {
      return {
        control: {
          type: 'color'
        }
      };
    }

    dist_esm/* logger.warn */.kg.warn("Addon controls: Control of type color only supports string, received \"".concat(controlType, "\" instead"));
  } // args that end with date e.g. purchaseDate


  if (matchers.date && matchers.date.test(name)) {
    return {
      control: {
        type: 'date'
      }
    };
  }

  switch (type.name) {
    case 'array':
      return {
        control: {
          type: 'object'
        }
      };

    case 'boolean':
      return {
        control: {
          type: 'boolean'
        }
      };

    case 'string':
      return {
        control: {
          type: 'text'
        }
      };

    case 'number':
      return {
        control: {
          type: 'number'
        }
      };

    case 'enum':
      {
        var _ref = type,
            value = _ref.value;
        return {
          control: {
            type: (value === null || value === void 0 ? void 0 : value.length) <= 5 ? 'radio' : 'select'
          },
          options: value
        };
      }

    case 'function':
    case 'symbol':
      return null;

    default:
      return {
        control: {
          type: options ? 'select' : 'object'
        }
      };
  }
};

var inferControls = function inferControls(context) {
  var argTypes = context.argTypes,
      _context$parameters = context.parameters,
      __isArgsStory = _context$parameters.__isArgsStory,
      _context$parameters$c = _context$parameters.controls;
  _context$parameters$c = _context$parameters$c === void 0 ? {} : _context$parameters$c;
  var _context$parameters$c2 = _context$parameters$c.include,
      include = _context$parameters$c2 === void 0 ? null : _context$parameters$c2,
      _context$parameters$c3 = _context$parameters$c.exclude,
      exclude = _context$parameters$c3 === void 0 ? null : _context$parameters$c3,
      _context$parameters$c4 = _context$parameters$c.matchers,
      matchers = _context$parameters$c4 === void 0 ? {} : _context$parameters$c4;
  if (!__isArgsStory) return argTypes;
  var filteredArgTypes = (0,filterArgTypes/* filterArgTypes */.h)(argTypes, include, exclude);
  var withControls = mapValues_default()(filteredArgTypes, function (argType, name) {
    return (argType === null || argType === void 0 ? void 0 : argType.type) && inferControl(argType, name, matchers);
  });
  return (0,parameters/* combineParameters */.f)(withControls, filteredArgTypes);
};
inferControls.secondPass = true;
var argTypesEnhancers = [inferControls];
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/normalizeInputTypes.js
var normalizeInputTypes = __webpack_require__(58801);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/csf/normalizeProjectAnnotations.js












var _excluded = ["argTypes", "globalTypes", "argTypesEnhancers"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function normalizeProjectAnnotations(_ref) {
  var argTypes = _ref.argTypes,
      globalTypes = _ref.globalTypes,
      argTypesEnhancers = _ref.argTypesEnhancers,
      annotations = _objectWithoutProperties(_ref, _excluded);

  return Object.assign({}, argTypes && {
    argTypes: (0,normalizeInputTypes/* normalizeInputTypes */.x)(argTypes)
  }, globalTypes && {
    globalTypes: (0,normalizeInputTypes/* normalizeInputTypes */.x)(globalTypes)
  }, {
    argTypesEnhancers: [].concat(_toConsumableArray(argTypesEnhancers || []), [inferArgTypes, // inferControls technically should only run if the user is using the controls addon,
    // and so should be added by a preset there. However, as it seems some code relies on controls
    // annotations (in particular the angular implementation's `cleanArgsDecorator`), for backwards
    // compatibility reasons, we will leave this in the store until 7.0
    inferControls])
  }, annotations);
}

/***/ }),

/***/ 92381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ normalizeStory)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43371);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92222);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _storybook_csf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35032);
/* harmony import */ var _storybook_csf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_storybook_csf__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ts_dedent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18464);
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23827);
/* harmony import */ var util_deprecate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94927);
/* harmony import */ var util_deprecate__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(util_deprecate__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _normalizeInputTypes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(58801);












var _templateObject;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var deprecatedStoryAnnotation = (0,ts_dedent__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .C)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nCSF .story annotations deprecated; annotate story functions directly:\n- StoryFn.story.name => StoryFn.storyName\n- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)\nSee https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.\n"])));
var deprecatedStoryAnnotationWarning = util_deprecate__WEBPACK_IMPORTED_MODULE_15___default()(function () {}, deprecatedStoryAnnotation);
function normalizeStory(key, storyAnnotations, meta) {
  var userStoryFn;
  var storyObject;

  if (typeof storyAnnotations === 'function') {
    userStoryFn = storyAnnotations;
    storyObject = storyAnnotations;
  } else {
    storyObject = storyAnnotations;
  }

  var _storyObject = storyObject,
      story = _storyObject.story;

  if (story) {
    _storybook_client_logger__WEBPACK_IMPORTED_MODULE_17__/* .logger.debug */ .kg.debug('deprecated story', story);
    deprecatedStoryAnnotationWarning();
  }

  var exportName = (0,_storybook_csf__WEBPACK_IMPORTED_MODULE_14__.storyNameFromExport)(key);
  var name = typeof storyObject !== 'function' && storyObject.name || storyObject.storyName || (story === null || story === void 0 ? void 0 : story.name) || exportName;
  var decorators = [].concat(_toConsumableArray(storyObject.decorators || []), _toConsumableArray((story === null || story === void 0 ? void 0 : story.decorators) || []));
  var parameters = Object.assign({}, story === null || story === void 0 ? void 0 : story.parameters, storyObject.parameters);
  var args = Object.assign({}, story === null || story === void 0 ? void 0 : story.args, storyObject.args);
  var argTypes = Object.assign({}, story === null || story === void 0 ? void 0 : story.argTypes, storyObject.argTypes);
  var loaders = [].concat(_toConsumableArray(storyObject.loaders || []), _toConsumableArray((story === null || story === void 0 ? void 0 : story.loaders) || []));
  var _storyObject2 = storyObject,
      render = _storyObject2.render,
      play = _storyObject2.play; // eslint-disable-next-line no-underscore-dangle

  var id = parameters.__id || (0,_storybook_csf__WEBPACK_IMPORTED_MODULE_14__.toId)(meta.id || meta.title, exportName);
  return Object.assign({
    id: id,
    name: name,
    decorators: decorators,
    parameters: parameters,
    args: args,
    argTypes: (0,_normalizeInputTypes__WEBPACK_IMPORTED_MODULE_18__/* .normalizeInputTypes */ .x)(argTypes),
    loaders: loaders
  }, render && {
    render: render
  }, userStoryFn && {
    userStoryFn: userStoryFn
  }, play && {
    play: play
  });
}

/***/ }),

/***/ 81360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ prepareStory)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(47042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(82526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(32165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(91038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(35666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(92222);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(41539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(47941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(66992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(78783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(21249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(69720);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(43371);
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__(18464);
// EXTERNAL MODULE: ./node_modules/util-deprecate/browser.js
var browser = __webpack_require__(94927);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./node_modules/global/window.js
var global_window = __webpack_require__(58908);
var window_default = /*#__PURE__*/__webpack_require__.n(global_window);
// EXTERNAL MODULE: ./node_modules/@storybook/csf/dist/index.js
var dist = __webpack_require__(35032);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/parameters.js
var esm_parameters = __webpack_require__(18673);
// EXTERNAL MODULE: ./node_modules/@storybook/addons/dist/esm/hooks.js
var hooks = __webpack_require__(45406);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/decorators.js


var _excluded = ["componentId", "title", "kind", "id", "name", "story", "parameters", "initialArgs", "argTypes"];




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function decorateStory(storyFn, decorator, bindWithContext) {
  // Bind the partially decorated storyFn so that when it is called it always knows about the story context,
  // no matter what it is passed directly. This is because we cannot guarantee a decorator will
  // pass the context down to the next decorated story in the chain.
  var boundStoryFunction = bindWithContext(storyFn);
  return function (context) {
    return decorator(boundStoryFunction, context);
  };
}

/**
 * Currently StoryContextUpdates are allowed to have any key in the type.
 * However, you cannot overwrite any of the build-it "static" keys.
 *
 * @param inputContextUpdate StoryContextUpdate
 * @returns StoryContextUpdate
 */
function sanitizeStoryContextUpdate() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var componentId = _ref.componentId,
      title = _ref.title,
      kind = _ref.kind,
      id = _ref.id,
      name = _ref.name,
      story = _ref.story,
      parameters = _ref.parameters,
      initialArgs = _ref.initialArgs,
      argTypes = _ref.argTypes,
      update = _objectWithoutProperties(_ref, _excluded);

  return update;
}
function defaultDecorateStory(storyFn, decorators) {
  // We use a trick to avoid recreating the bound story function inside `decorateStory`.
  // Instead we pass it a context "getter", which is defined once (at "decoration time")
  // The getter reads a variable which is scoped to this call of `decorateStory`
  // (ie to this story), so there is no possibility of overlap.
  // This will break if you call the same story twice interleaved
  // (React might do it if you rendered the same story twice in the one ReactDom.render call, for instance)
  var contextStore = {};
  /**
   * When you call the story function inside a decorator, e.g.:
   *
   * ```jsx
   * <div>{storyFn({ foo: 'bar' })}</div>
   * ```
   *
   * This will override the `foo` property on the `innerContext`, which gets
   * merged in with the default context
   */

  var bindWithContext = function bindWithContext(decoratedStoryFn) {
    return function (update) {
      contextStore.value = Object.assign({}, contextStore.value, sanitizeStoryContextUpdate(update));
      return decoratedStoryFn(contextStore.value);
    };
  };

  var decoratedWithContextStore = decorators.reduce(function (story, decorator) {
    return decorateStory(story, decorator, bindWithContext);
  }, storyFn);
  return function (context) {
    contextStore.value = context;
    return decoratedWithContextStore(context); // Pass the context directly into the first decorator
  };
}
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/args.js
var args = __webpack_require__(5223);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/getValuesFromArgTypes.js
var getValuesFromArgTypes = __webpack_require__(55740);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/csf/prepareStory.js







var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }














function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var argTypeDefaultValueWarning = browser_default()(function () {}, (0,esm/* default */.C)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  `argType.defaultValue` is deprecated and will be removed in Storybook 7.0.\n\n  https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args"], ["\n  \\`argType.defaultValue\\` is deprecated and will be removed in Storybook 7.0.\n\n  https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args"])))); // Combine all the metadata about a story (both direct and inherited from the component/global scope)
// into a "renderable" story function, with all decorators applied, parameters passed as context etc
//
// Note that this story function is *stateless* in the sense that it does not track args or globals
// Instead, it is expected these are tracked separately (if necessary) and are passed into each invocation.

function prepareStory(storyAnnotations, componentAnnotations, projectAnnotations) {
  var _global$FEATURES;

  // NOTE: in the current implementation we are doing everything once, up front, rather than doing
  // anything at render time. The assumption is that as we don't load all the stories at once, this
  // will have a limited cost. If this proves misguided, we can refactor it.
  var id = storyAnnotations.id,
      name = storyAnnotations.name;
  var title = componentAnnotations.title;
  var parameters = (0,esm_parameters/* combineParameters */.f)(projectAnnotations.parameters, componentAnnotations.parameters, storyAnnotations.parameters);
  var decorators = [].concat(_toConsumableArray(storyAnnotations.decorators || []), _toConsumableArray(componentAnnotations.decorators || []), _toConsumableArray(projectAnnotations.decorators || [])); // Currently it is only possible to set these globally

  var _projectAnnotations$a = projectAnnotations.applyDecorators,
      applyDecorators = _projectAnnotations$a === void 0 ? defaultDecorateStory : _projectAnnotations$a,
      _projectAnnotations$a2 = projectAnnotations.argTypesEnhancers,
      argTypesEnhancers = _projectAnnotations$a2 === void 0 ? [] : _projectAnnotations$a2,
      _projectAnnotations$a3 = projectAnnotations.argsEnhancers,
      argsEnhancers = _projectAnnotations$a3 === void 0 ? [] : _projectAnnotations$a3;
  var loaders = [].concat(_toConsumableArray(projectAnnotations.loaders || []), _toConsumableArray(componentAnnotations.loaders || []), _toConsumableArray(storyAnnotations.loaders || [])); // The render function on annotations *has* to be an `ArgsStoryFn`, so when we normalize
  // CSFv1/2, we use a new field called `userStoryFn` so we know that it can be a LegacyStoryFn

  var render = storyAnnotations.userStoryFn || storyAnnotations.render || componentAnnotations.render || projectAnnotations.render;
  var passedArgTypes = (0,esm_parameters/* combineParameters */.f)(projectAnnotations.argTypes, componentAnnotations.argTypes, storyAnnotations.argTypes);
  var _parameters$passArgsF = parameters.passArgsFirst,
      passArgsFirst = _parameters$passArgsF === void 0 ? true : _parameters$passArgsF; // eslint-disable-next-line no-underscore-dangle

  parameters.__isArgsStory = passArgsFirst && render.length > 0; // Pull out args[X] into initialArgs for argTypes enhancers

  var passedArgs = Object.assign({}, projectAnnotations.args, componentAnnotations.args, storyAnnotations.args);
  var contextForEnhancers = {
    componentId: componentAnnotations.id,
    title: title,
    kind: title,
    // Back compat
    id: id,
    name: name,
    story: name,
    // Back compat
    component: componentAnnotations.component,
    subcomponents: componentAnnotations.subcomponents,
    parameters: parameters,
    initialArgs: passedArgs,
    argTypes: passedArgTypes
  };
  contextForEnhancers.argTypes = argTypesEnhancers.reduce(function (accumulatedArgTypes, enhancer) {
    return enhancer(Object.assign({}, contextForEnhancers, {
      argTypes: accumulatedArgTypes
    }));
  }, contextForEnhancers.argTypes); // Add argTypes[X].defaultValue to initial args (note this deprecated)
  // We need to do this *after* the argTypesEnhancers as they may add defaultValues

  var defaultArgs = (0,getValuesFromArgTypes/* getValuesFromArgTypes */.V)(contextForEnhancers.argTypes);

  if (Object.keys(defaultArgs).length > 0) {
    argTypeDefaultValueWarning();
  }

  var initialArgsBeforeEnhancers = Object.assign({}, defaultArgs, passedArgs);
  contextForEnhancers.initialArgs = argsEnhancers.reduce(function (accumulatedArgs, enhancer) {
    return Object.assign({}, accumulatedArgs, enhancer(Object.assign({}, contextForEnhancers, {
      initialArgs: accumulatedArgs
    })));
  }, initialArgsBeforeEnhancers); // Add some of our metadata into parameters as we used to do this in 6.x and users may be relying on it

  if (!((_global$FEATURES = (window_default()).FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.breakingChangesV7)) {
    contextForEnhancers.parameters = Object.assign({}, contextForEnhancers.parameters, {
      __id: id,
      globals: projectAnnotations.globals,
      globalTypes: projectAnnotations.globalTypes,
      args: contextForEnhancers.initialArgs,
      argTypes: contextForEnhancers.argTypes
    });
  }

  var applyLoaders = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(context) {
      var loadResults, loaded;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all(loaders.map(function (loader) {
                return loader(context);
              }));

            case 2:
              loadResults = _context.sent;
              loaded = Object.assign.apply(Object, [{}].concat(_toConsumableArray(loadResults)));
              return _context.abrupt("return", Object.assign({}, context, {
                loaded: loaded
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function applyLoaders(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var undecoratedStoryFn = function undecoratedStoryFn(context) {
    var mappedArgs = Object.entries(context.args).reduce(function (acc, _ref2) {
      var _context$argTypes$key;

      var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          val = _ref3[1];

      var mapping = (_context$argTypes$key = context.argTypes[key]) === null || _context$argTypes$key === void 0 ? void 0 : _context$argTypes$key.mapping;
      acc[key] = mapping && val in mapping ? mapping[val] : val;
      return acc;
    }, {});
    var includedArgs = Object.entries(mappedArgs).reduce(function (acc, _ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          val = _ref5[1];

      var argType = context.argTypes[key] || {};
      if ((0,dist.includeConditionalArg)(argType, mappedArgs, context.globals)) acc[key] = val;
      return acc;
    }, {});
    var includedContext = Object.assign({}, context, {
      args: includedArgs
    });
    var _context$parameters$p = context.parameters.passArgsFirst,
        renderTimePassArgsFirst = _context$parameters$p === void 0 ? true : _context$parameters$p;
    return renderTimePassArgsFirst ? render(includedContext.args, includedContext) : render(includedContext);
  };

  var decoratedStoryFn = (0,hooks/* applyHooks */.DM)(applyDecorators)(undecoratedStoryFn, decorators);

  var unboundStoryFn = function unboundStoryFn(context) {
    var _global$FEATURES2;

    var finalContext = context;

    if ((_global$FEATURES2 = (window_default()).FEATURES) !== null && _global$FEATURES2 !== void 0 && _global$FEATURES2.argTypeTargetsV7) {
      var argsByTarget = (0,args/* groupArgsByTarget */.pU)(Object.assign({
        args: context.args
      }, context));
      finalContext = Object.assign({}, context, {
        allArgs: context.args,
        argsByTarget: argsByTarget,
        args: argsByTarget[args/* NO_TARGET_NAME */.kY] || {}
      });
    }

    return decoratedStoryFn(finalContext);
  };

  var playFunction = storyAnnotations.play;
  return Object.freeze(Object.assign({}, contextForEnhancers, {
    originalStoryFn: render,
    undecoratedStoryFn: undecoratedStoryFn,
    unboundStoryFn: unboundStoryFn,
    applyLoaders: applyLoaders,
    playFunction: playFunction
  }));
}

/***/ }),

/***/ 71374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ filterArgTypes)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26699);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32023);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4723);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35937);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_5__);







var matches = function matches(name, descriptor) {
  return Array.isArray(descriptor) ? descriptor.includes(name) : name.match(descriptor);
};

var filterArgTypes = function filterArgTypes(argTypes, include, exclude) {
  if (!include && !exclude) {
    return argTypes;
  }

  return argTypes && lodash_pickBy__WEBPACK_IMPORTED_MODULE_5___default()(argTypes, function (argType, key) {
    var name = argType.name || key;
    return (!include || matches(name, include)) && (!exclude || !matches(name, exclude));
  });
};

/***/ }),

/***/ 18673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ combineParameters)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57327);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69720);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21249);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(68630);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















// Utilities for handling parameters

/**
 * Safely combine parameters recursively. Only copy objects when needed.
 * Algorithm = always overwrite the existing value UNLESS both values
 * are plain objects. In this case flag the key as "special" and handle
 * it with a heuristic.
 */

var combineParameters = function combineParameters() {
  for (var _len = arguments.length, parameterSets = new Array(_len), _key = 0; _key < _len; _key++) {
    parameterSets[_key] = arguments[_key];
  }

  var mergeKeys = {};
  var combined = parameterSets.filter(Boolean).reduce(function (acc, p) {
    Object.entries(p).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      var existing = acc[key];

      if (Array.isArray(value) || typeof existing === 'undefined') {
        acc[key] = value;
      } else if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16___default()(value) && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16___default()(existing)) {
        // do nothing, we'll handle this later
        mergeKeys[key] = true;
      } else if (typeof value !== 'undefined') {
        acc[key] = value;
      }
    });
    return acc;
  }, {});
  Object.keys(mergeKeys).forEach(function (key) {
    var mergeValues = parameterSets.filter(Boolean).map(function (p) {
      return p[key];
    }).filter(function (value) {
      return typeof value !== 'undefined';
    });

    if (mergeValues.every(function (value) {
      return lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16___default()(value);
    })) {
      combined[key] = combineParameters.apply(void 0, _toConsumableArray(mergeValues));
    } else {
      combined[key] = mergeValues[mergeValues.length - 1];
    }
  });
  return combined;
};

/***/ }),

/***/ 34822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* binding */ sortStoriesV6)
});

// UNUSED EXPORTS: sortStoriesV7

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(47042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(43371);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(68309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(21249);
// EXTERNAL MODULE: ./node_modules/stable/stable.js
var stable = __webpack_require__(75235);
var stable_default = /*#__PURE__*/__webpack_require__.n(stable);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(73210);
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/storySort.js




var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/;
var storySort = function storySort() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (a, b) {
    // If the two stories have the same story kind, then use the default
    // ordering, which is the order they are defined in the story file.
    // only when includeNames is falsy
    if (a.title === b.title && !options.includeNames) {
      return 0;
    } // Get the StorySortParameter options.


    var method = options.method || 'configure';
    var order = options.order || []; // Examine each part of the story title in turn.

    var storyTitleA = a.title.trim().split(STORY_KIND_PATH_SEPARATOR);
    var storyTitleB = b.title.trim().split(STORY_KIND_PATH_SEPARATOR);

    if (options.includeNames) {
      storyTitleA.push(a.name);
      storyTitleB.push(b.name);
    }

    var depth = 0;

    while (storyTitleA[depth] || storyTitleB[depth]) {
      // Stories with a shorter depth should go first.
      if (!storyTitleA[depth]) {
        return -1;
      }

      if (!storyTitleB[depth]) {
        return 1;
      } // Compare the next part of the story title.


      var nameA = storyTitleA[depth];
      var nameB = storyTitleB[depth];

      if (nameA !== nameB) {
        // Look for the names in the given `order` array.
        var indexA = order.indexOf(nameA);
        var indexB = order.indexOf(nameB);
        var indexWildcard = order.indexOf('*'); // If at least one of the names is found, sort by the `order` array.

        if (indexA !== -1 || indexB !== -1) {
          // If one of the names is not found and there is a wildcard, insert it at the wildcard position.
          // Otherwise, list it last.
          if (indexA === -1) {
            if (indexWildcard !== -1) {
              indexA = indexWildcard;
            } else {
              indexA = order.length;
            }
          }

          if (indexB === -1) {
            if (indexWildcard !== -1) {
              indexB = indexWildcard;
            } else {
              indexB = order.length;
            }
          }

          return indexA - indexB;
        } // Use the default configure() order.


        if (method === 'configure') {
          return 0;
        } // Otherwise, use alphabetical order.


        return nameA.localeCompare(nameB, options.locales ? options.locales : undefined, {
          numeric: true,
          sensitivity: 'accent'
        });
      } // If a nested array is provided for a name, use it for ordering.


      var index = order.indexOf(nameA);
      order = index !== -1 && Array.isArray(order[index + 1]) ? order[index + 1] : []; // We'll need to look at the next part of the name.

      depth += 1;
    } // Identical story titles. The shortcut at the start of this function prevents
    // this from ever being used.

    /* istanbul ignore next */


    return 0;
  };
};
;// CONCATENATED MODULE: ./node_modules/@storybook/store/dist/esm/sortStories.js



var _templateObject;




function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var sortStoriesCommon = function sortStoriesCommon(stories, storySortParameter, fileNameOrder) {
  if (storySortParameter) {
    var sortFn;

    if (typeof storySortParameter === 'function') {
      sortFn = storySortParameter;
    } else {
      sortFn = storySort(storySortParameter);
    }

    stable_default().inplace(stories, sortFn);
  } else {
    stable_default().inplace(stories, function (s1, s2) {
      return fileNameOrder.indexOf(s1.importPath) - fileNameOrder.indexOf(s2.importPath);
    });
  }

  return stories;
};

var sortStoriesV7 = function sortStoriesV7(stories, storySortParameter, fileNameOrder) {
  try {
    return sortStoriesCommon(stories, storySortParameter, fileNameOrder);
  } catch (err) {
    throw new Error(dedent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    Error sorting stories with sort parameter ", ":\n\n    > ", "\n    \n    Are you using a V6-style sort function in V7 mode?\n\n    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort\n  "])), storySortParameter, err.message));
  }
};

var toIndexEntry = function toIndexEntry(story) {
  var id = story.id,
      title = story.title,
      name = story.name,
      parameters = story.parameters;
  return {
    id: id,
    title: title,
    name: name,
    importPath: parameters.fileName
  };
};

var sortStoriesV6 = function sortStoriesV6(stories, storySortParameter, fileNameOrder) {
  if (storySortParameter && typeof storySortParameter === 'function') {
    stable_default().inplace(stories, storySortParameter);
    return stories.map(function (s) {
      return toIndexEntry(s[1]);
    });
  }

  var storiesV7 = stories.map(function (s) {
    return toIndexEntry(s[1]);
  });
  return sortStoriesCommon(storiesV7, storySortParameter, fileNameOrder);
};

/***/ }),

/***/ 65316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_37___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheProvider": () => (/* binding */ CacheProvider),
/* harmony export */   "ClassNames": () => (/* binding */ ClassNames),
/* harmony export */   "Global": () => (/* binding */ Global),
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider),
/* harmony export */   "background": () => (/* binding */ background),
/* harmony export */   "color": () => (/* binding */ color),
/* harmony export */   "convert": () => (/* binding */ convert),
/* harmony export */   "create": () => (/* binding */ create$1),
/* harmony export */   "createCache": () => (/* binding */ createCache),
/* harmony export */   "createGlobal": () => (/* binding */ createGlobal),
/* harmony export */   "createReset": () => (/* binding */ createReset),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "darken": () => (/* binding */ darkenColor),
/* harmony export */   "ensure": () => (/* binding */ ensure),
/* harmony export */   "ignoreSsrWarning": () => (/* binding */ ignoreSsrWarning),
/* harmony export */   "isPropValid": () => (/* binding */ isPropValid),
/* harmony export */   "jsx": () => (/* binding */ jsx),
/* harmony export */   "keyframes": () => (/* binding */ keyframes),
/* harmony export */   "lighten": () => (/* binding */ lightenColor),
/* harmony export */   "styled": () => (/* binding */ styled),
/* harmony export */   "themes": () => (/* binding */ themes),
/* harmony export */   "typography": () => (/* binding */ typography),
/* harmony export */   "useTheme": () => (/* binding */ useTheme),
/* harmony export */   "withTheme": () => (/* binding */ withTheme)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43371);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73210);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69600);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21249);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4129);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4723);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23123);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92222);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(68309);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_global_this_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(65743);
/* harmony import */ var core_js_modules_esnext_global_this_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_global_this_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(82526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(41817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(36210);
/* harmony import */ var core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(38880);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(30489);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(39714);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(70189);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(12419);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51532);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56977);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_bold_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(50915);
/* harmony import */ var core_js_modules_es_string_bold_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_bold_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(69720);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(47941);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(91038);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(24603);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(26699);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(32023);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(67294);
/* harmony import */ var memoizerific__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(52326);
/* harmony import */ var memoizerific__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(memoizerific__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(23827);



var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }









































function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe

function sheetForTag$1(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement$1(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet$1 = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement$1(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (false) { var isImportRule; }

    if (this.isSpeedy) {
      var sheet = sheetForTag$1(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (false) {}
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
/**
 * @param {number}
 * @return {number}
 */

var abs = Math.abs;
/**
 * @param {number}
 * @return {string}
 */

var from = String.fromCharCode;
/**
 * @param {object}
 * @return {object}
 */

var assign = Object.assign;
/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */

function hash(value, length) {
  return (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
}
/**
 * @param {string} value
 * @return {string}
 */


function trim(value) {
  return value.trim();
}
/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */


function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */


function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */


function indexof(value, search) {
  return value.indexOf(search);
}
/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */


function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */


function substr(value, begin, end) {
  return value.slice(begin, end);
}
/**
 * @param {string} value
 * @return {number}
 */


function strlen(value) {
  return value.length;
}
/**
 * @param {any[]} value
 * @return {number}
 */


function sizeof(value) {
  return value.length;
}
/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */


function append(value, array) {
  return array.push(value), value;
}
/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */


function combine(array, callback) {
  return array.map(callback).join('');
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */

function node(value, root, parent, type, props, children, length) {
  return {
    value: value,
    root: root,
    parent: parent,
    type: type,
    props: props,
    children: children,
    line: line,
    column: column,
    length: length,
    return: ''
  };
}
/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */


function copy(root, props) {
  return assign(node('', null, null, '', null, null, 0), root, {
    length: -root.length
  }, props);
}
/**
 * @return {number}
 */


function char() {
  return character;
}
/**
 * @return {number}
 */


function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10) column = 1, line--;
  return character;
}
/**
 * @return {number}
 */


function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10) column = 1, line++;
  return character;
}
/**
 * @return {number}
 */


function peek() {
  return charat(characters, position);
}
/**
 * @return {number}
 */


function caret() {
  return position;
}
/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */


function slice(begin, end) {
  return substr(characters, begin, end);
}
/**
 * @param {number} type
 * @return {number}
 */


function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token

    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126: // ; { } breakpoint token

    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token

    case 58:
      return 3;
    // " ' ( [ opening delimit token

    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token

    case 41:
    case 93:
      return 1;
  }

  return 0;
}
/**
 * @param {string} value
 * @return {any[]}
 */


function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
 * @param {any} value
 * @return {any}
 */


function dealloc(value) {
  return characters = '', value;
}
/**
 * @param {number} type
 * @return {string}
 */


function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
 * @param {number} type
 * @return {string}
 */


function whitespace(type) {
  while (character = peek()) {
    if (character < 33) next();else break;
  }

  return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */


function escaping(index, count) {
  while (--count && next()) {
    // not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
  }

  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
 * @param {number} type
 * @return {number}
 */


function delimiter(type) {
  while (next()) {
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '

      case 34:
      case 39:
        if (type !== 34 && type !== 39) delimiter(character);
        break;
      // (

      case 40:
        if (type === 41) delimiter(type);
        break;
      // \

      case 92:
        next();
        break;
    }
  }

  return position;
}
/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */


function commenter(type, index) {
  while (next()) {
    // //
    if (type + character === 47 + 10) break; // /*
    else if (type + character === 42 + 42 && peek() === 47) break;
  }

  return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next());
}
/**
 * @param {number} index
 * @return {string}
 */


function identifier(index) {
  while (!token(peek())) {
    next();
  }

  return slice(index, position);
}
/**
 * @param {string} value
 * @return {object[]}
 */


function compile(value) {
  return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
}
/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */


function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;

  while (scanning) {
    switch (previous = character, character = next()) {
      // (
      case 40:
        if (previous != 108 && characters.charCodeAt(length - 1) == 58) {
          if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
          break;
        }

      // " ' [

      case 34:
      case 39:
      case 91:
        characters += delimit(character);
        break;
      // \t \n \r \s

      case 9:
      case 10:
      case 13:
      case 32:
        characters += whitespace(previous);
        break;
      // \

      case 92:
        characters += escaping(caret() - 1, 7);
        continue;
      // /

      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;

          default:
            characters += '/';
        }

        break;
      // {

      case 123 * variable:
        points[index++] = strlen(characters) * ampersand;
      // } ; \0

      case 125 * variable:
      case 59:
      case 0:
        switch (character) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;

          case 59 + offset:
            if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
            break;
          // @ ;

          case 59:
            characters += ';';
          // { rule/at-rule

          default:
            append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
            if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule) {
              // d m s
              case 100:
              case 109:
              case 115:
                parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                break;

              default:
                parse(characters, reference, reference, reference, [''], children, 0, points, children);
            }
        }

        index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
        break;
      // :

      case 58:
        length = 1 + strlen(characters), property = previous;

      default:
        if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;

        switch (characters += from(character), character * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters += '\f', -1);
            break;
          // ,

          case 44:
            points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
            break;
          // @

          case 64:
            // -
            if (peek() === 45) characters += delimit(next());
            atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
            break;
          // -

          case 45:
            if (previous === 45 && strlen(characters) == 2) variable = 0;
        }

    }
  }

  return rulesets;
}
/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */


function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = sizeof(rule);

  for (var i = 0, j = 0, k = 0; i < index; ++i) {
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) {
      if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
    }
  }

  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
}
/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */


function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */


function declaration(value, root, parent, length) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
}
/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */


function prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}
/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */


function serialize(children, callback) {
  var output = '';
  var length = sizeof(children);

  for (var i = 0; i < length; i++) {
    output += callback(children[i], i, children, callback) || '';
  }

  return output;
}
/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */


function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;

    case COMMENT:
      return '';

    case KEYFRAMES:
      return element.return = element.value + '{' + serialize(element.children, callback) + '}';

    case RULESET:
      element.value = element.props.join(',');
  }

  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
/**
 * @param {function[]} collection
 * @return {function}
 */


function middleware(collection) {
  var length = sizeof(collection);
  return function (element, index, children, callback) {
    var output = '';

    for (var i = 0; i < length; i++) {
      output += collection[i](element, index, children, callback) || '';
    }

    return output;
  };
}
/**
 * @param {function} callback
 * @return {function}
 */


function rulesheet(callback) {
  return function (element) {
    if (!element.root) if (element = element.return) callback(element);
  };
}
/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */


function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element.return) switch (element.type) {
    case DECLARATION:
      element.return = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244


var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();

var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};

var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var isBrowser$6 = typeof document !== 'undefined';
var getServerStylisCache = isBrowser$6 ? undefined : weakMemoize(function () {
  return memoize(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (false) {}

  if (isBrowser$6 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  if (isBrowser$6) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (false) {}

  if (isBrowser$6) {
    var currentSheet;
    var finalizingPlugins = [stringify,  false ? 0 : rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (false) {}

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];

    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        false) {}

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet$1({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};
var reactIs$1 = {
  exports: {}
};
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;

reactIs_production_min.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

reactIs_production_min.isConcurrentMode = A;

reactIs_production_min.isContextConsumer = function (a) {
  return z(a) === k;
};

reactIs_production_min.isContextProvider = function (a) {
  return z(a) === h;
};

reactIs_production_min.isElement = function (a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};

reactIs_production_min.isForwardRef = function (a) {
  return z(a) === n;
};

reactIs_production_min.isFragment = function (a) {
  return z(a) === e;
};

reactIs_production_min.isLazy = function (a) {
  return z(a) === t;
};

reactIs_production_min.isMemo = function (a) {
  return z(a) === r;
};

reactIs_production_min.isPortal = function (a) {
  return z(a) === d;
};

reactIs_production_min.isProfiler = function (a) {
  return z(a) === g;
};

reactIs_production_min.isStrictMode = function (a) {
  return z(a) === f;
};

reactIs_production_min.isSuspense = function (a) {
  return z(a) === p;
};

reactIs_production_min.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

reactIs_production_min.typeOf = z;
var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {}

if (true) {
  reactIs$1.exports = reactIs_production_min;
} else {}

var reactIs = reactIs$1.exports;
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics$2(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics$2(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics$2; // and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent) {
  return hoistNonReactStatics_cjs(targetComponent, sourceComponent);
};

var hoistNonReactStatics$1 = hoistNonReactStatics;
var isBrowser$5 = typeof document !== 'undefined';

function getRegisteredStyles$1(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}

var registerStyles$1 = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$5 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};

var insertStyles$1 = function insertStyles(cache, serialized, isStringTag) {
  registerStyles$1(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$5 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$5 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86


function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var ILLEGAL_ESCAPE_SEQUENCE_ERROR$2 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR$1 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex$1 = /[A-Z]|^ms/g;
var animationRegex$1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty$1 = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue$1 = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName$1 = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty$1(styleName) ? styleName : styleName.replace(hyphenateRegex$1, '-$&').toLowerCase();
});

var processStyleValue$1 = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex$1, function (match, p1, p2) {
            cursor$1 = {
              name: p1,
              styles: p2,
              next: cursor$1
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty$1(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache$1, hyphenPattern$1, msPattern$1, oldProcessStyleValue$1, contentValues$1, contentValuePattern$1; }

function handleInterpolation$1(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (_typeof(interpolation)) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor$1 = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor$1
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor$1 = {
                name: next.name,
                styles: next.styles,
                next: cursor$1
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject$1(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor$1;
          var result = interpolation(mergedProps);
          cursor$1 = previousCursor;
          return handleInterpolation$1(mergedProps, registered, result);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject$1(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation$1(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (_typeof(value) !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue$1(value)) {
          string += processStyleName$1(_key) + ":" + processStyleValue$1(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue$1(value[_i])) {
              string += processStyleName$1(_key) + ":" + processStyleValue$1(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation$1(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName$1(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern$1 = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern$1;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor$1;

var serializeStyles$1 = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && _typeof(args[0]) === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor$1 = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation$1(mergedProps, registered, strings);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation$1(mergedProps, registered, args[i]);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern$1.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern$1.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor$1
  };
};

var isBrowser$4 = typeof document !== 'undefined';
var hasOwnProperty$1 = {}.hasOwnProperty;
var EmotionCacheContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_37__.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

if (false) {}

var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react__WEBPACK_IMPORTED_MODULE_37__.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$4) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = (0,react__WEBPACK_IMPORTED_MODULE_37__.useContext)(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_37__.createContext)({});

if (false) {}

var useTheme$1 = function useTheme() {
  return (0,react__WEBPACK_IMPORTED_MODULE_37__.useContext)(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  if (false) {}

  return _extends$1({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return getTheme(outerTheme, theme);
  });
});

var ThemeProvider = function ThemeProvider(props) {
  var theme = (0,react__WEBPACK_IMPORTED_MODULE_37__.useContext)(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(ThemeContext.Provider, {
    value: theme
  }, props.children);
};

function withTheme$1(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_37__.useContext)(ThemeContext);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(Component, _extends$1({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.forwardRef)(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics$1(WithTheme, Component);
}

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var isBrowser$1$1 = typeof document !== 'undefined';
var useInsertionEffect$2 = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_37__, 2)))['useInsertion' + 'Effect'] ? /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_37__, 2)))['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
  create();
};

function useInsertionEffectMaybe$1(create) {
  if (!isBrowser$1$1) {
    return create();
  }

  useInsertionEffect$2(create);
}

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';

var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty$1.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (false) { var label; }

  return newProps;
};

var Insertion$2 = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles$1(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe$1(function () {
    return insertStyles$1(cache, serialized, isStringTag);
  });

  if (!isBrowser$4 && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles$1(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles$1(registeredStyles, undefined, (0,react__WEBPACK_IMPORTED_MODULE_37__.useContext)(ThemeContext));

  if (false) { var labelFromStack; }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty$1.call(props, key) && key !== 'css' && key !== typePropName && ( true || 0)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(react__WEBPACK_IMPORTED_MODULE_37__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(Insertion$2, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(WrappedComponent, newProps));
});

if (false) {}
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe


function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (false) { var isImportRule; }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (false) {}
  };

  return StyleSheet;
}();

var pkg = {
  name: "@emotion/react",
  version: "11.8.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  types: "types/index.d.ts",
  files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.js", "macro.d.ts", "macro.js.flow"],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.13.10",
    "@emotion/babel-plugin": "^11.7.1",
    "@emotion/cache": "^11.7.1",
    "@emotion/serialize": "^1.0.2",
    "@emotion/sheet": "^1.1.0",
    "@emotion/utils": "^1.1.0",
    "@emotion/weak-memoize": "^0.2.5",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: true
    },
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@babel/core": "^7.13.10",
    "@emotion/css": "11.7.1",
    "@emotion/css-prettifier": "1.0.1",
    "@emotion/server": "11.4.0",
    "@emotion/styled": "11.8.1",
    "@types/react": "^16.9.11",
    dtslint: "^0.3.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"],
    umdName: "emotionReact"
  }
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty$1.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_37__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_37__.createElement.apply(null, createElementArgArray);
};

var useInsertionEffect$1 = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_37__, 2)))['useInsertion' + 'Effect'] ? /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_37__, 2)))['useInsertion' + 'Effect'] : react__WEBPACK_IMPORTED_MODULE_37__.useLayoutEffect;
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global$1 = /* #__PURE__ */withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;
  var serialized = serializeStyles$1([styles], undefined, (0,react__WEBPACK_IMPORTED_MODULE_37__.useContext)(ThemeContext));

  if (!isBrowser$4) {
    var _ref;

    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }

    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);

    if (shouldCache) {
      return null;
    }

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = (0,react__WEBPACK_IMPORTED_MODULE_37__.useRef)();
  useInsertionEffect$1(function () {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffect$1(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles$1(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (false) {}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles$1(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (_typeof(arg)) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (false) {}

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles$1(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion$1 = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectMaybe$1(function () {
    var rules = '';

    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles$1(cache, serializedArr[i], false);

      if (!isBrowser$4 && res !== undefined) {
        rules += res;
      }
    }

    if (!isBrowser$4) {
      return rules;
    }
  });

  if (!isBrowser$4 && rules.length !== 0) {
    var _ref2;

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function (serialized) {
      return serialized.name;
    }).join(' '), _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var ClassNames = /* #__PURE__ */withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles$1(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles$1(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: (0,react__WEBPACK_IMPORTED_MODULE_37__.useContext)(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(react__WEBPACK_IMPORTED_MODULE_37__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(Insertion$1, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

if (false) {}

if (false) { var globalKey, globalContext, isJest, isBrowser$3; }

var isBrowser$2 = typeof document !== 'undefined';

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}

var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$2 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};

var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$2 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$2 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (_typeof(interpolation)) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (_typeof(value) !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;

var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && _typeof(args[0]) === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var isBrowser = typeof document !== 'undefined';
var useInsertionEffect = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_37__, 2)))['useInsertion' + 'Effect'] ? /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_37___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_37__, 2)))['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
  create();
};

function useInsertionEffectMaybe(create) {
  if (!isBrowser) {
    return create();
  }

  useInsertionEffect(create);
}

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser$1 = typeof document !== 'undefined';

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser$1 && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var createStyled = function createStyled(tag, options) {
  if (false) {}

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = withEmotionCache(function (props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = (0,react__WEBPACK_IMPORTED_MODULE_37__.useContext)(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(react__WEBPACK_IMPORTED_MODULE_37__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof FinalTag === 'string'
      }), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_37__.createElement)(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {} // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends$1({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}
/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */


var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": "remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n",
  "78": "base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (true) {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else { var _len2, args, _key2; }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}
/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */


function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}
/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */


var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

var reduceHexValue$1 = reduceHexValue;

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */


function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (_typeof(value) === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */


function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (_typeof(value) === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */


function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (_typeof(value) === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */


function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (_typeof(firstValue) === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (_typeof(color) !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
} // Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare


function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */


function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(darken);
var curriedDarken$1 = curriedDarken;
/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(lighten);
var curriedLighten$1 = curriedLighten;
/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

function opacify(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedOpacify = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(opacify);
var curriedOpacify$1 = curriedOpacify;
/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff'),
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')};
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(transparentize);
var curriedTransparentize$1 = curriedTransparentize;
var color = {
  // Official color palette
  primary: '#FF4785',
  secondary: '#1EA7FD',
  tertiary: '#FAFBFC',
  ancillary: '#22a699',
  // Complimentary
  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',
  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',
  // For borders
  border: 'rgba(0,0,0,.1)',
  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00',
  critical: '#FFFFFF',
  defaultText: '#333333',
  inverseText: '#FFFFFF'
};
var background = {
  app: '#F6F9FC',
  bar: '#FFFFFF',
  content: color.lightest,
  gridCellSize: 10,
  hoverable: curriedTransparentize$1(0.93, color.secondary),
  // Notification, error, and warning backgrounds
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
  critical: '#FF4400'
};
var typography = {
  fonts: {
    base: ['"Nunito Sans"', '-apple-system', '".SFNSText-Regular"', '"San Francisco"', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
    mono: ['ui-monospace', 'Menlo', 'Monaco', '"Roboto Mono"', '"Oxygen Mono"', '"Ubuntu Monospace"', '"Source Code Pro"', '"Droid Sans Mono"', '"Courier New"', 'monospace'].join(', ')
  },
  weight: {
    regular: 400,
    bold: 700,
    black: 900
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90
  }
};
var createReset = memoizerific__WEBPACK_IMPORTED_MODULE_38___default()(1)(function (_ref3) {
  var typography = _ref3.typography;
  return {
    body: {
      fontFamily: typography.fonts.base,
      fontSize: typography.size.s3,
      margin: 0,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      WebkitOverflowScrolling: 'touch'
    },
    '*': {
      boxSizing: 'border-box'
    },
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: typography.weight.regular,
      margin: 0,
      padding: 0
    },
    'button, input, textarea, select': {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box'
    },
    sub: {
      fontSize: '0.8em',
      bottom: '-0.2em'
    },
    sup: {
      fontSize: '0.8em',
      top: '-0.2em'
    },
    'b, strong': {
      fontWeight: typography.weight.bold
    },
    hr: {
      border: 'none',
      borderTop: '1px solid silver',
      clear: 'both',
      marginBottom: '1.25rem'
    },
    code: {
      fontFamily: typography.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'inline-block',
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: 'baseline',
      color: 'inherit'
    },
    pre: {
      fontFamily: typography.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      lineHeight: '18px',
      padding: '11px 1rem',
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      borderRadius: 3,
      margin: '1rem 0'
    }
  };
});
var createGlobal = memoizerific__WEBPACK_IMPORTED_MODULE_38___default()(1)(function (_ref4) {
  var color = _ref4.color,
      background = _ref4.background,
      typography = _ref4.typography;
  var resetStyles = createReset({
    typography: typography
  });
  return Object.assign(Object.assign({}, resetStyles), {
    body: Object.assign(Object.assign({}, resetStyles.body), {
      color: color.defaultText,
      background: background.app,
      overflow: 'hidden'
    }),
    hr: Object.assign(Object.assign({}, resetStyles.hr), {
      borderTop: "1px solid ".concat(color.border)
    })
  });
});
var theme$1 = {
  base: 'light',
  // Storybook-specific color palette
  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',
  // UI
  appBg: background.app,
  appContentBg: color.lightest,
  appBorderColor: color.border,
  appBorderRadius: 4,
  // Fonts
  fontBase: typography.fonts.base,
  fontCode: typography.fonts.mono,
  // Text colors
  textColor: color.darkest,
  textInverseColor: color.lightest,
  textMutedColor: color.dark,
  // Toolbar default and active colors
  barTextColor: color.mediumdark,
  barSelectedColor: color.secondary,
  barBg: color.lightest,
  // Form colors
  inputBg: color.lightest,
  inputBorder: color.border,
  inputTextColor: color.darkest,
  inputBorderRadius: 4
};
var theme = {
  base: 'dark',
  // Storybook-specific color palette
  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',
  // UI
  appBg: '#2f2f2f',
  appContentBg: color.darkest,
  appBorderColor: 'rgba(255,255,255,.1)',
  appBorderRadius: 4,
  // Fonts
  fontBase: typography.fonts.base,
  fontCode: typography.fonts.mono,
  // Text colors
  textColor: color.lightest,
  textInverseColor: color.darkest,
  textMutedColor: color.mediumdark,
  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: color.secondary,
  barBg: color.darkest,
  // Form colors
  inputBg: '#3f3f3f',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: color.lightest,
  inputBorderRadius: 4
};
var win;

if (typeof window !== "undefined") {
  win = window;
} else if (typeof commonjsGlobal !== "undefined") {
  win = commonjsGlobal;
} else if (typeof self !== "undefined") {
  win = self;
} else {
  win = {};
}

var window_1 = win;
var globalWindow = window_1.window;

var mkColor = function mkColor(color) {
  return {
    color: color
  };
}; // Check if it is a string. This is for the sake of warning users
// and the successive guarding logics that use String methods.


var isColorString = function isColorString(color) {
  if (typeof color !== 'string') {
    _storybook_client_logger__WEBPACK_IMPORTED_MODULE_39__/* .logger.warn */ .kg.warn("Color passed to theme object should be a string. Instead " + "".concat(color, "(").concat(_typeof(color), ") was passed."));
    return false;
  }

  return true;
}; // Passing arguments that can't be converted to RGB such as linear-gradient
// to library polished's functions such as lighten or darken throws the error
// that crashes the entire storybook. It needs to be guarded when arguments
// of those functions are from user input.


var isValidColorForPolished = function isValidColorForPolished(color) {
  return !/(gradient|var|calc)/.test(color);
};

var applyPolished = function applyPolished(type, color) {
  if (type === 'darken') {
    return rgba("".concat(curriedDarken$1(1, color)), 0.95);
  }

  if (type === 'lighten') {
    return rgba("".concat(curriedLighten$1(1, color)), 0.95);
  }

  return color;
};

var colorFactory = function colorFactory(type) {
  return function (color) {
    if (!isColorString(color)) {
      return color;
    }

    if (!isValidColorForPolished(color)) {
      return color;
    } // Guard anything that is not working with polished.


    try {
      return applyPolished(type, color);
    } catch (error) {
      return color;
    }
  };
};

var lightenColor = colorFactory('lighten');
var darkenColor = colorFactory('darken'); // The default color scheme is light so unless the preferred color
// scheme is set to dark we always want to use the light theme

var getPreferredColorScheme = function getPreferredColorScheme() {
  if (!globalWindow || !globalWindow.matchMedia) return 'light';
  var isDarkThemePreferred = globalWindow.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkThemePreferred) return 'dark';
  return 'light';
}; // This generates theme variables in the correct shape for the UI


var themes = {
  light: theme$1,
  dark: theme,
  normal: theme$1
};
var preferredColorScheme = getPreferredColorScheme();

var create$1 = function create$1() {
  var vars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    base: preferredColorScheme
  };
  var rest = arguments.length > 1 ? arguments[1] : undefined;
  var inherit = Object.assign(Object.assign(Object.assign(Object.assign({}, themes[preferredColorScheme]), themes[vars.base] || {}), vars), {
    base: themes[vars.base] ? vars.base : preferredColorScheme
  });
  return Object.assign(Object.assign(Object.assign({}, rest), inherit), {
    barSelectedColor: vars.barSelectedColor || inherit.colorSecondary
  });
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

var easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)'
};
var rotate360 = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"])));
var glow = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n"])));
var float = keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n"])));
var jiggle = keyframes(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n"])));
var inlineGlow = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  animation: ", " 1.5s ease-in-out infinite;\n  color: transparent;\n  cursor: progress;\n"])), glow); // hover & active state for links and buttons

var hoverable = css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  transition: all 150ms ease-out;\n  transform: translate3d(0, 0, 0);\n\n  &:hover {\n    transform: translate3d(0, -2px, 0);\n  }\n\n  &:active {\n    transform: translate3d(0, 0, 0);\n  }\n"])));
var animation = {
  rotate360: rotate360,
  glow: glow,
  float: float,
  jiggle: jiggle,
  inlineGlow: inlineGlow,
  hoverable: hoverable
};
var chromeDark = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
  BASE_COLOR: 'rgb(213, 213, 213)',
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
  HTML_TAG_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
  HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
  ARROW_COLOR: 'rgb(145, 145, 145)',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: '0',
  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
  TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
  TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
  TABLE_SORT_ICON_COLOR: 'black',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};
var chromeLight = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: 'white',
  BASE_COLOR: 'black',
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
  HTML_TAG_COLOR: 'rgb(168, 148, 166)',
  HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
  HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
  ARROW_COLOR: '#6e6e6e',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: '0',
  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: '#aaa',
  TABLE_TH_BACKGROUND_COLOR: '#eee',
  TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
  TABLE_SORT_ICON_COLOR: '#6e6e6e',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};

var convertColors = function convertColors(colors) {
  return Object.entries(colors).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        k = _ref6[0],
        v = _ref6[1];

    return Object.assign(Object.assign({}, acc), _defineProperty({}, k, mkColor(v)));
  }, {});
};

var create = function create(_ref7) {
  var colors = _ref7.colors,
      mono = _ref7.mono;
  var colorsObjs = convertColors(colors);
  return {
    token: {
      fontFamily: mono,
      WebkitFontSmoothing: 'antialiased',
      '&.tag': colorsObjs.red3,
      '&.comment': Object.assign(Object.assign({}, colorsObjs.green1), {
        fontStyle: 'italic'
      }),
      '&.prolog': Object.assign(Object.assign({}, colorsObjs.green1), {
        fontStyle: 'italic'
      }),
      '&.doctype': Object.assign(Object.assign({}, colorsObjs.green1), {
        fontStyle: 'italic'
      }),
      '&.cdata': Object.assign(Object.assign({}, colorsObjs.green1), {
        fontStyle: 'italic'
      }),
      '&.string': colorsObjs.red1,
      '&.url': colorsObjs.cyan1,
      '&.symbol': colorsObjs.cyan1,
      '&.number': colorsObjs.cyan1,
      '&.boolean': colorsObjs.cyan1,
      '&.variable': colorsObjs.cyan1,
      '&.constant': colorsObjs.cyan1,
      '&.inserted': colorsObjs.cyan1,
      '&.atrule': colorsObjs.blue1,
      '&.keyword': colorsObjs.blue1,
      '&.attr-value': colorsObjs.blue1,
      '&.punctuation': colorsObjs.gray1,
      '&.operator': colorsObjs.gray1,
      '&.function': colorsObjs.gray1,
      '&.deleted': colorsObjs.red2,
      '&.important': {
        fontWeight: 'bold'
      },
      '&.bold': {
        fontWeight: 'bold'
      },
      '&.italic': {
        fontStyle: 'italic'
      },
      '&.class-name': colorsObjs.cyan2,
      '&.selector': colorsObjs.red3,
      '&.attr-name': colorsObjs.red4,
      '&.property': colorsObjs.red4,
      '&.regex': colorsObjs.red4,
      '&.entity': colorsObjs.red4,
      '&.directive.tag .tag': Object.assign({
        background: '#ffff00'
      }, colorsObjs.gray1)
    },
    'language-json .token.boolean': colorsObjs.blue1,
    'language-json .token.number': colorsObjs.blue1,
    'language-json .token.property': colorsObjs.cyan2,
    namespace: {
      opacity: 0.7
    }
  };
};

var lightSyntaxColors = {
  green1: '#008000',
  red1: '#A31515',
  red2: '#9a050f',
  red3: '#800000',
  red4: '#ff0000',
  gray1: '#393A34',
  cyan1: '#36acaa',
  cyan2: '#2B91AF',
  blue1: '#0000ff',
  blue2: '#00009f'
};
var darkSyntaxColors = {
  green1: '#7C7C7C',
  red1: '#92C379',
  red2: '#9a050f',
  red3: '#A8FF60',
  red4: '#96CBFE',
  gray1: '#EDEDED',
  cyan1: '#C6C5FE',
  cyan2: '#FFFFB6',
  blue1: '#B474DD',
  blue2: '#00009f'
};

var createColors = function createColors(vars) {
  return {
    // Changeable colors
    primary: vars.colorPrimary,
    secondary: vars.colorSecondary,
    tertiary: color.tertiary,
    ancillary: color.ancillary,
    // Complimentary
    orange: color.orange,
    gold: color.gold,
    green: color.green,
    seafoam: color.seafoam,
    purple: color.purple,
    ultraviolet: color.ultraviolet,
    // Monochrome
    lightest: color.lightest,
    lighter: color.lighter,
    light: color.light,
    mediumlight: color.mediumlight,
    medium: color.medium,
    mediumdark: color.mediumdark,
    dark: color.dark,
    darker: color.darker,
    darkest: color.darkest,
    // For borders
    border: color.border,
    // Status
    positive: color.positive,
    negative: color.negative,
    warning: color.warning,
    critical: color.critical,
    defaultText: vars.textColor || color.darkest,
    inverseText: vars.textInverseColor || color.lightest
  };
};

var convert = function convert() {
  var inherit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : themes[getPreferredColorScheme()];

  var base = inherit.base,
      colorPrimary = inherit.colorPrimary,
      colorSecondary = inherit.colorSecondary,
      appBg = inherit.appBg,
      appContentBg = inherit.appContentBg,
      appBorderColor = inherit.appBorderColor,
      appBorderRadius = inherit.appBorderRadius,
      fontBase = inherit.fontBase,
      fontCode = inherit.fontCode,
      textColor = inherit.textColor,
      textInverseColor = inherit.textInverseColor,
      barTextColor = inherit.barTextColor,
      barSelectedColor = inherit.barSelectedColor,
      barBg = inherit.barBg,
      inputBg = inherit.inputBg,
      inputBorder = inherit.inputBorder,
      inputTextColor = inherit.inputTextColor,
      inputBorderRadius = inherit.inputBorderRadius,
      brandTitle = inherit.brandTitle,
      brandUrl = inherit.brandUrl,
      brandImage = inherit.brandImage,
      brandTarget = inherit.brandTarget,
      gridCellSize = inherit.gridCellSize,
      rest = __rest(inherit, ["base", "colorPrimary", "colorSecondary", "appBg", "appContentBg", "appBorderColor", "appBorderRadius", "fontBase", "fontCode", "textColor", "textInverseColor", "barTextColor", "barSelectedColor", "barBg", "inputBg", "inputBorder", "inputTextColor", "inputBorderRadius", "brandTitle", "brandUrl", "brandImage", "brandTarget", "gridCellSize"]);

  return Object.assign(Object.assign({}, rest || {}), {
    base: base,
    color: createColors(inherit),
    background: {
      app: appBg,
      bar: barBg,
      content: appContentBg,
      gridCellSize: gridCellSize || background.gridCellSize,
      hoverable: background.hoverable,
      positive: background.positive,
      negative: background.negative,
      warning: background.warning,
      critical: background.critical
    },
    typography: {
      fonts: {
        base: fontBase,
        mono: fontCode
      },
      weight: typography.weight,
      size: typography.size
    },
    animation: animation,
    easing: easing,
    input: {
      border: inputBorder,
      background: inputBg,
      color: inputTextColor,
      borderRadius: inputBorderRadius
    },
    // UI
    layoutMargin: 10,
    appBorderColor: appBorderColor,
    appBorderRadius: appBorderRadius,
    // Toolbar default/active colors
    barTextColor: barTextColor,
    barSelectedColor: barSelectedColor || colorSecondary,
    barBg: barBg,
    // Brand logo/text
    brand: {
      title: brandTitle,
      url: brandUrl,
      image: brandImage || (brandTitle ? null : undefined),
      target: brandTarget
    },
    code: create({
      colors: base === 'light' ? lightSyntaxColors : darkSyntaxColors,
      mono: fontCode
    }),
    // Addon actions theme
    // API example https://github.com/xyc/react-inspector/blob/master/src/styles/themes/chromeLight.js
    addonActionsTheme: Object.assign(Object.assign({}, base === 'light' ? chromeLight : chromeDark), {
      BASE_FONT_FAMILY: fontCode,
      BASE_FONT_SIZE: typography.size.s2 - 1,
      BASE_LINE_HEIGHT: '18px',
      BASE_BACKGROUND_COLOR: 'transparent',
      BASE_COLOR: textColor,
      ARROW_COLOR: curriedOpacify$1(0.2, appBorderColor),
      ARROW_MARGIN_RIGHT: 4,
      ARROW_FONT_SIZE: 8,
      TREENODE_FONT_FAMILY: fontCode,
      TREENODE_FONT_SIZE: typography.size.s2 - 1,
      TREENODE_LINE_HEIGHT: '18px',
      TREENODE_PADDING_LEFT: 12
    })
  });
};

var isEmpty = function isEmpty(o) {
  return Object.keys(o).length === 0;
};

var isObject = function isObject(o) {
  return o != null && _typeof(o) === 'object';
};

var hasOwnProperty = function hasOwnProperty(o) {
  var _Object$prototype$has;

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return (_Object$prototype$has = Object.prototype.hasOwnProperty).call.apply(_Object$prototype$has, [o].concat(args));
};

var deletedDiff = function deletedDiff(lhs, rhs) {
  if (lhs === rhs || !isObject(lhs) || !isObject(rhs)) return {};
  var l = lhs;
  var r = rhs;
  return Object.keys(l).reduce(function (acc, key) {
    if (hasOwnProperty(r, key)) {
      var difference = deletedDiff(l[key], r[key]);
      if (isObject(difference) && isEmpty(difference)) return acc;
      acc[key] = difference;
      return acc;
    }

    acc[key] = undefined;
    return acc;
  }, {});
};

function dedent(templ) {
  var values = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }

  var strings = Array.from(typeof templ === 'string' ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var indentLengths = strings.reduce(function (arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);

    if (matches) {
      return arr.concat(matches.map(function (match) {
        var _a, _b;

        return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }

    return arr;
  }, []);

  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[\t ]{" + Math.min.apply(Math, indentLengths) + "}", 'g');
    strings = strings.map(function (str) {
      return str.replace(pattern_1, '\n');
    });
  }

  strings[0] = strings[0].replace(/^\r?\n/, '');
  var string = strings[0];
  values.forEach(function (value, i) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : '';
    var indentedValue = value;

    if (typeof value === 'string' && value.includes('\n')) {
      indentedValue = String(value).split('\n').map(function (str, i) {
        return i === 0 ? str : "" + endentation + str;
      }).join('\n');
    }

    string += indentedValue + strings[i + 1];
  });
  return string;
}

var ensure = function ensure(input) {
  if (!input) {
    return convert(theme$1);
  }

  var missing = deletedDiff(theme$1, input);

  if (Object.keys(missing).length) {
    _storybook_client_logger__WEBPACK_IMPORTED_MODULE_39__/* .logger.warn */ .kg.warn(dedent(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          Your theme is missing properties, you should update your theme!\n\n          theme-data missing:\n        "]))), missing);
  }

  return convert(input);
}; // eslint-disable-next-line @typescript-eslint/triple-slash-reference


var useTheme = useTheme$1;
var withTheme = withTheme$1;
var Global = Global$1;
var styled = newStyled;
var ignoreSsrWarning = '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';



/***/ }),

/***/ 73977:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(42376)();


/***/ }),

/***/ 19505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Call = __webpack_require__(50581);
var Get = __webpack_require__(1391);
var GetMethod = __webpack_require__(67364);
var IsRegExp = __webpack_require__(10840);
var ToString = __webpack_require__(96846);
var RequireObjectCoercible = __webpack_require__(39619);
var callBound = __webpack_require__(21924);
var hasSymbols = __webpack_require__(41405)();
var flagsGetter = __webpack_require__(2847);

var $indexOf = callBound('String.prototype.indexOf');

var regexpMatchAllPolyfill = __webpack_require__(46966);

var getMatcher = function getMatcher(regexp) { // eslint-disable-line consistent-return
	var matcherPolyfill = regexpMatchAllPolyfill();
	if (hasSymbols && typeof Symbol.matchAll === 'symbol') {
		var matcher = GetMethod(regexp, Symbol.matchAll);
		if (matcher === RegExp.prototype[Symbol.matchAll] && matcher !== matcherPolyfill) {
			return matcherPolyfill;
		}
		return matcher;
	}
	// fallback for pre-Symbol.matchAll environments
	if (IsRegExp(regexp)) {
		return matcherPolyfill;
	}
};

module.exports = function matchAll(regexp) {
	var O = RequireObjectCoercible(this);

	if (typeof regexp !== 'undefined' && regexp !== null) {
		var isRegExp = IsRegExp(regexp);
		if (isRegExp) {
			// workaround for older engines that lack RegExp.prototype.flags
			var flags = 'flags' in regexp ? Get(regexp, 'flags') : flagsGetter(regexp);
			RequireObjectCoercible(flags);
			if ($indexOf(ToString(flags), 'g') < 0) {
				throw new TypeError('matchAll requires a global regular expression');
			}
		}

		var matcher = getMatcher(regexp);
		if (typeof matcher !== 'undefined') {
			return Call(matcher, regexp, [O]);
		}
	}

	var S = ToString(O);
	// var rx = RegExpCreate(regexp, 'g');
	var rx = new RegExp(regexp, 'g');
	return Call(getMatcher(rx), rx, [S]);
};


/***/ }),

/***/ 46966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var hasSymbols = __webpack_require__(41405)();
var regexpMatchAll = __webpack_require__(27201);

module.exports = function getRegExpMatchAllPolyfill() {
	if (!hasSymbols || typeof Symbol.matchAll !== 'symbol' || typeof RegExp.prototype[Symbol.matchAll] !== 'function') {
		return regexpMatchAll;
	}
	return RegExp.prototype[Symbol.matchAll];
};


/***/ }),

/***/ 83447:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var implementation = __webpack_require__(19505);

module.exports = function getPolyfill() {
	if (String.prototype.matchAll) {
		try {
			''.matchAll(RegExp.prototype);
		} catch (e) {
			return String.prototype.matchAll;
		}
	}
	return implementation;
};


/***/ }),

/***/ 27201:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



// var Construct = require('es-abstract/2021/Construct');
var CreateRegExpStringIterator = __webpack_require__(53937);
var Get = __webpack_require__(1391);
var Set = __webpack_require__(40105);
var SpeciesConstructor = __webpack_require__(39655);
var ToLength = __webpack_require__(88305);
var ToString = __webpack_require__(96846);
var Type = __webpack_require__(53633);
var flagsGetter = __webpack_require__(2847);
var callBound = __webpack_require__(21924);

var $indexOf = callBound('String.prototype.indexOf');

var OrigRegExp = RegExp;

var supportsConstructingWithFlags = 'flags' in RegExp.prototype;

var constructRegexWithFlags = function constructRegex(C, R) {
	var matcher;
	// workaround for older engines that lack RegExp.prototype.flags
	var flags = 'flags' in R ? Get(R, 'flags') : ToString(flagsGetter(R));
	if (supportsConstructingWithFlags && typeof flags === 'string') {
		matcher = new C(R, flags);
	} else if (C === OrigRegExp) {
		// workaround for older engines that can not construct a RegExp with flags
		matcher = new C(R.source, flags);
	} else {
		matcher = new C(R, flags);
	}
	return { flags: flags, matcher: matcher };
};

var regexMatchAll = function SymbolMatchAll(string) {
	var R = this;
	if (Type(R) !== 'Object') {
		throw new TypeError('"this" value must be an Object');
	}
	var S = ToString(string);
	var C = SpeciesConstructor(R, OrigRegExp);

	var tmp = constructRegexWithFlags(C, R);
	// var flags = ToString(Get(R, 'flags'));
	var flags = tmp.flags;
	// var matcher = Construct(C, [R, flags]);
	var matcher = tmp.matcher;

	var lastIndex = ToLength(Get(R, 'lastIndex'));
	Set(matcher, 'lastIndex', lastIndex, true);
	var global = $indexOf(flags, 'g') > -1;
	var fullUnicode = $indexOf(flags, 'u') > -1;
	return CreateRegExpStringIterator(matcher, S, global, fullUnicode);
};

var defineP = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

if (defineP && gOPD) {
	var desc = gOPD(regexMatchAll, 'name');
	if (desc && desc.configurable) {
		defineP(regexMatchAll, 'name', { value: '[Symbol.matchAll]' });
	}
}

module.exports = regexMatchAll;


/***/ }),

/***/ 42376:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var define = __webpack_require__(4289);
var hasSymbols = __webpack_require__(41405)();
var getPolyfill = __webpack_require__(83447);
var regexpMatchAllPolyfill = __webpack_require__(46966);

var defineP = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

module.exports = function shimMatchAll() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ matchAll: polyfill },
		{ matchAll: function () { return String.prototype.matchAll !== polyfill; } }
	);
	if (hasSymbols) {
		// eslint-disable-next-line no-restricted-properties
		var symbol = Symbol.matchAll || (Symbol['for'] ? Symbol['for']('Symbol.matchAll') : Symbol('Symbol.matchAll'));
		define(
			Symbol,
			{ matchAll: symbol },
			{ matchAll: function () { return Symbol.matchAll !== symbol; } }
		);

		if (defineP && gOPD) {
			var desc = gOPD(Symbol, symbol);
			if (!desc || desc.configurable) {
				defineP(Symbol, symbol, {
					configurable: false,
					enumerable: false,
					value: symbol,
					writable: false
				});
			}
		}

		var regexpMatchAll = regexpMatchAllPolyfill();
		var func = {};
		func[symbol] = regexpMatchAll;
		var predicate = {};
		predicate[symbol] = function () {
			return RegExp.prototype[symbol] !== regexpMatchAll;
		};
		define(RegExp.prototype, func, predicate);
	}
	return polyfill;
};


/***/ }),

/***/ 64297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var ToLength = __webpack_require__(88305);
var ToString = __webpack_require__(96846);
var RequireObjectCoercible = __webpack_require__(39619);
var callBound = __webpack_require__(21924);

var $slice = callBound('String.prototype.slice');

module.exports = function padEnd(maxLength) {
	var O = RequireObjectCoercible(this);
	var S = ToString(O);
	var stringLength = ToLength(S.length);
	var fillString;
	if (arguments.length > 1) {
		fillString = arguments[1];
	}
	var filler = typeof fillString === 'undefined' ? '' : ToString(fillString);
	if (filler === '') {
		filler = ' ';
	}
	var intMaxLength = ToLength(maxLength);
	if (intMaxLength <= stringLength) {
		return S;
	}
	var fillLen = intMaxLength - stringLength;
	while (filler.length < fillLen) {
		var fLen = filler.length;
		var remainingCodeUnits = fillLen - fLen;
		filler += fLen > remainingCodeUnits ? $slice(filler, 0, remainingCodeUnits) : filler;
	}

	var truncatedStringFiller = filler.length > fillLen ? $slice(filler, 0, fillLen) : filler;
	return S + truncatedStringFiller;
};


/***/ }),

/***/ 92717:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var implementation = __webpack_require__(64297);

module.exports = function getPolyfill() {
	return typeof String.prototype.padEnd === 'function' ? String.prototype.padEnd : implementation;
};


/***/ }),

/***/ 64428:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var getPolyfill = __webpack_require__(92717);
var define = __webpack_require__(4289);

module.exports = function shimPadEnd() {
	var polyfill = getPolyfill();
	define(String.prototype, { padEnd: polyfill }, {
		padEnd: function testPadEnd() {
			return String.prototype.padEnd !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ 87496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var ToLength = __webpack_require__(88305);
var ToString = __webpack_require__(96846);
var RequireObjectCoercible = __webpack_require__(39619);

var callBound = __webpack_require__(21924);
var $slice = callBound('String.prototype.slice');

module.exports = function padStart(maxLength) {
	var O = RequireObjectCoercible(this);
	var S = ToString(O);
	var stringLength = ToLength(S.length);
	var fillString;
	if (arguments.length > 1) {
		fillString = arguments[1];
	}
	var filler = typeof fillString === 'undefined' ? '' : ToString(fillString);
	if (filler === '') {
		filler = ' ';
	}
	var intMaxLength = ToLength(maxLength);
	if (intMaxLength <= stringLength) {
		return S;
	}
	var fillLen = intMaxLength - stringLength;
	while (filler.length < fillLen) {
		var fLen = filler.length;
		var remainingCodeUnits = fillLen - fLen;
		filler += fLen > remainingCodeUnits ? $slice(filler, 0, remainingCodeUnits) : filler;
	}

	var truncatedStringFiller = filler.length > fillLen ? $slice(filler, 0, fillLen) : filler;
	return truncatedStringFiller + S;
};


/***/ }),

/***/ 33842:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var implementation = __webpack_require__(87496);

module.exports = function getPolyfill() {
	return typeof String.prototype.padStart === 'function' ? String.prototype.padStart : implementation;
};


/***/ }),

/***/ 14563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var getPolyfill = __webpack_require__(33842);
var define = __webpack_require__(4289);

module.exports = function shimPadStart() {
	var polyfill = getPolyfill();
	define(String.prototype, { padStart: polyfill }, {
		padStart: function testPadStart() {
			return String.prototype.padStart !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ 11464:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "Parser": () => (/* binding */ Parser),
/* harmony export */   "Position": () => (/* binding */ Position),
/* harmony export */   "SourceLocation": () => (/* binding */ SourceLocation),
/* harmony export */   "TokContext": () => (/* binding */ TokContext),
/* harmony export */   "Token": () => (/* binding */ Token),
/* harmony export */   "TokenType": () => (/* binding */ TokenType),
/* harmony export */   "defaultOptions": () => (/* binding */ defaultOptions),
/* harmony export */   "getLineInfo": () => (/* binding */ getLineInfo),
/* harmony export */   "isIdentifierChar": () => (/* binding */ isIdentifierChar),
/* harmony export */   "isIdentifierStart": () => (/* binding */ isIdentifierStart),
/* harmony export */   "isNewLine": () => (/* binding */ isNewLine),
/* harmony export */   "keywordTypes": () => (/* binding */ keywords$1),
/* harmony export */   "lineBreak": () => (/* binding */ lineBreak),
/* harmony export */   "lineBreakG": () => (/* binding */ lineBreakG),
/* harmony export */   "nonASCIIwhitespace": () => (/* binding */ nonASCIIwhitespace),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parseExpressionAt": () => (/* binding */ parseExpressionAt),
/* harmony export */   "tokContexts": () => (/* binding */ types$1),
/* harmony export */   "tokTypes": () => (/* binding */ types),
/* harmony export */   "tokenizer": () => (/* binding */ tokenizer),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
// Reserved word lists for various dialects of the language

var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};

// And the keywords

var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

var keywords = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};

var keywordRelationalOperator = /^in(stanceof)?$/;

// ## Character categories

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `bin/generate-identifier-regex.js`.
var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

// These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by bin/generate-identifier-regex.js

// eslint-disable-next-line comma-spacing
var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938];

// eslint-disable-next-line comma-spacing
var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];

// This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.
function isInAstralSet(code, set) {
  var pos = 0x10000;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) { return false }
    pos += set[i + 1];
    if (pos >= code) { return true }
  }
}

// Test whether a given character code starts an identifier.

function isIdentifierStart(code, astral) {
  if (code < 65) { return code === 36 }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes)
}

// Test whether a given character is part of an identifier.

function isIdentifierChar(code, astral) {
  if (code < 48) { return code === 36 }
  if (code < 58) { return true }
  if (code < 65) { return false }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
}

// ## Token types

// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.

// All token type variables start with an underscore, to make them
// easy to recognize.

// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// The `startsExpr` property is used to check if the token ends a
// `yield` expression. It is set on all token types that either can
// directly start an expression (like a quotation mark) or can
// continue an expression (like the body of a string).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.

var TokenType = function TokenType(label, conf) {
  if ( conf === void 0 ) conf = {};

  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};

function binop(name, prec) {
  return new TokenType(name, {beforeExpr: true, binop: prec})
}
var beforeExpr = {beforeExpr: true}, startsExpr = {startsExpr: true};

// Map keyword names to token types.

var keywords$1 = {};

// Succinct definitions of keyword token types
function kw(name, options) {
  if ( options === void 0 ) options = {};

  options.keyword = name;
  return keywords$1[name] = new TokenType(name, options)
}

var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),

  // Punctuation token types.
  bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
  assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
  incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
  prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", {beforeExpr: true}),
  coalesce: binop("??", 1),

  // Keyword token types.
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", {isLoop: true, beforeExpr: true}),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", {isLoop: true}),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", {isLoop: true}),
  _with: kw("with"),
  _new: kw("new", {beforeExpr: true, startsExpr: true}),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", {beforeExpr: true, binop: 7}),
  _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
  _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
  _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
  _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
};

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");

function isNewLine(code, ecma2019String) {
  return code === 10 || code === 13 || (!ecma2019String && (code === 0x2028 || code === 0x2029))
}

var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;

// Checks if an object has a property.

function has(obj, propName) {
  return hasOwnProperty.call(obj, propName)
}

var isArray = Array.isArray || (function (obj) { return (
  toString.call(obj) === "[object Array]"
); });

function wordsRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
}

// These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.

var Position = function Position(line, col) {
  this.line = line;
  this.column = col;
};

Position.prototype.offset = function offset (n) {
  return new Position(this.line, this.column + n)
};

var SourceLocation = function SourceLocation(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) { this.source = p.sourceFile; }
};

// The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.

function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;;) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset - cur)
    }
  }
}

// A second optional argument can be given to further configure
// the parser process. These options are recognized:

var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (2015), 7 (2016), 8 (2017), 9 (2018), or 10
  // (2019). This influences support for strict mode, the set of
  // reserved words, and support for new syntax features. The default
  // is 10.
  ecmaVersion: 10,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // the position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: false,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: false,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false
};

// Interpret and default an options object

function getOptions(opts) {
  var options = {};

  for (var opt in defaultOptions)
    { options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt]; }

  if (options.ecmaVersion >= 2015)
    { options.ecmaVersion -= 2009; }

  if (options.allowReserved == null)
    { options.allowReserved = options.ecmaVersion < 5; }

  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function (token) { return tokens.push(token); };
  }
  if (isArray(options.onComment))
    { options.onComment = pushComment(options, options.onComment); }

  return options
}

function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start: start,
      end: end
    };
    if (options.locations)
      { comment.loc = new SourceLocation(this, startLoc, endLoc); }
    if (options.ranges)
      { comment.range = [start, end]; }
    array.push(comment);
  }
}

// Each scope gets a bitset that may contain these flags
var
    SCOPE_TOP = 1,
    SCOPE_FUNCTION = 2,
    SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION,
    SCOPE_ASYNC = 4,
    SCOPE_GENERATOR = 8,
    SCOPE_ARROW = 16,
    SCOPE_SIMPLE_CATCH = 32,
    SCOPE_SUPER = 64,
    SCOPE_DIRECT_SUPER = 128;

function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0)
}

// Used in checkLVal and declareName to determine the type of a binding
var
    BIND_NONE = 0, // Not a binding
    BIND_VAR = 1, // Var-style binding
    BIND_LEXICAL = 2, // Let- or const-style binding
    BIND_FUNCTION = 3, // Function declaration
    BIND_SIMPLE_CATCH = 4, // Simple (identifier pattern) catch binding
    BIND_OUTSIDE = 5; // Special case for function names as bound inside the function

var Parser = function Parser(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
  var reserved = "";
  if (options.allowReserved !== true) {
    for (var v = options.ecmaVersion;; v--)
      { if (reserved = reservedWords[v]) { break } }
    if (options.sourceType === "module") { reserved += " await"; }
  }
  this.reservedWords = wordsRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);

  // Used to signal to callers of `readWord1` whether the word
  // contained any escape sequences. This is needed because words with
  // escape sequences must not be interpreted as keywords.
  this.containsEsc = false;

  // Set up token state

  // The current position of the tokenizer in the input.
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }

  // Properties of the current token:
  // Its type
  this.type = types.eof;
  // For tokens that include more information than their type, the value
  this.value = null;
  // Its start and end offset
  this.start = this.end = this.pos;
  // And, if locations are used, the {line, column} object
  // corresponding to those offsets
  this.startLoc = this.endLoc = this.curPosition();

  // Position information for the previous token
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;

  // The context stack is used to superficially track syntactic
  // context to predict whether a regular expression is allowed in a
  // given position.
  this.context = this.initialContext();
  this.exprAllowed = true;

  // Figure out if it's a module code.
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);

  // Used to signify the start of a potential arrow function
  this.potentialArrowAt = -1;

  // Positions to delayed-check that yield/await does not exist in default parameters.
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  // Labels in scope.
  this.labels = [];
  // Thus-far undefined exports.
  this.undefinedExports = {};

  // If enabled, skip leading hashbang line.
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
    { this.skipLineComment(2); }

  // Scope tracking for duplicate variable names (see scope.js)
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);

  // For RegExp validation
  this.regexpState = null;
};

var prototypeAccessors = { inFunction: { configurable: true },inGenerator: { configurable: true },inAsync: { configurable: true },allowSuper: { configurable: true },allowDirectSuper: { configurable: true },treatFunctionsAsVar: { configurable: true } };

Parser.prototype.parse = function parse () {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node)
};

prototypeAccessors.inFunction.get = function () { return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0 };
prototypeAccessors.inGenerator.get = function () { return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 };
prototypeAccessors.inAsync.get = function () { return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 };
prototypeAccessors.allowSuper.get = function () { return (this.currentThisScope().flags & SCOPE_SUPER) > 0 };
prototypeAccessors.allowDirectSuper.get = function () { return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0 };
prototypeAccessors.treatFunctionsAsVar.get = function () { return this.treatFunctionsAsVarInScope(this.currentScope()) };

// Switch to a getter for 7.0.0.
Parser.prototype.inNonArrowFunction = function inNonArrowFunction () { return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0 };

Parser.extend = function extend () {
    var plugins = [], len = arguments.length;
    while ( len-- ) plugins[ len ] = arguments[ len ];

  var cls = this;
  for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
  return cls
};

Parser.parse = function parse (input, options) {
  return new this(options, input).parse()
};

Parser.parseExpressionAt = function parseExpressionAt (input, pos, options) {
  var parser = new this(options, input, pos);
  parser.nextToken();
  return parser.parseExpression()
};

Parser.tokenizer = function tokenizer (input, options) {
  return new this(options, input)
};

Object.defineProperties( Parser.prototype, prototypeAccessors );

var pp = Parser.prototype;

// ## Parser utilities

var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
pp.strictDirective = function(start) {
  for (;;) {
    // Try to find string literal.
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) { return false }
    if ((match[1] || match[2]) === "use strict") {
      skipWhiteSpace.lastIndex = start + match[0].length;
      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
      var next = this.input.charAt(end);
      return next === ";" || next === "}" ||
        (lineBreak.test(spaceAfter[0]) &&
         !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "="))
    }
    start += match[0].length;

    // Skip semicolon, if any.
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";")
      { start++; }
  }
};

// Predicate that tests whether the next token is of the given
// type, and if yes, consumes it as a side effect.

pp.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true
  } else {
    return false
  }
};

// Tests whether parsed token is a contextual keyword.

pp.isContextual = function(name) {
  return this.type === types.name && this.value === name && !this.containsEsc
};

// Consumes contextual keyword if possible.

pp.eatContextual = function(name) {
  if (!this.isContextual(name)) { return false }
  this.next();
  return true
};

// Asserts that following token is given contextual keyword.

pp.expectContextual = function(name) {
  if (!this.eatContextual(name)) { this.unexpected(); }
};

// Test whether a semicolon can be inserted at the current position.

pp.canInsertSemicolon = function() {
  return this.type === types.eof ||
    this.type === types.braceR ||
    lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon)
      { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
    return true
  }
};

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.

pp.semicolon = function() {
  if (!this.eat(types.semi) && !this.insertSemicolon()) { this.unexpected(); }
};

pp.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma)
      { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
    if (!notNext)
      { this.next(); }
    return true
  }
};

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error.

pp.expect = function(type) {
  this.eat(type) || this.unexpected();
};

// Raise an unexpected token error.

pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};

function DestructuringErrors() {
  this.shorthandAssign =
  this.trailingComma =
  this.parenthesizedAssign =
  this.parenthesizedBind =
  this.doubleProto =
    -1;
}

pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) { return }
  if (refDestructuringErrors.trailingComma > -1)
    { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) { this.raiseRecoverable(parens, "Parenthesized pattern"); }
};

pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) { return false }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
  if (shorthandAssign >= 0)
    { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
  if (doubleProto >= 0)
    { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
};

pp.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
    { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
  if (this.awaitPos)
    { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
};

pp.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression")
    { return this.isSimpleAssignTarget(expr.expression) }
  return expr.type === "Identifier" || expr.type === "MemberExpression"
};

var pp$1 = Parser.prototype;

// ### Statement parsing

// Parse a program. Initializes the parser, reads any number of
// statements, and wraps them in a Program node.  Optionally takes a
// `program` argument.  If present, the statements will be appended
// to its body instead of creating a new node.

pp$1.parseTopLevel = function(node) {
  var exports = {};
  if (!node.body) { node.body = []; }
  while (this.type !== types.eof) {
    var stmt = this.parseStatement(null, true, exports);
    node.body.push(stmt);
  }
  if (this.inModule)
    { for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1)
      {
        var name = list[i];

        this.raiseRecoverable(this.undefinedExports[name].start, ("Export '" + name + "' is not defined"));
      } }
  this.adaptDirectivePrologue(node.body);
  this.next();
  node.sourceType = this.options.sourceType;
  return this.finishNode(node, "Program")
};

var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

pp$1.isLet = function(context) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  // For ambiguous cases, determine if a LexicalDeclaration (or only a
  // Statement) is allowed here. If context is not empty then only a Statement
  // is allowed. However, `let [` is an explicit negative lookahead for
  // ExpressionStatement, so special-case it first.
  if (nextCh === 91) { return true } // '['
  if (context) { return false }

  if (nextCh === 123) { return true } // '{'
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(this.input.charCodeAt(pos), true)) { ++pos; }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) { return true }
  }
  return false
};

// check 'async [no LineTerminator here] function'
// - 'async /*foo*/ function' is OK.
// - 'async /*\n*/ function' is invalid.
pp$1.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    { return false }

  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length;
  return !lineBreak.test(this.input.slice(this.pos, next)) &&
    this.input.slice(next, next + 8) === "function" &&
    (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
};

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

pp$1.parseStatement = function(context, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;

  if (this.isLet(context)) {
    starttype = types._var;
    kind = "let";
  }

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
  case types._break: case types._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
  case types._debugger: return this.parseDebuggerStatement(node)
  case types._do: return this.parseDoStatement(node)
  case types._for: return this.parseForStatement(node)
  case types._function:
    // Function as sole body of either an if statement or a labeled statement
    // works, but not when it is part of a labeled statement that is the sole
    // body of an if statement.
    if ((context && (this.strict || context !== "if" && context !== "label")) && this.options.ecmaVersion >= 6) { this.unexpected(); }
    return this.parseFunctionStatement(node, false, !context)
  case types._class:
    if (context) { this.unexpected(); }
    return this.parseClass(node, true)
  case types._if: return this.parseIfStatement(node)
  case types._return: return this.parseReturnStatement(node)
  case types._switch: return this.parseSwitchStatement(node)
  case types._throw: return this.parseThrowStatement(node)
  case types._try: return this.parseTryStatement(node)
  case types._const: case types._var:
    kind = kind || this.value;
    if (context && kind !== "var") { this.unexpected(); }
    return this.parseVarStatement(node, kind)
  case types._while: return this.parseWhileStatement(node)
  case types._with: return this.parseWithStatement(node)
  case types.braceL: return this.parseBlock(true, node)
  case types.semi: return this.parseEmptyStatement(node)
  case types._export:
  case types._import:
    if (this.options.ecmaVersion > 10 && starttype === types._import) {
      skipWhiteSpace.lastIndex = this.pos;
      var skip = skipWhiteSpace.exec(this.input);
      var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
      if (nextCh === 40 || nextCh === 46) // '(' or '.'
        { return this.parseExpressionStatement(node, this.parseExpression()) }
    }

    if (!this.options.allowImportExportEverywhere) {
      if (!topLevel)
        { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
      if (!this.inModule)
        { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
    }
    return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports)

    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
  default:
    if (this.isAsyncFunction()) {
      if (context) { this.unexpected(); }
      this.next();
      return this.parseFunctionStatement(node, true, !context)
    }

    var maybeName = this.value, expr = this.parseExpression();
    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon))
      { return this.parseLabeledStatement(node, maybeName, expr, context) }
    else { return this.parseExpressionStatement(node, expr) }
  }
};

pp$1.parseBreakContinueStatement = function(node, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) { node.label = null; }
  else if (this.type !== types.name) { this.unexpected(); }
  else {
    node.label = this.parseIdent();
    this.semicolon();
  }

  // Verify that there is an actual destination to break or
  // continue to.
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
      if (node.label && isBreak) { break }
    }
  }
  if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
};

pp$1.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement")
};

pp$1.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6)
    { this.eat(types.semi); }
  else
    { this.semicolon(); }
  return this.finishNode(node, "DoWhileStatement")
};

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.

pp$1.parseForStatement = function(node) {
  this.next();
  var awaitAt = (this.options.ecmaVersion >= 9 && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) && this.eatContextual("await")) ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types.parenL);
  if (this.type === types.semi) {
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, null)
  }
  var isLet = this.isLet();
  if (this.type === types._var || this.type === types._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) { this.unexpected(awaitAt); }
        } else { node.await = awaitAt > -1; }
      }
      return this.parseForIn(node, init$1)
    }
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, init$1)
  }
  var refDestructuringErrors = new DestructuringErrors;
  var init = this.parseExpression(true, refDestructuringErrors);
  if (this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types._in) {
        if (awaitAt > -1) { this.unexpected(awaitAt); }
      } else { node.await = awaitAt > -1; }
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLVal(init);
    return this.parseForIn(node, init)
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) { this.unexpected(awaitAt); }
  return this.parseFor(node, init)
};

pp$1.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync)
};

pp$1.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  // allow function declarations in branches, but only in non-strict mode
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement")
};

pp$1.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction)
    { this.raise(this.start, "'return' outside of function"); }
  this.next();

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (this.eat(types.semi) || this.insertSemicolon()) { node.argument = null; }
  else { node.argument = this.parseExpression(); this.semicolon(); }
  return this.finishNode(node, "ReturnStatement")
};

pp$1.parseSwitchStatement = function(node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);

  // Statements under must be grouped (by label) in SwitchCase
  // nodes. `cur` is used to keep the node that we are currently
  // adding statements to.

  var cur;
  for (var sawDefault = false; this.type !== types.braceR;) {
    if (this.type === types._case || this.type === types._default) {
      var isCase = this.type === types._case;
      if (cur) { this.finishNode(cur, "SwitchCase"); }
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) { this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"); }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types.colon);
    } else {
      if (!cur) { this.unexpected(); }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) { this.finishNode(cur, "SwitchCase"); }
  this.next(); // Closing brace
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement")
};

pp$1.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
    { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement")
};

// Reused empty array added for node fields that are always empty.

var empty = [];

pp$1.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types.parenL)) {
      clause.param = this.parseBindingAtom();
      var simple = clause.param.type === "Identifier";
      this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLVal(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
      this.expect(types.parenR);
    } else {
      if (this.options.ecmaVersion < 10) { this.unexpected(); }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer)
    { this.raise(node.start, "Missing catch or finally clause"); }
  return this.finishNode(node, "TryStatement")
};

pp$1.parseVarStatement = function(node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration")
};

pp$1.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement")
};

pp$1.parseWithStatement = function(node) {
  if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement")
};

pp$1.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement")
};

pp$1.parseLabeledStatement = function(node, maybeName, expr, context) {
  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1)
    {
    var label = list[i$1];

    if (label.name === maybeName)
      { this.raise(expr.start, "Label '" + maybeName + "' is already declared");
  } }
  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node.start) {
      // Update information about previous labels on this node
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else { break }
  }
  this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement")
};

pp$1.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement")
};

// Parse a semicolon-enclosed block of statements, handling `"use
// strict"` declarations when `allowStrict` is true (used for
// function bodies).

pp$1.parseBlock = function(createNewLexicalScope, node, exitStrict) {
  if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;
  if ( node === void 0 ) node = this.startNode();

  node.body = [];
  this.expect(types.braceL);
  if (createNewLexicalScope) { this.enterScope(0); }
  while (this.type !== types.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  if (exitStrict) { this.strict = false; }
  this.next();
  if (createNewLexicalScope) { this.exitScope(); }
  return this.finishNode(node, "BlockStatement")
};

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

pp$1.parseFor = function(node, init) {
  node.init = init;
  this.expect(types.semi);
  node.test = this.type === types.semi ? null : this.parseExpression();
  this.expect(types.semi);
  node.update = this.type === types.parenR ? null : this.parseExpression();
  this.expect(types.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, "ForStatement")
};

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

pp$1.parseForIn = function(node, init) {
  var isForIn = this.type === types._in;
  this.next();

  if (
    init.type === "VariableDeclaration" &&
    init.declarations[0].init != null &&
    (
      !isForIn ||
      this.options.ecmaVersion < 8 ||
      this.strict ||
      init.kind !== "var" ||
      init.declarations[0].id.type !== "Identifier"
    )
  ) {
    this.raise(
      init.start,
      ((isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
    );
  } else if (init.type === "AssignmentPattern") {
    this.raise(init.start, "Invalid left-hand side in for-loop");
  }
  node.left = init;
  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement")
};

// Parse a list of variable declarations.

pp$1.parseVar = function(node, isFor, kind) {
  node.declarations = [];
  node.kind = kind;
  for (;;) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))) {
      this.unexpected();
    } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types.comma)) { break }
  }
  return node
};

pp$1.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom();
  this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};

var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;

// Parse a function declaration or literal (depending on the
// `statement & FUNC_STATEMENT`).

// Remove `allowExpressionBody` for 7.0.0, as it is only called with false
pp$1.parseFunction = function(node, statement, allowExpressionBody, isAsync) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types.star && (statement & FUNC_HANGING_STATEMENT))
      { this.unexpected(); }
    node.generator = this.eat(types.star);
  }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  if (statement & FUNC_STATEMENT) {
    node.id = (statement & FUNC_NULLABLE_ID) && this.type !== types.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT))
      // If it is a regular function declaration in sloppy mode, then it is
      // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
      // mode depends on properties of the current scope (see
      // treatFunctionsAsVar).
      { this.checkLVal(node.id, (this.strict || node.generator || node.async) ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION); }
  }

  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));

  if (!(statement & FUNC_STATEMENT))
    { node.id = this.type === types.name ? this.parseIdent() : null; }

  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody, false);

  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, (statement & FUNC_STATEMENT) ? "FunctionDeclaration" : "FunctionExpression")
};

pp$1.parseFunctionParams = function(node) {
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseClass = function(node, isStatement) {
  this.next();

  // ecma-262 14.6 Class Definitions
  // A class definition is always strict mode code.
  var oldStrict = this.strict;
  this.strict = true;

  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types.braceL);
  while (this.type !== types.braceR) {
    var element = this.parseClassElement(node.superClass !== null);
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) { this.raise(element.start, "Duplicate constructor in the same class"); }
        hadConstructor = true;
      }
    }
  }
  this.strict = oldStrict;
  this.next();
  node.body = this.finishNode(classBody, "ClassBody");
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
};

pp$1.parseClassElement = function(constructorAllowsSuper) {
  var this$1 = this;

  if (this.eat(types.semi)) { return null }

  var method = this.startNode();
  var tryContextual = function (k, noLineBreak) {
    if ( noLineBreak === void 0 ) noLineBreak = false;

    var start = this$1.start, startLoc = this$1.startLoc;
    if (!this$1.eatContextual(k)) { return false }
    if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) { return true }
    if (method.key) { this$1.unexpected(); }
    method.computed = false;
    method.key = this$1.startNodeAt(start, startLoc);
    method.key.name = k;
    this$1.finishNode(method.key, "Identifier");
    return false
  };

  method.kind = "method";
  method.static = tryContextual("static");
  var isGenerator = this.eat(types.star);
  var isAsync = false;
  if (!isGenerator) {
    if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    } else if (tryContextual("get")) {
      method.kind = "get";
    } else if (tryContextual("set")) {
      method.kind = "set";
    }
  }
  if (!method.key) { this.parsePropertyName(method); }
  var key = method.key;
  var allowsDirectSuper = false;
  if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" ||
      key.type === "Literal" && key.value === "constructor")) {
    if (method.kind !== "method") { this.raise(key.start, "Constructor can't have get/set modifier"); }
    if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
    if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
    method.kind = "constructor";
    allowsDirectSuper = constructorAllowsSuper;
  } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  this.parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && method.value.params.length !== 0)
    { this.raiseRecoverable(method.value.start, "getter should have no params"); }
  if (method.kind === "set" && method.value.params.length !== 1)
    { this.raiseRecoverable(method.value.start, "setter should have exactly one param"); }
  if (method.kind === "set" && method.value.params[0].type === "RestElement")
    { this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params"); }
  return method
};

pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  return this.finishNode(method, "MethodDefinition")
};

pp$1.parseClassId = function(node, isStatement) {
  if (this.type === types.name) {
    node.id = this.parseIdent();
    if (isStatement)
      { this.checkLVal(node.id, BIND_LEXICAL, false); }
  } else {
    if (isStatement === true)
      { this.unexpected(); }
    node.id = null;
  }
};

pp$1.parseClassSuper = function(node) {
  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
};

// Parses module export declaration.

pp$1.parseExport = function(node, exports) {
  this.next();
  // export * from '...'
  if (this.eat(types.star)) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        node.exported = this.parseIdent(true);
        this.checkExport(exports, node.exported.name, this.lastTokStart);
      } else {
        node.exported = null;
      }
    }
    this.expectContextual("from");
    if (this.type !== types.string) { this.unexpected(); }
    node.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration")
  }
  if (this.eat(types._default)) { // export default ...
    this.checkExport(exports, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) { this.next(); }
      node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
    } else if (this.type === types._class) {
      var cNode = this.startNode();
      node.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration")
  }
  // export var|const|let|function|class ...
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(null);
    if (node.declaration.type === "VariableDeclaration")
      { this.checkVariableExport(exports, node.declaration.declarations); }
    else
      { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
    node.specifiers = [];
    node.source = null;
  } else { // export { x, y as z } [from '...']
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types.string) { this.unexpected(); }
      node.source = this.parseExprAtom();
    } else {
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        // check for keywords used as local names
        var spec = list[i];

        this.checkUnreserved(spec.local);
        // check if export is defined
        this.checkLocalExport(spec.local);
      }

      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration")
};

pp$1.checkExport = function(exports, name, pos) {
  if (!exports) { return }
  if (has(exports, name))
    { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
  exports[name] = true;
};

pp$1.checkPatternExport = function(exports, pat) {
  var type = pat.type;
  if (type === "Identifier")
    { this.checkExport(exports, pat.name, pat.start); }
  else if (type === "ObjectPattern")
    { for (var i = 0, list = pat.properties; i < list.length; i += 1)
      {
        var prop = list[i];

        this.checkPatternExport(exports, prop);
      } }
  else if (type === "ArrayPattern")
    { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];

        if (elt) { this.checkPatternExport(exports, elt); }
    } }
  else if (type === "Property")
    { this.checkPatternExport(exports, pat.value); }
  else if (type === "AssignmentPattern")
    { this.checkPatternExport(exports, pat.left); }
  else if (type === "RestElement")
    { this.checkPatternExport(exports, pat.argument); }
  else if (type === "ParenthesizedExpression")
    { this.checkPatternExport(exports, pat.expression); }
};

pp$1.checkVariableExport = function(exports, decls) {
  if (!exports) { return }
  for (var i = 0, list = decls; i < list.length; i += 1)
    {
    var decl = list[i];

    this.checkPatternExport(exports, decl.id);
  }
};

pp$1.shouldParseExportStatement = function() {
  return this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
};

// Parses a comma-separated list of module exports.

pp$1.parseExportSpecifiers = function(exports) {
  var nodes = [], first = true;
  // export { x, y as z } [from '...']
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node = this.startNode();
    node.local = this.parseIdent(true);
    node.exported = this.eatContextual("as") ? this.parseIdent(true) : node.local;
    this.checkExport(exports, node.exported.name, node.exported.start);
    nodes.push(this.finishNode(node, "ExportSpecifier"));
  }
  return nodes
};

// Parses import declaration.

pp$1.parseImport = function(node) {
  this.next();
  // import '...'
  if (this.type === types.string) {
    node.specifiers = empty;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration")
};

// Parses a comma-separated list of module imports.

pp$1.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types.name) {
    // import defaultObj, { x, y as z } from '...'
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLVal(node.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(types.comma)) { return nodes }
  }
  if (this.type === types.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLVal(node$1.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes
  }
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node$2 = this.startNode();
    node$2.imported = this.parseIdent(true);
    if (this.eatContextual("as")) {
      node$2.local = this.parseIdent();
    } else {
      this.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this.checkLVal(node$2.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes
};

// Set `ExpressionStatement#directive` property for directive prologues.
pp$1.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$1.isDirectiveCandidate = function(statement) {
  return (
    statement.type === "ExpressionStatement" &&
    statement.expression.type === "Literal" &&
    typeof statement.expression.value === "string" &&
    // Reject parenthesized strings.
    (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
  )
};

var pp$2 = Parser.prototype;

// Convert existing expression atom to assignable pattern
// if possible.

pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
    case "Identifier":
      if (this.inAsync && node.name === "await")
        { this.raise(node.start, "Cannot use 'await' as identifier inside an async function"); }
      break

    case "ObjectPattern":
    case "ArrayPattern":
    case "RestElement":
      break

    case "ObjectExpression":
      node.type = "ObjectPattern";
      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
      for (var i = 0, list = node.properties; i < list.length; i += 1) {
        var prop = list[i];

      this.toAssignable(prop, isBinding);
        // Early error:
        //   AssignmentRestProperty[Yield, Await] :
        //     `...` DestructuringAssignmentTarget[Yield, Await]
        //
        //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
        if (
          prop.type === "RestElement" &&
          (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
        ) {
          this.raise(prop.argument.start, "Unexpected token");
        }
      }
      break

    case "Property":
      // AssignmentProperty has type === "Property"
      if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
      this.toAssignable(node.value, isBinding);
      break

    case "ArrayExpression":
      node.type = "ArrayPattern";
      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
      this.toAssignableList(node.elements, isBinding);
      break

    case "SpreadElement":
      node.type = "RestElement";
      this.toAssignable(node.argument, isBinding);
      if (node.argument.type === "AssignmentPattern")
        { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
      break

    case "AssignmentExpression":
      if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
      node.type = "AssignmentPattern";
      delete node.operator;
      this.toAssignable(node.left, isBinding);
      // falls through to AssignmentPattern

    case "AssignmentPattern":
      break

    case "ParenthesizedExpression":
      this.toAssignable(node.expression, isBinding, refDestructuringErrors);
      break

    case "ChainExpression":
      this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
      break

    case "MemberExpression":
      if (!isBinding) { break }

    default:
      this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
  return node
};

// Convert list of expression atoms to binding list.

pp$2.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) { this.toAssignable(elt, isBinding); }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
      { this.unexpected(last.argument.start); }
  }
  return exprList
};

// Parses spread element.

pp$2.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement")
};

pp$2.parseRestBinding = function() {
  var node = this.startNode();
  this.next();

  // RestElement inside of a function parameter must be an identifier
  if (this.options.ecmaVersion === 6 && this.type !== types.name)
    { this.unexpected(); }

  node.argument = this.parseBindingAtom();

  return this.finishNode(node, "RestElement")
};

// Parses lvalue (assignable) atom.

pp$2.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
    case types.bracketL:
      var node = this.startNode();
      this.next();
      node.elements = this.parseBindingList(types.bracketR, true, true);
      return this.finishNode(node, "ArrayPattern")

    case types.braceL:
      return this.parseObj(true)
    }
  }
  return this.parseIdent()
};

pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) { first = false; }
    else { this.expect(types.comma); }
    if (allowEmpty && this.type === types.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break
    } else if (this.type === types.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
      this.expect(close);
      break
    } else {
      var elem = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts
};

pp$2.parseBindingListItem = function(param) {
  return param
};

// Parses assignment pattern around given atom if possible.

pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) { return left }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern")
};

// Verify that a node is an lval — something that can be assigned
// to.
// bindingType can be either:
// 'var' indicating that the lval creates a 'var' binding
// 'let' indicating that the lval creates a lexical ('let' or 'const') binding
// 'none' indicating that the binding should be checked for illegal identifiers, but not for duplicate references

pp$2.checkLVal = function(expr, bindingType, checkClashes) {
  if ( bindingType === void 0 ) bindingType = BIND_NONE;

  switch (expr.type) {
  case "Identifier":
    if (bindingType === BIND_LEXICAL && expr.name === "let")
      { this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"); }
    if (this.strict && this.reservedWordsStrictBind.test(expr.name))
      { this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
    if (checkClashes) {
      if (has(checkClashes, expr.name))
        { this.raiseRecoverable(expr.start, "Argument name clash"); }
      checkClashes[expr.name] = true;
    }
    if (bindingType !== BIND_NONE && bindingType !== BIND_OUTSIDE) { this.declareName(expr.name, bindingType, expr.start); }
    break

  case "ChainExpression":
    this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
    break

  case "MemberExpression":
    if (bindingType) { this.raiseRecoverable(expr.start, "Binding member expression"); }
    break

  case "ObjectPattern":
    for (var i = 0, list = expr.properties; i < list.length; i += 1)
      {
    var prop = list[i];

    this.checkLVal(prop, bindingType, checkClashes);
  }
    break

  case "Property":
    // AssignmentProperty has type === "Property"
    this.checkLVal(expr.value, bindingType, checkClashes);
    break

  case "ArrayPattern":
    for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
      var elem = list$1[i$1];

    if (elem) { this.checkLVal(elem, bindingType, checkClashes); }
    }
    break

  case "AssignmentPattern":
    this.checkLVal(expr.left, bindingType, checkClashes);
    break

  case "RestElement":
    this.checkLVal(expr.argument, bindingType, checkClashes);
    break

  case "ParenthesizedExpression":
    this.checkLVal(expr.expression, bindingType, checkClashes);
    break

  default:
    this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
  }
};

// A recursive descent parser operates by defining functions for all

var pp$3 = Parser.prototype;

// Check if property name clashes with already added.
// Object/class getters and setters are not allowed to clash —
// either with each other or with an init property — and in
// strict mode, init properties are also not allowed to be repeated.

pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
    { return }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
    { return }
  var key = prop.key;
  var name;
  switch (key.type) {
  case "Identifier": name = key.name; break
  case "Literal": name = String(key.value); break
  default: return
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors) {
          if (refDestructuringErrors.doubleProto < 0)
            { refDestructuringErrors.doubleProto = key.start; }
          // Backwards-compat kludge. Can be removed in version 6.0
        } else { this.raiseRecoverable(key.start, "Redefinition of __proto__ property"); }
      }
      propHash.proto = true;
    }
    return
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition)
      { this.raiseRecoverable(key.start, "Redefinition of property"); }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function(s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.

// Parse a full expression. The optional arguments are used to
// forbid the `in` operator (in for loops initalization expressions)
// and provide reference for storing '=' operator inside shorthand
// property assignment in contexts where both object expression
// and object pattern might appear (so it's possible to raise
// delayed syntax error at correct position).

pp$3.parseExpression = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
  if (this.type === types.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types.comma)) { node.expressions.push(this.parseMaybeAssign(noIn, refDestructuringErrors)); }
    return this.finishNode(node, "SequenceExpression")
  }
  return expr
};

// Parse an assignment expression. This includes applications of
// operators like `+=`.

pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) { return this.parseYield(noIn) }
    // The tokenizer will assume an expression is allowed after
    // `yield`, but this isn't that kind of yield
    else { this.exprAllowed = false; }
  }

  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors;
    ownDestructuringErrors = true;
  }

  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types.parenL || this.type === types.name)
    { this.potentialArrowAt = this.start; }
  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
  if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
    if (!ownDestructuringErrors) {
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
    }
    if (refDestructuringErrors.shorthandAssign >= node.left.start)
      { refDestructuringErrors.shorthandAssign = -1; } // reset because shorthand default was used correctly
    this.checkLVal(left);
    this.next();
    node.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "AssignmentExpression")
  } else {
    if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
  }
  if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
  if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
  return left
};

// Parse a ternary conditional (`?:`) operator.

pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(noIn, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  if (this.eat(types.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types.colon);
    node.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "ConditionalExpression")
  }
  return expr
};

// Start the precedence parser.

pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn)
};

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.

pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop;
  if (prec != null && (!noIn || this.type !== types._in)) {
    if (prec > minPrec) {
      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
      var coalesce = this.type === types.coalesce;
      if (coalesce) {
        // Handle the precedence of `tt.coalesce` as equal to the range of logical expressions.
        // In other words, `node.right` shouldn't contain logical expressions in order to check the mixed error.
        prec = types.logicalAND.binop;
      }
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
      if ((logical && this.type === types.coalesce) || (coalesce && (this.type === types.logicalOR || this.type === types.logicalAND))) {
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      }
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
    }
  }
  return left
};

pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
};

// Parse unary operators, both prefix and postfix.

pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))) {
    expr = this.parseAwait();
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) { this.checkLVal(node.argument); }
    else if (this.strict && node.operator === "delete" &&
             node.argument.type === "Identifier")
      { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
    else { sawUnary = true; }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLVal(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }

  if (!sawUnary && this.eat(types.starstar))
    { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false) }
  else
    { return expr }
};

// Parse call, dot, and `[]`-subscript expressions.

pp$3.parseExprSubscripts = function(refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors);
  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
    { return expr }
  var result = this.parseSubscripts(expr, startPos, startLoc);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
    if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
  }
  return result
};

pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
      this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 &&
      this.potentialArrowAt === base.start;
  var optionalChained = false;

  while (true) {
    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained);

    if (element.optional) { optionalChained = true; }
    if (element === base || element.type === "ArrowFunctionExpression") {
      if (optionalChained) {
        var chainNode = this.startNodeAt(startPos, startLoc);
        chainNode.expression = element;
        element = this.finishNode(chainNode, "ChainExpression");
      }
      return element
    }

    base = element;
  }
};

pp$3.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optional = optionalSupported && this.eat(types.questionDot);
  if (noCalls && optional) { this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"); }

  var computed = this.eat(types.bracketL);
  if (computed || (optional && this.type !== types.parenL && this.type !== types.backQuote) || this.eat(types.dot)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    node.property = computed ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never");
    node.computed = !!computed;
    if (computed) { this.expect(types.bracketR); }
    if (optionalSupported) {
      node.optional = optional;
    }
    base = this.finishNode(node, "MemberExpression");
  } else if (!noCalls && this.eat(types.parenL)) {
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0)
        { this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"); }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true)
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base;
    node$1.arguments = exprList;
    if (optionalSupported) {
      node$1.optional = optional;
    }
    base = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types.backQuote) {
    if (optional || optionalChained) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base;
    node$2.quasi = this.parseTemplate({isTagged: true});
    base = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base
};

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.

pp$3.parseExprAtom = function(refDestructuringErrors) {
  // If a division operator appears in an expression position, the
  // tokenizer got confused, and we force it to read a regexp instead.
  if (this.type === types.slash) { this.readRegexp(); }

  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
  case types._super:
    if (!this.allowSuper)
      { this.raise(this.start, "'super' keyword outside a method"); }
    node = this.startNode();
    this.next();
    if (this.type === types.parenL && !this.allowDirectSuper)
      { this.raise(node.start, "super() call outside constructor of a subclass"); }
    // The `super` keyword can appear at below:
    // SuperProperty:
    //     super [ Expression ]
    //     super . IdentifierName
    // SuperCall:
    //     super ( Arguments )
    if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL)
      { this.unexpected(); }
    return this.finishNode(node, "Super")

  case types._this:
    node = this.startNode();
    this.next();
    return this.finishNode(node, "ThisExpression")

  case types.name:
    var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
    var id = this.parseIdent(false);
    if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function))
      { return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true) }
    if (canBeArrow && !this.canInsertSemicolon()) {
      if (this.eat(types.arrow))
        { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false) }
      if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
        id = this.parseIdent(false);
        if (this.canInsertSemicolon() || !this.eat(types.arrow))
          { this.unexpected(); }
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
      }
    }
    return id

  case types.regexp:
    var value = this.value;
    node = this.parseLiteral(value.value);
    node.regex = {pattern: value.pattern, flags: value.flags};
    return node

  case types.num: case types.string:
    return this.parseLiteral(this.value)

  case types._null: case types._true: case types._false:
    node = this.startNode();
    node.value = this.type === types._null ? null : this.type === types._true;
    node.raw = this.type.keyword;
    this.next();
    return this.finishNode(node, "Literal")

  case types.parenL:
    var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
    if (refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
        { refDestructuringErrors.parenthesizedAssign = start; }
      if (refDestructuringErrors.parenthesizedBind < 0)
        { refDestructuringErrors.parenthesizedBind = start; }
    }
    return expr

  case types.bracketL:
    node = this.startNode();
    this.next();
    node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
    return this.finishNode(node, "ArrayExpression")

  case types.braceL:
    return this.parseObj(false, refDestructuringErrors)

  case types._function:
    node = this.startNode();
    this.next();
    return this.parseFunction(node, 0)

  case types._class:
    return this.parseClass(this.startNode(), false)

  case types._new:
    return this.parseNew()

  case types.backQuote:
    return this.parseTemplate()

  case types._import:
    if (this.options.ecmaVersion >= 11) {
      return this.parseExprImport()
    } else {
      return this.unexpected()
    }

  default:
    this.unexpected();
  }
};

pp$3.parseExprImport = function() {
  var node = this.startNode();

  // Consume `import` as an identifier for `import.meta`.
  // Because `this.parseIdent(true)` doesn't check escape sequences, it needs the check of `this.containsEsc`.
  if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword import"); }
  var meta = this.parseIdent(true);

  switch (this.type) {
  case types.parenL:
    return this.parseDynamicImport(node)
  case types.dot:
    node.meta = meta;
    return this.parseImportMeta(node)
  default:
    this.unexpected();
  }
};

pp$3.parseDynamicImport = function(node) {
  this.next(); // skip `(`

  // Parse node.source.
  node.source = this.parseMaybeAssign();

  // Verify ending.
  if (!this.eat(types.parenR)) {
    var errorPos = this.start;
    if (this.eat(types.comma) && this.eat(types.parenR)) {
      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(errorPos);
    }
  }

  return this.finishNode(node, "ImportExpression")
};

pp$3.parseImportMeta = function(node) {
  this.next(); // skip `.`

  var containsEsc = this.containsEsc;
  node.property = this.parseIdent(true);

  if (node.property.name !== "meta")
    { this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'"); }
  if (containsEsc)
    { this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters"); }
  if (this.options.sourceType !== "module")
    { this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module"); }

  return this.finishNode(node, "MetaProperty")
};

pp$3.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  if (node.raw.charCodeAt(node.raw.length - 1) === 110) { node.bigint = node.raw.slice(0, -1).replace(/_/g, ""); }
  this.next();
  return this.finishNode(node, "Literal")
};

pp$3.parseParenExpression = function() {
  this.expect(types.parenL);
  var val = this.parseExpression();
  this.expect(types.parenR);
  return val
};

pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();

    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    // Do not save awaitIdentPos to allow checking awaits nested in parameters
    while (this.type !== types.parenR) {
      first ? first = false : this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
        lastIsComma = true;
        break
      } else if (this.type === types.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
        break
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.start, innerEndLoc = this.startLoc;
    this.expect(types.parenR);

    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList)
    }

    if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
    if (spreadStart) { this.unexpected(spreadStart); }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }

  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression")
  } else {
    return val
  }
};

pp$3.parseParenItem = function(item) {
  return item
};

pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
};

// New's precedence is slightly tricky. It must allow its argument to
// be a `[]` or dot subscript expression, but not a call — at least,
// not without wrapping it in parentheses. Thus, it uses the noCalls
// argument to parseSubscripts to prevent it from consuming the
// argument list.

var empty$1 = [];

pp$3.parseNew = function() {
  if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword new"); }
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
    node.meta = meta;
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target")
      { this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'"); }
    if (containsEsc)
      { this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters"); }
    if (!this.inNonArrowFunction())
      { this.raiseRecoverable(node.start, "'new.target' can only be used in functions"); }
    return this.finishNode(node, "MetaProperty")
  }
  var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  if (isImport && node.callee.type === "ImportExpression") {
    this.raise(startPos, "Cannot use new with import()");
  }
  if (this.eat(types.parenL)) { node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false); }
  else { node.arguments = empty$1; }
  return this.finishNode(node, "NewExpression")
};

// Parse template expression.

pp$3.parseTemplateElement = function(ref) {
  var isTagged = ref.isTagged;

  var elem = this.startNode();
  if (this.type === types.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types.backQuote;
  return this.finishNode(elem, "TemplateElement")
};

pp$3.parseTemplate = function(ref) {
  if ( ref === void 0 ) ref = {};
  var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({isTagged: isTagged});
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types.eof) { this.raise(this.pos, "Unterminated template literal"); }
    this.expect(types.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types.braceR);
    node.quasis.push(curElt = this.parseTemplateElement({isTagged: isTagged}));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral")
};

pp$3.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
    (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types.star)) &&
    !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

// Parse an object literal or binding pattern.

pp$3.parseObj = function(isPattern, refDestructuringErrors) {
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) { this.checkPropClash(prop, propHash, refDestructuringErrors); }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
};

pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement")
    }
    // To disallow parenthesized identifier via `this.toAssignable()`.
    if (this.type === types.parenL && refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0) {
        refDestructuringErrors.parenthesizedAssign = this.start;
      }
      if (refDestructuringErrors.parenthesizedBind < 0) {
        refDestructuringErrors.parenthesizedBind = this.start;
      }
    }
    // Parse argument.
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    // To disallow trailing comma via `this.toAssignable()`.
    if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    // Finish
    return this.finishNode(prop, "SpreadElement")
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern)
      { isGenerator = this.eat(types.star); }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property")
};

pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types.colon)
    { this.unexpected(); }

  if (this.eat(types.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
    if (isPattern) { this.unexpected(); }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc &&
             this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
             (prop.key.name === "get" || prop.key.name === "set") &&
             (this.type !== types.comma && this.type !== types.braceR && this.type !== types.eq)) {
    if (isGenerator || isAsync) { this.unexpected(); }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get")
        { this.raiseRecoverable(start, "getter should have no params"); }
      else
        { this.raiseRecoverable(start, "setter should have exactly one param"); }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
        { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) { this.unexpected(); }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos)
      { this.awaitIdentPos = startPos; }
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else if (this.type === types.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0)
        { refDestructuringErrors.shorthandAssign = this.start; }
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else {
      prop.value = prop.key;
    }
    prop.shorthand = true;
  } else { this.unexpected(); }
};

pp$3.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
      return prop.key
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never")
};

// Initialize empty function node.

pp$3.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) { node.generator = node.expression = false; }
  if (this.options.ecmaVersion >= 8) { node.async = false; }
};

// Parse object or class method.

pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

  this.initFunction(node);
  if (this.options.ecmaVersion >= 6)
    { node.generator = isGenerator; }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));

  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false, true);

  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "FunctionExpression")
};

// Parse arrow function expression with given parameters.

pp$3.parseArrowExpression = function(node, params, isAsync) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;

  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true, false);

  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "ArrowFunctionExpression")
};

// Parse function body and check parameters.

pp$3.parseFunctionBody = function(node, isArrowFunction, isMethod) {
  var isExpression = isArrowFunction && this.type !== types.braceL;
  var oldStrict = this.strict, useStrict = false;

  if (isExpression) {
    node.body = this.parseMaybeAssign();
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      // If this is a strict mode function, verify that argument names
      // are not repeated, and it does not try to bind the words `eval`
      // or `arguments`.
      if (useStrict && nonSimple)
        { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
    }
    // Start a new scope with regard to labels and the `inFunction`
    // flag (restore them to their old value afterwards).
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) { this.strict = true; }

    // Add the params to varDeclaredNames to ensure that an error is thrown
    // if a let/const declaration in the function clashes with one of the params.
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
    // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
    if (this.strict && node.id) { this.checkLVal(node.id, BIND_OUTSIDE); }
    node.body = this.parseBlock(false, undefined, useStrict && !oldStrict);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
};

pp$3.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1)
    {
    var param = list[i];

    if (param.type !== "Identifier") { return false
  } }
  return true
};

// Checks function params for various disallowed patterns such as using "eval"
// or "arguments" and duplicate parameters.

pp$3.checkParams = function(node, allowDuplicates) {
  var nameHash = {};
  for (var i = 0, list = node.params; i < list.length; i += 1)
    {
    var param = list[i];

    this.checkLVal(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) { break }
    } else { first = false; }

    var elt = (void 0);
    if (allowEmpty && this.type === types.comma)
      { elt = null; }
    else if (this.type === types.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0)
        { refDestructuringErrors.trailingComma = this.start; }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts
};

pp$3.checkUnreserved = function(ref) {
  var start = ref.start;
  var end = ref.end;
  var name = ref.name;

  if (this.inGenerator && name === "yield")
    { this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"); }
  if (this.inAsync && name === "await")
    { this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"); }
  if (this.keywords.test(name))
    { this.raise(start, ("Unexpected keyword '" + name + "'")); }
  if (this.options.ecmaVersion < 6 &&
    this.input.slice(start, end).indexOf("\\") !== -1) { return }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name)) {
    if (!this.inAsync && name === "await")
      { this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"); }
    this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
  }
};

// Parse the next token as an identifier. If `liberal` is true (used
// when parsing properties), it will also convert keywords into
// identifiers.

pp$3.parseIdent = function(liberal, isBinding) {
  var node = this.startNode();
  if (this.type === types.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;

    // To fix https://github.com/acornjs/acorn/issues/575
    // `class` and `function` keywords push new context into this.context.
    // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
    // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
    if ((node.name === "class" || node.name === "function") &&
        (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next(!!liberal);
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
    if (node.name === "await" && !this.awaitIdentPos)
      { this.awaitIdentPos = node.start; }
  }
  return node
};

// Parses yield expression inside generator.

pp$3.parseYield = function(noIn) {
  if (!this.yieldPos) { this.yieldPos = this.start; }

  var node = this.startNode();
  this.next();
  if (this.type === types.semi || this.canInsertSemicolon() || (this.type !== types.star && !this.type.startsExpr)) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types.star);
    node.argument = this.parseMaybeAssign(noIn);
  }
  return this.finishNode(node, "YieldExpression")
};

pp$3.parseAwait = function() {
  if (!this.awaitPos) { this.awaitPos = this.start; }

  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, false);
  return this.finishNode(node, "AwaitExpression")
};

var pp$4 = Parser.prototype;

// This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.

pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
  throw err
};

pp$4.raiseRecoverable = pp$4.raise;

pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart)
  }
};

var pp$5 = Parser.prototype;

var Scope = function Scope(flags) {
  this.flags = flags;
  // A list of var-declared names in the current lexical scope
  this.var = [];
  // A list of lexically-declared names in the current lexical scope
  this.lexical = [];
  // A list of lexically-declared FunctionDeclaration names in the current lexical scope
  this.functions = [];
};

// The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

pp$5.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};

pp$5.exitScope = function() {
  this.scopeStack.pop();
};

// The spec says:
// > At the top level of a function, or script, function declarations are
// > treated like var declarations rather than like lexical declarations.
pp$5.treatFunctionsAsVarInScope = function(scope) {
  return (scope.flags & SCOPE_FUNCTION) || !this.inModule && (scope.flags & SCOPE_TOP)
};

pp$5.declareName = function(name, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope = this.currentScope();
    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    scope.lexical.push(name);
    if (this.inModule && (scope.flags & SCOPE_TOP))
      { delete this.undefinedExports[name]; }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar)
      { redeclared = scope$2.lexical.indexOf(name) > -1; }
    else
      { redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1; }
    scope$2.functions.push(name);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !((scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) ||
          !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
        redeclared = true;
        break
      }
      scope$3.var.push(name);
      if (this.inModule && (scope$3.flags & SCOPE_TOP))
        { delete this.undefinedExports[name]; }
      if (scope$3.flags & SCOPE_VAR) { break }
    }
  }
  if (redeclared) { this.raiseRecoverable(pos, ("Identifier '" + name + "' has already been declared")); }
};

pp$5.checkLocalExport = function(id) {
  // scope.functions must be empty as Module code is always strict.
  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 &&
      this.scopeStack[0].var.indexOf(id.name) === -1) {
    this.undefinedExports[id.name] = id;
  }
};

pp$5.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1]
};

pp$5.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1;; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR) { return scope }
  }
};

// Could be useful for `this`, `new.target`, `super()`, `super.property`, and `super[property]`.
pp$5.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1;; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) { return scope }
  }
};

var Node = function Node(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations)
    { this.loc = new SourceLocation(parser, loc); }
  if (parser.options.directSourceFile)
    { this.sourceFile = parser.options.directSourceFile; }
  if (parser.options.ranges)
    { this.range = [pos, 0]; }
};

// Start an AST node, attaching a start offset.

var pp$6 = Parser.prototype;

pp$6.startNode = function() {
  return new Node(this, this.start, this.startLoc)
};

pp$6.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc)
};

// Finish an AST node, adding `type` and `end` properties.

function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations)
    { node.loc.end = loc; }
  if (this.options.ranges)
    { node.range[1] = pos; }
  return node
}

pp$6.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
};

// Finish node at given position

pp$6.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc)
};

// The algorithm used to determine whether a regexp can appear at a

var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};

var types$1 = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};

var pp$7 = Parser.prototype;

pp$7.initialContext = function() {
  return [types$1.b_stat]
};

pp$7.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types$1.f_expr || parent === types$1.f_stat)
    { return true }
  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr))
    { return !parent.isExpr }

  // The check for `tt.name && exprAllowed` detects whether we are
  // after a `yield` or `of` construct. See the `updateContext` for
  // `tt.name`.
  if (prevType === types._return || prevType === types.name && this.exprAllowed)
    { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow)
    { return true }
  if (prevType === types.braceL)
    { return parent === types$1.b_stat }
  if (prevType === types._var || prevType === types._const || prevType === types.name)
    { return false }
  return !this.exprAllowed
};

pp$7.inGeneratorContext = function() {
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this.context[i];
    if (context.token === "function")
      { return context.generator }
  }
  return false
};

pp$7.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types.dot)
    { this.exprAllowed = false; }
  else if (update = type.updateContext)
    { update.call(this, prevType); }
  else
    { this.exprAllowed = type.beforeExpr; }
};

// Token-specific context update code

types.parenR.updateContext = types.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return
  }
  var out = this.context.pop();
  if (out === types$1.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};

types.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
  this.exprAllowed = true;
};

types.dollarBraceL.updateContext = function() {
  this.context.push(types$1.b_tmpl);
  this.exprAllowed = true;
};

types.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
  this.exprAllowed = true;
};

types.incDec.updateContext = function() {
  // tokExprAllowed stays unchanged
};

types._function.updateContext = types._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else &&
      !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) &&
      !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat))
    { this.context.push(types$1.f_expr); }
  else
    { this.context.push(types$1.f_stat); }
  this.exprAllowed = false;
};

types.backQuote.updateContext = function() {
  if (this.curContext() === types$1.q_tmpl)
    { this.context.pop(); }
  else
    { this.context.push(types$1.q_tmpl); }
  this.exprAllowed = false;
};

types.star.updateContext = function(prevType) {
  if (prevType === types._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types$1.f_expr)
      { this.context[index] = types$1.f_expr_gen; }
    else
      { this.context[index] = types$1.f_gen; }
  }
  this.exprAllowed = true;
};

types.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
    if (this.value === "of" && !this.exprAllowed ||
        this.value === "yield" && this.inGeneratorContext())
      { allowed = true; }
  }
  this.exprAllowed = allowed;
};

// This file contains Unicode properties extracted from the ECMAScript
// specification. The lists are extracted like so:
// $$('#table-binary-unicode-properties > figure > table > tbody > tr > td:nth-child(1) code').map(el => el.innerText)

// #table-binary-unicode-properties
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties
};

// #table-unicode-general-category-values
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";

// #table-unicode-script-values
var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues
};

var data = {};
function buildUnicodeData(ecmaVersion) {
  var d = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d.nonBinary.Script_Extensions = d.nonBinary.Script;

  d.nonBinary.gc = d.nonBinary.General_Category;
  d.nonBinary.sc = d.nonBinary.Script;
  d.nonBinary.scx = d.nonBinary.Script_Extensions;
}
buildUnicodeData(9);
buildUnicodeData(10);
buildUnicodeData(11);

var pp$8 = Parser.prototype;

var RegExpValidationState = function RegExpValidationState(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
  this.unicodeProperties = data[parser.options.ecmaVersion >= 11 ? 11 : parser.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};

RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
};

RegExpValidationState.prototype.raise = function raise (message) {
  this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
};

// If u flag is given, this returns the code point at the index (it combines a surrogate pair).
// Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
RegExpValidationState.prototype.at = function at (i, forceU) {
    if ( forceU === void 0 ) forceU = false;

  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1
  }
  var c = s.charCodeAt(i);
  if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
    return c
  }
  var next = s.charCodeAt(i + 1);
  return next >= 0xDC00 && next <= 0xDFFF ? (c << 10) + next - 0x35FDC00 : c
};

RegExpValidationState.prototype.nextIndex = function nextIndex (i, forceU) {
    if ( forceU === void 0 ) forceU = false;

  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l
  }
  var c = s.charCodeAt(i), next;
  if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l ||
      (next = s.charCodeAt(i + 1)) < 0xDC00 || next > 0xDFFF) {
    return i + 1
  }
  return i + 2
};

RegExpValidationState.prototype.current = function current (forceU) {
    if ( forceU === void 0 ) forceU = false;

  return this.at(this.pos, forceU)
};

RegExpValidationState.prototype.lookahead = function lookahead (forceU) {
    if ( forceU === void 0 ) forceU = false;

  return this.at(this.nextIndex(this.pos, forceU), forceU)
};

RegExpValidationState.prototype.advance = function advance (forceU) {
    if ( forceU === void 0 ) forceU = false;

  this.pos = this.nextIndex(this.pos, forceU);
};

RegExpValidationState.prototype.eat = function eat (ch, forceU) {
    if ( forceU === void 0 ) forceU = false;

  if (this.current(forceU) === ch) {
    this.advance(forceU);
    return true
  }
  return false
};

function codePointToString(ch) {
  if (ch <= 0xFFFF) { return String.fromCharCode(ch) }
  ch -= 0x10000;
  return String.fromCharCode((ch >> 10) + 0xD800, (ch & 0x03FF) + 0xDC00)
}

/**
 * Validate the flags part of a given RegExpLiteral.
 *
 * @param {RegExpValidationState} state The state to validate RegExp.
 * @returns {void}
 */
pp$8.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;

  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
  }
};

/**
 * Validate the pattern part of a given RegExpLiteral.
 *
 * @param {RegExpValidationState} state The state to validate RegExp.
 * @returns {void}
 */
pp$8.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);

  // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
  // parsing contains a |GroupName|, reparse with the goal symbol
  // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
  // exception if _P_ did not conform to the grammar, if any elements of _P_
  // were not matched by the parse, or if any Early Error conditions exist.
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
pp$8.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;

  this.regexp_disjunction(state);

  if (state.pos !== state.source.length) {
    // Make the same messages as V8.
    if (state.eat(0x29 /* ) */)) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(0x5D /* ] */) || state.eat(0x7D /* } */)) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name = list[i];

    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
pp$8.regexp_disjunction = function(state) {
  this.regexp_alternative(state);
  while (state.eat(0x7C /* | */)) {
    this.regexp_alternative(state);
  }

  // Make the same message as V8.
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(0x7B /* { */)) {
    state.raise("Lone quantifier brackets");
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
pp$8.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state))
    { }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
pp$8.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    // Handle `QuantifiableAssertion Quantifier` alternative.
    // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
    // is a QuantifiableAssertion.
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      // Make the same message as V8.
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true
  }

  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
pp$8.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;

  // ^, $
  if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
    return true
  }

  // \b \B
  if (state.eat(0x5C /* \ */)) {
    if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
      return true
    }
    state.pos = start;
  }

  // Lookahead / Lookbehind
  if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(0x3C /* < */);
    }
    if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
      this.regexp_disjunction(state);
      if (!state.eat(0x29 /* ) */)) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true
    }
  }

  state.pos = start;
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
pp$8.regexp_eatQuantifier = function(state, noError) {
  if ( noError === void 0 ) noError = false;

  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(0x3F /* ? */);
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
  return (
    state.eat(0x2A /* * */) ||
    state.eat(0x2B /* + */) ||
    state.eat(0x3F /* ? */) ||
    this.regexp_eatBracedQuantifier(state, noError)
  )
};
pp$8.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(0x7B /* { */)) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(0x7D /* } */)) {
        // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
pp$8.regexp_eatAtom = function(state) {
  return (
    this.regexp_eatPatternCharacters(state) ||
    state.eat(0x2E /* . */) ||
    this.regexp_eatReverseSolidusAtomEscape(state) ||
    this.regexp_eatCharacterClass(state) ||
    this.regexp_eatUncapturingGroup(state) ||
    this.regexp_eatCapturingGroup(state)
  )
};
pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(0x5C /* \ */)) {
    if (this.regexp_eatAtomEscape(state)) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(0x28 /* ( */)) {
    if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
      this.regexp_disjunction(state);
      if (state.eat(0x29 /* ) */)) {
        return true
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatCapturingGroup = function(state) {
  if (state.eat(0x28 /* ( */)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 0x3F /* ? */) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(0x29 /* ) */)) {
      state.numCapturingParens += 1;
      return true
    }
    state.raise("Unterminated group");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
pp$8.regexp_eatExtendedAtom = function(state) {
  return (
    state.eat(0x2E /* . */) ||
    this.regexp_eatReverseSolidusAtomEscape(state) ||
    this.regexp_eatCharacterClass(state) ||
    this.regexp_eatUncapturingGroup(state) ||
    this.regexp_eatCapturingGroup(state) ||
    this.regexp_eatInvalidBracedQuantifier(state) ||
    this.regexp_eatExtendedPatternCharacter(state)
  )
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
pp$8.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }
  return false
};
function isSyntaxCharacter(ch) {
  return (
    ch === 0x24 /* $ */ ||
    ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
    ch === 0x2E /* . */ ||
    ch === 0x3F /* ? */ ||
    ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
    ch >= 0x7B /* { */ && ch <= 0x7D /* } */
  )
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
// But eat eager.
pp$8.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
pp$8.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (
    ch !== -1 &&
    ch !== 0x24 /* $ */ &&
    !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
    ch !== 0x2E /* . */ &&
    ch !== 0x3F /* ? */ &&
    ch !== 0x5B /* [ */ &&
    ch !== 0x5E /* ^ */ &&
    ch !== 0x7C /* | */
  ) {
    state.advance();
    return true
  }
  return false
};

// GroupSpecifier ::
//   [empty]
//   `?` GroupName
pp$8.regexp_groupSpecifier = function(state) {
  if (state.eat(0x3F /* ? */)) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return
    }
    state.raise("Invalid group");
  }
};

// GroupName ::
//   `<` RegExpIdentifierName `>`
// Note: this updates `state.lastStringValue` property with the eaten name.
pp$8.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(0x3C /* < */)) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
      return true
    }
    state.raise("Invalid capture group name");
  }
  return false
};

// RegExpIdentifierName ::
//   RegExpIdentifierStart
//   RegExpIdentifierName RegExpIdentifierPart
// Note: this updates `state.lastStringValue` property with the eaten name.
pp$8.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true
  }
  return false
};

// RegExpIdentifierStart ::
//   UnicodeIDStart
//   `$`
//   `_`
//   `\` RegExpUnicodeEscapeSequence[+U]
pp$8.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);

  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true
  }

  state.pos = start;
  return false
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
}

// RegExpIdentifierPart ::
//   UnicodeIDContinue
//   `$`
//   `_`
//   `\` RegExpUnicodeEscapeSequence[+U]
//   <ZWNJ>
//   <ZWJ>
pp$8.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);

  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true
  }

  state.pos = start;
  return false
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
pp$8.regexp_eatAtomEscape = function(state) {
  if (
    this.regexp_eatBackReference(state) ||
    this.regexp_eatCharacterClassEscape(state) ||
    this.regexp_eatCharacterEscape(state) ||
    (state.switchN && this.regexp_eatKGroupName(state))
  ) {
    return true
  }
  if (state.switchU) {
    // Make the same message as V8.
    if (state.current() === 0x63 /* c */) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false
};
pp$8.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n = state.lastIntValue;
    if (state.switchU) {
      // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
      if (n > state.maxBackReference) {
        state.maxBackReference = n;
      }
      return true
    }
    if (n <= state.numCapturingParens) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatKGroupName = function(state) {
  if (state.eat(0x6B /* k */)) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true
    }
    state.raise("Invalid named reference");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
pp$8.regexp_eatCharacterEscape = function(state) {
  return (
    this.regexp_eatControlEscape(state) ||
    this.regexp_eatCControlLetter(state) ||
    this.regexp_eatZero(state) ||
    this.regexp_eatHexEscapeSequence(state) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(state, false) ||
    (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
    this.regexp_eatIdentityEscape(state)
  )
};
pp$8.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(0x63 /* c */)) {
    if (this.regexp_eatControlLetter(state)) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatZero = function(state) {
  if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
pp$8.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 0x74 /* t */) {
    state.lastIntValue = 0x09; /* \t */
    state.advance();
    return true
  }
  if (ch === 0x6E /* n */) {
    state.lastIntValue = 0x0A; /* \n */
    state.advance();
    return true
  }
  if (ch === 0x76 /* v */) {
    state.lastIntValue = 0x0B; /* \v */
    state.advance();
    return true
  }
  if (ch === 0x66 /* f */) {
    state.lastIntValue = 0x0C; /* \f */
    state.advance();
    return true
  }
  if (ch === 0x72 /* r */) {
    state.lastIntValue = 0x0D; /* \r */
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
pp$8.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 0x20;
    state.advance();
    return true
  }
  return false
};
function isControlLetter(ch) {
  return (
    (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
    (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
  )
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
  if ( forceU === void 0 ) forceU = false;

  var start = state.pos;
  var switchU = forceU || state.switchU;

  if (state.eat(0x75 /* u */)) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (switchU && lead >= 0xD800 && lead <= 0xDBFF) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 0xDC00 && trail <= 0xDFFF) {
            state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
            return true
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true
    }
    if (
      switchU &&
      state.eat(0x7B /* { */) &&
      this.regexp_eatHexDigits(state) &&
      state.eat(0x7D /* } */) &&
      isValidUnicode(state.lastIntValue)
    ) {
      return true
    }
    if (switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }

  return false
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 0x10FFFF
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
pp$8.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true
    }
    if (state.eat(0x2F /* / */)) {
      state.lastIntValue = 0x2F; /* / */
      return true
    }
    return false
  }

  var ch = state.current();
  if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
pp$8.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
      state.advance();
    } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
pp$8.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();

  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return true
  }

  if (
    state.switchU &&
    this.options.ecmaVersion >= 9 &&
    (ch === 0x50 /* P */ || ch === 0x70 /* p */)
  ) {
    state.lastIntValue = -1;
    state.advance();
    if (
      state.eat(0x7B /* { */) &&
      this.regexp_eatUnicodePropertyValueExpression(state) &&
      state.eat(0x7D /* } */)
    ) {
      return true
    }
    state.raise("Invalid property name");
  }

  return false
};
function isCharacterClassEscape(ch) {
  return (
    ch === 0x64 /* d */ ||
    ch === 0x44 /* D */ ||
    ch === 0x73 /* s */ ||
    ch === 0x53 /* S */ ||
    ch === 0x77 /* w */ ||
    ch === 0x57 /* W */
  )
}

// UnicodePropertyValueExpression ::
//   UnicodePropertyName `=` UnicodePropertyValue
//   LoneUnicodePropertyNameOrValue
pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;

  // UnicodePropertyName `=` UnicodePropertyValue
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return true
    }
  }
  state.pos = start;

  // LoneUnicodePropertyNameOrValue
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    return true
  }
  return false
};
pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!has(state.unicodeProperties.nonBinary, name))
    { state.raise("Invalid property name"); }
  if (!state.unicodeProperties.nonBinary[name].test(value))
    { state.raise("Invalid property value"); }
};
pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (!state.unicodeProperties.binary.test(nameOrValue))
    { state.raise("Invalid property name"); }
};

// UnicodePropertyName ::
//   UnicodePropertyNameCharacters
pp$8.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== ""
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 0x5F /* _ */
}

// UnicodePropertyValue ::
//   UnicodePropertyValueCharacters
pp$8.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== ""
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
}

// LoneUnicodePropertyNameOrValue ::
//   UnicodePropertyValueCharacters
pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state)
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
pp$8.regexp_eatCharacterClass = function(state) {
  if (state.eat(0x5B /* [ */)) {
    state.eat(0x5E /* ^ */);
    this.regexp_classRanges(state);
    if (state.eat(0x5D /* ] */)) {
      return true
    }
    // Unreachable since it threw "unterminated regular expression" error before.
    state.raise("Unterminated character class");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
pp$8.regexp_classRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(0x2D /* - */) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
pp$8.regexp_eatClassAtom = function(state) {
  var start = state.pos;

  if (state.eat(0x5C /* \ */)) {
    if (this.regexp_eatClassEscape(state)) {
      return true
    }
    if (state.switchU) {
      // Make the same message as V8.
      var ch$1 = state.current();
      if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }

  var ch = state.current();
  if (ch !== 0x5D /* ] */) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
pp$8.regexp_eatClassEscape = function(state) {
  var start = state.pos;

  if (state.eat(0x62 /* b */)) {
    state.lastIntValue = 0x08; /* <BS> */
    return true
  }

  if (state.switchU && state.eat(0x2D /* - */)) {
    state.lastIntValue = 0x2D; /* - */
    return true
  }

  if (!state.switchU && state.eat(0x63 /* c */)) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true
    }
    state.pos = start;
  }

  return (
    this.regexp_eatCharacterClassEscape(state) ||
    this.regexp_eatCharacterEscape(state)
  )
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
pp$8.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
    state.lastIntValue = ch % 0x20;
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
pp$8.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(0x78 /* x */)) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
pp$8.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
    state.advance();
  }
  return state.pos !== start
};
function isDecimalDigit(ch) {
  return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
pp$8.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start
};
function isHexDigit(ch) {
  return (
    (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
    (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
    (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
  )
}
function hexToInt(ch) {
  if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
    return 10 + (ch - 0x41 /* A */)
  }
  if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
    return 10 + (ch - 0x61 /* a */)
  }
  return ch - 0x30 /* 0 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
// Allows only 0-377(octal) i.e. 0-255(decimal).
pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
pp$8.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 0x30; /* 0 */
    state.advance();
    return true
  }
  state.lastIntValue = 0;
  return false
};
function isOctalDigit(ch) {
  return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
// And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
pp$8.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true
};

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.

var Token = function Token(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations)
    { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
  if (p.options.ranges)
    { this.range = [p.start, p.end]; }
};

// ## Tokenizer

var pp$9 = Parser.prototype;

// Move to the next token

pp$9.next = function(ignoreEscapeSequenceInKeyword) {
  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc)
    { this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword); }
  if (this.options.onToken)
    { this.options.onToken(new Token(this)); }

  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};

pp$9.getToken = function() {
  this.next();
  return new Token(this)
};

// If we're in an ES6 environment, make parsers iterable
if (typeof Symbol !== "undefined")
  { pp$9[Symbol.iterator] = function() {
    var this$1 = this;

    return {
      next: function () {
        var token = this$1.getToken();
        return {
          done: token.type === types.eof,
          value: token
        }
      }
    }
  }; }

// Toggle strict mode. Re-reads the next number or string to please
// pedantic tests (`"use strict"; 010;` should fail).

pp$9.curContext = function() {
  return this.context[this.context.length - 1]
};

// Read a single token, updating the parser object's token-related
// properties.

pp$9.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

  this.start = this.pos;
  if (this.options.locations) { this.startLoc = this.curPosition(); }
  if (this.pos >= this.input.length) { return this.finishToken(types.eof) }

  if (curContext.override) { return curContext.override(this) }
  else { this.readToken(this.fullCharCodeAtPos()); }
};

pp$9.readToken = function(code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
    { return this.readWord() }

  return this.getTokenFromCode(code)
};

pp$9.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 0xd7ff || code >= 0xe000) { return code }
  var next = this.input.charCodeAt(this.pos + 1);
  return (code << 10) + next - 0x35fdc00
};

pp$9.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
  this.pos = end + 2;
  if (this.options.locations) {
    lineBreakG.lastIndex = start;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this.curLine;
      this.lineStart = match.index + match[0].length;
    }
  }
  if (this.options.onComment)
    { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                           startLoc, this.curPosition()); }
};

pp$9.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment)
    { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                           startLoc, this.curPosition()); }
};

// Called at the start of the parse and after every token. Skips
// whitespace and comments, and.

pp$9.skipSpace = function() {
  loop: while (this.pos < this.input.length) {
    var ch = this.input.charCodeAt(this.pos);
    switch (ch) {
    case 32: case 160: // ' '
      ++this.pos;
      break
    case 13:
      if (this.input.charCodeAt(this.pos + 1) === 10) {
        ++this.pos;
      }
    case 10: case 8232: case 8233:
      ++this.pos;
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      break
    case 47: // '/'
      switch (this.input.charCodeAt(this.pos + 1)) {
      case 42: // '*'
        this.skipBlockComment();
        break
      case 47:
        this.skipLineComment(2);
        break
      default:
        break loop
      }
      break
    default:
      if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
        ++this.pos;
      } else {
        break loop
      }
    }
  }
};

// Called at the end of every token. Sets `end`, `val`, and
// maintains `context` and `exprAllowed`, and skips the space after
// the token, so that the next one's `start` will point at the
// right position.

pp$9.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) { this.endLoc = this.curPosition(); }
  var prevType = this.type;
  this.type = type;
  this.value = val;

  this.updateContext(prevType);
};

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
//
pp$9.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) { return this.readNumber(true) }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
    this.pos += 3;
    return this.finishToken(types.ellipsis)
  } else {
    ++this.pos;
    return this.finishToken(types.dot)
  }
};

pp$9.readToken_slash = function() { // '/'
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.slash, 1)
};

pp$9.readToken_mult_modulo_exp = function(code) { // '%*'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types.star : types.modulo;

  // exponentiation operator ** and **=
  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
    ++size;
    tokentype = types.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }

  if (next === 61) { return this.finishOp(types.assign, size + 1) }
  return this.finishOp(tokentype, size)
};

pp$9.readToken_pipe_amp = function(code) { // '|&'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (this.options.ecmaVersion >= 12) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 === 61) { return this.finishOp(types.assign, 3) }
    }
    return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2)
  }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1)
};

pp$9.readToken_caret = function() { // '^'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.bitwiseXOR, 1)
};

pp$9.readToken_plus_min = function(code) { // '+-'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
        (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      // A `-->` line comment
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken()
    }
    return this.finishOp(types.incDec, 2)
  }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.plusMin, 1)
};

pp$9.readToken_lt_gt = function(code) { // '<>'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types.assign, size + 1) }
    return this.finishOp(types.bitShift, size)
  }
  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
      this.input.charCodeAt(this.pos + 3) === 45) {
    // `<!--`, an XML-style comment that should be interpreted as a line comment
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken()
  }
  if (next === 61) { size = 2; }
  return this.finishOp(types.relational, size)
};

pp$9.readToken_eq_excl = function(code) { // '=!'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
    this.pos += 2;
    return this.finishToken(types.arrow)
  }
  return this.finishOp(code === 61 ? types.eq : types.prefix, 1)
};

pp$9.readToken_question = function() { // '?'
  var ecmaVersion = this.options.ecmaVersion;
  if (ecmaVersion >= 11) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 46) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 < 48 || next2 > 57) { return this.finishOp(types.questionDot, 2) }
    }
    if (next === 63) {
      if (ecmaVersion >= 12) {
        var next2$1 = this.input.charCodeAt(this.pos + 2);
        if (next2$1 === 61) { return this.finishOp(types.assign, 3) }
      }
      return this.finishOp(types.coalesce, 2)
    }
  }
  return this.finishOp(types.question, 1)
};

pp$9.getTokenFromCode = function(code) {
  switch (code) {
  // The interpretation of a dot depends on whether it is followed
  // by a digit or another two dots.
  case 46: // '.'
    return this.readToken_dot()

  // Punctuation tokens.
  case 40: ++this.pos; return this.finishToken(types.parenL)
  case 41: ++this.pos; return this.finishToken(types.parenR)
  case 59: ++this.pos; return this.finishToken(types.semi)
  case 44: ++this.pos; return this.finishToken(types.comma)
  case 91: ++this.pos; return this.finishToken(types.bracketL)
  case 93: ++this.pos; return this.finishToken(types.bracketR)
  case 123: ++this.pos; return this.finishToken(types.braceL)
  case 125: ++this.pos; return this.finishToken(types.braceR)
  case 58: ++this.pos; return this.finishToken(types.colon)

  case 96: // '`'
    if (this.options.ecmaVersion < 6) { break }
    ++this.pos;
    return this.finishToken(types.backQuote)

  case 48: // '0'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
    if (this.options.ecmaVersion >= 6) {
      if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
      if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
    }

  // Anything else beginning with a digit is an integer, octal
  // number, or float.
  case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
    return this.readNumber(false)

  // Quotes produce strings.
  case 34: case 39: // '"', "'"
    return this.readString(code)

  // Operators are parsed inline in tiny state machines. '=' (61) is
  // often referred to. `finishOp` simply skips the amount of
  // characters it is given as second argument, and returns a token
  // of the type given by its first argument.

  case 47: // '/'
    return this.readToken_slash()

  case 37: case 42: // '%*'
    return this.readToken_mult_modulo_exp(code)

  case 124: case 38: // '|&'
    return this.readToken_pipe_amp(code)

  case 94: // '^'
    return this.readToken_caret()

  case 43: case 45: // '+-'
    return this.readToken_plus_min(code)

  case 60: case 62: // '<>'
    return this.readToken_lt_gt(code)

  case 61: case 33: // '=!'
    return this.readToken_eq_excl(code)

  case 63: // '?'
    return this.readToken_question()

  case 126: // '~'
    return this.finishOp(types.prefix, 1)
  }

  this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
};

pp$9.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str)
};

pp$9.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (;;) {
    if (this.pos >= this.input.length) { this.raise(start, "Unterminated regular expression"); }
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) { this.raise(start, "Unterminated regular expression"); }
    if (!escaped) {
      if (ch === "[") { inClass = true; }
      else if (ch === "]" && inClass) { inClass = false; }
      else if (ch === "/" && !inClass) { break }
      escaped = ch === "\\";
    } else { escaped = false; }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) { this.unexpected(flagsStart); }

  // Validate pattern
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);

  // Create Literal#value property value.
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {
    // ESTree requires null if it failed to instantiate RegExp object.
    // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
  }

  return this.finishToken(types.regexp, {pattern: pattern, flags: flags, value: value})
};

// Read an integer in the given radix. Return null if zero digits
// were read, the integer value otherwise. When `len` is given, this
// will return `null` unless the integer has exactly `len` digits.

pp$9.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
  // `len` is used for character escape sequences. In that case, disallow separators.
  var allowSeparators = this.options.ecmaVersion >= 12 && len === undefined;

  // `maybeLegacyOctalNumericLiteral` is true if it doesn't have prefix (0x,0o,0b)
  // and isn't fraction part nor exponent part. In that case, if the first digit
  // is zero then disallow separators.
  var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;

  var start = this.pos, total = 0, lastCode = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
    var code = this.input.charCodeAt(this.pos), val = (void 0);

    if (allowSeparators && code === 95) {
      if (isLegacyOctalNumericLiteral) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"); }
      if (lastCode === 95) { this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"); }
      if (i === 0) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"); }
      lastCode = code;
      continue
    }

    if (code >= 97) { val = code - 97 + 10; } // a
    else if (code >= 65) { val = code - 65 + 10; } // A
    else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
    else { val = Infinity; }
    if (val >= radix) { break }
    lastCode = code;
    total = total * radix + val;
  }

  if (allowSeparators && lastCode === 95) { this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"); }
  if (this.pos === start || len != null && this.pos - start !== len) { return null }

  return total
};

function stringToNumber(str, isLegacyOctalNumericLiteral) {
  if (isLegacyOctalNumericLiteral) {
    return parseInt(str, 8)
  }

  // `parseFloat(value)` stops parsing at the first numeric separator then returns a wrong value.
  return parseFloat(str.replace(/_/g, ""))
}

function stringToBigInt(str) {
  if (typeof BigInt !== "function") {
    return null
  }

  // `BigInt(value)` throws syntax error if the string contains numeric separators.
  return BigInt(str.replace(/_/g, ""))
}

pp$9.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2; // 0x
  var val = this.readInt(radix);
  if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
  return this.finishToken(types.num, val)
};

// Read an integer, octal integer, or floating-point number.

pp$9.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10, undefined, true) === null) { this.raise(start, "Invalid number"); }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) { this.raise(start, "Invalid number"); }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var val$1 = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
    return this.finishToken(types.num, val$1)
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
  if (next === 46 && !octal) { // '.'
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) { // 'eE'
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) { ++this.pos; } // '+-'
    if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

  var val = stringToNumber(this.input.slice(start, this.pos), octal);
  return this.finishToken(types.num, val)
};

// Read a string value, interpreting backslash-escapes.

pp$9.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;

  if (ch === 123) { // '{'
    if (this.options.ecmaVersion < 6) { this.unexpected(); }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
  } else {
    code = this.readHexChar(4);
  }
  return code
};

function codePointToString$1(code) {
  // UTF-16 Decoding
  if (code <= 0xFFFF) { return String.fromCharCode(code) }
  code -= 0x10000;
  return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
}

pp$9.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (;;) {
    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated string constant"); }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) { break }
    if (ch === 92) { // '\'
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else {
      if (isNewLine(ch, this.options.ecmaVersion >= 10)) { this.raise(this.start, "Unterminated string constant"); }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types.string, out)
};

// Reads template string tokens.

var INVALID_TEMPLATE_ESCAPE_ERROR = {};

pp$9.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err
    }
  }

  this.inTemplateElement = false;
};

pp$9.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR
  } else {
    this.raise(position, message);
  }
};

pp$9.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (;;) {
    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated template"); }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '`', '${'
      if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(types.dollarBraceL)
        } else {
          ++this.pos;
          return this.finishToken(types.backQuote)
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types.template, out)
    }
    if (ch === 92) { // '\'
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch) {
      case 13:
        if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; }
      case 10:
        out += "\n";
        break
      default:
        out += String.fromCharCode(ch);
        break
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};

// Reads a template token to search for the end, without validating any escape sequences
pp$9.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
    case "\\":
      ++this.pos;
      break

    case "$":
      if (this.input[this.pos + 1] !== "{") {
        break
      }
    // falls through

    case "`":
      return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos))

    // no default
    }
  }
  this.raise(this.start, "Unterminated template");
};

// Used to read escaped characters

pp$9.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
  case 110: return "\n" // 'n' -> '\n'
  case 114: return "\r" // 'r' -> '\r'
  case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
  case 117: return codePointToString$1(this.readCodePoint()) // 'u'
  case 116: return "\t" // 't' -> '\t'
  case 98: return "\b" // 'b' -> '\b'
  case 118: return "\u000b" // 'v' -> '\u000b'
  case 102: return "\f" // 'f' -> '\f'
  case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
  case 10: // ' \n'
    if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
    return ""
  case 56:
  case 57:
    if (inTemplate) {
      var codePos = this.pos - 1;

      this.invalidStringToken(
        codePos,
        "Invalid escape sequence in template string"
      );

      return null
    }
  default:
    if (ch >= 48 && ch <= 55) {
      var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
      var octal = parseInt(octalStr, 8);
      if (octal > 255) {
        octalStr = octalStr.slice(0, -1);
        octal = parseInt(octalStr, 8);
      }
      this.pos += octalStr.length - 1;
      ch = this.input.charCodeAt(this.pos);
      if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
        this.invalidStringToken(
          this.pos - 1 - octalStr.length,
          inTemplate
            ? "Octal literal in template string"
            : "Octal literal in strict mode"
        );
      }
      return String.fromCharCode(octal)
    }
    if (isNewLine(ch)) {
      // Unicode new line characters after \ get removed from output in both
      // template literals and strings
      return ""
    }
    return String.fromCharCode(ch)
  }
};

// Used to read character escape sequences ('\x', '\u', '\U').

pp$9.readHexChar = function(len) {
  var codePos = this.pos;
  var n = this.readInt(16, len);
  if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
  return n
};

// Read an identifier, and return it as a string. Sets `this.containsEsc`
// to whether the word contained a '\u' escape.
//
// Incrementally adds only escaped chars, adding other chunks as-is
// as a micro-optimization.

pp$9.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 0xffff ? 1 : 2;
    } else if (ch === 92) { // "\"
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) // "u"
        { this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"); }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
        { this.invalidStringToken(escStart, "Invalid Unicode escape"); }
      word += codePointToString$1(esc);
      chunkStart = this.pos;
    } else {
      break
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos)
};

// Read an identifier or keyword token. Will check for reserved
// words when necessary.

pp$9.readWord = function() {
  var word = this.readWord1();
  var type = types.name;
  if (this.keywords.test(word)) {
    type = keywords$1[word];
  }
  return this.finishToken(type, word)
};

// Acorn is a tiny, fast JavaScript parser written in JavaScript.

var version = "7.4.1";

Parser.acorn = {
  Parser: Parser,
  version: version,
  defaultOptions: defaultOptions,
  Position: Position,
  SourceLocation: SourceLocation,
  getLineInfo: getLineInfo,
  Node: Node,
  TokenType: TokenType,
  tokTypes: types,
  keywordTypes: keywords$1,
  TokContext: TokContext,
  tokContexts: types$1,
  isIdentifierChar: isIdentifierChar,
  isIdentifierStart: isIdentifierStart,
  Token: Token,
  isNewLine: isNewLine,
  lineBreak: lineBreak,
  lineBreakG: lineBreakG,
  nonASCIIwhitespace: nonASCIIwhitespace
};

// The main exported interface (under `self.acorn` when in the
// browser) is a `parse` function that takes a code string and
// returns an abstract syntax tree as specified by [Mozilla parser
// API][api].
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

function parse(input, options) {
  return Parser.parse(input, options)
}

// This function tries to parse a single expression at a given
// offset in a string. Useful for parsing mixed-language formats
// that embed JavaScript expressions.

function parseExpressionAt(input, pos, options) {
  return Parser.parseExpressionAt(input, pos, options)
}

// Acorn is organized as a tokenizer and a recursive-descent parser.
// The `tokenizer` export provides an interface to the tokenizer.

function tokenizer(input, options) {
  return Parser.tokenizer(input, options)
}




/***/ }),

/***/ 27563:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ab": () => (/* binding */ COMMENT),
/* harmony export */   "Fr": () => (/* binding */ RULESET),
/* harmony export */   "G$": () => (/* binding */ WEBKIT),
/* harmony export */   "K$": () => (/* binding */ IMPORT),
/* harmony export */   "MS": () => (/* binding */ MS),
/* harmony export */   "h5": () => (/* binding */ DECLARATION),
/* harmony export */   "lK": () => (/* binding */ KEYFRAMES),
/* harmony export */   "uj": () => (/* binding */ MOZ)
/* harmony export */ });
/* unused harmony exports PAGE, MEDIA, CHARSET, VIEWPORT, SUPPORTS, DOCUMENT, NAMESPACE, FONT_FACE, COUNTER_STYLE, FONT_FEATURE_VALUES */
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'


/***/ }),

/***/ 88160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cD": () => (/* binding */ rulesheet),
/* harmony export */   "qR": () => (/* binding */ middleware)
/* harmony export */ });
/* unused harmony exports prefixer, namespace */
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26686);






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .sizeof */ .Ei)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children)
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(element.props, function (value) {
							switch (match(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return serialize([copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return serialize([
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case RULESET:
			element.props = element.props.map(function (value) {
				return combine(tokenize(value), function (value, index, children) {
					switch (charat(value, 0)) {
						// \f
						case 12:
							return substr(value, 1, strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return sizeof(children) > 1 ? '' : value
								case index = sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ 92190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY": () => (/* binding */ compile)
/* harmony export */ });
/* unused harmony exports parse, ruleset, comment, declaration */
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27563);
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26686);
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46411);




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .dealloc */ .cE)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .alloc */ .un)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .charat */ .uO)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .indexof */ .Cw)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .delimit */ .iF)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .delimit */ .iF)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .whitespace */ .Qb)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .escaping */ .kq)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .caret */ .Ud)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .peek */ .fj)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .commenter */ .q6)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .caret */ .Ud)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .charat */ .uO)(characters, 3) === 110 ? 100 : atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .prev */ .mp)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .from */ .Dp)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .peek */ .fj)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .delimit */ .iF)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .peek */ .fj)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .identifier */ .QU)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .caret */ .Ud)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .sizeof */ .Ei)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .abs */ .Wn)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .trim */ .fy)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .node */ .dH)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__/* .RULESET */ .Fr : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .node */ .dH)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__/* .COMMENT */ .Ab, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .from */ .Dp)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .char */ .Tb)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .node */ .dH)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__/* .DECLARATION */ .h5, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, length + 1, -1), length)
}


/***/ }),

/***/ 20211:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ stringify),
/* harmony export */   "q": () => (/* binding */ serialize)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27563);
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26686);



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .sizeof */ .Ei)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .IMPORT */ .K$: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .DECLARATION */ .h5: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .COMMENT */ .Ab: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .KEYFRAMES */ .lK: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .RULESET */ .Fr: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .strlen */ .to)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ 46411:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FK": () => (/* binding */ position),
/* harmony export */   "JG": () => (/* binding */ copy),
/* harmony export */   "QU": () => (/* binding */ identifier),
/* harmony export */   "Qb": () => (/* binding */ whitespace),
/* harmony export */   "Tb": () => (/* binding */ char),
/* harmony export */   "Ud": () => (/* binding */ caret),
/* harmony export */   "cE": () => (/* binding */ dealloc),
/* harmony export */   "dH": () => (/* binding */ node),
/* harmony export */   "fj": () => (/* binding */ peek),
/* harmony export */   "iF": () => (/* binding */ delimit),
/* harmony export */   "kq": () => (/* binding */ escaping),
/* harmony export */   "lp": () => (/* binding */ next),
/* harmony export */   "mp": () => (/* binding */ prev),
/* harmony export */   "q6": () => (/* binding */ commenter),
/* harmony export */   "r": () => (/* binding */ token),
/* harmony export */   "tP": () => (/* binding */ slice),
/* harmony export */   "un": () => (/* binding */ alloc)
/* harmony export */ });
/* unused harmony exports line, column, length, character, characters, tokenize, tokenizer, delimiter */
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26686);


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .assign */ .f0)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .charat */ .uO)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .charat */ .uO)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .charat */ .uO)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .substr */ .tb)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .strlen */ .to)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .trim */ .fy)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: append(identifier(position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .from */ .Dp)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ 26686:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ combine),
/* harmony export */   "Cw": () => (/* binding */ indexof),
/* harmony export */   "Dp": () => (/* binding */ from),
/* harmony export */   "EQ": () => (/* binding */ match),
/* harmony export */   "Ei": () => (/* binding */ sizeof),
/* harmony export */   "R3": () => (/* binding */ append),
/* harmony export */   "Wn": () => (/* binding */ abs),
/* harmony export */   "f0": () => (/* binding */ assign),
/* harmony export */   "fy": () => (/* binding */ trim),
/* harmony export */   "gx": () => (/* binding */ replace),
/* harmony export */   "tb": () => (/* binding */ substr),
/* harmony export */   "to": () => (/* binding */ strlen),
/* harmony export */   "uO": () => (/* binding */ charat),
/* harmony export */   "vp": () => (/* binding */ hash)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ })

}]);
//# sourceMappingURL=904.ac9daf80.iframe.bundle.js.map