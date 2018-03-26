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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/game */ \"./src/js/game.js\");\n\n\nconst ROWS = 50;\nconst COLS = 50;\n\nvar playGame = new _js_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ROWS, COLS);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9qcy9nYW1lXCI7XG5cbmNvbnN0IFJPV1MgPSA1MDtcbmNvbnN0IENPTFMgPSA1MDtcblxudmFyIHBsYXlHYW1lID0gbmV3IEdhbWUoUk9XUywgQ09MUyk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\n// const BOARD_COLOR = '#FDF5E0'\nconst BOARD_COLOR = 'rgba(255,255,255,.4)'\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n    constructor(numRows, numCols) {\n        this.numRows = numRows\n        this.numCols = numCols\n        const padding = 50\n        const canvasHeight = Math.floor((window.innerHeight - padding) / this.numRows) * this.numRows\n        this.boxSize = canvasHeight / this.numRows\n        const canvasWidth = this.boxSize * this.numCols\n\n        // create canvas\n        this.canvas = document.createElement('canvas')\n        document.body.appendChild(this.canvas)\n        this.canvas.width = canvasWidth\n        this.canvas.height = canvasHeight\n        this.canvas.setAttribute(\"style\", \"border: 6px solid rgba(255,255,255,.65)\")\n        this.context = this.canvas.getContext('2d')\n        this.reset()\n    }    \n\n    draw(x, y) {\n         Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"drawBox\"])(x, y, BOARD_COLOR, this.context, this.boxSize)\n    }\n\n    reset() {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)\n        this.context.fillStyle = BOARD_COLOR\n        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYm9hcmQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYm9hcmQuanM/MzkwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RyYXdCb3h9IGZyb20gJy4vdXRpbHMnXG5cbi8vIGNvbnN0IEJPQVJEX0NPTE9SID0gJyNGREY1RTAnXG5jb25zdCBCT0FSRF9DT0xPUiA9ICdyZ2JhKDI1NSwyNTUsMjU1LC40KSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG51bVJvd3MsIG51bUNvbHMpIHtcbiAgICAgICAgdGhpcy5udW1Sb3dzID0gbnVtUm93c1xuICAgICAgICB0aGlzLm51bUNvbHMgPSBudW1Db2xzXG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSA1MFxuICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBNYXRoLmZsb29yKCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBwYWRkaW5nKSAvIHRoaXMubnVtUm93cykgKiB0aGlzLm51bVJvd3NcbiAgICAgICAgdGhpcy5ib3hTaXplID0gY2FudmFzSGVpZ2h0IC8gdGhpcy5udW1Sb3dzXG4gICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdGhpcy5ib3hTaXplICogdGhpcy5udW1Db2xzXG5cbiAgICAgICAgLy8gY3JlYXRlIGNhbnZhc1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gY2FudmFzV2lkdGhcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyOiA2cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNjUpXCIpXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgfSAgICBcblxuICAgIGRyYXcoeCwgeSkge1xuICAgICAgICAgZHJhd0JveCh4LCB5LCBCT0FSRF9DT0xPUiwgdGhpcy5jb250ZXh0LCB0aGlzLmJveFNpemUpXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IEJPQVJEX0NPTE9SXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuICAgIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/board.js\n");

/***/ }),

