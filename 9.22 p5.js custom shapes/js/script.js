function setup() {
  createCanvas(480, 360);
  angleMode(DEGREES);
}

function draw() {
  background(51);
  stroke(255, 255, 100);
  noFill();
  beginShape();
  let spacing = map(mouseX, 0, width, 5, 100);
  for (let a = 0 ; a < 360; a +=spacing){
    let x = 100*sin(a)+200;
    let y = 100*cos(a)+200;
    vertex(x,y);
  }

  endShape(CLOSE);
}