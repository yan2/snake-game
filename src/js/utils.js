export function drawBox(x, y, color, ctx, boxSize) {
    ctx.fillStyle = color
    ctx.fillRect(x*boxSize, y*boxSize, boxSize, boxSize)
}