/***/ "./src/js/food.js":
/*!************************!*\
  !*** ./src/js/food.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nconst FOOD_COLOR = '#B1CC95'\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n    constructor(maxX, maxY) {\n        var posX = Math.floor(Math.random() * maxX)\n        var posY = Math.floor(Math.random() * maxY)\n        this.x = posX\n        this.y = posY\n    }\n\n    draw(ctx, boxSize) {\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"drawBox\"])(this.x, this.y, FOOD_COLOR, ctx, boxSize)\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZm9vZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9mb29kLmpzPzRkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkcmF3Qm94fSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCBGT09EX0NPTE9SID0gJyNCMUNDOTUnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IobWF4WCwgbWF4WSkge1xuICAgICAgICB2YXIgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heFgpXG4gICAgICAgIHZhciBwb3NZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4WSlcbiAgICAgICAgdGhpcy54ID0gcG9zWFxuICAgICAgICB0aGlzLnkgPSBwb3NZXG4gICAgfVxuXG4gICAgZHJhdyhjdHgsIGJveFNpemUpIHtcbiAgICAgICAgZHJhd0JveCh0aGlzLngsIHRoaXMueSwgRk9PRF9DT0xPUiwgY3R4LCBib3hTaXplKVxuICAgIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/food.js\n");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/js/board.js\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ \"./src/js/snake.js\");\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food */ \"./src/js/food.js\");\n\n\n\n\nconst FPS = 100\nconst SCORE_INCREASE = 1\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n    constructor(rows,cols) {\n        this.rows = rows\n        this.cols = cols\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.rows, this.cols)\n        this.overlay = document.getElementById('overlay')\n        this.snake\n        this.food \n        this.score = 0\n        this.anim\n\n        document.getElementById(\"start\").addEventListener(\"click\", () => {this.startGame()})\n        document.getElementById(\"message\").innerHTML = \"Use the keyboard arrow keys to move the snake to eat food!\"\n    }\n    startGame() {\n        this.reset()\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('right', 0, 0)\n        this.food = new _food__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.rows, this.cols)\n        this.overlay.style.display = \"none\";\n        this.gameLoop();\n\n        window.onkeydown = (e) => {\n            let keyCodes = {\n                37: \"left\",\n                38: \"up\",\n                39: \"right\",\n                40: \"down\"\n            };\n            let method = keyCodes[e.keyCode]\n            if (method) {\n                this.snake.direction = method.toString()\n            }\n        }\n    }\n\n    updateScore(score) {\n        this.score += score;\n        document.getElementById(\"score\").innerHTML = this.score\n    }\n\n    resetScore() {\n        this.score = 0\n        document.getElementById(\"score\").innerHTML = this.score\n    }\n\n    gameLoop() {\n        const framesPerSecond = FPS\n        setTimeout(() => {\n            this.anim = requestAnimationFrame(this.gameLoop.bind(this))\n            this.snake.move()\n            if (this.snake.hitBarrier(this.board.numRows, this.board.numCols)) {\n                this.endGame()\n                return\n            } else if (this.snake.ateFood(this.food)) {\n                this.updateScore(SCORE_INCREASE);\n                this.food = new _food__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.board.numCols, this.board.numRows)\n            } else {\n                let temp = this.snake.snakeArr.shift()\n                this.board.draw(temp[0], temp[1])\n            }\n            this.snake.draw(this.board.context, this.board.boxSize)\n            this.food.draw(this.board.context, this.board.boxSize)\n        }, 5000 / framesPerSecond)\n    }\n\n    endGame() {\n        cancelAnimationFrame(this.anim)\n        this.board.reset()\n        document.getElementById(\"message\").innerHTML = \"Game over! Your final score is \" + this.score\n        this.overlay.style.display = \"flex\"\n    }\n\n    reset() {\n        this.resetScore()\n        this.board.reset()\n    }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ2FtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgU25ha2UgZnJvbSBcIi4vc25ha2VcIjtcbmltcG9ydCBGb29kIGZyb20gXCIuL2Zvb2RcIjtcblxuY29uc3QgRlBTID0gMTAwXG5jb25zdCBTQ09SRV9JTkNSRUFTRSA9IDFcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHJvd3MsY29scykge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzXG4gICAgICAgIHRoaXMuY29scyA9IGNvbHNcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLnJvd3MsIHRoaXMuY29scylcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuICAgICAgICB0aGlzLnNuYWtlXG4gICAgICAgIHRoaXMuZm9vZCBcbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5hbmltXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge3RoaXMuc3RhcnRHYW1lKCl9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIikuaW5uZXJIVE1MID0gXCJVc2UgdGhlIGtleWJvYXJkIGFycm93IGtleXMgdG8gbW92ZSB0aGUgc25ha2UgdG8gZWF0IGZvb2QhXCJcbiAgICB9XG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLnJlc2V0KClcbiAgICAgICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSgncmlnaHQnLCAwLCAwKVxuICAgICAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZCh0aGlzLnJvd3MsIHRoaXMuY29scylcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5nYW1lTG9vcCgpO1xuXG4gICAgICAgIHdpbmRvdy5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGtleUNvZGVzID0ge1xuICAgICAgICAgICAgICAgIDM3OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAzODogXCJ1cFwiLFxuICAgICAgICAgICAgICAgIDM5OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgNDA6IFwiZG93blwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IG1ldGhvZCA9IGtleUNvZGVzW2Uua2V5Q29kZV1cbiAgICAgICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlLmRpcmVjdGlvbiA9IG1ldGhvZC50b1N0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTY29yZShzY29yZSkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpLmlubmVySFRNTCA9IHRoaXMuc2NvcmVcbiAgICB9XG5cbiAgICByZXNldFNjb3JlKCkge1xuICAgICAgICB0aGlzLnNjb3JlID0gMFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlXCIpLmlubmVySFRNTCA9IHRoaXMuc2NvcmVcbiAgICB9XG5cbiAgICBnYW1lTG9vcCgpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzUGVyU2Vjb25kID0gRlBTXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSlcbiAgICAgICAgICAgIHRoaXMuc25ha2UubW92ZSgpXG4gICAgICAgICAgICBpZiAodGhpcy5zbmFrZS5oaXRCYXJyaWVyKHRoaXMuYm9hcmQubnVtUm93cywgdGhpcy5ib2FyZC5udW1Db2xzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc25ha2UuYXRlRm9vZCh0aGlzLmZvb2QpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZShTQ09SRV9JTkNSRUFTRSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb29kID0gbmV3IEZvb2QodGhpcy5ib2FyZC5udW1Db2xzLCB0aGlzLmJvYXJkLm51bVJvd3MpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gdGhpcy5zbmFrZS5zbmFrZUFyci5zaGlmdCgpXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5kcmF3KHRlbXBbMF0sIHRlbXBbMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNuYWtlLmRyYXcodGhpcy5ib2FyZC5jb250ZXh0LCB0aGlzLmJvYXJkLmJveFNpemUpXG4gICAgICAgICAgICB0aGlzLmZvb2QuZHJhdyh0aGlzLmJvYXJkLmNvbnRleHQsIHRoaXMuYm9hcmQuYm94U2l6ZSlcbiAgICAgICAgfSwgNTAwMCAvIGZyYW1lc1BlclNlY29uZClcbiAgICB9XG5cbiAgICBlbmRHYW1lKCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW0pXG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXQoKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIikuaW5uZXJIVE1MID0gXCJHYW1lIG92ZXIhIFlvdXIgZmluYWwgc2NvcmUgaXMgXCIgKyB0aGlzLnNjb3JlXG4gICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5yZXNldFNjb3JlKClcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldCgpXG4gICAgfVxuXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/game.js\n");

