var blob;
var blobs = [];
var zoom = 1;

var spacing = 10
var k = 30
var w = spacing / Math.sqrt(2)
var grid = []
var active = []
var cols
var rows
var food = []

function setup() {
  createCanvas(600, 600);
  strokeWeight(4)
  cols = floor(width / w)
  rows = floor(height / w)

  // step 0
  for (let i = 0; i < cols * rows; i++) {
    grid[i] = undefined
  }

  // step 1
  let x = random(width)
  let y = random(height)
  let i = floor(x / w)
  let j = floor(y / w)
  let pos = createVector(x, y)
  grid[i + j * cols] = pos
  active.push(pos)


  while (active.length > 0) {
    let randIndex = floor(random(active.lenght))
    let pos = active[randIndex]
    let found = false
    for (let n = 0; n < k; n++) {
      let sample = p5.Vector.random2D()
      let m = random(spacing, 2 * r)
      sample.setMag(m)
      sample.add(pos)

      var col = floor(sample.x / w)
      var row = floor(sample.y / w)
      if (col > -1 && row > -1 && col < cols && row < rows && !grid[col + row * cols]) {
        var ok = true
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            var index = (col + i) + (row + j) * cols
            var neighbor = grid[index]
            if (neighbor) {
              var d = p5.Vector.dist(sample, neighbor)
              if (d < spacing) {
                ok = false
              }
            }
          }
        }
        if (ok) {
          found = true
          grid[col + row * cols] = sample
          active.push(sample)
          break
        }
      }
    }

    if (!found) {
      active.splice(randIndex, 1)
    }
  }

  for (g of grid) {
    if (g) {
      food.push(createVector(g.x, g.y))
    }
  }

  blob = new Blob(0, 0, 64);

  for (let i = 0; i < 50; i++) {
    blobs[i] = new Blob(food[i].x, food[i].y, 16);
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);
  for (let i = -height; i <= height; i = i + 50) {
    stroke(100)
    strokeWeight(1)
    line(-width, i, width, i)
  }
  for (let i = -width; i <= width; i = i + 50) {
    stroke(100)
    strokeWeight(1)
    line(i, -height, i, height)
  }

  for (var i = blobs.length - 1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }
  blob.show();
  blob.update();
}