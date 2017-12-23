function Particle(x, y) {
  this.x = x;
  this.y = y;

  this.history = [];

  this.update = function() {
    print(this.x);
    print(this.y);
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    let v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length > 50) {
      this.history.splice(0, 1);
    }

  }

  this.show = function() {
    stroke(0);
    fill(0, 150);
    ellipse(this.x, this.y, 24, 24);

    for (let i = 0; i < this.history.length; i++) {
      let pos = this.history[i];
      ellipse(pos.x, pos.y, i/5, i/5);
    }
  }
}

let particles = [];

function setup() {
  createCanvas(400, 300);
  }

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(200);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}