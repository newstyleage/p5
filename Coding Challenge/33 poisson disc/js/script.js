var r = 10
var k = 30
var w = r / Math.sqrt(2)
var grid = []
var active = []
var cols
var rows

function setup() {
  createCanvas(400, 400)
  background(0)
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

}

function draw() {

  background(0)
  noLoop()
  //setp 2
  while (active.length > 0) {
    let randIndex = floor(random(active.lenght))
    let pos = active[randIndex]
    let found = false
    for (let n = 0; n < k; n++) {
      let sample = p5.Vector.random2D()
      let m = random(r, 2 * r)
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
              if (d < r) {
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
      stroke(255)
      strokeWeight(4)
      point(g.x, g.y)
    }
  }
  for (a of active) {
    stroke(255, 255, 100)
    strokeWeight(4)
    point(a.x, a.y)
  }
}