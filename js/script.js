var canvas;
var h1;

function setup() {
  canvas = createCanvas(200, 200);
  canvas.position(400, 100);
  h1 = createElement('h1', 'Waiting...');
  //h1.position(400, 100);
}

function mousePressed() {
  h1.html("Now I'll show you my fav nums!")
  createP('May fav number is ' + random(0, 10));
}

function draw() {
  //clear();
  background(200);
  fill(255, 0, 100);
  rect(100, 100, 50, 50);
}