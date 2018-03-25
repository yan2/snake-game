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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/game */ \"./src/js/game.js\");\n\nconst numRows = 50;\nconst numCols = 50;\n\nvar playGame = new _js_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](numRows,numCols);\nplayGame.setUpGame();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9qcy9nYW1lXCI7XG5jb25zdCBudW1Sb3dzID0gNTA7XG5jb25zdCBudW1Db2xzID0gNTA7XG5cbnZhciBwbGF5R2FtZSA9IG5ldyBHYW1lKG51bVJvd3MsbnVtQ29scyk7XG5wbGF5R2FtZS5zZXRVcEdhbWUoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nconst BOARD_COLOR = '#FDF5E0'\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n    constructor(numRows, numCols) {\n        this.numRows = numRows\n        this.numCols = numCols\n        const padding = 50;\n        const canvasHeight = Math.floor((window.innerHeight - padding)/this.numRows)*this.numRows\n        this.boxSize = canvasHeight/this.numRows\n        const canvasWidth = this.boxSize * this.numCols\n\n        // create canvas\n        this.canvas = document.createElement('canvas')\n        document.body.appendChild(this.canvas)\n        this.canvas.width = canvasWidth\n        this.canvas.height = canvasHeight\n        this.canvas.setAttribute(\"style\", \"border: 1px solid black\")\n        this.context = this.canvas.getContext('2d')\n    }    \n\n    draw(x, y) {\n         Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"drawBox\"])(x, y, BOARD_COLOR, this.context, this.boxSize)\n    }\n\n    reset() {\n        this.context.fillStyle = BOARD_COLOR\n        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYm9hcmQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYm9hcmQuanM/MzkwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RyYXdCb3h9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IEJPQVJEX0NPTE9SID0gJyNGREY1RTAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihudW1Sb3dzLCBudW1Db2xzKSB7XG4gICAgICAgIHRoaXMubnVtUm93cyA9IG51bVJvd3NcbiAgICAgICAgdGhpcy5udW1Db2xzID0gbnVtQ29sc1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gNTA7XG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IE1hdGguZmxvb3IoKHdpbmRvdy5pbm5lckhlaWdodCAtIHBhZGRpbmcpL3RoaXMubnVtUm93cykqdGhpcy5udW1Sb3dzXG4gICAgICAgIHRoaXMuYm94U2l6ZSA9IGNhbnZhc0hlaWdodC90aGlzLm51bVJvd3NcbiAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB0aGlzLmJveFNpemUgKiB0aGlzLm51bUNvbHNcblxuICAgICAgICAvLyBjcmVhdGUgY2FudmFzXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcylcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBjYW52YXNXaWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBjYW52YXNIZWlnaHRcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJib3JkZXI6IDFweCBzb2xpZCBibGFja1wiKVxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgfSAgICBcblxuICAgIGRyYXcoeCwgeSkge1xuICAgICAgICAgZHJhd0JveCh4LCB5LCBCT0FSRF9DT0xPUiwgdGhpcy5jb250ZXh0LCB0aGlzLmJveFNpemUpXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBCT0FSRF9DT0xPUlxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/board.js\n");

/***/ }),

