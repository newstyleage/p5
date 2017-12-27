var particles = [];

function setup() {
  createCanvas(640, 360);
  particles[0] = new Particle();
  particles[1] = new Particle(200,200);
  var v = createVector(150, 150);
  particles[2] = new Particle(v);
  particles[3] = new Particle("250,250");
}

function draw() {
  background(0);
  for (i=0;i<particles.length;i++){
    particles[i].show();
  }
}

function Particle(a, b){
  if (a instanceof p5.Vector) {
    this.x = a.x;
    this.y = a.y;
  } else
      if(typeof(a) === "string"){
        let nums = a.split(",");
        this.x = Number(nums[0]);
        this.y = Number(nums[1]);
    } else {
    this.x = a || 100;
    this.y = b || 100;
  }

  this.pos = createVector(width/2, height/2);
  this.show = function() {
    fill(255, 255, 100);
    ellipse(this.x, this.y, 16, 16);
  }
}

// function sumOfTwo(a=0, b=0) {
//   return a+b
// }

// function sum(a) {
//   let val = 0;
//   if (a instanceof Array) {
//     for (elm of a){
//       val += elm;
//     }
//     return val;
//   }
//   for (i=0; i< arguments.length; i++)
//    val += arguments[i]
//   return val;
// }

