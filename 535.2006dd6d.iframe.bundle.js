(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[535],{

/***/ 39152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(41821);
__webpack_require__(63497);
__webpack_require__(22534);
__webpack_require__(96203);
__webpack_require__(93796);
__webpack_require__(6390);
__webpack_require__(2098);
__webpack_require__(66912);
__webpack_require__(21290);
__webpack_require__(19469);
__webpack_require__(57152);
__webpack_require__(42511);
__webpack_require__(25697);
__webpack_require__(41797);
__webpack_require__(89866);
__webpack_require__(44190);
__webpack_require__(37356);
__webpack_require__(2146);
__webpack_require__(63811);
__webpack_require__(9063);
__webpack_require__(33174);
__webpack_require__(27425);
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
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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
var XHTMLEntities = __webpack_require__(55447);
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

/***/ 55447:
/***/ ((module) => {

"use strict";


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

/***/ 47150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(86341);
var tryToString = __webpack_require__(57305);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 84692:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isConstructor = __webpack_require__(38418);
var tryToString = __webpack_require__(57305);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 76295:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(86341);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 35069:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(14138);
var create = __webpack_require__(39592);
var defineProperty = (__webpack_require__(91229).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 13788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(77623).charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ 49129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototypeOf = __webpack_require__(20914);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 6570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(14357);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 39076:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(23935);

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ 31959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(14976).forEach);
var arrayMethodIsStrict = __webpack_require__(75759);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ 88873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(27020);
var call = __webpack_require__(53992);
var toObject = __webpack_require__(31025);
var callWithSafeIterationClosing = __webpack_require__(31597);
var isArrayIteratorMethod = __webpack_require__(53944);
var isConstructor = __webpack_require__(38418);
var lengthOfArrayLike = __webpack_require__(83339);
var createProperty = __webpack_require__(81017);
var getIterator = __webpack_require__(91422);
var getIteratorMethod = __webpack_require__(99106);

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 12444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(89020);
var toAbsoluteIndex = __webpack_require__(15118);
var lengthOfArrayLike = __webpack_require__(83339);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 14976:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(27020);
var uncurryThis = __webpack_require__(97898);
var IndexedObject = __webpack_require__(69691);
var toObject = __webpack_require__(31025);
var lengthOfArrayLike = __webpack_require__(83339);
var arraySpeciesCreate = __webpack_require__(57799);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 16084:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);
var wellKnownSymbol = __webpack_require__(14138);
var V8_VERSION = __webpack_require__(38884);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 75759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(23935);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ 22173:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toAbsoluteIndex = __webpack_require__(15118);
var lengthOfArrayLike = __webpack_require__(83339);
var createProperty = __webpack_require__(81017);

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ 3870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 5130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(13005);
var isConstructor = __webpack_require__(38418);
var isObject = __webpack_require__(14357);
var wellKnownSymbol = __webpack_require__(14138);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ 57799:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(5130);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 31597:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(6570);
var iteratorClose = __webpack_require__(25182);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 70599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(14138);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 30582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThisRaw = __webpack_require__(61817);

var toString = uncurryThisRaw({}.toString);
var stringSlice = uncurryThisRaw(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 20378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(21511);
var isCallable = __webpack_require__(86341);
var classofRaw = __webpack_require__(30582);
var wellKnownSymbol = __webpack_require__(14138);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = (__webpack_require__(91229).f);
var create = __webpack_require__(39592);
var defineBuiltIns = __webpack_require__(6511);
var bind = __webpack_require__(27020);
var anInstance = __webpack_require__(49129);
var isNullOrUndefined = __webpack_require__(63626);
var iterate = __webpack_require__(26578);
var defineIterator = __webpack_require__(96761);
var createIterResultObject = __webpack_require__(40571);
var setSpecies = __webpack_require__(90794);
var DESCRIPTORS = __webpack_require__(9137);
var fastKey = (__webpack_require__(34493).fastKey);
var InternalStateModule = __webpack_require__(73589);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind == 'keys') return createIterResultObject(entry.key, false);
      if (kind == 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ 24112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var global = __webpack_require__(48239);
var uncurryThis = __webpack_require__(97898);
var isForced = __webpack_require__(21273);
var defineBuiltIn = __webpack_require__(50732);
var InternalMetadataModule = __webpack_require__(34493);
var iterate = __webpack_require__(26578);
var anInstance = __webpack_require__(49129);
var isCallable = __webpack_require__(86341);
var isNullOrUndefined = __webpack_require__(63626);
var isObject = __webpack_require__(14357);
var fails = __webpack_require__(23935);
var checkCorrectnessOfIteration = __webpack_require__(70599);
var setToStringTag = __webpack_require__(34189);
var inheritIfRequired = __webpack_require__(88351);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ 23517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(11380);
var ownKeys = __webpack_require__(17625);
var getOwnPropertyDescriptorModule = __webpack_require__(70884);
var definePropertyModule = __webpack_require__(91229);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 70352:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(14138);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 93386:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 40571:
/***/ ((module) => {

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 72426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9137);
var definePropertyModule = __webpack_require__(91229);
var createPropertyDescriptor = __webpack_require__(23779);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 23779:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 81017:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(49019);
var definePropertyModule = __webpack_require__(91229);
var createPropertyDescriptor = __webpack_require__(23779);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 50732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(86341);
var definePropertyModule = __webpack_require__(91229);
var makeBuiltIn = __webpack_require__(67242);
var defineGlobalProperty = __webpack_require__(51263);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 6511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineBuiltIn = __webpack_require__(50732);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 51263:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 9137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 74736:
/***/ ((module) => {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 18245:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var isObject = __webpack_require__(14357);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 20281:
/***/ ((module) => {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 58916:
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 89009:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(18245);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ 65213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_DENO = __webpack_require__(31783);
var IS_NODE = __webpack_require__(88856);

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ 31783:
/***/ ((module) => {

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ 79582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(19030);
var global = __webpack_require__(48239);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ 10053:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(19030);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 88856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(30582);
var global = __webpack_require__(48239);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 83159:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(19030);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ 19030:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(3247);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 38884:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var userAgent = __webpack_require__(19030);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 4317:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 71106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var getOwnPropertyDescriptor = (__webpack_require__(70884).f);
var createNonEnumerableProperty = __webpack_require__(72426);
var defineBuiltIn = __webpack_require__(50732);
var defineGlobalProperty = __webpack_require__(51263);
var copyConstructorProperties = __webpack_require__(23517);
var isForced = __webpack_require__(21273);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 23935:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 51781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(80232);
var uncurryThis = __webpack_require__(97898);
var defineBuiltIn = __webpack_require__(50732);
var regexpExec = __webpack_require__(91622);
var fails = __webpack_require__(23935);
var wellKnownSymbol = __webpack_require__(14138);
var createNonEnumerableProperty = __webpack_require__(72426);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ 41405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 59202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(84090);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 27020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);
var aCallable = __webpack_require__(47150);
var NATIVE_BIND = __webpack_require__(84090);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 84090:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 25877:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(97898);
var aCallable = __webpack_require__(47150);
var isObject = __webpack_require__(14357);
var hasOwn = __webpack_require__(11380);
var arraySlice = __webpack_require__(3870);
var NATIVE_BIND = __webpack_require__(84090);

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ 53992:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(84090);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 49284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9137);
var hasOwn = __webpack_require__(11380);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 61817:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(84090);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = function (fn) {
  return NATIVE_BIND ? uncurryThisWithBind(fn) : function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 97898:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classofRaw = __webpack_require__(30582);
var uncurryThisRaw = __webpack_require__(61817);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThisRaw(fn);
};


/***/ }),

/***/ 3247:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var isCallable = __webpack_require__(86341);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 99106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(20378);
var getMethod = __webpack_require__(31450);
var isNullOrUndefined = __webpack_require__(63626);
var Iterators = __webpack_require__(353);
var wellKnownSymbol = __webpack_require__(14138);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 91422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(53992);
var aCallable = __webpack_require__(47150);
var anObject = __webpack_require__(6570);
var tryToString = __webpack_require__(57305);
var getIteratorMethod = __webpack_require__(99106);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 31450:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(47150);
var isNullOrUndefined = __webpack_require__(63626);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 33625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);
var toObject = __webpack_require__(31025);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ 48239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 11380:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);
var toObject = __webpack_require__(31025);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 28705:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 52160:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ 93826:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(3247);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 64865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9137);
var fails = __webpack_require__(23935);
var createElement = __webpack_require__(18245);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 69691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);
var fails = __webpack_require__(23935);
var classof = __webpack_require__(30582);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 88351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(86341);
var isObject = __webpack_require__(14357);
var setPrototypeOf = __webpack_require__(30581);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 30684:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);
var isCallable = __webpack_require__(86341);
var store = __webpack_require__(15308);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 34493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var uncurryThis = __webpack_require__(97898);
var hiddenKeys = __webpack_require__(28705);
var isObject = __webpack_require__(14357);
var hasOwn = __webpack_require__(11380);
var defineProperty = (__webpack_require__(91229).f);
var getOwnPropertyNamesModule = __webpack_require__(66259);
var getOwnPropertyNamesExternalModule = __webpack_require__(55723);
var isExtensible = __webpack_require__(56762);
var uid = __webpack_require__(81633);
var FREEZING = __webpack_require__(41405);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ 73589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(21452);
var global = __webpack_require__(48239);
var isObject = __webpack_require__(14357);
var createNonEnumerableProperty = __webpack_require__(72426);
var hasOwn = __webpack_require__(11380);
var shared = __webpack_require__(15308);
var sharedKey = __webpack_require__(25655);
var hiddenKeys = __webpack_require__(28705);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 53944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(14138);
var Iterators = __webpack_require__(353);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 13005:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(30582);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 86341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $documentAll = __webpack_require__(74736);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 38418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);
var fails = __webpack_require__(23935);
var isCallable = __webpack_require__(86341);
var classof = __webpack_require__(20378);
var getBuiltIn = __webpack_require__(3247);
var inspectSource = __webpack_require__(30684);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 57694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(11380);

module.exports = function (descriptor) {
  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));
};


/***/ }),

