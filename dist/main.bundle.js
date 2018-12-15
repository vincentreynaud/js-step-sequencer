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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliderBPM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliderBPM */ "./src/modules/sliderBPM.js");
/* harmony import */ var _modules_sliderBPM__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_sliderBPM__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_changeClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/changeClasses */ "./src/modules/changeClasses.js");
/* harmony import */ var _modules_changeClasses__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_changeClasses__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_StepSequencer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/StepSequencer */ "./src/modules/StepSequencer.js");
/* harmony import */ var _modules_StepSequencer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_StepSequencer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_3__);




"use strict";

var sequencer = new _modules_StepSequencer__WEBPACK_IMPORTED_MODULE_2___default.a();

/***/ }),

/***/ "./src/modules/StepSequencer.js":
/*!**************************************!*\
  !*** ./src/modules/StepSequencer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/src/modules/StepSequencer.js: Unexpected token, expected \",\" (111:20)\n\n\u001b[0m \u001b[90m 109 | \u001b[39m      bpm\u001b[33m:\u001b[39m document\u001b[33m.\u001b[39mquerySelector(\u001b[32m\"#time-signature\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 110 | \u001b[39m      instrument \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mquerySelector(\u001b[32m\"#instruments\"\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 111 | \u001b[39m      pads\u001b[33m:\u001b[39m document\u001b[33m.\u001b[39mquerySelectorAll(\u001b[32m\".pad\"\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 112 | \u001b[39m    })\u001b[0m\n\u001b[0m \u001b[90m 113 | \u001b[39m  }\u001b[0m\n\u001b[0m \u001b[90m 114 | \u001b[39m\u001b[0m\n    at Parser.raise (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:4047:15)\n    at Parser.unexpected (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:5378:16)\n    at Parser.expect (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:5366:28)\n    at Parser.parseObj (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:6857:14)\n    at Parser.parseExprAtom (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:6483:21)\n    at Parser.parseExprSubscripts (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:6100:21)\n    at Parser.parseMaybeUnary (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:6079:21)\n    at Parser.parseExprOps (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:5964:21)\n    at Parser.parseMaybeConditional (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:5936:21)\n    at Parser.parseMaybeAssign (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:5883:21)\n    at Parser.parseExprListItem (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:7222:18)\n    at Parser.parseCallExpressionArguments (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:6308:22)\n    at Parser.parseSubscript (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:6210:32)\n    at Parser.parseSubscripts (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:6120:19)\n    at Parser.parseExprSubscripts (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:6110:17)\n    at Parser.parseMaybeUnary (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:6079:21)\n    at Parser.parseExprOps (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:5964:21)\n    at Parser.parseMaybeConditional (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:5936:21)\n    at Parser.parseMaybeAssign (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:5883:21)\n    at Parser.parseExpression (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:5836:21)\n    at Parser.parseStatementContent (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:7615:21)\n    at Parser.parseStatement (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:7501:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:8069:23)\n    at Parser.parseBlockBody (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:8056:10)\n    at Parser.parseBlock (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:8045:10)\n    at Parser.parseFunctionBody (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:7153:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:7135:10)\n    at Parser.parseMethod (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:7073:10)\n    at Parser.pushClassMethod (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:8477:30)\n    at Parser.parseClassMemberWithIsStatic (/Users/vincentreynaud/Desktop/FILES/WORK/2 Production/1 Web Projects/step-sequencer/node_modules/@babel/parser/lib/index.js:8402:12)");

/***/ }),

/***/ "./src/modules/changeClasses.js":
/*!**************************************!*\
  !*** ./src/modules/changeClasses.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Classes
//Click Pads
var clickBehavior = function clickBehavior(pad) {
  pad.classList.contains("pad-pressed") ? pad.classList.remove("pad-pressed") : pad.classList.add("pad-pressed");
}; //ClearButton


var clearSelectedPads = function clearSelectedPads() {
  document.querySelectorAll(".pad-pressed").forEach(function (pad) {
    pad.classList.remove("pad-pressed");
  });
}; // PlayButtonAction


var stepPlayClasses = function stepPlayClasses(step) {
  if (step === 0) {
    addStepPlayClasses(step);
  } else if (step === 8) {
    deleteStepPlayClasses(step);
  } else {
    deleteStepPlayClasses(step);
    addStepPlayClasses(step);
  }

  ;
};

var addStepPlayClasses = function addStepPlayClasses(step) {
  document.querySelector("#step-".concat(step + 1)).classList.add("step-play");
};

var deleteStepPlayClasses = function deleteStepPlayClasses(step) {
  document.querySelector("#step-".concat(step)).classList.remove("step-play");
};

/***/ }),

/***/ "./src/modules/sliderBPM.js":
/*!**********************************!*\
  !*** ./src/modules/sliderBPM.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _this = this;

//SliderBMP
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = _this.value;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map