var bg, btn, slider, input, nameP;


function setup() {
  canvas = createCanvas(200, 200);
  bg = color(200);
  nameP = createP("Your name");
  nameP.mouseOver(overPara);
  nameP.mouseOut(outPara);
  btn = createButton("go!");
  btn.mousePressed(changeColor);

  slider = createSlider(10, 100, 47);
  input = createInput('type your name');
  input.changed(updateText);
}

function changeColor(){
  bg = color(random(255));
}

function overPara(){
  nameP.html('your mouse is over me')
}

function outPara(){

  nameP.html('your mouse is OUT')
}

function updateText(){
  nameP.html(input.value());
}

function draw() {
  background(bg);
  fill(255, 0, 100);
  ellipse(100, 100, slider.value(), slider.value());
  //nameP.html(input.value());
  text(input.value(), 10, 20);
}