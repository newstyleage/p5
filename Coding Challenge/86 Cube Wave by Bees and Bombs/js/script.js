let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1 / sqrt(2))
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(0);
  ortho(-400, 400, -400, 400, 0, 800);
  // translate(0, 50, -200);
  rotateX(-QUARTER_PI + 0.3);
  rotateY(ma);
  // rotateX(PI / 4);
  // rotateX(angle/4);
  // translate(width/2, height/2);

  let offset = 0;
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2)
      offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 50, 300));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      // ambientMaterial(250);
      box(w - 2, h, w - 2);
      // rect(x - width/2 + w / 2, 0, w - 2, h);
      pop();
    }
    // offset += 0.1;
  }
  angle -= 0.14;
}