/***/ 21273:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);
var isCallable = __webpack_require__(86341);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 63626:
/***/ ((module) => {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 14357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(86341);
var $documentAll = __webpack_require__(74736);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 32758:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 8379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(14357);
var classof = __webpack_require__(30582);
var wellKnownSymbol = __webpack_require__(14138);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ 36551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(3247);
var isCallable = __webpack_require__(86341);
var isPrototypeOf = __webpack_require__(20914);
var USE_SYMBOL_AS_UID = __webpack_require__(38889);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 26578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(27020);
var call = __webpack_require__(53992);
var anObject = __webpack_require__(6570);
var tryToString = __webpack_require__(57305);
var isArrayIteratorMethod = __webpack_require__(53944);
var lengthOfArrayLike = __webpack_require__(83339);
var isPrototypeOf = __webpack_require__(20914);
var getIterator = __webpack_require__(91422);
var getIteratorMethod = __webpack_require__(99106);
var iteratorClose = __webpack_require__(25182);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 25182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(53992);
var anObject = __webpack_require__(6570);
var getMethod = __webpack_require__(31450);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 28614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = (__webpack_require__(85274).IteratorPrototype);
var create = __webpack_require__(39592);
var createPropertyDescriptor = __webpack_require__(23779);
var setToStringTag = __webpack_require__(34189);
var Iterators = __webpack_require__(353);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 96761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var call = __webpack_require__(53992);
var IS_PURE = __webpack_require__(32758);
var FunctionName = __webpack_require__(49284);
var isCallable = __webpack_require__(86341);
var createIteratorConstructor = __webpack_require__(28614);
var getPrototypeOf = __webpack_require__(55175);
var setPrototypeOf = __webpack_require__(30581);
var setToStringTag = __webpack_require__(34189);
var createNonEnumerableProperty = __webpack_require__(72426);
var defineBuiltIn = __webpack_require__(50732);
var wellKnownSymbol = __webpack_require__(14138);
var Iterators = __webpack_require__(353);
var IteratorsCore = __webpack_require__(85274);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 85274:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(23935);
var isCallable = __webpack_require__(86341);
var isObject = __webpack_require__(14357);
var create = __webpack_require__(39592);
var getPrototypeOf = __webpack_require__(55175);
var defineBuiltIn = __webpack_require__(50732);
var wellKnownSymbol = __webpack_require__(14138);
var IS_PURE = __webpack_require__(32758);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 353:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 83339:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(34313);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 67242:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);
var isCallable = __webpack_require__(86341);
var hasOwn = __webpack_require__(11380);
var DESCRIPTORS = __webpack_require__(9137);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(49284).CONFIGURABLE);
var inspectSource = __webpack_require__(30684);
var InternalStateModule = __webpack_require__(73589);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 86389:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 77667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var bind = __webpack_require__(27020);
var getOwnPropertyDescriptor = (__webpack_require__(70884).f);
var macrotask = (__webpack_require__(64707).set);
var IS_IOS = __webpack_require__(10053);
var IS_IOS_PEBBLE = __webpack_require__(79582);
var IS_WEBOS_WEBKIT = __webpack_require__(83159);
var IS_NODE = __webpack_require__(88856);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ 2482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(47150);

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 17970:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(8379);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 50148:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(9137);
var uncurryThis = __webpack_require__(97898);
var call = __webpack_require__(53992);
var fails = __webpack_require__(23935);
var objectKeys = __webpack_require__(47365);
var getOwnPropertySymbolsModule = __webpack_require__(2171);
var propertyIsEnumerableModule = __webpack_require__(90389);
var toObject = __webpack_require__(31025);
var IndexedObject = __webpack_require__(69691);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 39592:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(6570);
var definePropertiesModule = __webpack_require__(4187);
var enumBugKeys = __webpack_require__(4317);
var hiddenKeys = __webpack_require__(28705);
var html = __webpack_require__(93826);
var documentCreateElement = __webpack_require__(18245);
var sharedKey = __webpack_require__(25655);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 4187:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9137);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(74210);
var definePropertyModule = __webpack_require__(91229);
var anObject = __webpack_require__(6570);
var toIndexedObject = __webpack_require__(89020);
var objectKeys = __webpack_require__(47365);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 91229:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9137);
var IE8_DOM_DEFINE = __webpack_require__(64865);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(74210);
var anObject = __webpack_require__(6570);
var toPropertyKey = __webpack_require__(49019);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 70884:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9137);
var call = __webpack_require__(53992);
var propertyIsEnumerableModule = __webpack_require__(90389);
var createPropertyDescriptor = __webpack_require__(23779);
var toIndexedObject = __webpack_require__(89020);
var toPropertyKey = __webpack_require__(49019);
var hasOwn = __webpack_require__(11380);
var IE8_DOM_DEFINE = __webpack_require__(64865);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 55723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(30582);
var toIndexedObject = __webpack_require__(89020);
var $getOwnPropertyNames = (__webpack_require__(66259).f);
var arraySlice = __webpack_require__(22173);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 66259:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(69088);
var enumBugKeys = __webpack_require__(4317);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 2171:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 55175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(11380);
var isCallable = __webpack_require__(86341);
var toObject = __webpack_require__(31025);
var sharedKey = __webpack_require__(25655);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(93386);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 56762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);
var isObject = __webpack_require__(14357);
var classof = __webpack_require__(30582);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(39076);

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ 20914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 69088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);
var hasOwn = __webpack_require__(11380);
var toIndexedObject = __webpack_require__(89020);
var indexOf = (__webpack_require__(12444).indexOf);
var hiddenKeys = __webpack_require__(28705);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 47365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(69088);
var enumBugKeys = __webpack_require__(4317);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 90389:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 30581:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(97898);
var anObject = __webpack_require__(6570);
var aPossiblePrototype = __webpack_require__(76295);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 65684:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9137);
var uncurryThis = __webpack_require__(97898);
var objectKeys = __webpack_require__(47365);
var toIndexedObject = __webpack_require__(89020);
var $propertyIsEnumerable = (__webpack_require__(90389).f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ 16994:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(21511);
var classof = __webpack_require__(20378);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 18535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(53992);
var isCallable = __webpack_require__(86341);
var isObject = __webpack_require__(14357);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 17625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(3247);
var uncurryThis = __webpack_require__(97898);
var getOwnPropertyNamesModule = __webpack_require__(66259);
var getOwnPropertySymbolsModule = __webpack_require__(2171);
var anObject = __webpack_require__(6570);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 24561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);

module.exports = global;


/***/ }),

/***/ 81856:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ 1161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var NativePromiseConstructor = __webpack_require__(40414);
var isCallable = __webpack_require__(86341);
var isForced = __webpack_require__(21273);
var inspectSource = __webpack_require__(30684);
var wellKnownSymbol = __webpack_require__(14138);
var IS_BROWSER = __webpack_require__(65213);
var IS_DENO = __webpack_require__(31783);
var IS_PURE = __webpack_require__(32758);
var V8_VERSION = __webpack_require__(38884);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ 40414:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);

module.exports = global.Promise;


/***/ }),

/***/ 27588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(6570);
var isObject = __webpack_require__(14357);
var newPromiseCapability = __webpack_require__(2482);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 15539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NativePromiseConstructor = __webpack_require__(40414);
var checkCorrectnessOfIteration = __webpack_require__(70599);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(1161).CONSTRUCTOR);

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ 2289:
/***/ ((module) => {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ 6131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(53992);
var anObject = __webpack_require__(6570);
var isCallable = __webpack_require__(86341);
var classof = __webpack_require__(30582);
var regexpExec = __webpack_require__(91622);

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ 91622:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(53992);
var uncurryThis = __webpack_require__(97898);
var toString = __webpack_require__(56825);
var regexpFlags = __webpack_require__(27864);
var stickyHelpers = __webpack_require__(9755);
var shared = __webpack_require__(8334);
var create = __webpack_require__(39592);
var getInternalState = (__webpack_require__(73589).get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(1538);
var UNSUPPORTED_NCG = __webpack_require__(83539);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 27864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(6570);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 27345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(53992);
var hasOwn = __webpack_require__(11380);
var isPrototypeOf = __webpack_require__(20914);
var regExpFlags = __webpack_require__(27864);

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ 9755:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);
var global = __webpack_require__(48239);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ 1538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);
var global = __webpack_require__(48239);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ 83539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(23935);
var global = __webpack_require__(48239);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ 32968:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNullOrUndefined = __webpack_require__(63626);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 44273:
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ 90794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(3247);
var definePropertyModule = __webpack_require__(91229);
var wellKnownSymbol = __webpack_require__(14138);
var DESCRIPTORS = __webpack_require__(9137);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 34189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = (__webpack_require__(91229).f);
var hasOwn = __webpack_require__(11380);
var wellKnownSymbol = __webpack_require__(14138);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 25655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(8334);
var uid = __webpack_require__(81633);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 15308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var defineGlobalProperty = __webpack_require__(51263);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 8334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(32758);
var store = __webpack_require__(15308);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 72213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(6570);
var aConstructor = __webpack_require__(84692);
var isNullOrUndefined = __webpack_require__(63626);
var wellKnownSymbol = __webpack_require__(14138);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 77623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);
var toIntegerOrInfinity = __webpack_require__(9264);
var toString = __webpack_require__(56825);
var requireObjectCoercible = __webpack_require__(32968);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 7260:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);
var requireObjectCoercible = __webpack_require__(32968);
var toString = __webpack_require__(56825);
var whitespaces = __webpack_require__(65521);

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 49570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(38884);
var fails = __webpack_require__(23935);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 67023:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(53992);
var getBuiltIn = __webpack_require__(3247);
var wellKnownSymbol = __webpack_require__(14138);
var defineBuiltIn = __webpack_require__(50732);

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ 23317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_SYMBOL = __webpack_require__(49570);

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ 64707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var apply = __webpack_require__(59202);
var bind = __webpack_require__(27020);
var isCallable = __webpack_require__(86341);
var hasOwn = __webpack_require__(11380);
var fails = __webpack_require__(23935);
var html = __webpack_require__(93826);
var arraySlice = __webpack_require__(3870);
var createElement = __webpack_require__(18245);
var validateArgumentsLength = __webpack_require__(8351);
var IS_IOS = __webpack_require__(10053);
var IS_NODE = __webpack_require__(88856);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ 42444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ 15118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(9264);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 89020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(69691);
var requireObjectCoercible = __webpack_require__(32968);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trunc = __webpack_require__(86389);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 34313:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(9264);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 31025:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(32968);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 2515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(53992);
var isObject = __webpack_require__(14357);
var isSymbol = __webpack_require__(36551);
var getMethod = __webpack_require__(31450);
var ordinaryToPrimitive = __webpack_require__(18535);
var wellKnownSymbol = __webpack_require__(14138);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 49019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(2515);
var isSymbol = __webpack_require__(36551);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 21511:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(14138);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 56825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(20378);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 57305:
/***/ ((module) => {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 81633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(97898);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 38889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(49570);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 74210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9137);
var fails = __webpack_require__(23935);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 8351:
/***/ ((module) => {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 21452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var isCallable = __webpack_require__(86341);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 76475:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(24561);
var hasOwn = __webpack_require__(11380);
var wrappedWellKnownSymbolModule = __webpack_require__(48585);
var defineProperty = (__webpack_require__(91229).f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 48585:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(14138);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 14138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var shared = __webpack_require__(8334);
var hasOwn = __webpack_require__(11380);
var uid = __webpack_require__(81633);
var NATIVE_SYMBOL = __webpack_require__(49570);
var USE_SYMBOL_AS_UID = __webpack_require__(38889);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 65521:
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 78453:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var fails = __webpack_require__(23935);
var isArray = __webpack_require__(13005);
var isObject = __webpack_require__(14357);
var toObject = __webpack_require__(31025);
var lengthOfArrayLike = __webpack_require__(83339);
var doesNotExceedSafeInteger = __webpack_require__(20281);
var createProperty = __webpack_require__(81017);
var arraySpeciesCreate = __webpack_require__(57799);
var arrayMethodHasSpeciesSupport = __webpack_require__(16084);
var wellKnownSymbol = __webpack_require__(14138);
var V8_VERSION = __webpack_require__(38884);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ 54553:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var $filter = (__webpack_require__(14976).filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(16084);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 2151:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var $find = (__webpack_require__(14976).find);
var addToUnscopables = __webpack_require__(35069);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ 60756:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var from = __webpack_require__(88873);
var checkCorrectnessOfIteration = __webpack_require__(70599);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ 67994:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var $includes = (__webpack_require__(12444).includes);
var fails = __webpack_require__(23935);
var addToUnscopables = __webpack_require__(35069);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 27951:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(89020);
var addToUnscopables = __webpack_require__(35069);
var Iterators = __webpack_require__(353);
var InternalStateModule = __webpack_require__(73589);
var defineProperty = (__webpack_require__(91229).f);
var defineIterator = __webpack_require__(96761);
var createIterResultObject = __webpack_require__(40571);
var IS_PURE = __webpack_require__(32758);
var DESCRIPTORS = __webpack_require__(9137);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ 78373:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var uncurryThis = __webpack_require__(97898);
var IndexedObject = __webpack_require__(69691);
var toIndexedObject = __webpack_require__(89020);
var arrayMethodIsStrict = __webpack_require__(75759);

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ 92418:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var $map = (__webpack_require__(14976).map);
var arrayMethodHasSpeciesSupport = __webpack_require__(16084);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 3555:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var isArray = __webpack_require__(13005);
var isConstructor = __webpack_require__(38418);
var isObject = __webpack_require__(14357);
var toAbsoluteIndex = __webpack_require__(15118);
var lengthOfArrayLike = __webpack_require__(83339);
var toIndexedObject = __webpack_require__(89020);
var createProperty = __webpack_require__(81017);
var wellKnownSymbol = __webpack_require__(14138);
var arrayMethodHasSpeciesSupport = __webpack_require__(16084);
var nativeSlice = __webpack_require__(3870);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 76074:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(9137);
var FUNCTION_NAME_EXISTS = (__webpack_require__(49284).EXISTS);
var uncurryThis = __webpack_require__(97898);
var defineProperty = (__webpack_require__(91229).f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ 11343:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var getBuiltIn = __webpack_require__(3247);
var apply = __webpack_require__(59202);
var call = __webpack_require__(53992);
var uncurryThis = __webpack_require__(97898);
var fails = __webpack_require__(23935);
var isArray = __webpack_require__(13005);
var isCallable = __webpack_require__(86341);
var isObject = __webpack_require__(14357);
var isSymbol = __webpack_require__(36551);
var arraySlice = __webpack_require__(3870);
var NATIVE_SYMBOL = __webpack_require__(49570);

var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable($replacer)) value = call($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ 17023:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(9137);
var global = __webpack_require__(48239);
var uncurryThis = __webpack_require__(97898);
var isForced = __webpack_require__(21273);
var defineBuiltIn = __webpack_require__(50732);
var hasOwn = __webpack_require__(11380);
var inheritIfRequired = __webpack_require__(88351);
var isPrototypeOf = __webpack_require__(20914);
var isSymbol = __webpack_require__(36551);
var toPrimitive = __webpack_require__(2515);
var fails = __webpack_require__(23935);
var getOwnPropertyNames = (__webpack_require__(66259).f);
var getOwnPropertyDescriptor = (__webpack_require__(70884).f);
var defineProperty = (__webpack_require__(91229).f);
var thisNumberValue = __webpack_require__(42444);
var trim = (__webpack_require__(7260).trim);

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var arraySlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  defineBuiltIn(global, NUMBER, NumberWrapper, { constructor: true });
}


/***/ }),

/***/ 201:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var assign = __webpack_require__(50148);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 42810:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var $entries = (__webpack_require__(65684).entries);

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ 35241:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var FREEZING = __webpack_require__(41405);
var fails = __webpack_require__(23935);
var isObject = __webpack_require__(14357);
var onFreeze = (__webpack_require__(34493).onFreeze);

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 35591:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var fails = __webpack_require__(23935);
var toIndexedObject = __webpack_require__(89020);
var nativeGetOwnPropertyDescriptor = (__webpack_require__(70884).f);
var DESCRIPTORS = __webpack_require__(9137);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ 29351:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var NATIVE_SYMBOL = __webpack_require__(49570);
var fails = __webpack_require__(23935);
var getOwnPropertySymbolsModule = __webpack_require__(2171);
var toObject = __webpack_require__(31025);

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ 11301:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var fails = __webpack_require__(23935);
var toObject = __webpack_require__(31025);
var nativeGetPrototypeOf = __webpack_require__(55175);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(93386);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ 94435:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var toObject = __webpack_require__(31025);
var nativeKeys = __webpack_require__(47365);
var fails = __webpack_require__(23935);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 445:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(21511);
var defineBuiltIn = __webpack_require__(50732);
var toString = __webpack_require__(16994);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ 29348:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var $values = (__webpack_require__(65684).values);

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ 86096:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var call = __webpack_require__(53992);
var aCallable = __webpack_require__(47150);
var newPromiseCapabilityModule = __webpack_require__(2482);
var perform = __webpack_require__(81856);
var iterate = __webpack_require__(26578);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(15539);

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 23022:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var IS_PURE = __webpack_require__(32758);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(1161).CONSTRUCTOR);
var NativePromiseConstructor = __webpack_require__(40414);
var getBuiltIn = __webpack_require__(3247);
var isCallable = __webpack_require__(86341);
var defineBuiltIn = __webpack_require__(50732);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ 50648:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var IS_PURE = __webpack_require__(32758);
var IS_NODE = __webpack_require__(88856);
var global = __webpack_require__(48239);
var call = __webpack_require__(53992);
var defineBuiltIn = __webpack_require__(50732);
var setPrototypeOf = __webpack_require__(30581);
var setToStringTag = __webpack_require__(34189);
var setSpecies = __webpack_require__(90794);
var aCallable = __webpack_require__(47150);
var isCallable = __webpack_require__(86341);
var isObject = __webpack_require__(14357);
var anInstance = __webpack_require__(49129);
var speciesConstructor = __webpack_require__(72213);
var task = (__webpack_require__(64707).set);
var microtask = __webpack_require__(77667);
var hostReportErrors = __webpack_require__(52160);
var perform = __webpack_require__(81856);
var Queue = __webpack_require__(2289);
var InternalStateModule = __webpack_require__(73589);
var NativePromiseConstructor = __webpack_require__(40414);
var PromiseConstructorDetection = __webpack_require__(1161);
var newPromiseCapabilityModule = __webpack_require__(2482);

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ 97557:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(50648);
__webpack_require__(86096);
__webpack_require__(23022);
__webpack_require__(53661);
__webpack_require__(86786);
__webpack_require__(70752);


/***/ }),

