let bubbles = [];

function setup() {
  createCanvas(600, 400);
  // for(i=0;i<10;i++){
  //   let x= random(width);
  //   let y = random(height);
  //   let r = random(20, 40);
  //   bubbles[i] = new Bubble(x, y, r);
  // }
}
function mousePressed() {
  let r = random(10, 30);
  let b = new Bubble(mouseX, mouseY, r)
  bubbles.push(b);
}
function draw() {
  background(0);
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    if (this.x < this.r || this.x > (width -  this.r))
    this.x = -this.x;
    if (this.y < this.r || this.y > (height - this.r))
    this.y = -this.y;

    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
}