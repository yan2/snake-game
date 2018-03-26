export function drawBox(x, y, color, ctx, boxSize) {
	ctx.clearRect(x * boxSize, y * boxSize, boxSize, boxSize)
	ctx.fillStyle = color
	ctx.fillRect(x * boxSize, y * boxSize, boxSize, boxSize)
}