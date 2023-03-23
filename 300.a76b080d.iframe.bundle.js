(self["webpackChunknovatics"] = self["webpackChunknovatics"] || []).push([[300],{

/***/ 75671:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(70343)();


/***/ }),

/***/ 2041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getSymbolDescription = __webpack_require__(67046);

module.exports = function description() {
	return getSymbolDescription(this);
};


/***/ }),

/***/ 87519:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasSymbols = __webpack_require__(41405)();

var implementation = __webpack_require__(2041);
var gOPD = Object.getOwnPropertyDescriptor;

module.exports = function descriptionPolyfill() {
	if (!hasSymbols || typeof gOPD !== 'function') {
		return null;
	}

	var desc = gOPD(Symbol.prototype, 'description');
	if (!desc || typeof desc.get !== 'function') {
		return implementation;
	}

	var emptySymbolDesc = desc.get.call(Symbol());
	var emptyDescValid = typeof emptySymbolDesc === 'undefined' || emptySymbolDesc === '';
	if (!emptyDescValid || desc.get.call(Symbol('a')) !== 'a') {
		return implementation;
	}
	return desc.get;
};


/***/ }),

/***/ 70343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasSymbols = __webpack_require__(41405)();
var polyfill = __webpack_require__(87519);
var getInferredName = __webpack_require__(79803);

var gOPD = Object.getOwnPropertyDescriptor;
var gOPDs = __webpack_require__(24396)();
var dP = Object.defineProperty;
var dPs = Object.defineProperties;
var setProto = Object.setPrototypeOf;

var define = function defineGetter(getter) {
	dP(Symbol.prototype, 'description', {
		configurable: true,
		enumerable: false,
		get: getter
	});
};

var shimGlobal = function shimGlobalSymbol(getter) {
	var origSym = Function.apply.bind(Symbol);
	var emptyStrings = Object.create ? Object.create(null) : {};
	var SymNew = function Symbol() {
		var sym = origSym(this, arguments);
		if (arguments.length > 0 && arguments[0] === '') {
			emptyStrings[sym] = true;
		}
		return sym;
	};
	SymNew.prototype = Symbol.prototype;
	setProto(SymNew, Symbol);
	var props = gOPDs(Symbol);
	delete props.length;
	delete props.arguments;
	delete props.caller;
	dPs(SymNew, props);
	Symbol = SymNew; // eslint-disable-line no-native-reassign, no-global-assign

	var boundGetter = Function.call.bind(getter);
	var wrappedGetter = function description() {
		/* eslint no-invalid-this: 0 */
		var symbolDescription = boundGetter(this);
		if (emptyStrings[this]) {
			return '';
		}
		return symbolDescription;
	};
	define(wrappedGetter);
	return wrappedGetter;
};

module.exports = function shimSymbolDescription() {
	if (!hasSymbols) {
		return false;
	}
	var desc = gOPD(Symbol.prototype, 'description');
	var getter = polyfill();
	var isMissing = !desc || typeof desc.get !== 'function';
	var isBroken = !isMissing && (typeof Symbol().description !== 'undefined' || Symbol('').description !== '');
	if (isMissing || isBroken) {
		if (!getInferredName) {
			return shimGlobal(getter);
		}
		define(getter);
	}
	return getter;
};


/***/ }),

