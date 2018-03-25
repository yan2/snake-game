export default class {
    constructor(maxX, maxY) {
        var posX = Math.floor(Math.random()* maxX)
        var posY = Math.floor(Math.random()* maxY)
        this.x = posX
        this.y = posY
    }

    draw(ctx, boxSize) {
        drawBox(this.posX, this.posY, ctx, boxSize)
    }
}