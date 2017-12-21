
function setup() {
  // put setup code here
  createCanvas(600, 400);
  noCursor();
}

function draw() {
  // put drawing code here
  background(200);

  let shadowX = map(mouseX, 0, width, -30, 30);
  let shadowY = map(mouseY, 0, height, -30, 30);
  drawingContext.shadowOffsetX = shadowX;
  drawingContext.shadowOffsetY = shadowY;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = "rgba(100, 100, 100, 100)";

  ellipse(mouseX, mouseY, 50, 50);
}