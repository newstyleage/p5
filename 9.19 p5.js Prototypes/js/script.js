function Particle() {
  this.x = 100;
  this.y = 99;

}

Particle.prototype.show = function () {
  point(this.x, this.y);
}
var p, p1;
function setup() {
  createCanvas(640, 360);
  p = new Particle();
  p1 = new Particle();

}

function draw() {
  background(51);

}