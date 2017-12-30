function setup() {
  createCanvas(480, 360);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  stroke(255, 255, 100);
  noFill();
  strokeWeight(4);
  point(mouseX, mouseY);
  point(150, 50);
  point(250, 60);
  point(300, 200);
  strokeWeight(1);
  beginShape();

    curveVertex(mouseX,mouseY);
    curveVertex(150,50);
    curveVertex(250,60);
    curveVertex(300,200);

  endShape(CLOSE);
}