/***/ "./src/js/food.js":
/*!************************!*\
  !*** ./src/js/food.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n    constructor(maxX, maxY) {\n        var posX = Math.floor(Math.random()* maxX)\n        var posY = Math.floor(Math.random()* maxY)\n        this.x = posX\n        this.y = posY\n    }\n\n    draw(ctx, boxSize) {\n        drawBox(this.posX, this.posY, ctx, boxSize)\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZm9vZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9mb29kLmpzPzRkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG1heFgsIG1heFkpIHtcbiAgICAgICAgdmFyIHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIG1heFgpXG4gICAgICAgIHZhciBwb3NZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiBtYXhZKVxuICAgICAgICB0aGlzLnggPSBwb3NYXG4gICAgICAgIHRoaXMueSA9IHBvc1lcbiAgICB9XG5cbiAgICBkcmF3KGN0eCwgYm94U2l6ZSkge1xuICAgICAgICBkcmF3Qm94KHRoaXMucG9zWCwgdGhpcy5wb3NZLCBjdHgsIGJveFNpemUpXG4gICAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/food.js\n");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/js/board.js\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ \"./src/js/snake.js\");\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food */ \"./src/js/food.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n    constructor(rows,cols) {\n        this.rows = rows\n        this.cols = cols\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('right', 0, 0)\n        this.food = new _food__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.rows, this.cols)\n        this.points = 0\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.rows, this.cols)\n\n        this.overlay\n        this.anim\n    }\n\n    setUpGame() {\n        // this.board.drawCanvas(this.rows, this.cols);\n\n        const gameMarkup = `\n        <div class=\"game-overlay\" style=\"width:${this.board.canvas.width}px;height:${this.board.canvas.height}px;position:absolute;top:0;display: flex;align-items: center;justify-content: center\" >\n        <button id=\"start-game\" style=\"color: #292929;cursor: pointer;outline: none;box-shadow: none;max-width: 50%;background: #E1A9A8;padding: 1em 3em;\">Start</button>\n        </div>\n        `; \n\n        this.overlay = document.createElement(\"div\");\n        this.overlay.innerHTML = gameMarkup\n        document.body.appendChild(this.overlay)\n\n        document.getElementById(\"start-game\").addEventListener(\"click\", () => {this.startGame()})\n    }\n\n    startGame() {\n        this.reset()\n        this.overlay.style.display = \"none\";\n        this.gameLoop();\n\n        window.onkeydown = (e) => {\n            let keyCodes = {\n                37: \"left\",\n                38: \"up\",\n                39: \"right\",\n                40: \"down\"\n            };\n            let method = keyCodes[e.keyCode]\n            if (method) {\n                this.snake.direction = method.toString()\n            }\n        }\n    }\n\n    updateScore() {\n        this.points += 1;\n    }\n\n    gameLoop() {\n        const framesPerSecond = 100\n        setTimeout(() => {\n            this.anim = requestAnimationFrame(this.gameLoop.bind(this))\n            this.snake.move()\n            if (this.snake.ateFood(this.food)) {\n                this.updateScore();\n                new _food__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.board.numCols, this.board.numRows)\n            } else if (this.snake.hitBarrier(this.board.numRows, this.board.numCols)) {\n                this.endGame();\n            } else {\n                let temp = this.snake.snakeArr.shift()\n                this.board.draw(temp[0], temp[1])\n            }\n            this.snake.draw(this.board.context, this.board.boxSize)\n            this.food.draw(this.board.context, this.board.boxSize)\n        }, 5000 / framesPerSecond);\n    }\n\n    endGame() {\n        cancelAnimationFrame(this.anim)\n        this.points = 0\n        this.board.reset()\n        this.overlay.style.display = \"block\"\n    }\n\n    reset() {\n        this.board.reset()\n    }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZ2FtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgU25ha2UgZnJvbSBcIi4vc25ha2VcIjtcbmltcG9ydCBGb29kIGZyb20gXCIuL2Zvb2RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHJvd3MsY29scykge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzXG4gICAgICAgIHRoaXMuY29scyA9IGNvbHNcbiAgICAgICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSgncmlnaHQnLCAwLCAwKVxuICAgICAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZCh0aGlzLnJvd3MsIHRoaXMuY29scylcbiAgICAgICAgdGhpcy5wb2ludHMgPSAwXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5yb3dzLCB0aGlzLmNvbHMpXG5cbiAgICAgICAgdGhpcy5vdmVybGF5XG4gICAgICAgIHRoaXMuYW5pbVxuICAgIH1cblxuICAgIHNldFVwR2FtZSgpIHtcbiAgICAgICAgLy8gdGhpcy5ib2FyZC5kcmF3Q2FudmFzKHRoaXMucm93cywgdGhpcy5jb2xzKTtcblxuICAgICAgICBjb25zdCBnYW1lTWFya3VwID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVybGF5XCIgc3R5bGU9XCJ3aWR0aDoke3RoaXMuYm9hcmQuY2FudmFzLndpZHRofXB4O2hlaWdodDoke3RoaXMuYm9hcmQuY2FudmFzLmhlaWdodH1weDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXJcIiA+XG4gICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1nYW1lXCIgc3R5bGU9XCJjb2xvcjogIzI5MjkyOTtjdXJzb3I6IHBvaW50ZXI7b3V0bGluZTogbm9uZTtib3gtc2hhZG93OiBub25lO21heC13aWR0aDogNTAlO2JhY2tncm91bmQ6ICNFMUE5QTg7cGFkZGluZzogMWVtIDNlbTtcIj5TdGFydDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDsgXG5cbiAgICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5vdmVybGF5LmlubmVySFRNTCA9IGdhbWVNYXJrdXBcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7dGhpcy5zdGFydEdhbWUoKX0pXG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLnJlc2V0KClcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5nYW1lTG9vcCgpO1xuXG4gICAgICAgIHdpbmRvdy5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGtleUNvZGVzID0ge1xuICAgICAgICAgICAgICAgIDM3OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAzODogXCJ1cFwiLFxuICAgICAgICAgICAgICAgIDM5OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgNDA6IFwiZG93blwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IG1ldGhvZCA9IGtleUNvZGVzW2Uua2V5Q29kZV1cbiAgICAgICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlLmRpcmVjdGlvbiA9IG1ldGhvZC50b1N0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpIHtcbiAgICAgICAgdGhpcy5wb2ludHMgKz0gMTtcbiAgICB9XG5cbiAgICBnYW1lTG9vcCgpIHtcbiAgICAgICAgY29uc3QgZnJhbWVzUGVyU2Vjb25kID0gMTAwXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSlcbiAgICAgICAgICAgIHRoaXMuc25ha2UubW92ZSgpXG4gICAgICAgICAgICBpZiAodGhpcy5zbmFrZS5hdGVGb29kKHRoaXMuZm9vZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgICAgICAgICAgbmV3IEZvb2QodGhpcy5ib2FyZC5udW1Db2xzLCB0aGlzLmJvYXJkLm51bVJvd3MpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc25ha2UuaGl0QmFycmllcih0aGlzLmJvYXJkLm51bVJvd3MsIHRoaXMuYm9hcmQubnVtQ29scykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB0aGlzLnNuYWtlLnNuYWtlQXJyLnNoaWZ0KClcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLmRyYXcodGVtcFswXSwgdGVtcFsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc25ha2UuZHJhdyh0aGlzLmJvYXJkLmNvbnRleHQsIHRoaXMuYm9hcmQuYm94U2l6ZSlcbiAgICAgICAgICAgIHRoaXMuZm9vZC5kcmF3KHRoaXMuYm9hcmQuY29udGV4dCwgdGhpcy5ib2FyZC5ib3hTaXplKVxuICAgICAgICB9LCA1MDAwIC8gZnJhbWVzUGVyU2Vjb25kKTtcbiAgICB9XG5cbiAgICBlbmRHYW1lKCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW0pXG4gICAgICAgIHRoaXMucG9pbnRzID0gMFxuICAgICAgICB0aGlzLmJvYXJkLnJlc2V0KClcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5yZXNldCgpXG4gICAgfVxuXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/game.js\n");

