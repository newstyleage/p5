let vertices = [];

function setup() {
  createCanvas(640, 360);

  for (let i = 0; i < 20; i++) {
    var v = createVector(random(width), random(height));
    vertices.push(v);
  }
}

function mousePressed() {
  let v = createVector(mouseX, mouseY);
  vertices.push(v);
}

function draw() {
  background(51);
  let reached = [];
  let unreached = [];
  for (let i = 0;i < vertices.length; i++) {
    unreached.push(vertices[i]);
  }

  reached.push(unreached[0]);
  unreached.splice(0,1);

  while (unreached.length > 0) {
    let record = 100000;
    let rIndex;
    let uIndex;
    for (let i=0; i < reached.length; i++) {
      
      for (let j = 0; j < unreached.length; j++){
        let v1 = reached[i];
        let v2 = unreached[j];
        let d = dist(v1.x, v1.y, v2.x, v2.y);

        if (d < record) {
          record = d;
          rIndex = i;
          uIndex = j;
        }
      }
    }
    stroke(255, 255, 200);
    strokeWeight(2);
    line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);

    reached.push(unreached[uIndex]);
    unreached.splice(uIndex,1);


  }

  for (let i = 0; i < vertices.length; i++) {
    fill(255, 255, 100);
    stroke(255, 255, 200);
    ellipse(vertices[i].x, vertices[i].y, 16, 16);
  }
}