/***/ 76891:
/***/ ((module) => {

"use strict";
/* jshint node: true */


function makeArrayFrom(obj) {
  return Array.prototype.slice.apply(obj);
}

var
  PENDING = "pending",
  RESOLVED = "resolved",
  REJECTED = "rejected";

function SynchronousPromise(handler) {
  this.status = PENDING;
  this._continuations = [];
  this._parent = null;
  this._paused = false;
  if (handler) {
    handler.call(
      this,
      this._continueWith.bind(this),
      this._failWith.bind(this)
    );
  }
}

function looksLikeAPromise(obj) {
  return obj && typeof (obj.then) === "function";
}

function passThrough(value) {
  return value;
}

SynchronousPromise.prototype = {
  then: function (nextFn, catchFn) {
    var next = SynchronousPromise.unresolved()._setParent(this);
    if (this._isRejected()) {
      if (this._paused) {
        this._continuations.push({
          promise: next,
          nextFn: nextFn,
          catchFn: catchFn
        });
        return next;
      }
      if (catchFn) {
        try {
          var catchResult = catchFn(this._error);
          if (looksLikeAPromise(catchResult)) {
            this._chainPromiseData(catchResult, next);
            return next;
          } else {
            return SynchronousPromise.resolve(catchResult)._setParent(this);
          }
        } catch (e) {
          return SynchronousPromise.reject(e)._setParent(this);
        }
      }
      return SynchronousPromise.reject(this._error)._setParent(this);
    }
    this._continuations.push({
      promise: next,
      nextFn: nextFn,
      catchFn: catchFn
    });
    this._runResolutions();
    return next;
  },
  catch: function (handler) {
    if (this._isResolved()) {
      return SynchronousPromise.resolve(this._data)._setParent(this);
    }
    var next = SynchronousPromise.unresolved()._setParent(this);
    this._continuations.push({
      promise: next,
      catchFn: handler
    });
    this._runRejections();
    return next;
  },
  finally: function (callback) {
    var ran = false;

    function runFinally(result, err) {
      if (!ran) {
        ran = true;
        if (!callback) {
          callback = passThrough;
        }
        var callbackResult = callback(result);
        if (looksLikeAPromise(callbackResult)) {
          return callbackResult.then(function () {
            if (err) {
              throw err;
            }
            return result;
          });
        } else {
          return result;
        }
      }
    }

    return this
      .then(function (result) {
        return runFinally(result);
      })
      .catch(function (err) {
        return runFinally(null, err);
      });
  },
  pause: function () {
    this._paused = true;
    return this;
  },
  resume: function () {
    var firstPaused = this._findFirstPaused();
    if (firstPaused) {
      firstPaused._paused = false;
      firstPaused._runResolutions();
      firstPaused._runRejections();
    }
    return this;
  },
  _findAncestry: function () {
    return this._continuations.reduce(function (acc, cur) {
      if (cur.promise) {
        var node = {
          promise: cur.promise,
          children: cur.promise._findAncestry()
        };
        acc.push(node);
      }
      return acc;
    }, []);
  },
  _setParent: function (parent) {
    if (this._parent) {
      throw new Error("parent already set");
    }
    this._parent = parent;
    return this;
  },
  _continueWith: function (data) {
    var firstPending = this._findFirstPending();
    if (firstPending) {
      firstPending._data = data;
      firstPending._setResolved();
    }
  },
  _findFirstPending: function () {
    return this._findFirstAncestor(function (test) {
      return test._isPending && test._isPending();
    });
  },
  _findFirstPaused: function () {
    return this._findFirstAncestor(function (test) {
      return test._paused;
    });
  },
  _findFirstAncestor: function (matching) {
    var test = this;
    var result;
    while (test) {
      if (matching(test)) {
        result = test;
      }
      test = test._parent;
    }
    return result;
  },
  _failWith: function (error) {
    var firstRejected = this._findFirstPending();
    if (firstRejected) {
      firstRejected._error = error;
      firstRejected._setRejected();
    }
  },
  _takeContinuations: function () {
    return this._continuations.splice(0, this._continuations.length);
  },
  _runRejections: function () {
    if (this._paused || !this._isRejected()) {
      return;
    }
    var
      error = this._error,
      continuations = this._takeContinuations(),
      self = this;
    continuations.forEach(function (cont) {
      if (cont.catchFn) {
        try {
          var catchResult = cont.catchFn(error);
          self._handleUserFunctionResult(catchResult, cont.promise);
        } catch (e) {
          cont.promise.reject(e);
        }
      } else {
        cont.promise.reject(error);
      }
    });
  },
  _runResolutions: function () {
    if (this._paused || !this._isResolved() || this._isPending()) {
      return;
    }
    var continuations = this._takeContinuations();
    if (looksLikeAPromise(this._data)) {
      return this._handleWhenResolvedDataIsPromise(this._data);
    }
    var data = this._data;
    var self = this;
    continuations.forEach(function (cont) {
      if (cont.nextFn) {
        try {
          var result = cont.nextFn(data);
          self._handleUserFunctionResult(result, cont.promise);
        } catch (e) {
          self._handleResolutionError(e, cont);
        }
      } else if (cont.promise) {
        cont.promise.resolve(data);
      }
    });
  },
  _handleResolutionError: function (e, continuation) {
    this._setRejected();
    if (continuation.catchFn) {
      try {
        continuation.catchFn(e);
        return;
      } catch (e2) {
        e = e2;
      }
    }
    if (continuation.promise) {
      continuation.promise.reject(e);
    }
  },
  _handleWhenResolvedDataIsPromise: function (data) {
    var self = this;
    return data.then(function (result) {
      self._data = result;
      self._runResolutions();
    }).catch(function (error) {
      self._error = error;
      self._setRejected();
      self._runRejections();
    });
  },
  _handleUserFunctionResult: function (data, nextSynchronousPromise) {
    if (looksLikeAPromise(data)) {
      this._chainPromiseData(data, nextSynchronousPromise);
    } else {
      nextSynchronousPromise.resolve(data);
    }
  },
  _chainPromiseData: function (promiseData, nextSynchronousPromise) {
    promiseData.then(function (newData) {
      nextSynchronousPromise.resolve(newData);
    }).catch(function (newError) {
      nextSynchronousPromise.reject(newError);
    });
  },
  _setResolved: function () {
    this.status = RESOLVED;
    if (!this._paused) {
      this._runResolutions();
    }
  },
  _setRejected: function () {
    this.status = REJECTED;
    if (!this._paused) {
      this._runRejections();
    }
  },
  _isPending: function () {
    return this.status === PENDING;
  },
  _isResolved: function () {
    return this.status === RESOLVED;
  },
  _isRejected: function () {
    return this.status === REJECTED;
  }
};

SynchronousPromise.resolve = function (result) {
  return new SynchronousPromise(function (resolve, reject) {
    if (looksLikeAPromise(result)) {
      result.then(function (newResult) {
        resolve(newResult);
      }).catch(function (error) {
        reject(error);
      });
    } else {
      resolve(result);
    }
  });
};

SynchronousPromise.reject = function (result) {
  return new SynchronousPromise(function (resolve, reject) {
    reject(result);
  });
};

SynchronousPromise.unresolved = function () {
  return new SynchronousPromise(function (resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
  });
};

SynchronousPromise.all = function () {
  var args = makeArrayFrom(arguments);
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  if (!args.length) {
    return SynchronousPromise.resolve([]);
  }
  return new SynchronousPromise(function (resolve, reject) {
    var
      allData = [],
      numResolved = 0,
      doResolve = function () {
        if (numResolved === args.length) {
          resolve(allData);
        }
      },
      rejected = false,
      doReject = function (err) {
        if (rejected) {
          return;
        }
        rejected = true;
        reject(err);
      };
    args.forEach(function (arg, idx) {
      SynchronousPromise.resolve(arg).then(function (thisResult) {
        allData[idx] = thisResult;
        numResolved += 1;
        doResolve();
      }).catch(function (err) {
        doReject(err);
      });
    });
  });
};

function createAggregateErrorFrom(errors) {
  /* jshint ignore:start */
  if (typeof window !== "undefined" && "AggregateError" in window) {
    return new window.AggregateError(errors);
  }
  /* jshint ignore:end */

  return { errors: errors };
}

SynchronousPromise.any = function () {
  var args = makeArrayFrom(arguments);
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  if (!args.length) {
    return SynchronousPromise.reject(createAggregateErrorFrom([]));
  }
  return new SynchronousPromise(function (resolve, reject) {
    var
      allErrors = [],
      numRejected = 0,
      doReject = function () {
        if (numRejected === args.length) {
          reject(createAggregateErrorFrom(allErrors));
        }
      },
      resolved = false,
      doResolve = function (result) {
        if (resolved) {
          return;
        }
        resolved = true;
        resolve(result);
      };
    args.forEach(function (arg, idx) {
      SynchronousPromise.resolve(arg).then(function (thisResult) {
        doResolve(thisResult);
      }).catch(function (err) {
        allErrors[idx] = err;
        numRejected += 1;
        doReject();
      });
    });
  });
};

SynchronousPromise.allSettled = function () {
  var args = makeArrayFrom(arguments);
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  if (!args.length) {
    return SynchronousPromise.resolve([]);
  }
  return new SynchronousPromise(function (resolve) {
    var
      allData = [],
      numSettled = 0,
      doSettled = function () {
        numSettled += 1;
        if (numSettled === args.length) {
          resolve(allData);
        }
      };
    args.forEach(function (arg, idx) {
      SynchronousPromise.resolve(arg).then(function (thisResult) {
        allData[idx] = {
          status: "fulfilled",
          value: thisResult
        };
        doSettled();
      }).catch(function (err) {
        allData[idx] = {
          status: "rejected",
          reason: err
        };
        doSettled();
      });
    });
  });
};

/* jshint ignore:start */
if (Promise === SynchronousPromise) {
  throw new Error("Please use SynchronousPromise.installGlobally() to install globally");
}
var RealPromise = Promise;
SynchronousPromise.installGlobally = function (__awaiter) {
  if (Promise === SynchronousPromise) {
    return __awaiter;
  }
  var result = patchAwaiterIfRequired(__awaiter);
  Promise = SynchronousPromise;
  return result;
};

SynchronousPromise.uninstallGlobally = function () {
  if (Promise === SynchronousPromise) {
    Promise = RealPromise;
  }
};

function patchAwaiterIfRequired(__awaiter) {
  if (typeof (__awaiter) === "undefined" || __awaiter.__patched) {
    return __awaiter;
  }
  var originalAwaiter = __awaiter;
  __awaiter = function () {
    var Promise = RealPromise;
    originalAwaiter.apply(this, makeArrayFrom(arguments));
  };
  __awaiter.__patched = true;
  return __awaiter;
}

/* jshint ignore:end */

module.exports = {
  SynchronousPromise: SynchronousPromise
};


/***/ }),

