let n = 0;
let c = 4;

function setup() {
  createCanvas(400, 400);
  background(0);
  
  angleMode(DEGREES);
  colorMode(HSB);
  
}

function draw() {
  let a = n * 137.5; //try 137.3 or 137.6 [137.5]
  let r = c * sqrt(n);
  let x = r * cos(a) + width / 2;
  let y = r * sin(a) + height / 2;
  fill((a-r) % 256, 255, 255);  // try n or a a-r
  noStroke();
  ellipse(x, y, 4);
  n++;
}