/***/ 53661:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var call = __webpack_require__(53992);
var aCallable = __webpack_require__(47150);
var newPromiseCapabilityModule = __webpack_require__(2482);
var perform = __webpack_require__(81856);
var iterate = __webpack_require__(26578);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(15539);

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 86786:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var call = __webpack_require__(53992);
var newPromiseCapabilityModule = __webpack_require__(2482);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(1161).CONSTRUCTOR);

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});


/***/ }),

/***/ 70752:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var getBuiltIn = __webpack_require__(3247);
var IS_PURE = __webpack_require__(32758);
var NativePromiseConstructor = __webpack_require__(40414);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(1161).CONSTRUCTOR);
var promiseResolve = __webpack_require__(27588);

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ 4530:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var getBuiltIn = __webpack_require__(3247);
var apply = __webpack_require__(59202);
var bind = __webpack_require__(25877);
var aConstructor = __webpack_require__(84692);
var anObject = __webpack_require__(6570);
var isObject = __webpack_require__(14357);
var create = __webpack_require__(39592);
var fails = __webpack_require__(23935);

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 55802:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var call = __webpack_require__(53992);
var isObject = __webpack_require__(14357);
var anObject = __webpack_require__(6570);
var isDataDescriptor = __webpack_require__(57694);
var getOwnPropertyDescriptorModule = __webpack_require__(70884);
var getPrototypeOf = __webpack_require__(55175);

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
  if (descriptor) return isDataDescriptor(descriptor)
    ? descriptor.value
    : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ 80232:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var exec = __webpack_require__(91622);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ 32552:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__(49284).PROPER);
var defineBuiltIn = __webpack_require__(50732);
var anObject = __webpack_require__(6570);
var $toString = __webpack_require__(56825);
var fails = __webpack_require__(23935);
var getRegExpFlags = __webpack_require__(27345);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ 41742:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var collection = __webpack_require__(24112);
var collectionStrong = __webpack_require__(7175);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ 30771:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(41742);


/***/ }),

/***/ 84973:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var uncurryThis = __webpack_require__(97898);
var getOwnPropertyDescriptor = (__webpack_require__(70884).f);
var toLength = __webpack_require__(34313);
var toString = __webpack_require__(56825);
var notARegExp = __webpack_require__(17970);
var requireObjectCoercible = __webpack_require__(32968);
var correctIsRegExpLogic = __webpack_require__(70352);
var IS_PURE = __webpack_require__(32758);

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var nativeEndsWith = uncurryThis(''.endsWith);
var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return nativeEndsWith
      ? nativeEndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});


/***/ }),

/***/ 69945:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(77623).charAt);
var toString = __webpack_require__(56825);
var InternalStateModule = __webpack_require__(73589);
var defineIterator = __webpack_require__(96761);
var createIterResultObject = __webpack_require__(40571);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ 99243:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(53992);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(51781);
var anObject = __webpack_require__(6570);
var isNullOrUndefined = __webpack_require__(63626);
var toLength = __webpack_require__(34313);
var toString = __webpack_require__(56825);
var requireObjectCoercible = __webpack_require__(32968);
var getMethod = __webpack_require__(31450);
var advanceStringIndex = __webpack_require__(13788);
var regExpExec = __webpack_require__(6131);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ 49666:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var apply = __webpack_require__(59202);
var call = __webpack_require__(53992);
var uncurryThis = __webpack_require__(97898);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(51781);
var fails = __webpack_require__(23935);
var anObject = __webpack_require__(6570);
var isCallable = __webpack_require__(86341);
var isNullOrUndefined = __webpack_require__(63626);
var toIntegerOrInfinity = __webpack_require__(9264);
var toLength = __webpack_require__(34313);
var toString = __webpack_require__(56825);
var requireObjectCoercible = __webpack_require__(32968);
var advanceStringIndex = __webpack_require__(13788);
var getMethod = __webpack_require__(31450);
var getSubstitution = __webpack_require__(33625);
var regExpExec = __webpack_require__(6131);
var wellKnownSymbol = __webpack_require__(14138);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ 11843:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(53992);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(51781);
var anObject = __webpack_require__(6570);
var isNullOrUndefined = __webpack_require__(63626);
var requireObjectCoercible = __webpack_require__(32968);
var sameValue = __webpack_require__(44273);
var toString = __webpack_require__(56825);
var getMethod = __webpack_require__(31450);
var regExpExec = __webpack_require__(6131);

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ 47314:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var apply = __webpack_require__(59202);
var call = __webpack_require__(53992);
var uncurryThis = __webpack_require__(97898);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(51781);
var anObject = __webpack_require__(6570);
var isNullOrUndefined = __webpack_require__(63626);
var isRegExp = __webpack_require__(8379);
var requireObjectCoercible = __webpack_require__(32968);
var speciesConstructor = __webpack_require__(72213);
var advanceStringIndex = __webpack_require__(13788);
var toLength = __webpack_require__(34313);
var toString = __webpack_require__(56825);
var getMethod = __webpack_require__(31450);
var arraySlice = __webpack_require__(22173);
var callRegExpExec = __webpack_require__(6131);
var regexpExec = __webpack_require__(91622);
var stickyHelpers = __webpack_require__(9755);
var fails = __webpack_require__(23935);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ 66639:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var uncurryThis = __webpack_require__(97898);
var getOwnPropertyDescriptor = (__webpack_require__(70884).f);
var toLength = __webpack_require__(34313);
var toString = __webpack_require__(56825);
var notARegExp = __webpack_require__(17970);
var requireObjectCoercible = __webpack_require__(32968);
var correctIsRegExpLogic = __webpack_require__(70352);
var IS_PURE = __webpack_require__(32758);

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ 77330:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(71106);
var global = __webpack_require__(48239);
var call = __webpack_require__(53992);
var uncurryThis = __webpack_require__(97898);
var IS_PURE = __webpack_require__(32758);
var DESCRIPTORS = __webpack_require__(9137);
var NATIVE_SYMBOL = __webpack_require__(49570);
var fails = __webpack_require__(23935);
var hasOwn = __webpack_require__(11380);
var isPrototypeOf = __webpack_require__(20914);
var anObject = __webpack_require__(6570);
var toIndexedObject = __webpack_require__(89020);
var toPropertyKey = __webpack_require__(49019);
var $toString = __webpack_require__(56825);
var createPropertyDescriptor = __webpack_require__(23779);
var nativeObjectCreate = __webpack_require__(39592);
var objectKeys = __webpack_require__(47365);
var getOwnPropertyNamesModule = __webpack_require__(66259);
var getOwnPropertyNamesExternal = __webpack_require__(55723);
var getOwnPropertySymbolsModule = __webpack_require__(2171);
var getOwnPropertyDescriptorModule = __webpack_require__(70884);
var definePropertyModule = __webpack_require__(91229);
var definePropertiesModule = __webpack_require__(4187);
var propertyIsEnumerableModule = __webpack_require__(90389);
var defineBuiltIn = __webpack_require__(50732);
var shared = __webpack_require__(8334);
var sharedKey = __webpack_require__(25655);
var hiddenKeys = __webpack_require__(28705);
var uid = __webpack_require__(81633);
var wellKnownSymbol = __webpack_require__(14138);
var wrappedWellKnownSymbolModule = __webpack_require__(48585);
var defineWellKnownSymbol = __webpack_require__(76475);
var defineSymbolToPrimitive = __webpack_require__(67023);
var setToStringTag = __webpack_require__(34189);
var InternalStateModule = __webpack_require__(73589);
var $forEach = (__webpack_require__(14976).forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 78:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(71106);
var DESCRIPTORS = __webpack_require__(9137);
var global = __webpack_require__(48239);
var uncurryThis = __webpack_require__(97898);
var hasOwn = __webpack_require__(11380);
var isCallable = __webpack_require__(86341);
var isPrototypeOf = __webpack_require__(20914);
var toString = __webpack_require__(56825);
var defineProperty = (__webpack_require__(91229).f);
var copyConstructorProperties = __webpack_require__(23517);

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ 28209:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var getBuiltIn = __webpack_require__(3247);
var hasOwn = __webpack_require__(11380);
var toString = __webpack_require__(56825);
var shared = __webpack_require__(8334);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(23317);

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ 96945:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var defineWellKnownSymbol = __webpack_require__(76475);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ 10960:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(77330);
__webpack_require__(28209);
__webpack_require__(98053);
__webpack_require__(11343);
__webpack_require__(29351);


/***/ }),

/***/ 98053:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(71106);
var hasOwn = __webpack_require__(11380);
var isSymbol = __webpack_require__(36551);
var tryToString = __webpack_require__(57305);
var shared = __webpack_require__(8334);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(23317);

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ 93898:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var DOMIterables = __webpack_require__(58916);
var DOMTokenListPrototype = __webpack_require__(89009);
var forEach = __webpack_require__(31959);
var createNonEnumerableProperty = __webpack_require__(72426);

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ 66993:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48239);
var DOMIterables = __webpack_require__(58916);
var DOMTokenListPrototype = __webpack_require__(89009);
var ArrayIteratorMethods = __webpack_require__(27951);
var createNonEnumerableProperty = __webpack_require__(72426);
var wellKnownSymbol = __webpack_require__(14138);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ 60955:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 1401:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./node_modules/@storybook/react/dist/esm/client/docs/config.js
var config_namespaceObject = {};
__webpack_require__.r(config_namespaceObject);
__webpack_require__.d(config_namespaceObject, {
  "argTypesEnhancers": () => (argTypesEnhancers),
  "decorators": () => (decorators),
  "parameters": () => (parameters)
});

