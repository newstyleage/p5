const lines = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 12; i++) {
    lines[i] = new L(i * 50, 0);
  }
  stroke(51);
  strokeWeight(2);
}

function rC() {
  return color(random(255), random(255), random(255));
}

function displayLines(lines) {
  for (l of lines) {
    if (l.x > width) {
      l.x = 0;
      stroke(rC());
    }
    l.show();
    l.x += 1;
  }
}

function draw() {
  background(0, 50);
  displayLines(lines);

}

class L {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    line(this.x, this.y, random(width), random(height / 3,height));
  }
}