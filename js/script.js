
function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(255);

  for (let x=0; x<=width; x+=15){
    for ( let y=0; y<=height; y+=15){

      fill(x-100, 255, y-100);
      ellipse(x, y, 10, 10);
    }
  }
}

function draw() {
  // put drawing code here
}