/***/ }),

/***/ "./src/js/snake.js":
/*!*************************!*\
  !*** ./src/js/snake.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nconst SNAKE_COLOR = '#92B5D1'\nconst yellow = '#F6FB7B'\nconst purple = '#A0BBD6'\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n    constructor(direction, posX, posY)  {\n        this.posX = posX //head x position \n        this.posY = posY //head y position \n        this.snakeArr = [[this.posX, this.posY]] //snake array \n        this.direction = direction\n    }\n\n    move() {\n        if (this.direction === 'left') {\n            this.posX -= 1\n        } else if (this.direction === 'right') {\n            this.posX += 1\n        } else if (this.direction === 'up') {\n            this.posY -= 1\n        } else if (this.direction === 'down') {\n            this.posY += 1\n        }\n        this.snakeArr.push([this.posX, this.posY])\n    }\n\n    ateFood(food) {\n        var snakeHead = this.snakeArr[this.snakeArr.length -1]\n        return (\n            snakeHead[0] == food.x && snakeHead[1] == food.y\n            )\n    }\n\n    hitBarrier(rows, cols) {\n        var cell = this.snakeArr[this.snakeArr.length-1]\n        // check if snake head is out of bounds \n        if (cell[0] >= cols || cell[0] < 0 ||\n            cell[1] >= rows || cell[1] < 0\n            ) {\n            return true \n        } \n        //  check if snake head collided with self\n        else {\n            for (let part of this.snakeArr.slice(0, this.snakeArr.length-1)) {\n                if (part[0] == cell[0] && part[1] == cell[1]) {\n                    return true\n                }\n            }\n        }\n        return false\n    }\n\n    draw(ctx, boxSize) {\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"drawBox\"])(this.posX, this.posY, SNAKE_COLOR, ctx, boxSize)\n    }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc25ha2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc25ha2UuanM/NzFhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RyYXdCb3h9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IFNOQUtFX0NPTE9SID0gJyM5MkI1RDEnXG5jb25zdCB5ZWxsb3cgPSAnI0Y2RkI3QidcbmNvbnN0IHB1cnBsZSA9ICcjQTBCQkQ2J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgcG9zWCwgcG9zWSkgIHtcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWCAvL2hlYWQgeCBwb3NpdGlvbiBcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWSAvL2hlYWQgeSBwb3NpdGlvbiBcbiAgICAgICAgdGhpcy5zbmFrZUFyciA9IFtbdGhpcy5wb3NYLCB0aGlzLnBvc1ldXSAvL3NuYWtlIGFycmF5IFxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvblxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1ggLT0gMVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1ggKz0gMVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1kgLT0gMVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWSArPSAxXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbmFrZUFyci5wdXNoKFt0aGlzLnBvc1gsIHRoaXMucG9zWV0pXG4gICAgfVxuXG4gICAgYXRlRm9vZChmb29kKSB7XG4gICAgICAgIHZhciBzbmFrZUhlYWQgPSB0aGlzLnNuYWtlQXJyW3RoaXMuc25ha2VBcnIubGVuZ3RoIC0xXVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgc25ha2VIZWFkWzBdID09IGZvb2QueCAmJiBzbmFrZUhlYWRbMV0gPT0gZm9vZC55XG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgaGl0QmFycmllcihyb3dzLCBjb2xzKSB7XG4gICAgICAgIHZhciBjZWxsID0gdGhpcy5zbmFrZUFyclt0aGlzLnNuYWtlQXJyLmxlbmd0aC0xXVxuICAgICAgICAvLyBjaGVjayBpZiBzbmFrZSBoZWFkIGlzIG91dCBvZiBib3VuZHMgXG4gICAgICAgIGlmIChjZWxsWzBdID49IGNvbHMgfHwgY2VsbFswXSA8IDAgfHxcbiAgICAgICAgICAgIGNlbGxbMV0gPj0gcm93cyB8fCBjZWxsWzFdIDwgMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSBcbiAgICAgICAgfSBcbiAgICAgICAgLy8gIGNoZWNrIGlmIHNuYWtlIGhlYWQgY29sbGlkZWQgd2l0aCBzZWxmXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcGFydCBvZiB0aGlzLnNuYWtlQXJyLnNsaWNlKDAsIHRoaXMuc25ha2VBcnIubGVuZ3RoLTEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRbMF0gPT0gY2VsbFswXSAmJiBwYXJ0WzFdID09IGNlbGxbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZHJhdyhjdHgsIGJveFNpemUpIHtcbiAgICAgICAgZHJhd0JveCh0aGlzLnBvc1gsIHRoaXMucG9zWSwgU05BS0VfQ09MT1IsIGN0eCwgYm94U2l6ZSlcbiAgICB9XG5cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/snake.js\n");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: drawBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawBox\", function() { return drawBox; });\nfunction drawBox(x, y, color, ctx, boxSize) {\n\tctx.clearRect(x * boxSize, y * boxSize, boxSize, boxSize)\n\tctx.fillStyle = color\n\tctx.fillRect(x * boxSize, y * boxSize, boxSize, boxSize)\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanM/OTk0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZHJhd0JveCh4LCB5LCBjb2xvciwgY3R4LCBib3hTaXplKSB7XG5cdGN0eC5jbGVhclJlY3QoeCAqIGJveFNpemUsIHkgKiBib3hTaXplLCBib3hTaXplLCBib3hTaXplKVxuXHRjdHguZmlsbFN0eWxlID0gY29sb3Jcblx0Y3R4LmZpbGxSZWN0KHggKiBib3hTaXplLCB5ICogYm94U2l6ZSwgYm94U2l6ZSwgYm94U2l6ZSlcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils.js\n");

/***/ })

/******/ });