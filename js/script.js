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
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
  if (ball.x > width || ball.x <0) {
    ball.xSpd = -ball.xSpd;
  }
  if (ball.y > height || ball.y <0) {
    ball.ySpd = -ball.ySpd;
  }
  ball.x += ball.xSpd;
  ball.y += ball.ySpd;
}