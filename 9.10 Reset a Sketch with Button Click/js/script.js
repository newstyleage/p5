let flock;

function setup() {
  createCanvas(640, 360);
  resetSketch();
  const btn = createButton('reset');
  btn.mousePressed(resetSketch);
}

function resetSketch() {
  flock = new Flock();
  for (let i = 0; i < 100; i++) {
    let b = new Boid(width / 2, height / 2);
    flock.addBoid(b);
  }
}

function draw() {
  background(55);
  flock.run();
}