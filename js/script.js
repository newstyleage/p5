
function setup() {
  // put setup code here
  createCanvas(600, 400);
  // noCursor();
  background(0);
  strokeWeight(4);
  stroke(200);
  let x = 0;
  while (x <= width) {
    fill(255, 255, x*1.5-250);
    ellipse(x, 100, 25, 25);
    x += 50;
  }
  for (let x1=0; x1<=width; x1+=50){
    fill(255, 255, x1/2);
    ellipse(x1, 300, 25, 25);
  }
}

function draw() {
  // put drawing code here
}