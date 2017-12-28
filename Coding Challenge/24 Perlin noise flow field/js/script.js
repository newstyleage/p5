var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];
var flowfield = [];

function setup() {
  createCanvas(800, 600);
  background(255);
  pixelDensity(1); //helps Retina

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  flowfield = new Array(cols * rows);
  for( let i=0; i < 500; i++) {

    particles[i] = new Particle();
  }
}

function draw() {
  // randomSeed(10);
  var yoff = 0;

  for (var y=0; y < rows; y++) {
    var xoff = 0;
  for (var x=0; x < cols; x++) {
      var index = x + y *cols;
      var angle = noise(xoff, yoff, zoff)*TWO_PI*4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      stroke(0, 50);
      // push();
      // translate(x*scl, y*scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
      xoff += inc;
    }
    yoff += inc;
    zoff += 0.0003;

  }
  for (part of particles){
    strokeWeight(4);
    part.follow(flowfield);
    part.edges();
    part.show();
    part.update();
  }

  fr.html(floor(frameRate()));
}