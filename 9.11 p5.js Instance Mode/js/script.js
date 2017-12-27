
let sketch = function(p) {
  p.x = 100;
  p.y = 100;
  p.setup = function(){
    p.createCanvas(640, 360);
    p.background(51);

  }
  p.draw = function(){
    p.fill(255, 255, 100, 100);
    p.noStroke();
    p.ellipse(p.x, p.y, 48, 48);
    p.x = p.x + p.random(-10, 10);
    p.y = p.y + p.random(-10, 10);

  }
}

let sketch2 = function (p) {
  p.x = 100;
  p.y = 100;
  p.setup = function () {
    p.createCanvas(640, 360);
    p.background(51);

  }
  p.draw = function () {
    p.fill(255, 100, 255, 100);
    p.noStroke();
    p.ellipse(p.x, p.y, 48, 48);
    p.x = p.x + p.random(-10, 10);
    p.y = p.y + p.random(-10, 10);

  }
}

let qwe = new p5(sketch);
let qwe2 = new p5(sketch2);

function resetBackground() {
  qwe.x = qwe.width/2;
  qwe.y = qwe.height/2;
  qwe.background(51);
}

setInterval(resetBackground, 2500);