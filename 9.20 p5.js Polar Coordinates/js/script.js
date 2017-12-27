

function setup() {
  createCanvas(640, 360);
  angleMode(DEGREES);
}


function draw() {
  background(51);
  var x = 200;
  var y = 200;
  stroke(255, 255, 100);
  strokeWeight(8);
  point(x, y);

  var angle = map(mouseX, 0, width,-90, 90);

  var r = 100;
  var dx = r * cos(angle);
  var dy = r * sin(angle);

  point(x+dx, y+dy);

  line(x, y, x+dx, y+dy);
}