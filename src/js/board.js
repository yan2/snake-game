import {drawBox} from './utils'

// const BOARD_COLOR = '#FDF5E0'
const BOARD_COLOR = 'rgba(255,255,255,.4)'

export default class {
    constructor(numRows, numCols) {
        this.numRows = numRows
        this.numCols = numCols
        const padding = 50
        const canvasHeight = Math.floor((window.innerHeight - padding) / this.numRows) * this.numRows
        this.boxSize = canvasHeight / this.numRows
        const canvasWidth = this.boxSize * this.numCols

        // create canvas
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas)
        this.canvas.width = canvasWidth
        this.canvas.height = canvasHeight
        this.canvas.setAttribute("style", "border: 6px solid rgba(255,255,255,.65)")
        this.context = this.canvas.getContext('2d')
        this.reset()
    }    

    draw(x, y) {
       drawBox(x, y, BOARD_COLOR, this.context, this.boxSize)
   }

   reset() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.fillStyle = BOARD_COLOR
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
}
}