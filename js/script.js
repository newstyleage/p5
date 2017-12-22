var bg, btn, slider, input, nameP;


function setup() {
  canvas = createCanvas(200, 200);
  bg = color(200);
  nameP = createP("Your name");
  btn = createButton("go!");
  btn.mousePressed(changeColor);

  slider = createSlider(10, 100, 47);
  input = createInput('type your name');
}

function changeColor(){
  bg = color(random(255));
}

function draw() {
  background(bg);
  fill(255, 0, 100);
  ellipse(100, 100, slider.value(), slider.value());
  nameP.html(input.value());
  text(input.value(), 10, 20);
}