/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\git\\cube\\src\\js\\index.js: Unexpected token, expected \",\" (298:9)\n\n\u001b[0m \u001b[90m 296 | \u001b[39m        init\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m () {\u001b[0m\n\u001b[0m \u001b[90m 297 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 298 | \u001b[39m        })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 299 | \u001b[39m}\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 300 | \u001b[39m    }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 301 | \u001b[39minit\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m () {\u001b[0m\n    at Parser._raise (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\location.js:241:45)\n    at Parser.raiseWithData (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\location.js:236:17)\n    at Parser.raise (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\location.js:220:17)\n    at Parser.unexpected (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\util.js:149:16)\n    at Parser.expect (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\util.js:129:28)\n    at Parser.parseObj (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\expression.js:1520:14)\n    at Parser.parseExprAtom (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\expression.js:1089:26)\n    at Parser.parseExprSubscripts (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\expression.js:539:23)\n    at Parser.parseMaybeUnary (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\expression.js:519:21)\n    at Parser.parseExprOps (D:\\git\\cube\\node_modules\\@babel\\parser\\src\\parser\\expression.js:311:23)");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map