/***/ 39342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ extractEventHiddenProperties)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var eventProperties = ['bubbles', 'cancelBubble', 'cancelable', 'composed', 'currentTarget', 'defaultPrevented', 'eventPhase', 'isTrusted', 'returnValue', 'srcElement', 'target', 'timeStamp', 'type'];
var customEventSpecificProperties = ['detail'];
/**
 * Dom Event (and all its subclasses) is built in a way its internal properties
 * are accessible when querying them directly but "hidden" when iterating its
 * keys.
 *
 * With a code example it means: `Object.keys(new Event('click')) = ["isTrusted"]`
 *
 * So to be able to stringify/parse more than just `isTrusted` info we need to
 * create a new object and set the properties by hand. As there is no way to
 * iterate the properties we rely on a list of hardcoded properties.
 *
 * @param event The event we want to extract properties
 */

function extractEventHiddenProperties(event) {
  var rebuildEvent = eventProperties.filter(function (value) {
    return event[value] !== undefined;
  }).reduce(function (acc, value) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, value, event[value]));
  }, {});

  if (event instanceof CustomEvent) {
    customEventSpecificProperties.filter(function (value) {
      return event[value] !== undefined;
    }).forEach(function (value) {
      rebuildEvent[value] = event[value];
    });
  }

  return rebuildEvent;
}

