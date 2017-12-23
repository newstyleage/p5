function Particle(x, y) {
  this.x = x;
  this.y = y;

  this.history = [];

  this.update = function() {
    print(this.x);
    print(this.y);
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    let v = createVector(this.x, this.y);
    this.history.push(v);

  }

  this.show = function() {
    stroke(0);
    fill(0, 150);
    ellipse(this.x, this.y, 24, 24);

    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      ellipse(pos.x, pos.y, 4, 4);
    }
  }
}

let particle;

function setup() {
  createCanvas(400, 300);
  particle = new Particle(200, 200);

}
function draw() {
  background(200);
  particle.update();
  particle.show();

}