/***/ }),

/***/ "./src/js/snake.js":
/*!*************************!*\
  !*** ./src/js/snake.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nconst SNAKE_COLOR = '#FDF5E0'\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n    constructor(direction, posX, posY)  {\n        this.posX = posX //head x position \n        this.posY = posY //head y position \n        this.snakeArr = [[this.posX, this.posY]] //snake array \n        this.direction = direction\n    }\n\n    // move snake \n    move() {\n        console.log(\"moving\")\n        if (this.direction === 'left') {\n            this.posX -= 1;\n\n        } else if (this.direction === 'right') {\n            this.posX += 1;\n\n        } else if (this.direction === 'up') {\n            this.posY -= 1;\n            \n        } else if (this.direction === 'down') {\n            this.posY += 1;\n        }\n\n        this.snakeArr.push([this.posX, this.posY])\n\n    }\n\n    ateFood(food) {\n        var snakeHead = this.snakeArr[this.snakeArr.length -1]\n        return (\n            snakeHead[0] == food.x && snakeHead[1] == food.y\n            )\n    }\n\n    hitBarrier(rows, cols) {\n        var cell = this.snakeArr[this.snakeArr.length-1]\n        // check if snake head is out of bounds or collided with self\n        if (cell[0] >= cols || cell[0] < 0 ||\n            cell[1] >= rows || cell[1] < 0\n            ) {\n            return true } \n        else {\n            for (let part of this.snakeArr.slice(0, this.snakeArr.length-1)) {\n                if (part[0] == cell[0] && part[1] == cell[1]) {\n                    return true\n                }\n            }\n        }\n        return false\n    }\n\n    draw(ctx, boxSize) {\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"drawBox\"])(this.posX, this.posY, SNAKE_COLOR, ctx, boxSize)\n    }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc25ha2UuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc25ha2UuanM/NzFhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RyYXdCb3h9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IFNOQUtFX0NPTE9SID0gJyNGREY1RTAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHBvc1gsIHBvc1kpICB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1ggLy9oZWFkIHggcG9zaXRpb24gXG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1kgLy9oZWFkIHkgcG9zaXRpb24gXG4gICAgICAgIHRoaXMuc25ha2VBcnIgPSBbW3RoaXMucG9zWCwgdGhpcy5wb3NZXV0gLy9zbmFrZSBhcnJheSBcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25cbiAgICB9XG5cbiAgICAvLyBtb3ZlIHNuYWtlIFxuICAgIG1vdmUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92aW5nXCIpXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1ggLT0gMTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1ggKz0gMTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1kgLT0gMTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWSArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zbmFrZUFyci5wdXNoKFt0aGlzLnBvc1gsIHRoaXMucG9zWV0pXG5cbiAgICB9XG5cbiAgICBhdGVGb29kKGZvb2QpIHtcbiAgICAgICAgdmFyIHNuYWtlSGVhZCA9IHRoaXMuc25ha2VBcnJbdGhpcy5zbmFrZUFyci5sZW5ndGggLTFdXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBzbmFrZUhlYWRbMF0gPT0gZm9vZC54ICYmIHNuYWtlSGVhZFsxXSA9PSBmb29kLnlcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBoaXRCYXJyaWVyKHJvd3MsIGNvbHMpIHtcbiAgICAgICAgdmFyIGNlbGwgPSB0aGlzLnNuYWtlQXJyW3RoaXMuc25ha2VBcnIubGVuZ3RoLTFdXG4gICAgICAgIC8vIGNoZWNrIGlmIHNuYWtlIGhlYWQgaXMgb3V0IG9mIGJvdW5kcyBvciBjb2xsaWRlZCB3aXRoIHNlbGZcbiAgICAgICAgaWYgKGNlbGxbMF0gPj0gY29scyB8fCBjZWxsWzBdIDwgMCB8fFxuICAgICAgICAgICAgY2VsbFsxXSA+PSByb3dzIHx8IGNlbGxbMV0gPCAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgcGFydCBvZiB0aGlzLnNuYWtlQXJyLnNsaWNlKDAsIHRoaXMuc25ha2VBcnIubGVuZ3RoLTEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRbMF0gPT0gY2VsbFswXSAmJiBwYXJ0WzFdID09IGNlbGxbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZHJhdyhjdHgsIGJveFNpemUpIHtcbiAgICAgICAgZHJhd0JveCh0aGlzLnBvc1gsIHRoaXMucG9zWSwgU05BS0VfQ09MT1IsIGN0eCwgYm94U2l6ZSlcbiAgICB9XG5cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/snake.js\n");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: drawBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawBox\", function() { return drawBox; });\nfunction drawBox(x, y, color, ctx, boxSize) {\n    ctx.fillStyle = color\n    ctx.fillRect(x*boxSize, y*boxSize, boxSize, boxSize)\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanM/OTk0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZHJhd0JveCh4LCB5LCBjb2xvciwgY3R4LCBib3hTaXplKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgY3R4LmZpbGxSZWN0KHgqYm94U2l6ZSwgeSpib3hTaXplLCBib3hTaXplLCBib3hTaXplKVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils.js\n");

/***/ })

/******/ });