/***/ }),

/***/ 38074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pz": () => (/* binding */ stringify),
/* harmony export */   "Qc": () => (/* binding */ parse),
/* harmony export */   "pM": () => (/* binding */ isJSON)
/* harmony export */ });
/* unused harmony exports replacer, reviver */
/* harmony import */ var is_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98420);
/* harmony import */ var is_regex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_regex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27376);
/* harmony import */ var is_function__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_function__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12636);
/* harmony import */ var is_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isobject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27361);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var memoizerific__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52326);
/* harmony import */ var memoizerific__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(memoizerific__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dom_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39342);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var isRunningInBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'; // eslint-disable-next-line @typescript-eslint/ban-types, no-use-before-define

var isObject = isobject__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z;

var removeCodeComments = function removeCodeComments(code) {
  var inQuoteChar = null;
  var inBlockComment = false;
  var inLineComment = false;
  var inRegexLiteral = false;
  var newCode = '';

  if (code.indexOf('//') >= 0 || code.indexOf('/*') >= 0) {
    for (var i = 0; i < code.length; i += 1) {
      if (!inQuoteChar && !inBlockComment && !inLineComment && !inRegexLiteral) {
        if (code[i] === '"' || code[i] === "'" || code[i] === '`') {
          inQuoteChar = code[i];
        } else if (code[i] === '/' && code[i + 1] === '*') {
          inBlockComment = true;
        } else if (code[i] === '/' && code[i + 1] === '/') {
          inLineComment = true;
        } else if (code[i] === '/' && code[i + 1] !== '/') {
          inRegexLiteral = true;
        }
      } else {
        if (inQuoteChar && (code[i] === inQuoteChar && code[i - 1] !== '\\' || code[i] === '\n' && inQuoteChar !== '`')) {
          inQuoteChar = null;
        }

        if (inRegexLiteral && (code[i] === '/' && code[i - 1] !== '\\' || code[i] === '\n')) {
          inRegexLiteral = false;
        }

        if (inBlockComment && code[i - 1] === '/' && code[i - 2] === '*') {
          inBlockComment = false;
        }

        if (inLineComment && code[i] === '\n') {
          inLineComment = false;
        }
      }

      if (!inBlockComment && !inLineComment) {
        newCode += code[i];
      }
    }
  } else {
    newCode = code;
  }

  return newCode;
};

