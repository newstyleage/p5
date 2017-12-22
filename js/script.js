let bubble, bubble2;

function setup() {
  createCanvas(600, 400);
  bubble = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 200, 20);
}

function draw() {
  background(0);
  bubble.show();
  bubble.move();
  bubble2.show();
  bubble2.move();

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
    ellipse(this.x, this.y, this.r*2);
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    if(this.x<0 || this.x>width)
      this.x = -this.x;
    if(this.y<0 || this.y>height)
      this.y = -this.y;
  }
}