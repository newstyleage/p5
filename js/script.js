var bg, btn;


function setup() {
  canvas = createCanvas(200, 200);
  bg = color(200);
  btn = createButton("go!");
  btn.mousePressed(changeColor);
}

function changeColor(){
  bg = color(random(255));
}

function draw() {
  background(bg);
  fill(255, 0, 100);
  rect(100, 100, 50, 50);
}