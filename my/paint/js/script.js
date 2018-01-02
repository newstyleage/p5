
let drawing, slider, p, s;

function setup(){
  pixelDensity(1);
  createCanvas(600, 400)
  drawing = createGraphics(width, height)
  slider = createSlider(0, 255, 100, 1)
  p = createP()
}

function draw(){
 background(51)
 p.html(slider.value())
 noFill();
 ellipse(mouseX, mouseY, 30)
 if(mouseIsPressed){
   drawing.fill(slider.value(), 50);
   drawing.noStroke();
   drawing.ellipse(mouseX, mouseY, 30)
  }
  image(drawing, 0,0)
}
