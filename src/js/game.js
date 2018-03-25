import Board from "./board";
import Snake from "./snake";
import Food from "./food";

export default class {
    constructor(rows,cols) {
        this.rows = rows
        this.cols = cols
        this.snake = new Snake('right', 0, 0)
        this.food = new Food(this.rows, this.cols)
        this.points = 0
        this.board = new Board(this.rows, this.cols)

        this.overlay
        this.anim
    }

    setUpGame() {
        // this.board.drawCanvas(this.rows, this.cols);

        const gameMarkup = `
        <div class="game-overlay" style="width:${this.board.canvas.width}px;height:${this.board.canvas.height}px;position:absolute;top:0;display: flex;align-items: center;justify-content: center" >
        <button id="start-game" style="color: #292929;cursor: pointer;outline: none;box-shadow: none;max-width: 50%;background: #E1A9A8;padding: 1em 3em;">Start</button>
        </div>
        `; 

        this.overlay = document.createElement("div");
        this.overlay.innerHTML = gameMarkup
        document.body.appendChild(this.overlay)

        document.getElementById("start-game").addEventListener("click", () => {this.startGame()})
    }

    startGame() {
        this.reset()
        this.overlay.style.display = "none";
        this.gameLoop();

        window.onkeydown = (e) => {
            let keyCodes = {
                37: "left",
                38: "up",
                39: "right",
                40: "down"
            };
            let method = keyCodes[e.keyCode]
            if (method) {
                this.snake.direction = method.toString()
            }
        }
    }

    updateScore() {
        this.points += 1;
    }

    gameLoop() {
        const framesPerSecond = 100
        setTimeout(() => {
            this.anim = requestAnimationFrame(this.gameLoop.bind(this))
            this.snake.move()
            if (this.snake.ateFood(this.food)) {
                this.updateScore();
                new Food(this.board.numCols, this.board.numRows)
            } else if (this.snake.hitBarrier(this.board.numRows, this.board.numCols)) {
                this.endGame();
            } else {
                let temp = this.snake.snakeArr.shift()
                this.board.draw(temp[0], temp[1])
            }
            this.snake.draw(this.board.context, this.board.boxSize)
            this.food.draw(this.board.context, this.board.boxSize)
        }, 5000 / framesPerSecond);
    }

    endGame() {
        cancelAnimationFrame(this.anim)
        this.points = 0
        this.board.reset()
        this.overlay.style.display = "block"
    }

    reset() {
        this.board.reset()
    }

}