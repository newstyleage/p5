let graphics

function setup() {
  pixelDensity(1)
  createCanvas(400, 300);
  graphics = createGraphics(400, 300)
  graphics.background(51);

}

function draw() {
  if (mouseIsPressed) {
    graphics.fill(255, 255, 100)
    graphics.stroke(255, 255, 100)
    graphics.ellipse(mouseX, mouseY, 64)
  }

  image(graphics, 0, 0)

  noFill()
  ellipse(mouseX, mouseY, 64)

}