let a, b, rA, rB, vxA, vyA, vxB, vyB, speed;

function setup() {
  createCanvas(windowWidth - 100, windowHeight - 100);
  a = createVector(random(width), random(height));
  b = createVector(random(width), random(height));
  rA = 10;
  rB = 20;
  speed = 10;
  vxA = (50 - rA) / speed;
  vxB = (50 - rB) / speed;
  vyA = (50 - rA) / speed;
  vyB = (50 - rB) / speed;
}

function draw() {
  background(0);
  stroke(100);
  fill(100);
  textSize(32);
  text(floor(frameRate()), 5, 25);
  strokeWeight(2);
  ellipse(a.x, a.y, rA * 2);
  ellipse(b.x, b.y, rB * 2);
  beginShape();
  vertex(a.x, a.y);
  vertex(b.x, b.y);
  endShape();
  move(a, b);

}

function move(a, b) {

  a.x += vxA;
  a.y += vyA;
  b.x += vxB;
  b.y += vyB;
  if (a.x + rA > width) vxA = -vxA;
  if (a.y + rA > height) vyA = -vyA;
  if (a.x - rA < 0) vxA = -vxA;
  if (a.y - rA < 0) vyA = -vyA;
  if (b.x + rB > width) vxB = -vxB;
  if (b.y + rB > height) vyB = -vyB;
  if (b.x - rB < 0) vxB = -vxB;
  if (b.y - rB < 0) vyB = -vyB;


}