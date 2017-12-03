var CryptoApi =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hasher = __webpack_require__(15);

var _hasher2 = _interopRequireDefault(_hasher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Constants from Pi
 * @link https://github.com/e-sushi/MD2-S-box-creator
 * @type {number[]}
 */
var SBOX = [0x29, 0x2e, 0x43, 0xc9, 0xa2, 0xd8, 0x7c, 0x01, 0x3d, 0x36, 0x54, 0xa1, 0xec, 0xf0, 0x06, 0x13, 0x62, 0xa7, 0x05, 0xf3, 0xc0, 0xc7, 0x73, 0x8c, 0x98, 0x93, 0x2b, 0xd9, 0xbc, 0x4c, 0x82, 0xca, 0x1e, 0x9b, 0x57, 0x3c, 0xfd, 0xd4, 0xe0, 0x16, 0x67, 0x42, 0x6f, 0x18, 0x8a, 0x17, 0xe5, 0x12, 0xbe, 0x4e, 0xc4, 0xd6, 0xda, 0x9e, 0xde, 0x49, 0xa0, 0xfb, 0xf5, 0x8e, 0xbb, 0x2f, 0xee, 0x7a, 0xa9, 0x68, 0x79, 0x91, 0x15, 0xb2, 0x07, 0x3f, 0x94, 0xc2, 0x10, 0x89, 0x0b, 0x22, 0x5f, 0x21, 0x80, 0x7f, 0x5d, 0x9a, 0x5a, 0x90, 0x32, 0x27, 0x35, 0x3e, 0xcc, 0xe7, 0xbf, 0xf7, 0x97, 0x03, 0xff, 0x19, 0x30, 0xb3, 0x48, 0xa5, 0xb5, 0xd1, 0xd7, 0x5e, 0x92, 0x2a, 0xac, 0x56, 0xaa, 0xc6, 0x4f, 0xb8, 0x38, 0xd2, 0x96, 0xa4, 0x7d, 0xb6, 0x76, 0xfc, 0x6b, 0xe2, 0x9c, 0x74, 0x04, 0xf1, 0x45, 0x9d, 0x70, 0x59, 0x64, 0x71, 0x87, 0x20, 0x86, 0x5b, 0xcf, 0x65, 0xe6, 0x2d, 0xa8, 0x02, 0x1b, 0x60, 0x25, 0xad, 0xae, 0xb0, 0xb9, 0xf6, 0x1c, 0x46, 0x61, 0x69, 0x34, 0x40, 0x7e, 0x0f, 0x55, 0x47, 0xa3, 0x23, 0xdd, 0x51, 0xaf, 0x3a, 0xc3, 0x5c, 0xf9, 0xce, 0xba, 0xc5, 0xea, 0x26, 0x2c, 0x53, 0x0d, 0x6e, 0x85, 0x28, 0x84, 0x09, 0xd3, 0xdf, 0xcd, 0xf4, 0x41, 0x81, 0x4d, 0x52, 0x6a, 0xdc, 0x37, 0xc8, 0x6c, 0xc1, 0xab, 0xfa, 0x24, 0xe1, 0x7b, 0x08, 0x0c, 0xbd, 0xb1, 0x4a, 0x78, 0x88, 0x95, 0x8b, 0xe3, 0x63, 0xe8, 0x6d, 0xe9, 0xcb, 0xd5, 0xfe, 0x3b, 0x00, 0x1d, 0x39, 0xf2, 0xef, 0xb7, 0x0e, 0x66, 0x58, 0xd0, 0xe4, 0xa6, 0x77, 0x72, 0xf8, 0xeb, 0x75, 0x4b, 0x0a, 0x31, 0x44, 0x50, 0xb4, 0x8f, 0xed, 0x1f, 0x1a, 0xdb, 0x99, 0x8d, 0x33, 0x9f, 0x11, 0x83, 0x14];

/**
 * Calculates [MD2](https://tools.ietf.org/html/rfc1319) hash
 *
 * @example <caption>Calculates MD2 hash from string "message" - ES6 style</caption>
 * import Md2 from "crypto-api/hasher/md2";
 * import {toHex} from "crypto-api/encoder/hex";
 *
 * let hasher = new Md2();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates MD2 hash from UTF string "message" - ES6 style</caption>
 * import Md2 from "crypto-api/hasher/md2";
 * import {toHex} from "crypto-api/encoder/hex";
 * import {fromUtf} from "crypto-api/encoder/utf";
 *
 * let hasher = new Md2();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates MD2 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('md2');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates MD2 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('md2', 'message'));
 * </script>
 */

var Md2 = function (_Hasher) {
  _inherits(Md2, _Hasher);

  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=18] - Number of rounds (Must be greater than 0)
   */
  function Md2(options) {
    _classCallCheck(this, Md2);

    var _this = _possibleConstructorReturn(this, (Md2.__proto__ || Object.getPrototypeOf(Md2)).call(this, options));

    _this.options.rounds = _this.options.rounds || 18;
    _this.state.hash = new Array(48);
    _this.state.checksum = new Array(16);
    return _this;
  }

  /**
   * Process ready blocks
   *
   * @protected
   * @ignore
   * @param {number[]} block - Block
   */


  _createClass(Md2, [{
    key: "processBlock",
    value: function processBlock(block) {
      // Append hash
      for (var i = 0; i < 16; i++) {
        this.state.hash[16 + i] = block[i] | 0;
        this.state.hash[32 + i] = block[i] ^ this.state.hash[i];
      }

      // Rounds
      var t = 0;
      for (var _i = 0; _i < this.options.rounds; _i++) {
        for (var j = 0; j < 48; j++) {
          t = this.state.hash[j] ^= SBOX[t];
        }
        t = t + _i & 0xff;
      }

      // Append checksum
      t = this.state.checksum[15] & 0xff;
      for (var _i2 = 0; _i2 < 16; _i2++) {
        t = this.state.checksum[_i2] ^= SBOX[block[_i2] ^ t];
      }
    }

    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      this.addPaddingPKCS7(16 - (this.state.message.length & 0xf) | 0);
      this.process();

      // Process checksum
      for (var i = 0; i < 16; i++) {
        this.state.message += String.fromCharCode(this.state.checksum[i]);
      }
      this.process();

      // Return hash
      return this.getStateHash(16);
    }
  }]);

  return Md2;
}(_hasher2.default);

