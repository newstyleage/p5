const gravity = 0.1;

function Particle(x, y) {
  this.x = x;
  this.y = y;

  this.ySpeed = 0;

  this.update = function() {
    this.y += this.ySpeed;
    this.ySpeed += gravity;

    if (this.y > height) {
      this.y = height;
      this.ySpeed *= -0.9;
    }
  }

  this.show = function() {
    stroke(0);
    fill(0, 150);
    ellipse(this.x, this.y, 24, 24);
  }
}

let particle;

function setup() {
  createCanvas(400, 300);
  particle = new Particle(100, 100);

}
function draw() {
  background(200);
  particle.update();
  particle.show();
}