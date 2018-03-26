import {drawBox} from './utils'

const FOOD_COLOR = '#B1CC95'
export default class {
	constructor(maxX, maxY) {
		var posX = Math.floor(Math.random() * maxX)
		var posY = Math.floor(Math.random() * maxY)
		this.x = posX
		this.y = posY
	}

	draw(ctx, boxSize) {
		drawBox(this.x, this.y, FOOD_COLOR, ctx, boxSize)
	}
}