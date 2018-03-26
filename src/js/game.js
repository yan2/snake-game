import Board from "./board";
import Snake from "./snake";
import Food from "./food";

const FPS = 100
const SCORE_INCREASE = 1

export default class {
    constructor(rows,cols) {
        this.rows = rows
        this.cols = cols
        this.board = new Board(this.rows, this.cols)
        this.overlay = document.getElementById('overlay')
        this.snake
        this.food 
        this.score = 0
        this.anim

        document.getElementById("start").addEventListener("click", () => {this.startGame()})
        document.getElementById("message").innerHTML = "Use the keyboard arrow keys to move the snake to eat food!"
    }
    startGame() {
        this.reset()
        this.snake = new Snake('right', 0, 0)
        this.food = new Food(this.rows, this.cols)
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

    updateScore(score) {
        this.score += score;
        document.getElementById("score").innerHTML = this.score
    }

    resetScore() {
        this.score = 0
        document.getElementById("score").innerHTML = this.score
    }

    gameLoop() {
        const framesPerSecond = FPS
        setTimeout(() => {
            this.anim = requestAnimationFrame(this.gameLoop.bind(this))
            this.snake.move()
            if (this.snake.hitBarrier(this.board.numRows, this.board.numCols)) {
                this.endGame()
                return
            } else if (this.snake.ateFood(this.food)) {
                this.updateScore(SCORE_INCREASE);
                this.food = new Food(this.board.numCols, this.board.numRows)
            } else {
                let temp = this.snake.snakeArr.shift()
                this.board.draw(temp[0], temp[1])
            }
            this.snake.draw(this.board.context, this.board.boxSize)
            this.food.draw(this.board.context, this.board.boxSize)
        }, 5000 / framesPerSecond)
    }

    endGame() {
        cancelAnimationFrame(this.anim)
        this.board.reset()
        document.getElementById("message").innerHTML = "Game over! Your final score is " + this.score
        this.overlay.style.display = "flex"
    }

    reset() {
        this.resetScore()
        this.board.reset()
    }

}