// EXTERNAL MODULE: ./node_modules/@storybook/client-api/dist/esm/ClientApi.js + 1 modules
var ClientApi = __webpack_require__(3459);
// EXTERNAL MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/extractDocgenProps.js + 14 modules
var extractDocgenProps = __webpack_require__(39618);
// EXTERNAL MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/enhanceArgTypes.js
var enhanceArgTypes = __webpack_require__(7814);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(82635);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(91527);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(19988);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(15782);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(76821);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(39493);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(20539);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(13130);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(54202);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(95361);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(28423);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(5464);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2652);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/utils/docgenInfo.js
var docgenInfo = __webpack_require__(10522);
// EXTERNAL MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/types.js
var types = __webpack_require__(84452);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(37575);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(80386);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(14693);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(14330);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(40951);
// EXTERNAL MODULE: ./node_modules/@storybook/docs-tools/dist/esm/argTypes/utils.js
var utils = __webpack_require__(47075);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/propTypes/generateFuncSignature.js





function generateFuncSignature(params, returns) {
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
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(81549);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(59459);
// EXTERNAL MODULE: ./node_modules/html-tags/index.js
var html_tags = __webpack_require__(79918);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/isHtmlTag.js



function isHtmlTag(tagName) {
  return html_tags.includes(tagName.toLowerCase());
}
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(38382);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(80221);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(56521);
// EXTERNAL MODULE: ./node_modules/escodegen/escodegen.js
var escodegen = __webpack_require__(24123);
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__(44862);
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
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(63647);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/acorn/dist/acorn.mjs
var acorn = __webpack_require__(11464);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/acorn-jsx/index.js
var acorn_jsx = __webpack_require__(39152);
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

function parse(value) {
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
    var parsingResult = parse(value);
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
        full: generateFuncSignature(jsDocTags.params, jsDocTags.returns)
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

function generateUnion(type, extractedProp) {
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
        return generateUnion(type, extractedProp);

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

function createType(extractedProp) {
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
            if (!(0,utils/* isTooLongForTypeSummary */._A)(compact)) {
              return (0,utils/* createSummaryValue */.Ir)(compact);
            }
          }

          return (0,utils/* createSummaryValue */.Ir)(short, full);
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

          return (0,utils/* createSummaryValue */.Ir)(summary, detail);
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

    if (!(0,utils/* isTooLongForDefaultValueSummary */.fW)(compactObject)) {
      return (0,utils/* createSummaryValue */.Ir)(compactObject);
    }
  }

  return (0,utils/* createSummaryValue */.Ir)(OBJECT_CAPTION, generateObjectCode(ast));
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/lib/defaultValues/generateArray.js



function generateArray_generateArray(_ref) {
  var inferredType = _ref.inferredType,
      ast = _ref.ast;
  var _ref2 = inferredType,
      depth = _ref2.depth;

  if (depth <= 2) {
    var compactArray = generateArrayCode(ast, true);

    if (!(0,utils/* isTooLongForDefaultValueSummary */.fW)(compactArray)) {
      return (0,utils/* createSummaryValue */.Ir)(compactArray);
    }
  }

  return (0,utils/* createSummaryValue */.Ir)(ARRAY_CAPTION, generateArrayCode(ast));
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
    return (0,utils/* createSummaryValue */.Ir)(getPrettyIdentifier(inferredType), generateCode(ast));
  }

  var prettyCaption = generateCode(ast, true);
  return !(0,utils/* isTooLongForDefaultValueSummary */.fW)(prettyCaption) ? (0,utils/* createSummaryValue */.Ir)(prettyCaption) : (0,utils/* createSummaryValue */.Ir)(FUNCTION_CAPTION, generateCode(ast));
} // All elements are JSX elements.
// JSX elements are not supported by escodegen.


function generateElement(defaultValue, inspectionResult) {
  var inferredType = inspectionResult.inferredType;
  var _ref3 = inferredType,
      identifier = _ref3.identifier;

  if (identifier != null) {
    if (!isHtmlTag(identifier)) {
      var prettyIdentifier = getPrettyIdentifier(inferredType);
      return (0,utils/* createSummaryValue */.Ir)(prettyIdentifier, defaultValue);
    }
  }

  return !(0,utils/* isTooLongForDefaultValueSummary */.fW)(defaultValue) ? (0,utils/* createSummaryValue */.Ir)(defaultValue) : (0,utils/* createSummaryValue */.Ir)(ELEMENT_CAPTION, defaultValue);
}

function createDefaultValue(defaultValue) {
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
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(63145);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(73158);
// EXTERNAL MODULE: ./node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(82678);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);
// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(39277);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(72139);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
// EXTERNAL MODULE: ./node_modules/react-element-to-jsx-string/dist/cjs/index.js
var cjs = __webpack_require__(90489);
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
  return (0,utils/* createSummaryValue */.Ir)(JSON.stringify(rawDefaultProp));
};

function generateReactObject(rawDefaultProp) {
  var type = rawDefaultProp.type;
  var displayName = type.displayName;
  var jsx = (0,cjs/* default */.ZP)(rawDefaultProp, {});

  if (displayName != null) {
    var prettyIdentifier = getPrettyElementIdentifier(displayName);
    return (0,utils/* createSummaryValue */.Ir)(prettyIdentifier, jsx);
  }

  if (isString_default()(type)) {
    // This is an HTML element.
    if (isHtmlTag(type)) {
      var jsxCompact = (0,cjs/* default */.ZP)(rawDefaultProp, {
        tabStop: 0
      });
      var jsxSummary = jsxCompact.replace(/\r?\n|\r/g, '');

      if (!(0,utils/* isTooLongForDefaultValueSummary */.fW)(jsxSummary)) {
        return (0,utils/* createSummaryValue */.Ir)(jsxSummary);
      }
    }
  }

  return (0,utils/* createSummaryValue */.Ir)(ELEMENT_CAPTION, jsx);
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

  return (0,utils/* createSummaryValue */.Ir)(OBJECT_CAPTION);
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
      return (0,utils/* createSummaryValue */.Ir)(getPrettyElementIdentifier(funcName));
    }

    if (inspectionResult != null) {
      inspectionResult = inspectValue(rawDefaultProp.toString());
    }

    var _ref2 = inspectionResult.inferredType,
        _hasParams = _ref2.hasParams;
    return (0,utils/* createSummaryValue */.Ir)(getPrettyFuncIdentifier(funcName, _hasParams));
  }

  return (0,utils/* createSummaryValue */.Ir)(isElement ? ELEMENT_CAPTION : FUNCTION_CAPTION);
};

var defaultResolver = function defaultResolver(rawDefaultProp) {
  return (0,utils/* createSummaryValue */.Ir)(rawDefaultProp.toString());
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


// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(44492);
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
      return (0,utils/* createSummaryValue */.Ir)(getPrettyElementIdentifier(funcName));
    }

    var _ref2 = inspectValue(rawDefaultProp.toString()).inferredType,
        hasParams = _ref2.hasParams;
    return (0,utils/* createSummaryValue */.Ir)(getPrettyFuncIdentifier(funcName, hasParams));
  }

  return (0,utils/* createSummaryValue */.Ir)(isElement ? ELEMENT_CAPTION : FUNCTION_CAPTION);
};

var rawDefaultPropTypeResolvers = createTypeResolvers({
  function: funcResolver
});
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/docs/propTypes/handleProp.js






function enhancePropTypesProp(extractedProp, rawDefaultProp) {
  var propDef = extractedProp.propDef;
  var newtype = createType(extractedProp);

  if (newtype != null) {
    propDef.type = newtype;
  }

  var defaultValue = extractedProp.docgenInfo.defaultValue;

  if (defaultValue != null && defaultValue.value != null) {
    var newDefaultValue = createDefaultValue(defaultValue.value);

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
    var newDefaultValue = createDefaultValue(defaultValue.value);

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

  if (!(0,docgenInfo/* hasDocgen */.Px)(component) && !component.propTypes && isMemo(component)) {
    processedComponent = component.type;
  }

  var extractedProps = (0,extractDocgenProps/* extractComponentProps */.Je)(processedComponent, section);

  if (extractedProps.length === 0) {
    return [];
  }

  switch (extractedProps[0].typeSystem) {
    case types/* TypeSystem.JAVASCRIPT */.p.JAVASCRIPT:
      return enhancePropTypesProps(extractedProps, component);

    case types/* TypeSystem.TYPESCRIPT */.p.TYPESCRIPT:
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
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(67453);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(28399);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(89526);
// EXTERNAL MODULE: ./node_modules/util-deprecate/browser.js
var browser = __webpack_require__(29440);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./node_modules/@storybook/addons/dist/esm/index.js
var dist_esm = __webpack_require__(60782);
// EXTERNAL MODULE: ./node_modules/@storybook/addons/dist/esm/hooks.js
var hooks = __webpack_require__(46079);
// EXTERNAL MODULE: ./node_modules/@storybook/docs-tools/dist/esm/shared.js
var shared = __webpack_require__(78059);
// EXTERNAL MODULE: ./node_modules/@storybook/client-logger/dist/esm/index.js
var client_logger_dist_esm = __webpack_require__(9082);
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
      return el.type.displayName || (0,docgenInfo/* getDocgenSection */.jq)(el.type, 'displayName') || (el.type.name !== '_default' ? el.type.name : null) || (typeof el.type === 'function' ? 'No Display Name' : null) || (isForwardRef(el.type) ? el.type.render.name : null) || (isMemo(el.type) ? el.type.type.name : null) || el.type;
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

  if ((sourceParams === null || sourceParams === void 0 ? void 0 : sourceParams.type) === shared/* SourceType.DYNAMIC */.PO.DYNAMIC) {
    return false;
  } // never render if the user is forcing the block to render code, or
  // if the user provides code, or if it's not an args story.


  return !isArgsStory || (sourceParams === null || sourceParams === void 0 ? void 0 : sourceParams.code) || (sourceParams === null || sourceParams === void 0 ? void 0 : sourceParams.type) === shared/* SourceType.CODE */.PO.CODE;
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
    if (!skip) channel.emit(shared/* SNIPPET_RENDERED */.g, (context || {}).id, jsx);
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



var parameters = {
  docs: {
    inlineStories: true,
    // NOTE: that the result is a react element. Hooks support is provided by the outer code.
    prepareForInline: function prepareForInline(storyFn) {
      return storyFn();
    },
    extractArgTypes: extractArgTypes,
    extractComponentDescription: extractDocgenProps/* extractComponentDescription */.VF
  }
};
var decorators = [jsxDecorator];
var argTypesEnhancers = [enhanceArgTypes/* enhanceArgTypes */.r];
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

/***/ 96378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addDecorator": () => (/* reexport */ addDecorator),
  "addParameters": () => (/* reexport */ addParameters),
  "composeStories": () => (/* reexport */ composeStories),
  "composeStory": () => (/* reexport */ composeStory),
  "configure": () => (/* reexport */ configure),
  "forceReRender": () => (/* reexport */ forceReRender),
  "getStorybook": () => (/* reexport */ getStorybook),
  "raw": () => (/* reexport */ raw),
  "setAddon": () => (/* reexport */ setAddon),
  "setGlobalConfig": () => (/* reexport */ setGlobalConfig),
  "setProjectAnnotations": () => (/* reexport */ setProjectAnnotations),
  "storiesOf": () => (/* reexport */ storiesOf)
});

// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(40951);
// EXTERNAL MODULE: ./node_modules/@storybook/client-api/dist/esm/ClientApi.js + 1 modules
var ClientApi = __webpack_require__(3459);
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/StoryStore.js + 4 modules
var StoryStore = __webpack_require__(78276);
// EXTERNAL MODULE: ./node_modules/@storybook/csf/dist/index.js
var dist = __webpack_require__(80923);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(82635);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(95361);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(28399);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(13130);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(39493);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(54202);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(76821);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(19988);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(15782);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(73158);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(80221);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(91527);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(37575);
// EXTERNAL MODULE: ./node_modules/global/window.js
var global_window = __webpack_require__(40979);
var window_default = /*#__PURE__*/__webpack_require__.n(global_window);
// EXTERNAL MODULE: ./node_modules/util-deprecate/browser.js
var browser = __webpack_require__(29440);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(11301);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(4530);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.reflect.get.js
var es_reflect_get = __webpack_require__(55802);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(35591);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.array.slice.js
var modules_es_array_slice = __webpack_require__(3555);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(35241);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.symbol.iterator.js
var modules_es_symbol_iterator = __webpack_require__(96945);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(60955);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.regexp.exec.js
var modules_es_regexp_exec = __webpack_require__(80232);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.object.assign.js
var modules_es_object_assign = __webpack_require__(201);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.array.iterator.js
var modules_es_array_iterator = __webpack_require__(27951);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.object.to-string.js
var modules_es_object_to_string = __webpack_require__(445);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(97557);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.string.iterator.js
var modules_es_string_iterator = __webpack_require__(69945);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/web.dom-collections.iterator.js
var modules_web_dom_collections_iterator = __webpack_require__(66993);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(92418);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(54553);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.symbol.js
var modules_es_symbol = __webpack_require__(10960);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.symbol.description.js
var modules_es_symbol_description = __webpack_require__(78);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.array.concat.js
var modules_es_array_concat = __webpack_require__(78453);
// EXTERNAL MODULE: ./node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__(44862);
// EXTERNAL MODULE: ./node_modules/@storybook/core-events/dist/esm/index.js
var dist_esm = __webpack_require__(47987);
// EXTERNAL MODULE: ./node_modules/@storybook/client-logger/dist/esm/index.js
var client_logger_dist_esm = __webpack_require__(9082);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.array.from.js
var modules_es_array_from = __webpack_require__(60756);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.function.name.js
var modules_es_function_name = __webpack_require__(76074);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(2151);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(30771);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(94435);
// EXTERNAL MODULE: ./node_modules/synchronous-promise/index.js
var synchronous_promise = __webpack_require__(50496);
// EXTERNAL MODULE: ./node_modules/@storybook/addons/dist/esm/index.js
var addons_dist_esm = __webpack_require__(60782);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(67994);
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
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(99243);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(11843);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(29348);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(65907);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(42810);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(32552);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(66639);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(84973);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(17023);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(47314);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(49666);
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(78373);
// EXTERNAL MODULE: ./node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(82678);
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
// EXTERNAL MODULE: ./node_modules/@storybook/preview-web/node_modules/core-js/modules/web.dom-collections.for-each.js
var modules_web_dom_collections_for_each = __webpack_require__(93898);
// EXTERNAL MODULE: ./node_modules/ansi-to-html/lib/ansi_to_html.js
var ansi_to_html = __webpack_require__(29553);
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
                return __webpack_require__.e(/* import() */ 861).then(__webpack_require__.bind(__webpack_require__, 51861));

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
                return __webpack_require__.e(/* import() */ 861).then(__webpack_require__.bind(__webpack_require__, 51861));

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

    var urlStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new UrlStore();
    var webview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WebView();

    PreviewWeb_classCallCheck(this, PreviewWeb);

    _this = _super.call(this);
    _this.urlStore = void 0;
    _this.view = void 0;
    _this.previewEntryError = void 0;
    _this.currentSelection = void 0;
    _this.currentRender = void 0;
    _this.view = webview;
    _this.urlStore = urlStore; // Add deprecated APIs for back-compat
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
// EXTERNAL MODULE: ./node_modules/@storybook/channel-postmessage/dist/esm/index.js
var channel_postmessage_dist_esm = __webpack_require__(16477);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(20539);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.regexp.to-string.js
var modules_es_regexp_to_string = __webpack_require__(63145);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.map.js
var modules_es_array_map = __webpack_require__(5464);
// EXTERNAL MODULE: ./node_modules/@storybook/react/node_modules/core-js/modules/es.array.filter.js
var modules_es_array_filter = __webpack_require__(63647);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/node_modules/@storybook/core-client/dist/esm/preview/executeLoadable.js
function executeLoadable_slicedToArray(arr, i) { return executeLoadable_arrayWithHoles(arr) || executeLoadable_iterableToArrayLimit(arr, i) || executeLoadable_unsupportedIterableToArray(arr, i) || executeLoadable_nonIterableRest(); }

function executeLoadable_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function executeLoadable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return executeLoadable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return executeLoadable_arrayLikeToArray(o, minLen); }

