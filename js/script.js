let ball = {
  x: 300,
  y: 200,
  xSpd: 4,
  ySpd: -3
}

function setup() {
  createCanvas(600, 400);

}
function draw() {
  background(0);
  move();
  bounce();
  display();
}

function move() {
  ball.x += ball.xSpd;
  ball.y += ball.ySpd;
}

function bounce() {
  if (ball.x > width || ball.x <0) {
    ball.xSpd = -ball.xSpd;
  }
  if (ball.y > height || ball.y <0) {
    ball.ySpd = -ball.ySpd;
  }
}

function display() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
}