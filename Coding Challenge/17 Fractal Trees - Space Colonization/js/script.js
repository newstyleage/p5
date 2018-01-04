class Leaf {
  constructor() {
    this.pos = createVector(random(width), random(height));

  }
  show() {
    fill(255);
    noStroke();
    ellipse(this.pox.x, this.pos.y, 4, 4)
  }
}

class Tree {
  constructor() {
    this.leaves = []
    for (let i = 0; i < 100; i++) {
      this.leaves.push(new Leaf());
    }
    for (this.l of this.leaves) {
      this.l.show();
    }
  }
}


let tree;
function setup() {
  createCanvas(400, 400);
  tree = new Tree();
}

function draw() {
  background(51);
  tree.show();
}