function executeLoadable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function executeLoadable_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function executeLoadable_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















/**
 * Executes a Loadable (function that returns exports or require context(s))
 * and returns a map of filename => module exports
 *
 * @param loadable Loadable
 * @returns Map<Path, ModuleExports>
 */
function executeLoadable(loadable) {
  var reqs = null; // todo discuss / improve type check

  if (Array.isArray(loadable)) {
    reqs = loadable;
  } else if (loadable.keys) {
    reqs = [loadable];
  }

  var exportsMap = new Map();

  if (reqs) {
    reqs.forEach(function (req) {
      req.keys().forEach(function (filename) {
        try {
          var fileExports = req(filename);
          exportsMap.set(typeof req.resolve === 'function' ? req.resolve(filename) : filename, fileExports);
        } catch (error) {
          var errorString = error.message && error.stack ? "".concat(error.message, "\n ").concat(error.stack) : error.toString();
          client_logger_dist_esm/* logger.error */.kg.error("Unexpected error while loading ".concat(filename, ": ").concat(errorString));
        }
      });
    });
  } else {
    var exported = loadable();

    if (Array.isArray(exported) && exported.every(function (obj) {
      return obj.default != null;
    })) {
      exportsMap = new Map(exported.map(function (fileExports, index) {
        return ["exports-map-".concat(index), fileExports];
      }));
    } else if (exported) {
      client_logger_dist_esm/* logger.warn */.kg.warn("Loader function passed to 'configure' should return void or an array of module exports that all contain a 'default' export. Received: ".concat(JSON.stringify(exported)));
    }
  }

  return exportsMap;
}
/**
 * Executes a Loadable (function that returns exports or require context(s))
 * and compares it's output to the last time it was run (as stored on a node module)
 *
 * @param loadable Loadable
 * @param m NodeModule
 * @returns { added: Map<Path, ModuleExports>, removed: Map<Path, ModuleExports> }
 */

function executeLoadableForChanges(loadable, m) {
  var _m$hot, _m$hot$data, _m$hot2;

  var lastExportsMap = (m === null || m === void 0 ? void 0 : (_m$hot = m.hot) === null || _m$hot === void 0 ? void 0 : (_m$hot$data = _m$hot.data) === null || _m$hot$data === void 0 ? void 0 : _m$hot$data.lastExportsMap) || new Map();

  if (m !== null && m !== void 0 && (_m$hot2 = m.hot) !== null && _m$hot2 !== void 0 && _m$hot2.dispose) {
    m.hot.accept();
    m.hot.dispose(function (data) {
      // eslint-disable-next-line no-param-reassign
      data.lastExportsMap = lastExportsMap;
    });
  }

  var exportsMap = executeLoadable(loadable);
  var added = new Map();
  Array.from(exportsMap.entries()) // Ignore files that do not have a default export
  .filter(function (_ref) {
    var _ref2 = executeLoadable_slicedToArray(_ref, 2),
        fileExports = _ref2[1];

    return !!fileExports.default;
  }) // Ignore exports that are equal (by reference) to last time, this means the file hasn't changed
  .filter(function (_ref3) {
    var _ref4 = executeLoadable_slicedToArray(_ref3, 2),
        fileName = _ref4[0],
        fileExports = _ref4[1];

    return lastExportsMap.get(fileName) !== fileExports;
  }).forEach(function (_ref5) {
    var _ref6 = executeLoadable_slicedToArray(_ref5, 2),
        fileName = _ref6[0],
        fileExports = _ref6[1];

    return added.set(fileName, fileExports);
  });
  var removed = new Map();
  Array.from(lastExportsMap.keys()).filter(function (fileName) {
    return !exportsMap.has(fileName);
  }).forEach(function (fileName) {
    return removed.set(fileName, lastExportsMap.get(fileName));
  }); // Save the value for the dispose() call above

  lastExportsMap = exportsMap;
  return {
    added: added,
    removed: removed
  };
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/node_modules/@storybook/core-client/dist/esm/preview/start.js
function start_slicedToArray(arr, i) { return start_arrayWithHoles(arr) || start_iterableToArrayLimit(arr, i) || start_unsupportedIterableToArray(arr, i) || start_nonIterableRest(); }

function start_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function start_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return start_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return start_arrayLikeToArray(o, minLen); }

function start_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function start_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function start_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















var start_globalWindow = (window_default()).window,
    FEATURES = (window_default()).FEATURES;
var configureDeprecationWarning = browser_default()(function () {}, "`configure()` is deprecated and will be removed in Storybook 7.0. \nPlease use the `stories` field of `main.js` to load stories.\nRead more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-configure");

var removedApi = function removedApi(name) {
  return function () {
    throw new Error("@storybook/client-api:".concat(name, " was removed in storyStoreV7."));
  };
};

function start(renderToDOM) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      decorateStory = _ref.decorateStory,
      render = _ref.render;

  if (start_globalWindow) {
    // To enable user code to detect if it is running in Storybook
    start_globalWindow.IS_STORYBOOK = true;
  }

  if (FEATURES !== null && FEATURES !== void 0 && FEATURES.storyStoreV7) {
    return {
      forceReRender: removedApi('forceReRender'),
      getStorybook: removedApi('getStorybook'),
      configure: removedApi('configure'),
      clientApi: {
        addDecorator: removedApi('clientApi.addDecorator'),
        addParameters: removedApi('clientApi.addParameters'),
        clearDecorators: removedApi('clientApi.clearDecorators'),
        addLoader: removedApi('clientApi.addLoader'),
        setAddon: removedApi('clientApi.setAddon'),
        getStorybook: removedApi('clientApi.getStorybook'),
        storiesOf: removedApi('clientApi.storiesOf'),
        raw: removedApi('raw')
      }
    };
  }

  var channel = (0,channel_postmessage_dist_esm/* default */.ZP)({
    page: 'preview'
  });
  addons_dist_esm/* addons.setChannel */.KP.setChannel(channel);
  var clientApi = new ClientApi/* ClientApi */.ti();
  var preview = new PreviewWeb();
  var initialized = false;

  var importFn = function importFn(path) {
    return clientApi.importFn(path);
  };

  function onStoriesChanged() {
    var storyIndex = clientApi.getStoryIndex();
    preview.onStoriesChanged({
      storyIndex: storyIndex,
      importFn: importFn
    });
  } // These two bits are a bit ugly, but due to dependencies, `ClientApi` cannot have
  // direct reference to `PreviewWeb`, so we need to patch in bits


  clientApi.onImportFnChanged = onStoriesChanged;
  clientApi.storyStore = preview.storyStore;

  if (start_globalWindow) {
    start_globalWindow.__STORYBOOK_CLIENT_API__ = clientApi;
    start_globalWindow.__STORYBOOK_ADDONS_CHANNEL__ = channel; // eslint-disable-next-line no-underscore-dangle

    start_globalWindow.__STORYBOOK_PREVIEW__ = preview;
    start_globalWindow.__STORYBOOK_STORY_STORE__ = preview.storyStore;
  }

  return {
    forceReRender: function forceReRender() {
      return channel.emit(dist_esm["default"].FORCE_RE_RENDER);
    },
    getStorybook: function getStorybook() {
      return [];
    },
    raw: function raw() {},
    clientApi: clientApi,
    // This gets called each time the user calls configure (i.e. once per HMR)
    // The first time, it constructs the preview, subsequently it updates it
    configure: function configure(framework, loadable, m) {
      var showDeprecationWarning = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (showDeprecationWarning) {
        configureDeprecationWarning();
      }

      clientApi.addParameters({
        framework: framework
      }); // We need to run the `executeLoadableForChanges` function *inside* the `getProjectAnnotations
      // function in case it throws. So we also need to process its output there also

      var getProjectAnnotations = function getProjectAnnotations() {
        var _executeLoadableForCh = executeLoadableForChanges(loadable, m),
            added = _executeLoadableForCh.added,
            removed = _executeLoadableForCh.removed;

        Array.from(added.entries()).forEach(function (_ref2) {
          var _ref3 = start_slicedToArray(_ref2, 2),
              fileName = _ref3[0],
              fileExports = _ref3[1];

          return clientApi.facade.addStoriesFromExports(fileName, fileExports);
        });
        Array.from(removed.entries()).forEach(function (_ref4) {
          var _ref5 = start_slicedToArray(_ref4, 1),
              fileName = _ref5[0];

          return clientApi.facade.clearFilenameExports(fileName);
        });
        return Object.assign({
          render: render
        }, clientApi.facade.projectAnnotations, {
          renderToDOM: renderToDOM,
          applyDecorators: decorateStory
        });
      };

      if (!initialized) {
        preview.initialize({
          getStoryIndex: function getStoryIndex() {
            return clientApi.getStoryIndex();
          },
          importFn: importFn,
          getProjectAnnotations: getProjectAnnotations
        });
        initialized = true;
      } else {
        // TODO -- why don't we care about the new annotations?
        getProjectAnnotations();
        onStoriesChanged();
      }
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/node_modules/@storybook/core-client/dist/esm/preview/index.js




/* harmony default export */ const preview = ({
  start: start,
  toId: dist.toId,
  ClientApi: ClientApi/* ClientApi */.ti,
  StoryStore: StoryStore/* StoryStore */.a
});

;// CONCATENATED MODULE: ./node_modules/@storybook/react/node_modules/@storybook/core-client/dist/esm/index.js


;// CONCATENATED MODULE: ./node_modules/@storybook/react/node_modules/@storybook/core/dist/esm/index.js

;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/globals.js

var globals_globalWindow = (window_default()).window;

if (globals_globalWindow) {
  globals_globalWindow.STORYBOOK_ENV = 'react';
}
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/render.js
var render = __webpack_require__(86205);
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/index.js


/* eslint-disable prefer-destructuring */



var framework = 'react';
var api = start(render/* renderToDOM */.A, {
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
// EXTERNAL MODULE: ./node_modules/@storybook/store/dist/esm/csf/testing-utils/index.js + 1 modules
var testing_utils = __webpack_require__(63354);
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
function setProjectAnnotations(projectAnnotations) {
  (0,testing_utils/* setProjectAnnotations */.LL)(projectAnnotations);
}
/** Preserved for users migrating from `@storybook/testing-react`.
 *
 * @deprecated Use setProjectAnnotations instead
 */

function setGlobalConfig(projectAnnotations) {
  client_logger_dist_esm/* once.warn */.IH.warn("setGlobalConfig is deprecated. Use setProjectAnnotations instead.");
  setProjectAnnotations(projectAnnotations);
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

function composeStory(story, componentAnnotations, projectAnnotations, exportsName) {
  return (0,testing_utils/* composeStory */.GN)(story, componentAnnotations, projectAnnotations, defaultProjectAnnotations, exportsName);
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

function composeStories(csfExports, projectAnnotations) {
  var composedStories = (0,testing_utils/* composeStories */.GT)(csfExports, projectAnnotations, composeStory);
  return composedStories;
}
;// CONCATENATED MODULE: ./node_modules/@storybook/react/dist/esm/client/index.js
/* module decorator */ module = __webpack_require__.hmd(module);




if (module && module.hot && 0) {}

/***/ }),

/***/ 22917:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./node_modules/@storybook/react/dist/esm/client/preview/config.js
var config_namespaceObject = {};
__webpack_require__.r(config_namespaceObject);
__webpack_require__.d(config_namespaceObject, {
  "parameters": () => (parameters),
  "render": () => (render/* render */.s),
  "renderToDOM": () => (render/* renderToDOM */.A)
});

// EXTERNAL MODULE: ./node_modules/@storybook/client-api/dist/esm/ClientApi.js + 1 modules
var ClientApi = __webpack_require__(3459);
// EXTERNAL MODULE: ./node_modules/@storybook/react/dist/esm/client/preview/render.js
var render = __webpack_require__(86205);
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

/***/ 86205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ renderToDOM),
/* harmony export */   "s": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50846);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39493);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20539);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82635);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13130);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54202);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28024);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56521);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40951);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99557);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15926);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19988);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15782);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73158);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40979);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89526);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73961);
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
            return __webpack_require__.e(/* import() */ 470).then(__webpack_require__.t.bind(__webpack_require__, 24470, 19));

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

