let ball = {
  x: 300,
  y: 200,
  xSpd: 2,
  ySpd: -4
}

function setup() {
  createCanvas(800, 500);

}
function draw() {
  background(0);
  drawRobot(120, 30, 110, 140);
  drawRobot(270, 60, 260, 95);
  drawRobot(420, 120, 80, 30);
  drawRobot(570, 90, 180, 50);
}

function drawRobot(x, y, b, n) {
  fill(255, 255, 200);
  rect(x, y, 10, n);
  fill(255, 200, 40);
  ellipse(x+5, y, 40, 40);
  fill(255, 200, 0);
  ellipse(x, y-10, 10, 10);
  ellipse(x+10, y-10, 10, 10);

  stroke(255, 255, 200);
 strokeWeight(10);
  line(x-9,y+n+10, x-59, y+n+50);
  line(x-9,y+n+b, x-99, y+n+b+50);
  line(x+19,y+n+10, x+59, y+n+50);
  line(x+19,y+n+b, x+99, y+n+b+50);
  strokeWeight(1);
  fill(255, 255, 12);
  rect(x-9, y+n, 30, b);
}