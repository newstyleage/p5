let tree = [];
let leaves = [];
let counter = 0;

function setup() {
  createCanvas(400, 400);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - 100);
  let root = new Branch(a, b);
  tree[0] = root;

}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
    counter++
    print(counter);
    if(counter ===6) {
      for (b of tree) {
        if (b.finished) {
          let leaf = b.end.copy();
          leaves.push(leaf);
        }
    }
  }
}

function draw() {
  background(0);
  noFill();
  for (b of tree) {
    b.show();
    //b.jitter();
  }
  for (l of leaves) {
    fill(255, 255, 100);
    ellipse(l.x, l.y, 8, 8);
  }
}