/***/ 94505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(2869);
var tryToString = __webpack_require__(69232);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 22499:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isConstructor = __webpack_require__(58003);
var tryToString = __webpack_require__(69232);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 35848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(2869);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 24818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(4457);
var create = __webpack_require__(8419);
var defineProperty = (__webpack_require__(27054).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 41663:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(29692).charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ 81083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototypeOf = __webpack_require__(57321);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 79322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(90871);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 48451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(25483);

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ 94343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(11222).forEach);
var arrayMethodIsStrict = __webpack_require__(68435);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ 54515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(41421);
var call = __webpack_require__(43369);
var toObject = __webpack_require__(69662);
var callWithSafeIterationClosing = __webpack_require__(74180);
var isArrayIteratorMethod = __webpack_require__(77711);
var isConstructor = __webpack_require__(58003);
var lengthOfArrayLike = __webpack_require__(1226);
var createProperty = __webpack_require__(80850);
var getIterator = __webpack_require__(268);
var getIteratorMethod = __webpack_require__(96831);

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 18639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(32998);
var toAbsoluteIndex = __webpack_require__(59293);
var lengthOfArrayLike = __webpack_require__(1226);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 11222:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(41421);
var uncurryThis = __webpack_require__(24227);
var IndexedObject = __webpack_require__(66538);
var toObject = __webpack_require__(69662);
var lengthOfArrayLike = __webpack_require__(1226);
var arraySpeciesCreate = __webpack_require__(5873);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 17093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);
var wellKnownSymbol = __webpack_require__(4457);
var V8_VERSION = __webpack_require__(81266);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 68435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(25483);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ 65718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toAbsoluteIndex = __webpack_require__(59293);
var lengthOfArrayLike = __webpack_require__(1226);
var createProperty = __webpack_require__(80850);

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ 83969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 61233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(79681);
var isConstructor = __webpack_require__(58003);
var isObject = __webpack_require__(90871);
var wellKnownSymbol = __webpack_require__(4457);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ 5873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(61233);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 74180:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(79322);
var iteratorClose = __webpack_require__(88667);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 41404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(4457);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 37311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThisRaw = __webpack_require__(54256);

var toString = uncurryThisRaw({}.toString);
var stringSlice = uncurryThisRaw(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 10756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(62921);
var isCallable = __webpack_require__(2869);
var classofRaw = __webpack_require__(37311);
var wellKnownSymbol = __webpack_require__(4457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 10013:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = (__webpack_require__(27054).f);
var create = __webpack_require__(8419);
var defineBuiltIns = __webpack_require__(30123);
var bind = __webpack_require__(41421);
var anInstance = __webpack_require__(81083);
var isNullOrUndefined = __webpack_require__(49500);
var iterate = __webpack_require__(65860);
var defineIterator = __webpack_require__(40409);
var createIterResultObject = __webpack_require__(57114);
var setSpecies = __webpack_require__(25860);
var DESCRIPTORS = __webpack_require__(85293);
var fastKey = (__webpack_require__(49840).fastKey);
var InternalStateModule = __webpack_require__(96486);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind == 'keys') return createIterResultObject(entry.key, false);
      if (kind == 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ 84073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var global = __webpack_require__(48821);
var uncurryThis = __webpack_require__(24227);
var isForced = __webpack_require__(30604);
var defineBuiltIn = __webpack_require__(23309);
var InternalMetadataModule = __webpack_require__(49840);
var iterate = __webpack_require__(65860);
var anInstance = __webpack_require__(81083);
var isCallable = __webpack_require__(2869);
var isNullOrUndefined = __webpack_require__(49500);
var isObject = __webpack_require__(90871);
var fails = __webpack_require__(25483);
var checkCorrectnessOfIteration = __webpack_require__(41404);
var setToStringTag = __webpack_require__(90877);
var inheritIfRequired = __webpack_require__(97273);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ 9926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(5294);
var ownKeys = __webpack_require__(48499);
var getOwnPropertyDescriptorModule = __webpack_require__(26278);
var definePropertyModule = __webpack_require__(27054);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 31556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(4457);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 13339:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 57114:
/***/ ((module) => {

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 85858:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(85293);
var definePropertyModule = __webpack_require__(27054);
var createPropertyDescriptor = __webpack_require__(22340);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 22340:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 80850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(48040);
var definePropertyModule = __webpack_require__(27054);
var createPropertyDescriptor = __webpack_require__(22340);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 23309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(2869);
var definePropertyModule = __webpack_require__(27054);
var makeBuiltIn = __webpack_require__(75161);
var defineGlobalProperty = __webpack_require__(1199);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 30123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineBuiltIn = __webpack_require__(23309);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 1199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 85293:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 19260:
/***/ ((module) => {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 76840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var isObject = __webpack_require__(90871);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 84315:
/***/ ((module) => {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 60506:
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 4138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(76840);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ 92795:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_DENO = __webpack_require__(70424);
var IS_NODE = __webpack_require__(66814);

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ 70424:
/***/ ((module) => {

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ 72372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(21237);
var global = __webpack_require__(48821);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ 33788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(21237);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 66814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(37311);
var global = __webpack_require__(48821);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 32393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(21237);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ 21237:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(78097);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 81266:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var userAgent = __webpack_require__(21237);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 52435:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 25347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var getOwnPropertyDescriptor = (__webpack_require__(26278).f);
var createNonEnumerableProperty = __webpack_require__(85858);
var defineBuiltIn = __webpack_require__(23309);
var defineGlobalProperty = __webpack_require__(1199);
var copyConstructorProperties = __webpack_require__(9926);
var isForced = __webpack_require__(30604);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 25483:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 52716:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(37575);
var uncurryThis = __webpack_require__(24227);
var defineBuiltIn = __webpack_require__(23309);
var regexpExec = __webpack_require__(36756);
var fails = __webpack_require__(25483);
var wellKnownSymbol = __webpack_require__(4457);
var createNonEnumerableProperty = __webpack_require__(85858);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ 1909:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 5647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(40088);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 41421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);
var aCallable = __webpack_require__(94505);
var NATIVE_BIND = __webpack_require__(40088);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 40088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 23133:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(24227);
var aCallable = __webpack_require__(94505);
var isObject = __webpack_require__(90871);
var hasOwn = __webpack_require__(5294);
var arraySlice = __webpack_require__(83969);
var NATIVE_BIND = __webpack_require__(40088);

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ 43369:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(40088);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 43435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(85293);
var hasOwn = __webpack_require__(5294);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 54256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(40088);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = function (fn) {
  return NATIVE_BIND ? uncurryThisWithBind(fn) : function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 24227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classofRaw = __webpack_require__(37311);
var uncurryThisRaw = __webpack_require__(54256);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThisRaw(fn);
};


/***/ }),

/***/ 78097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var isCallable = __webpack_require__(2869);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 96831:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(10756);
var getMethod = __webpack_require__(2647);
var isNullOrUndefined = __webpack_require__(49500);
var Iterators = __webpack_require__(40812);
var wellKnownSymbol = __webpack_require__(4457);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(43369);
var aCallable = __webpack_require__(94505);
var anObject = __webpack_require__(79322);
var tryToString = __webpack_require__(69232);
var getIteratorMethod = __webpack_require__(96831);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 2647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(94505);
var isNullOrUndefined = __webpack_require__(49500);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);
var toObject = __webpack_require__(69662);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ 48821:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 5294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);
var toObject = __webpack_require__(69662);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 14243:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 65899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ 94096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(78097);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 17939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(85293);
var fails = __webpack_require__(25483);
var createElement = __webpack_require__(76840);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 66538:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);
var fails = __webpack_require__(25483);
var classof = __webpack_require__(37311);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 97273:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(2869);
var isObject = __webpack_require__(90871);
var setPrototypeOf = __webpack_require__(17741);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 25353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);
var isCallable = __webpack_require__(2869);
var store = __webpack_require__(40030);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 49840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var uncurryThis = __webpack_require__(24227);
var hiddenKeys = __webpack_require__(14243);
var isObject = __webpack_require__(90871);
var hasOwn = __webpack_require__(5294);
var defineProperty = (__webpack_require__(27054).f);
var getOwnPropertyNamesModule = __webpack_require__(77068);
var getOwnPropertyNamesExternalModule = __webpack_require__(9267);
var isExtensible = __webpack_require__(50747);
var uid = __webpack_require__(84300);
var FREEZING = __webpack_require__(1909);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ 96486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(80293);
var global = __webpack_require__(48821);
var isObject = __webpack_require__(90871);
var createNonEnumerableProperty = __webpack_require__(85858);
var hasOwn = __webpack_require__(5294);
var shared = __webpack_require__(40030);
var sharedKey = __webpack_require__(96531);
var hiddenKeys = __webpack_require__(14243);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 77711:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(4457);
var Iterators = __webpack_require__(40812);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 79681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(37311);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 2869:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $documentAll = __webpack_require__(19260);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 58003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);
var fails = __webpack_require__(25483);
var isCallable = __webpack_require__(2869);
var classof = __webpack_require__(10756);
var getBuiltIn = __webpack_require__(78097);
var inspectSource = __webpack_require__(25353);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 30604:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);
var isCallable = __webpack_require__(2869);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 49500:
/***/ ((module) => {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 90871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(2869);
var $documentAll = __webpack_require__(19260);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 89013:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 1023:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(90871);
var classof = __webpack_require__(37311);
var wellKnownSymbol = __webpack_require__(4457);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ 56899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(78097);
var isCallable = __webpack_require__(2869);
var isPrototypeOf = __webpack_require__(57321);
var USE_SYMBOL_AS_UID = __webpack_require__(26214);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 65860:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(41421);
var call = __webpack_require__(43369);
var anObject = __webpack_require__(79322);
var tryToString = __webpack_require__(69232);
var isArrayIteratorMethod = __webpack_require__(77711);
var lengthOfArrayLike = __webpack_require__(1226);
var isPrototypeOf = __webpack_require__(57321);
var getIterator = __webpack_require__(268);
var getIteratorMethod = __webpack_require__(96831);
var iteratorClose = __webpack_require__(88667);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 88667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(43369);
var anObject = __webpack_require__(79322);
var getMethod = __webpack_require__(2647);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 20707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = (__webpack_require__(90662).IteratorPrototype);
var create = __webpack_require__(8419);
var createPropertyDescriptor = __webpack_require__(22340);
var setToStringTag = __webpack_require__(90877);
var Iterators = __webpack_require__(40812);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 40409:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var call = __webpack_require__(43369);
var IS_PURE = __webpack_require__(89013);
var FunctionName = __webpack_require__(43435);
var isCallable = __webpack_require__(2869);
var createIteratorConstructor = __webpack_require__(20707);
var getPrototypeOf = __webpack_require__(15260);
var setPrototypeOf = __webpack_require__(17741);
var setToStringTag = __webpack_require__(90877);
var createNonEnumerableProperty = __webpack_require__(85858);
var defineBuiltIn = __webpack_require__(23309);
var wellKnownSymbol = __webpack_require__(4457);
var Iterators = __webpack_require__(40812);
var IteratorsCore = __webpack_require__(90662);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 90662:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(25483);
var isCallable = __webpack_require__(2869);
var isObject = __webpack_require__(90871);
var create = __webpack_require__(8419);
var getPrototypeOf = __webpack_require__(15260);
var defineBuiltIn = __webpack_require__(23309);
var wellKnownSymbol = __webpack_require__(4457);
var IS_PURE = __webpack_require__(89013);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 40812:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 1226:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(13048);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 75161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);
var isCallable = __webpack_require__(2869);
var hasOwn = __webpack_require__(5294);
var DESCRIPTORS = __webpack_require__(85293);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(43435).CONFIGURABLE);
var inspectSource = __webpack_require__(25353);
var InternalStateModule = __webpack_require__(96486);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 34475:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 36382:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var bind = __webpack_require__(41421);
var getOwnPropertyDescriptor = (__webpack_require__(26278).f);
var macrotask = (__webpack_require__(88829).set);
var IS_IOS = __webpack_require__(33788);
var IS_IOS_PEBBLE = __webpack_require__(72372);
var IS_WEBOS_WEBKIT = __webpack_require__(32393);
var IS_NODE = __webpack_require__(66814);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ 6640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(94505);

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 75735:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(1023);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 42034:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(85293);
var uncurryThis = __webpack_require__(24227);
var call = __webpack_require__(43369);
var fails = __webpack_require__(25483);
var objectKeys = __webpack_require__(99088);
var getOwnPropertySymbolsModule = __webpack_require__(38022);
var propertyIsEnumerableModule = __webpack_require__(23722);
var toObject = __webpack_require__(69662);
var IndexedObject = __webpack_require__(66538);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 8419:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(79322);
var definePropertiesModule = __webpack_require__(36597);
var enumBugKeys = __webpack_require__(52435);
var hiddenKeys = __webpack_require__(14243);
var html = __webpack_require__(94096);
var documentCreateElement = __webpack_require__(76840);
var sharedKey = __webpack_require__(96531);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 36597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(85293);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(48774);
var definePropertyModule = __webpack_require__(27054);
var anObject = __webpack_require__(79322);
var toIndexedObject = __webpack_require__(32998);
var objectKeys = __webpack_require__(99088);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 27054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(85293);
var IE8_DOM_DEFINE = __webpack_require__(17939);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(48774);
var anObject = __webpack_require__(79322);
var toPropertyKey = __webpack_require__(48040);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 26278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(85293);
var call = __webpack_require__(43369);
var propertyIsEnumerableModule = __webpack_require__(23722);
var createPropertyDescriptor = __webpack_require__(22340);
var toIndexedObject = __webpack_require__(32998);
var toPropertyKey = __webpack_require__(48040);
var hasOwn = __webpack_require__(5294);
var IE8_DOM_DEFINE = __webpack_require__(17939);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 9267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(37311);
var toIndexedObject = __webpack_require__(32998);
var $getOwnPropertyNames = (__webpack_require__(77068).f);
var arraySlice = __webpack_require__(65718);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 77068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(10974);
var enumBugKeys = __webpack_require__(52435);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 38022:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 15260:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(5294);
var isCallable = __webpack_require__(2869);
var toObject = __webpack_require__(69662);
var sharedKey = __webpack_require__(96531);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(13339);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 50747:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);
var isObject = __webpack_require__(90871);
var classof = __webpack_require__(37311);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(48451);

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ 57321:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 10974:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);
var hasOwn = __webpack_require__(5294);
var toIndexedObject = __webpack_require__(32998);
var indexOf = (__webpack_require__(18639).indexOf);
var hiddenKeys = __webpack_require__(14243);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 99088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(10974);
var enumBugKeys = __webpack_require__(52435);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 23722:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 17741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(24227);
var anObject = __webpack_require__(79322);
var aPossiblePrototype = __webpack_require__(35848);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 73038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(62921);
var classof = __webpack_require__(10756);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 96372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(43369);
var isCallable = __webpack_require__(2869);
var isObject = __webpack_require__(90871);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 48499:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(78097);
var uncurryThis = __webpack_require__(24227);
var getOwnPropertyNamesModule = __webpack_require__(77068);
var getOwnPropertySymbolsModule = __webpack_require__(38022);
var anObject = __webpack_require__(79322);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 54848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);

