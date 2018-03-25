import {drawBox} from './utils'

const SNAKE_COLOR = '#FDF5E0'

export default class {
    constructor(direction, posX, posY)  {
        this.posX = posX //head x position 
        this.posY = posY //head y position 
        this.snakeArr = [[this.posX, this.posY]] //snake array 
        this.direction = direction
    }

    // move snake 
    move() {
        console.log("moving")
        if (this.direction === 'left') {
            this.posX -= 1;

        } else if (this.direction === 'right') {
            this.posX += 1;

        } else if (this.direction === 'up') {
            this.posY -= 1;
            
        } else if (this.direction === 'down') {
            this.posY += 1;
        }

        this.snakeArr.push([this.posX, this.posY])

    }

    ateFood(food) {
        var snakeHead = this.snakeArr[this.snakeArr.length -1]
        return (
            snakeHead[0] == food.x && snakeHead[1] == food.y
            )
    }

    hitBarrier(rows, cols) {
        var cell = this.snakeArr[this.snakeArr.length-1]
        // check if snake head is out of bounds or collided with self
        if (cell[0] >= cols || cell[0] < 0 ||
            cell[1] >= rows || cell[1] < 0
            ) {
            return true } 
        else {
            for (let part of this.snakeArr.slice(0, this.snakeArr.length-1)) {
                if (part[0] == cell[0] && part[1] == cell[1]) {
                    return true
                }
            }
        }
        return false
    }

    draw(ctx, boxSize) {
        drawBox(this.posX, this.posY, SNAKE_COLOR, ctx, boxSize)
    }

}