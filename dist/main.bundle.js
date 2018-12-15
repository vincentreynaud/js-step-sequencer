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
/* harmony import */ var _modules_StepSequencer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/StepSequencer */ "./src/modules/StepSequencer.js");
var _this = undefined;

// require('bootstrap');
 //SliderBMP

var slider = document.getElementById("time-signature");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = _this.value;
};

var sequencer = new _modules_StepSequencer__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/modules/Pads.js":
/*!*****************************!*\
  !*** ./src/modules/Pads.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pads =
/*#__PURE__*/
function () {
  function Pads() {
    _classCallCheck(this, Pads);
  }

  _createClass(Pads, [{
    key: "togglePadPressed",
    value: function togglePadPressed(pad) {
      pad.classList.contains("pad-pressed") ? pad.classList.remove("pad-pressed") : pad.classList.add("pad-pressed");
    }
  }, {
    key: "clearSelectedPads",
    value: function clearSelectedPads() {
      document.querySelectorAll(".pad-pressed").forEach(function (pad) {
        pad.classList.remove("pad-pressed");
      });
    }
  }, {
    key: "toogleStepPlayClass",
    value: function toogleStepPlayClass(step) {
      if (step === 0) {
        addStepPlayClass(step);
      } else if (step === 8) {
        removeStepPlayClass(step);
      } else {
        removeStepPlayClass(step);
        addStepPlayClasses(step);
      }

      ;
    }
  }, {
    key: "addStepPlayClass",
    value: function addStepPlayClass(step) {
      document.querySelector("#step-".concat(step + 1)).classList.add("step-play");
    }
  }, {
    key: "removeStepPlayClass",
    value: function removeStepPlayClass(step) {
      document.querySelector("#step-".concat(step)).classList.remove("step-play");
    }
  }]);

  return Pads;
}();

/* harmony default export */ __webpack_exports__["default"] = (Pads);

/***/ }),

/***/ "./src/modules/StepSequencer.js":
/*!**************************************!*\
  !*** ./src/modules/StepSequencer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pads */ "./src/modules/Pads.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StepSequencer =
/*#__PURE__*/
function () {
  function StepSequencer() {
    _classCallCheck(this, StepSequencer);

    this.audioContext = new AudioContext();
    this.scale = this.getScale();
    this.timeInput = 4000;
    this.masterVolume = this.audioContext.createGain();
    this.steps = this.createStepTemplate();
    this.pads = new _Pads__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.stop = null;
    this.elements = {};
    this.init();
  }

  _createClass(StepSequencer, [{
    key: "init",
    value: function init() {
      this.getElements();
      this.masterVolume.gain.value = 0.25;
      this.masterVolume.connect(this.audioContext.destination);
      this.registerEvents();
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      console.log(this.elements);
      this.elements.controls.addEventListener("click", function (e) {
        // replace by switch statement
        if (e.target.closest("#play")) {
          _this.playSequence(_this.timeInput);
        } else if (e.target.closest("#stop")) {
          // create toogleStopBtn method
          _this.stop = true;
        } else if (e.target.closest("#delete")) {
          _this.clearSelectedPads();

          _this.addFalseValues(_this.steps);
        } else if (e.target.closest("#time-signature")) {
          // write setTimeInput method
          _this.timeInput = 480000 / e.target.value;
        }
      });
      this.elements.pads.forEach(function (pad) {
        pad.addEventListener("click", function () {
          togglePadPressed(pad);
        });
      }); //EventListener add sound changing arrayValues

      var _loop = function _loop(i) {
        var _loop2 = function _loop2(j) {
          document.querySelector("#step-" + (i + 1)).children[j].addEventListener("click", function () {
            _this.padToggle(i, j);
          });
        };

        for (var j = 0; j < 8; j++) {
          _loop2(j);
        }
      };

      for (var i = 0; i < 8; i++) {
        _loop(i);
      }
    } //Play ActionButton

  }, {
    key: "playSequence",
    value: function playSequence(time) {
      var _this2 = this;

      if (this.stop) {
        this.stop = false;
        return;
      }

      var _loop3 = function _loop3(i) {
        var j = i;
        setTimeout(function () {
          _this2.pads.toggleStepPlayClass(j);

          _this2.play(_this2.steps[j], time / 8000, _this2.elements.instrument.value);
        }, time * j / 8);
      };

      for (var i = 0; i < 8; ++i) {
        _loop3(i);
      }

      setTimeout(function () {
        _this2.pads.toggleStepPlayClass(8);
      }, time);
      setTimeout(function () {
        _this2.playSequence(_this2.timeInput);
      }, time);
    }
  }, {
    key: "play",
    value: function play(step, time, tone) {
      var chord = [];

      for (var i = 0; i < 8; i++) {
        if (step[i]) {
          chord[i] = audioContext.createOscillator();
          chord[i].frequency.value = gmin[i];
          chord[i].type = tone;
          chord[i].connect(masterVolume);
          chord[i].start(audioContext.currentTime);
          chord[i].stop(audioContext.currentTime + time);
        }
      }
    }
  }, {
    key: "getElements",
    value: function getElements() {
      Object.assign(this.elements, {
        controls: document.querySelector("#controls"),
        play: document.querySelector("#play"),
        stop: document.querySelector("#stop"),
        delete: document.querySelector("#delete"),
        bpm: document.querySelector("#time-signature"),
        instrument: document.querySelector("#instrument"),
        pads: document.querySelectorAll(".pad")
      });
    }
  }, {
    key: "createStepTemplate",
    value: function createStepTemplate() {
      var steps = new Array(8);

      for (var i = 0; i < 8; i++) {
        steps[i] = new Array(8);
      }

      return this.addFalseValues(steps);
    } // add boolean value to the steps array

  }, {
    key: "addFalseValues",
    value: function addFalseValues(steps) {
      for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
          steps[i][j] = false;
        }
      }

      return steps;
    }
  }, {
    key: "getScale",
    value: function getScale() {
      var gmin = [195.995, 220, 233.082, 261.626, 293.665, 311.127, 349.228, 391.995];
      return gmin;
    }
  }]);

  return StepSequencer;
}();

/* harmony default export */ __webpack_exports__["default"] = (StepSequencer);

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map