module.exports = global;


/***/ }),

/***/ 74789:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ 97993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var NativePromiseConstructor = __webpack_require__(55524);
var isCallable = __webpack_require__(2869);
var isForced = __webpack_require__(30604);
var inspectSource = __webpack_require__(25353);
var wellKnownSymbol = __webpack_require__(4457);
var IS_BROWSER = __webpack_require__(92795);
var IS_DENO = __webpack_require__(70424);
var IS_PURE = __webpack_require__(89013);
var V8_VERSION = __webpack_require__(81266);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ 55524:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);

module.exports = global.Promise;


/***/ }),

/***/ 13705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(79322);
var isObject = __webpack_require__(90871);
var newPromiseCapability = __webpack_require__(6640);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 30102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NativePromiseConstructor = __webpack_require__(55524);
var checkCorrectnessOfIteration = __webpack_require__(41404);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(97993).CONSTRUCTOR);

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ 52337:
/***/ ((module) => {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ 5855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(43369);
var anObject = __webpack_require__(79322);
var isCallable = __webpack_require__(2869);
var classof = __webpack_require__(37311);
var regexpExec = __webpack_require__(36756);

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ 36756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(43369);
var uncurryThis = __webpack_require__(24227);
var toString = __webpack_require__(46732);
var regexpFlags = __webpack_require__(19251);
var stickyHelpers = __webpack_require__(61778);
var shared = __webpack_require__(72054);
var create = __webpack_require__(8419);
var getInternalState = (__webpack_require__(96486).get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(72760);
var UNSUPPORTED_NCG = __webpack_require__(86931);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 19251:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(79322);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 36688:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(43369);
var hasOwn = __webpack_require__(5294);
var isPrototypeOf = __webpack_require__(57321);
var regExpFlags = __webpack_require__(19251);

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ 61778:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);
var global = __webpack_require__(48821);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ 72760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);
var global = __webpack_require__(48821);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ 86931:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(25483);
var global = __webpack_require__(48821);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ 34492:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNullOrUndefined = __webpack_require__(49500);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 25860:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(78097);
var definePropertyModule = __webpack_require__(27054);
var wellKnownSymbol = __webpack_require__(4457);
var DESCRIPTORS = __webpack_require__(85293);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 90877:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = (__webpack_require__(27054).f);
var hasOwn = __webpack_require__(5294);
var wellKnownSymbol = __webpack_require__(4457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 96531:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(72054);
var uid = __webpack_require__(84300);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 40030:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var defineGlobalProperty = __webpack_require__(1199);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 72054:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(89013);
var store = __webpack_require__(40030);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 72227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(79322);
var aConstructor = __webpack_require__(22499);
var isNullOrUndefined = __webpack_require__(49500);
var wellKnownSymbol = __webpack_require__(4457);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 29692:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);
var toIntegerOrInfinity = __webpack_require__(66899);
var toString = __webpack_require__(46732);
var requireObjectCoercible = __webpack_require__(34492);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 34303:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(81266);
var fails = __webpack_require__(25483);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 257:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(43369);
var getBuiltIn = __webpack_require__(78097);
var wellKnownSymbol = __webpack_require__(4457);
var defineBuiltIn = __webpack_require__(23309);

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ 58828:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_SYMBOL = __webpack_require__(34303);

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ 88829:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var apply = __webpack_require__(5647);
var bind = __webpack_require__(41421);
var isCallable = __webpack_require__(2869);
var hasOwn = __webpack_require__(5294);
var fails = __webpack_require__(25483);
var html = __webpack_require__(94096);
var arraySlice = __webpack_require__(83969);
var createElement = __webpack_require__(76840);
var validateArgumentsLength = __webpack_require__(17475);
var IS_IOS = __webpack_require__(33788);
var IS_NODE = __webpack_require__(66814);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ 59293:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(66899);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 32998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(66538);
var requireObjectCoercible = __webpack_require__(34492);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 66899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trunc = __webpack_require__(34475);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 13048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(66899);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 69662:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(34492);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 1892:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(43369);
var isObject = __webpack_require__(90871);
var isSymbol = __webpack_require__(56899);
var getMethod = __webpack_require__(2647);
var ordinaryToPrimitive = __webpack_require__(96372);
var wellKnownSymbol = __webpack_require__(4457);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 48040:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(1892);
var isSymbol = __webpack_require__(56899);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 62921:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(4457);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 46732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(10756);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 69232:
/***/ ((module) => {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 84300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(24227);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 26214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(34303);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 48774:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(85293);
var fails = __webpack_require__(25483);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 17475:
/***/ ((module) => {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 80293:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var isCallable = __webpack_require__(2869);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 13808:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(54848);
var hasOwn = __webpack_require__(5294);
var wrappedWellKnownSymbolModule = __webpack_require__(9835);
var defineProperty = (__webpack_require__(27054).f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 9835:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(4457);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 4457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var shared = __webpack_require__(72054);
var hasOwn = __webpack_require__(5294);
var uid = __webpack_require__(84300);
var NATIVE_SYMBOL = __webpack_require__(34303);
var USE_SYMBOL_AS_UID = __webpack_require__(26214);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 40951:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var fails = __webpack_require__(25483);
var isArray = __webpack_require__(79681);
var isObject = __webpack_require__(90871);
var toObject = __webpack_require__(69662);
var lengthOfArrayLike = __webpack_require__(1226);
var doesNotExceedSafeInteger = __webpack_require__(84315);
var createProperty = __webpack_require__(80850);
var arraySpeciesCreate = __webpack_require__(5873);
var arrayMethodHasSpeciesSupport = __webpack_require__(17093);
var wellKnownSymbol = __webpack_require__(4457);
var V8_VERSION = __webpack_require__(81266);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ 63647:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var $filter = (__webpack_require__(11222).filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(17093);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 44492:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var $find = (__webpack_require__(11222).find);
var addToUnscopables = __webpack_require__(24818);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ 28399:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var from = __webpack_require__(54515);
var checkCorrectnessOfIteration = __webpack_require__(41404);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ 81549:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var $includes = (__webpack_require__(18639).includes);
var fails = __webpack_require__(25483);
var addToUnscopables = __webpack_require__(24818);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 39493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(32998);
var addToUnscopables = __webpack_require__(24818);
var Iterators = __webpack_require__(40812);
var InternalStateModule = __webpack_require__(96486);
var defineProperty = (__webpack_require__(27054).f);
var defineIterator = __webpack_require__(40409);
var createIterResultObject = __webpack_require__(57114);
var IS_PURE = __webpack_require__(89013);
var DESCRIPTORS = __webpack_require__(85293);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ 14330:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var uncurryThis = __webpack_require__(24227);
var IndexedObject = __webpack_require__(66538);
var toIndexedObject = __webpack_require__(32998);
var arrayMethodIsStrict = __webpack_require__(68435);

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ 5464:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var $map = (__webpack_require__(11222).map);
var arrayMethodHasSpeciesSupport = __webpack_require__(17093);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 80221:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var isArray = __webpack_require__(79681);
var isConstructor = __webpack_require__(58003);
var isObject = __webpack_require__(90871);
var toAbsoluteIndex = __webpack_require__(59293);
var lengthOfArrayLike = __webpack_require__(1226);
var toIndexedObject = __webpack_require__(32998);
var createProperty = __webpack_require__(80850);
var wellKnownSymbol = __webpack_require__(4457);
var arrayMethodHasSpeciesSupport = __webpack_require__(17093);
var nativeSlice = __webpack_require__(83969);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 91527:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(85293);
var FUNCTION_NAME_EXISTS = (__webpack_require__(43435).EXISTS);
var uncurryThis = __webpack_require__(24227);
var defineProperty = (__webpack_require__(27054).f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ 56181:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var getBuiltIn = __webpack_require__(78097);
var apply = __webpack_require__(5647);
var call = __webpack_require__(43369);
var uncurryThis = __webpack_require__(24227);
var fails = __webpack_require__(25483);
var isArray = __webpack_require__(79681);
var isCallable = __webpack_require__(2869);
var isObject = __webpack_require__(90871);
var isSymbol = __webpack_require__(56899);
var arraySlice = __webpack_require__(83969);
var NATIVE_SYMBOL = __webpack_require__(34303);

var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable($replacer)) value = call($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ 28898:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var collection = __webpack_require__(84073);
var collectionStrong = __webpack_require__(10013);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ 20539:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(28898);


/***/ }),

/***/ 76821:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var assign = __webpack_require__(42034);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 67453:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var FREEZING = __webpack_require__(1909);
var fails = __webpack_require__(25483);
var isObject = __webpack_require__(90871);
var onFreeze = (__webpack_require__(49840).onFreeze);

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 97315:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var NATIVE_SYMBOL = __webpack_require__(34303);
var fails = __webpack_require__(25483);
var getOwnPropertySymbolsModule = __webpack_require__(38022);
var toObject = __webpack_require__(69662);

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ 99557:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var fails = __webpack_require__(25483);
var toObject = __webpack_require__(69662);
var nativeGetPrototypeOf = __webpack_require__(15260);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(13339);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ 28423:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var toObject = __webpack_require__(69662);
var nativeKeys = __webpack_require__(99088);
var fails = __webpack_require__(25483);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 82635:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(62921);
var defineBuiltIn = __webpack_require__(23309);
var toString = __webpack_require__(73038);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ 27448:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var call = __webpack_require__(43369);
var aCallable = __webpack_require__(94505);
var newPromiseCapabilityModule = __webpack_require__(6640);
var perform = __webpack_require__(74789);
var iterate = __webpack_require__(65860);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(30102);

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 43017:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var IS_PURE = __webpack_require__(89013);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(97993).CONSTRUCTOR);
var NativePromiseConstructor = __webpack_require__(55524);
var getBuiltIn = __webpack_require__(78097);
var isCallable = __webpack_require__(2869);
var defineBuiltIn = __webpack_require__(23309);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ 19966:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var IS_PURE = __webpack_require__(89013);
var IS_NODE = __webpack_require__(66814);
var global = __webpack_require__(48821);
var call = __webpack_require__(43369);
var defineBuiltIn = __webpack_require__(23309);
var setPrototypeOf = __webpack_require__(17741);
var setToStringTag = __webpack_require__(90877);
var setSpecies = __webpack_require__(25860);
var aCallable = __webpack_require__(94505);
var isCallable = __webpack_require__(2869);
var isObject = __webpack_require__(90871);
var anInstance = __webpack_require__(81083);
var speciesConstructor = __webpack_require__(72227);
var task = (__webpack_require__(88829).set);
var microtask = __webpack_require__(36382);
var hostReportErrors = __webpack_require__(65899);
var perform = __webpack_require__(74789);
var Queue = __webpack_require__(52337);
var InternalStateModule = __webpack_require__(96486);
var NativePromiseConstructor = __webpack_require__(55524);
var PromiseConstructorDetection = __webpack_require__(97993);
var newPromiseCapabilityModule = __webpack_require__(6640);

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ 28024:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(19966);
__webpack_require__(27448);
__webpack_require__(43017);
__webpack_require__(9953);
__webpack_require__(67142);
__webpack_require__(28847);


/***/ }),

/***/ 9953:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var call = __webpack_require__(43369);
var aCallable = __webpack_require__(94505);
var newPromiseCapabilityModule = __webpack_require__(6640);
var perform = __webpack_require__(74789);
var iterate = __webpack_require__(65860);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(30102);

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 67142:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var call = __webpack_require__(43369);
var newPromiseCapabilityModule = __webpack_require__(6640);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(97993).CONSTRUCTOR);

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});