exports.default = Md2;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hasher = __webpack_require__(3);

var _hasher2 = _interopRequireDefault(_hasher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Hasher for 8 bit blocks
 * @interface
 */
var Hasher8 = function (_Hasher) {
  _inherits(Hasher8, _Hasher);

  /**
   * @param {Object} [options]
   */
  function Hasher8(options) {
    _classCallCheck(this, Hasher8);

    /**
     * Size of unit = 1 byte
     * @type {number} unitSize
     */
    var _this = _possibleConstructorReturn(this, (Hasher8.__proto__ || Object.getPrototypeOf(Hasher8)).call(this, options));

    _this.unitSize = 1;

    /**
     * Size of block in bytes
     * @type {number}
     */
    _this.blockSizeInBytes = _this.blockSize * _this.unitSize;

    /**
     * Current block (only for speed optimization)
     * @private
     * @type {number[]}
     */
    _this.blockUnits = [];
    return _this;
  }

  /**
   * Process ready blocks
   */


  _createClass(Hasher8, [{
    key: 'process',
    value: function process() {
      while (this.state.message.length >= this.blockSizeInBytes) {
        this.blockUnits = new Array(this.blockSizeInBytes);
        for (var i = 0; i < this.blockSizeInBytes; i++) {
          this.blockUnits[i] = this.state.message.charCodeAt(i) | 0;
        }
        this.state.message = this.state.message.substr(this.blockSizeInBytes);
        this.processBlock(this.blockUnits);
      }
    }

    /**
     * Process ready blocks
     *
     * @protected
     * @param {number[]} M
     */

  }, {
    key: 'processBlock',
    value: function processBlock(M) {}

    /**
     * Get hash from state
     *
     * @protected
     * @param {number} [size=this.state.hash.length] - Limit hash size (in chunks)
     * @returns {string}
     */

  }, {
    key: 'getStateHash',
    value: function getStateHash(size) {
      size = size || this.state.hash.length;
      var hash = '';
      for (var i = 0; i < size; i++) {
        hash += String.fromCharCode(this.state.hash[i] & 0xff);
      }
      return hash;
    }
  }]);

  return Hasher8;
}(_hasher2.default);

exports.default = Hasher8;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Base hasher class
 * @interface
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hasher = function () {
  /**
   * @param {Object} options
   * @constructor
   */
  function Hasher(options) {
    _classCallCheck(this, Hasher);

    /**
     * Size of unit in bytes (4 = 32 bits)
     * @type {number}
     */
    this.unitSize = 4;
    /**
     * Bytes order in unit
     *   0 - normal
     *   1 - reverse
     * @type {number}
     */
    this.unitOrder = 0;
    /**
     * Size of block in units
     * @type {number}
     */
    this.blockSize = 16;
    /**
     * Size of block in bytes
     * @type {number}
     */
    this.blockSizeInBytes = this.blockSize * this.unitSize;
    /**
     * All algorithm variables that changed during process
     * @protected
     * @type {Object}
     * @property {string} state.message - Unprocessed Message
     * @property {number} state.length - Length of message
     */
    this.state = {};
    this.state.message = '';
    this.state.length = 0;
    /**
     * Options from initialization
     * @protected
     * @type {Object}
     */
    this.options = options || {};
  }

  /**
   * Reset hasher to initial state
   */


  _createClass(Hasher, [{
    key: 'reset',
    value: function reset() {
      this.state = {};
      this.constructor(this.options);
    }

    /**
     * Return current state
     *
     * @returns {Object}
     */

  }, {
    key: 'getState',
    value: function getState() {
      return JSON.parse(JSON.stringify(this.state));
    }

    /**
     * Set current state
     *
     * @param {Object} state
     */

  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;
    }

    /**
     * Update message from binary string
     *
     * @param {string} message
     */

  }, {
    key: 'update',
    value: function update(message) {
      this.state.message += message;
      this.state.length += message.length;
      this.process();
    }

    /**
     * Process ready blocks
     *
     * @protected
     */

  }, {
    key: 'process',
    value: function process() {}

    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: 'finalize',
    value: function finalize() {
      return '';
    }

    /**
     * Get hash from state
     *
     * @protected
     * @param {number} [size=this.state.hash.length] - Limit hash size (in chunks)
     * @returns {string}
     */

  }, {
    key: 'getStateHash',
    value: function getStateHash(size) {
      return '';
    }

    /**
     * Add PKCS7 padding to message
     *
     * @protected
     * @param {number} length
     */

  }, {
    key: 'addPaddingPKCS7',
    value: function addPaddingPKCS7(length) {
      this.state.message += new Array(length + 1).join(String.fromCharCode(length));
    }

    /**
     * Add ISO7816 padding to message
     *
     * @protected
     * @param {number} length
     */

  }, {
    key: 'addPaddingISO7816',
    value: function addPaddingISO7816(length) {
      this.state.message += "\x80" + new Array(length).join("\x00");
    }

    /**
     * Add zero padding to message
     *
     * @protected
     * @param {number} length
     */

  }, {
    key: 'addPaddingZero',
    value: function addPaddingZero(length) {
      this.state.message += new Array(length + 1).join("\x00");
    }
  }]);

  return Hasher;
}();

exports.default = Hasher;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _md = __webpack_require__(14);

var _md2 = _interopRequireDefault(_md);

var _hex = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasher = new _md2.default();
hasher.update('test message');
document.getElementById('result').innerHTML = (0, _hex.toHex)(hasher.finalize());

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Convert binary result of hash to hex
 *
 * @param {string} raw
 * @returns {string}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function toHex(raw) {
  var str = '';
  for (var i = 0, l = raw.length; i < l; i++) {
    str += (raw.charCodeAt(i) < 16 ? '0' : '') + raw.charCodeAt(i).toString(16);
  }
  return str;
}

exports.toHex = toHex;

/***/ })

/******/ })["default"];