var cleanCode = memoizerific__WEBPACK_IMPORTED_MODULE_4___default()(10000)(function (code) {
  return removeCodeComments(code).replace(/\n\s*/g, '') // remove indents & newlines
  .trim();
});

var convertShorthandMethods = function convertShorthandMethods(key, stringified) {
  var fnHead = stringified.slice(0, stringified.indexOf('{'));
  var fnBody = stringified.slice(stringified.indexOf('{'));

  if (fnHead.includes('=>')) {
    // This is an arrow function
    return stringified;
  }

  if (fnHead.includes('function')) {
    // This is an anonymous function
    return stringified;
  }

  var modifiedHead = fnHead;
  modifiedHead = modifiedHead.replace(key, 'function');
  return modifiedHead + fnBody;
};

var dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
// eslint-disable-next-line no-useless-escape
var isJSON = function isJSON(input) {
  return input.match(/^[\[\{\"\}].*[\]\}\"]$/);
};

function convertUnconventionalData(data) {
  if (!isObject(data)) {
    return data;
  }

  var result = data;
  var wasMutated = false; // `Event` has a weird structure, for details see `extractEventHiddenProperties` doc
  // Plus we need to check if running in a browser to ensure `Event` exist and
  // is really the dom Event class.

  if (isRunningInBrowser && data instanceof Event) {
    result = (0,_dom_event__WEBPACK_IMPORTED_MODULE_6__/* .extractEventHiddenProperties */ ._)(result);
    wasMutated = true;
  }

  result = Object.keys(result).reduce(function (acc, key) {
    try {
      var _result$key;

      // Try accessing a property to test if we are allowed to do so
      // eslint-disable-next-line no-unused-expressions
      (_result$key = result[key]) === null || _result$key === void 0 ? void 0 : _result$key.toJSON;
      acc[key] = result[key];
    } catch (err) {
      wasMutated = true;
    }

    return acc;
  }, {});
  return wasMutated ? result : data;
}

var replacer = function replacer(options) {
  var objects;
  var map;
  var stack;
  var keys;
  return function replace(key, value) {
    try {
      //  very first iteration
      if (key === '') {
        keys = [];
        objects = new Map([[value, '[]']]);
        map = new Map();
        stack = [];
        return value;
      } // From the JSON.stringify's doc:
      // "The object in which the key was found is provided as the replacer's this parameter." thus one can control the depth


      var origin = map.get(this) || this;

      while (stack.length && origin !== stack[0]) {
        stack.shift();
        keys.pop();
      }

      if (typeof value === 'boolean') {
        return value;
      }

      if (value === undefined) {
        if (!options.allowUndefined) {
          return undefined;
        }

        return '_undefined_';
      }

      if (value === null) {
        return null;
      }

      if (typeof value === 'number') {
        if (value === -Infinity) {
          return '_-Infinity_';
        }

        if (value === Infinity) {
          return '_Infinity_';
        }

        if (Number.isNaN(value)) {
          return '_NaN_';
        }

        return value;
      }

      if (typeof value === 'bigint') {
        return "_bigint_".concat(value.toString());
      }

      if (typeof value === 'string') {
        if (dateFormat.test(value)) {
          if (!options.allowDate) {
            return undefined;
          }

          return "_date_".concat(value);
        }

        return value;
      }

      if (is_regex__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
        if (!options.allowRegExp) {
          return undefined;
        }

        return "_regexp_".concat(value.flags, "|").concat(value.source);
      }

      if (is_function__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
        if (!options.allowFunction) {
          return undefined;
        }

        var name = value.name;
        var stringified = value.toString();

        if (!stringified.match(/(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/)) {
          return "_function_".concat(name, "|").concat(cleanCode(convertShorthandMethods(key, stringified)));
        }

        return "_function_".concat(name, "|").concat(function () {}.toString());
      }

      if (is_symbol__WEBPACK_IMPORTED_MODULE_2___default()(value)) {
        if (!options.allowSymbol) {
          return undefined;
        }

        var globalRegistryKey = Symbol.keyFor(value);

        if (globalRegistryKey !== undefined) {
          return "_gsymbol_".concat(globalRegistryKey);
        }

        return "_symbol_".concat(value.toString().slice(7, -1));
      }

      if (stack.length >= options.maxDepth) {
        if (Array.isArray(value)) {
          return "[Array(".concat(value.length, ")]");
        }

        return '[Object]';
      }

      if (value === this) {
        return "_duplicate_".concat(JSON.stringify(keys));
      } // when it's a class and we don't want to support classes, skip


      if (value.constructor && value.constructor.name && value.constructor.name !== 'Object' && !Array.isArray(value) && !options.allowClass) {
        return undefined;
      }

      var found = objects.get(value);

      if (!found) {
        var converted = Array.isArray(value) ? value : convertUnconventionalData(value);

        if (value.constructor && value.constructor.name && value.constructor.name !== 'Object' && !Array.isArray(value) && options.allowClass) {
          try {
            Object.assign(converted, {
              '_constructor-name_': value.constructor.name
            });
          } catch (e) {// immutable objects can't be written to and throw
            // we could make a deep copy but if the user values the correct instance name,
            // the user should make the deep copy themselves.
          }
        }

        keys.push(key);
        stack.unshift(converted);
        objects.set(value, JSON.stringify(keys));

        if (value !== converted) {
          map.set(value, converted);
        }

        return converted;
      } //  actually, here's the only place where the keys keeping is useful


      return "_duplicate_".concat(found);
    } catch (e) {
      return undefined;
    }
  };
};
var reviver = function reviver(options) {
  var refs = [];
  var root;
  return function revive(key, value) {
    // last iteration = root
    if (key === '') {
      root = value; // restore cyclic refs

      refs.forEach(function (_ref) {
        var target = _ref.target,
            container = _ref.container,
            replacement = _ref.replacement;
        var replacementArr = isJSON(replacement) ? JSON.parse(replacement) : replacement.split('.');

        if (replacementArr.length === 0) {
          // eslint-disable-next-line no-param-reassign
          container[target] = root;
        } else {
          // eslint-disable-next-line no-param-reassign
          container[target] = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(root, replacementArr);
        }
      });
    }

    if (key === '_constructor-name_') {
      return value;
    } // deal with instance names


    if (isObject(value) && value['_constructor-name_'] && options.allowFunction) {
      var name = value['_constructor-name_'];

      if (name !== 'Object') {
        // eslint-disable-next-line no-new-func
        var Fn = new Function("return function ".concat(name.replace(/[\W_]+/g, ''), "(){}"))();
        Object.setPrototypeOf(value, new Fn());
      } // eslint-disable-next-line no-param-reassign


      delete value['_constructor-name_'];
      return value;
    }

    if (typeof value === 'string' && value.startsWith('_function_') && options.allowFunction) {
      var _ref2 = value.match(/_function_([^|]*)\|(.*)/) || [],
          _ref3 = _slicedToArray(_ref2, 3),
          _name = _ref3[1],
          source = _ref3[2]; // eslint-disable-next-line no-useless-escape


      var sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '');

      if (!options.lazyEval) {
        // eslint-disable-next-line no-eval
        return eval("(".concat(sourceSanitized, ")"));
      } // lazy eval of the function


      var result = function result() {
        // eslint-disable-next-line no-eval
        var f = eval("(".concat(sourceSanitized, ")"));
        return f.apply(void 0, arguments);
      };

      Object.defineProperty(result, 'toString', {
        value: function value() {
          return sourceSanitized;
        }
      });
      Object.defineProperty(result, 'name', {
        value: _name
      });
      return result;
    }

    if (typeof value === 'string' && value.startsWith('_regexp_') && options.allowRegExp) {
      // this split isn't working correctly
      var _ref4 = value.match(/_regexp_([^|]*)\|(.*)/) || [],
          _ref5 = _slicedToArray(_ref4, 3),
          flags = _ref5[1],
          _source = _ref5[2];

      return new RegExp(_source, flags);
    }

    if (typeof value === 'string' && value.startsWith('_date_') && options.allowDate) {
      return new Date(value.replace('_date_', ''));
    }

    if (typeof value === 'string' && value.startsWith('_duplicate_')) {
      refs.push({
        target: key,
        container: this,
        replacement: value.replace(/^_duplicate_/, '')
      });
      return null;
    }

    if (typeof value === 'string' && value.startsWith('_symbol_') && options.allowSymbol) {
      return Symbol(value.replace('_symbol_', ''));
    }

    if (typeof value === 'string' && value.startsWith('_gsymbol_') && options.allowSymbol) {
      return Symbol["for"](value.replace('_gsymbol_', ''));
    }

    if (typeof value === 'string' && value === '_-Infinity_') {
      return -Infinity;
    }

    if (typeof value === 'string' && value === '_Infinity_') {
      return Infinity;
    }

    if (typeof value === 'string' && value === '_NaN_') {
      return NaN;
    }

    if (typeof value === 'string' && value.startsWith('_bigint_') && typeof BigInt === 'function') {
      return BigInt(value.replace('_bigint_', ''));
    }

    return value;
  };
};
var defaultOptions = {
  maxDepth: 10,
  space: undefined,
  allowFunction: true,
  allowRegExp: true,
  allowDate: true,
  allowClass: true,
  allowUndefined: true,
  allowSymbol: true,
  lazyEval: true
};
var stringify = function stringify(data) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var mergedOptions = _objectSpread(_objectSpread({}, defaultOptions), options);

  return JSON.stringify(convertUnconventionalData(data), replacer(mergedOptions), options.space);
};

var mutator = function mutator() {
  var mutated = new Map();
  return function mutateUndefined(value) {
    // JSON.parse will not output keys with value of undefined
    // we map over a deeply nester object, if we find any value with `_undefined_`, we mutate it to be undefined
    if (isObject(value)) {
      Object.entries(value).forEach(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            k = _ref7[0],
            v = _ref7[1];

        if (v === '_undefined_') {
          // eslint-disable-next-line no-param-reassign
          value[k] = undefined;
        } else if (!mutated.get(v)) {
          mutated.set(v, true);
          mutateUndefined(v);
        }
      });
    }

    if (Array.isArray(value)) {
      value.forEach(function (v, index) {
        if (v === '_undefined_') {
          mutated.set(v, true); // eslint-disable-next-line no-param-reassign

          value[index] = undefined;
        } else if (!mutated.get(v)) {
          mutated.set(v, true);
          mutateUndefined(v);
        }
      });
    }
  };
};

var parse = function parse(data) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var mergedOptions = _objectSpread(_objectSpread({}, defaultOptions), options);

  var result = JSON.parse(data, reviver(mergedOptions));
  mutator()(result);
  return result;
};

/***/ }),

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isObject)
/* harmony export */ });
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ 18464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export dedent */
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
            return arr.concat(matches.map(function (match) { var _a, _b; return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0; }));
        }
        return arr;
    }, []);
    if (indentLengths.length) {
        var pattern_1 = new RegExp("\n[\t ]{" + Math.min.apply(Math, indentLengths) + "}", 'g');
        strings = strings.map(function (str) { return str.replace(pattern_1, '\n'); });
    }
    strings[0] = strings[0].replace(/^\r?\n/, '');
    var string = strings[0];
    values.forEach(function (value, i) {
        var endentations = string.match(/(?:^|\n)( *)$/);
        var endentation = endentations ? endentations[1] : '';
        var indentedValue = value;
        if (typeof value === 'string' && value.includes('\n')) {
            indentedValue = String(value)
                .split('\n')
                .map(function (str, i) {
                return i === 0 ? str : "" + endentation + str;
            })
                .join('\n');
        }
        string += indentedValue + strings[i + 1];
    });
    return string;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dedent);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 94927:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!__webpack_require__.g.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = __webpack_require__.g.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}


