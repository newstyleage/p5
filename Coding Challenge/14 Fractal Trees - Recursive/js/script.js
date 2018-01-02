let angle = 0;
let slider;


function setup(){
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw(){
  background(0);
  stroke(255);
  noFill();
  angle = slider.value();
  translate(200, height);
  let len = 100;
  drawBranch(len);
}

function drawBranch(l){
  line(0, 0, 0, -l)
  translate(0, -l)
  if (l >4) {
    push();
    rotate(angle)
    drawBranch(l*.67);
    pop();
    push();
    rotate(-angle)
    drawBranch(l*.67);
    pop();
  }
 }

