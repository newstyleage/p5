let graphics
let x = 50
let y = 50
let angle = 0

function setup() {
  pixelDensity(1)
  createCanvas(400, 300);
  graphics = createGraphics(100, 100)
  // graphics.background(51);

}

function draw() {
  background(0)
  graphics.fill(255, 255, 100)
  graphics.stroke(255, 255, 100)
  graphics.ellipse(x, y, 10)
  x += random(-5, 5)
  y += random(-5, 5)

  imageMode(CENTER)
  image(graphics, mouseX, mouseY)

  push()
  translate(200, 200)
  tint(0, 255, 0)
  rotate(angle)
  image(graphics, 0, 0)
pop()

angle +=0.1

}