/***/ }),

/***/ 16291:
/***/ ((module) => {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ 10184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = typeof __webpack_require__.g !== 'undefined' && (__webpack_require__.g.crypto || __webpack_require__.g.msCrypto); // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;


/***/ }),

/***/ 98130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(10184);
var bytesToUuid = __webpack_require__(16291);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 43679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isString = __webpack_require__(29981);
var isNumber = __webpack_require__(44578);
var isBoolean = __webpack_require__(76814);
var isSymbol = __webpack_require__(12636);
var isBigInt = __webpack_require__(63376);

// eslint-disable-next-line consistent-return
module.exports = function whichBoxedPrimitive(value) {
	// eslint-disable-next-line eqeqeq
	if (value == null || (typeof value !== 'object' && typeof value !== 'function')) {
		return null;
	}
	if (isString(value)) {
		return 'String';
	}
	if (isNumber(value)) {
		return 'Number';
	}
	if (isBoolean(value)) {
		return 'Boolean';
	}
	if (isSymbol(value)) {
		return 'Symbol';
	}
	if (isBigInt(value)) {
		return 'BigInt';
	}
};


/***/ }),

/***/ 86430:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var forEach = __webpack_require__(94029);
var availableTypedArrays = __webpack_require__(63083);
var callBound = __webpack_require__(21924);

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = __webpack_require__(96410)();

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;
var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __webpack_require__(20882);
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof g[typedArray] === 'function') {
			var arr = new g[typedArray]();
			if (Symbol.toStringTag in arr) {
				var proto = getPrototypeOf(arr);
				var descriptor = gOPD(proto, Symbol.toStringTag);
				if (!descriptor) {
					var superProto = getPrototypeOf(proto);
					descriptor = gOPD(superProto, Symbol.toStringTag);
				}
				toStrTags[typedArray] = descriptor.get;
			}
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __webpack_require__(85692);

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag || !(Symbol.toStringTag in value)) { return $slice($toString(value), 8, -1); }
	return tryTypedArrays(value);
};


/***/ }),

/***/ 43483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isMap = __webpack_require__(78379);
var isSet = __webpack_require__(19572);
var isWeakMap = __webpack_require__(53528);
var isWeakSet = __webpack_require__(25899);

module.exports = function whichCollection(value) {
	if (value && typeof value === 'object') {
		if (isMap(value)) {
			return 'Map';
		}
		if (isSet(value)) {
			return 'Set';
		}
		if (isWeakMap(value)) {
			return 'WeakMap';
		}
		if (isWeakSet(value)) {
			return 'WeakSet';
		}
	}
	return false;
};


/***/ })

}]);
//# sourceMappingURL=300.a76b080d.iframe.bundle.js.map