/***/ }),

/***/ 28847:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var getBuiltIn = __webpack_require__(78097);
var IS_PURE = __webpack_require__(89013);
var NativePromiseConstructor = __webpack_require__(55524);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(97993).CONSTRUCTOR);
var promiseResolve = __webpack_require__(13705);

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ 15926:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var getBuiltIn = __webpack_require__(78097);
var apply = __webpack_require__(5647);
var bind = __webpack_require__(23133);
var aConstructor = __webpack_require__(22499);
var anObject = __webpack_require__(79322);
var isObject = __webpack_require__(90871);
var create = __webpack_require__(8419);
var fails = __webpack_require__(25483);

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 37575:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var exec = __webpack_require__(36756);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ 63145:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__(43435).PROPER);
var defineBuiltIn = __webpack_require__(23309);
var anObject = __webpack_require__(79322);
var $toString = __webpack_require__(46732);
var fails = __webpack_require__(25483);
var getRegExpFlags = __webpack_require__(36688);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ 38382:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var uncurryThis = __webpack_require__(24227);
var getOwnPropertyDescriptor = (__webpack_require__(26278).f);
var toLength = __webpack_require__(13048);
var toString = __webpack_require__(46732);
var notARegExp = __webpack_require__(75735);
var requireObjectCoercible = __webpack_require__(34492);
var correctIsRegExpLogic = __webpack_require__(31556);
var IS_PURE = __webpack_require__(89013);

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var nativeEndsWith = uncurryThis(''.endsWith);
var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return nativeEndsWith
      ? nativeEndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});


/***/ }),

/***/ 59459:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var uncurryThis = __webpack_require__(24227);
var notARegExp = __webpack_require__(75735);
var requireObjectCoercible = __webpack_require__(34492);
var toString = __webpack_require__(46732);
var correctIsRegExpLogic = __webpack_require__(31556);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ 13130:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(29692).charAt);
var toString = __webpack_require__(46732);
var InternalStateModule = __webpack_require__(96486);
var defineIterator = __webpack_require__(40409);
var createIterResultObject = __webpack_require__(57114);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ 13526:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(43369);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(52716);
var anObject = __webpack_require__(79322);
var isNullOrUndefined = __webpack_require__(49500);
var toLength = __webpack_require__(13048);
var toString = __webpack_require__(46732);
var requireObjectCoercible = __webpack_require__(34492);
var getMethod = __webpack_require__(2647);
var advanceStringIndex = __webpack_require__(41663);
var regExpExec = __webpack_require__(5855);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ 80386:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var apply = __webpack_require__(5647);
var call = __webpack_require__(43369);
var uncurryThis = __webpack_require__(24227);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(52716);
var fails = __webpack_require__(25483);
var anObject = __webpack_require__(79322);
var isCallable = __webpack_require__(2869);
var isNullOrUndefined = __webpack_require__(49500);
var toIntegerOrInfinity = __webpack_require__(66899);
var toLength = __webpack_require__(13048);
var toString = __webpack_require__(46732);
var requireObjectCoercible = __webpack_require__(34492);
var advanceStringIndex = __webpack_require__(41663);
var getMethod = __webpack_require__(2647);
var getSubstitution = __webpack_require__(262);
var regExpExec = __webpack_require__(5855);
var wellKnownSymbol = __webpack_require__(4457);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ 14693:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var apply = __webpack_require__(5647);
var call = __webpack_require__(43369);
var uncurryThis = __webpack_require__(24227);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(52716);
var anObject = __webpack_require__(79322);
var isNullOrUndefined = __webpack_require__(49500);
var isRegExp = __webpack_require__(1023);
var requireObjectCoercible = __webpack_require__(34492);
var speciesConstructor = __webpack_require__(72227);
var advanceStringIndex = __webpack_require__(41663);
var toLength = __webpack_require__(13048);
var toString = __webpack_require__(46732);
var getMethod = __webpack_require__(2647);
var arraySlice = __webpack_require__(65718);
var callRegExpExec = __webpack_require__(5855);
var regexpExec = __webpack_require__(36756);
var stickyHelpers = __webpack_require__(61778);
var fails = __webpack_require__(25483);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ 56521:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var uncurryThis = __webpack_require__(24227);
var getOwnPropertyDescriptor = (__webpack_require__(26278).f);
var toLength = __webpack_require__(13048);
var toString = __webpack_require__(46732);
var notARegExp = __webpack_require__(75735);
var requireObjectCoercible = __webpack_require__(34492);
var correctIsRegExpLogic = __webpack_require__(31556);
var IS_PURE = __webpack_require__(89013);

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ 32826:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(25347);
var global = __webpack_require__(48821);
var call = __webpack_require__(43369);
var uncurryThis = __webpack_require__(24227);
var IS_PURE = __webpack_require__(89013);
var DESCRIPTORS = __webpack_require__(85293);
var NATIVE_SYMBOL = __webpack_require__(34303);
var fails = __webpack_require__(25483);
var hasOwn = __webpack_require__(5294);
var isPrototypeOf = __webpack_require__(57321);
var anObject = __webpack_require__(79322);
var toIndexedObject = __webpack_require__(32998);
var toPropertyKey = __webpack_require__(48040);
var $toString = __webpack_require__(46732);
var createPropertyDescriptor = __webpack_require__(22340);
var nativeObjectCreate = __webpack_require__(8419);
var objectKeys = __webpack_require__(99088);
var getOwnPropertyNamesModule = __webpack_require__(77068);
var getOwnPropertyNamesExternal = __webpack_require__(9267);
var getOwnPropertySymbolsModule = __webpack_require__(38022);
var getOwnPropertyDescriptorModule = __webpack_require__(26278);
var definePropertyModule = __webpack_require__(27054);
var definePropertiesModule = __webpack_require__(36597);
var propertyIsEnumerableModule = __webpack_require__(23722);
var defineBuiltIn = __webpack_require__(23309);
var shared = __webpack_require__(72054);
var sharedKey = __webpack_require__(96531);
var hiddenKeys = __webpack_require__(14243);
var uid = __webpack_require__(84300);
var wellKnownSymbol = __webpack_require__(4457);
var wrappedWellKnownSymbolModule = __webpack_require__(9835);
var defineWellKnownSymbol = __webpack_require__(13808);
var defineSymbolToPrimitive = __webpack_require__(257);
var setToStringTag = __webpack_require__(90877);
var InternalStateModule = __webpack_require__(96486);
var $forEach = (__webpack_require__(11222).forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 15782:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(25347);
var DESCRIPTORS = __webpack_require__(85293);
var global = __webpack_require__(48821);
var uncurryThis = __webpack_require__(24227);
var hasOwn = __webpack_require__(5294);
var isCallable = __webpack_require__(2869);
var isPrototypeOf = __webpack_require__(57321);
var toString = __webpack_require__(46732);
var defineProperty = (__webpack_require__(27054).f);
var copyConstructorProperties = __webpack_require__(9926);

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ 71740:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var getBuiltIn = __webpack_require__(78097);
var hasOwn = __webpack_require__(5294);
var toString = __webpack_require__(46732);
var shared = __webpack_require__(72054);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(58828);

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ 73158:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var defineWellKnownSymbol = __webpack_require__(13808);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ 19988:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(32826);
__webpack_require__(71740);
__webpack_require__(87280);
__webpack_require__(56181);
__webpack_require__(97315);


/***/ }),

/***/ 87280:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(25347);
var hasOwn = __webpack_require__(5294);
var isSymbol = __webpack_require__(56899);
var tryToString = __webpack_require__(69232);
var shared = __webpack_require__(72054);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(58828);

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ 95361:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var DOMIterables = __webpack_require__(60506);
var DOMTokenListPrototype = __webpack_require__(4138);
var forEach = __webpack_require__(94343);
var createNonEnumerableProperty = __webpack_require__(85858);

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ 54202:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(48821);
var DOMIterables = __webpack_require__(60506);
var DOMTokenListPrototype = __webpack_require__(4138);
var ArrayIteratorMethods = __webpack_require__(39493);
var createNonEnumerableProperty = __webpack_require__(85858);
var wellKnownSymbol = __webpack_require__(4457);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ 50846:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 11464:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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




/***/ })

}]);
//# sourceMappingURL=535.2006dd6d.iframe.bundle.js.map