let grid, cols, rows;
let w = 20;
let totalMines = 10;

function make2DArray(c, r) {
  let arr = new Array(c);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(r);
  }
  return arr;
}

function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.neighbourCount;
  this.bee = false;
  this.rev = false;
}

Cell.prototype.show = function () {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
  if (this.rev) {
    if (this.bee) {
      fill(255, 0, 0);
      ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
    } else {
      fill(127);
      rect(this.x, this.y, this.w, this.w);
      if (this.neighbourCount > 0) {
        textAlign(CENTER);
        fill(0);
        text(this.neighbourCount, this.x + this.w * 0.5, this.y + this.w - 5);
      }
    }
  }
}

Cell.prototype.countNeighbors = function () {
  let total = 0;
  if (this.bee) {
    this.neighbourCount = -1;
    return;
  }

  for (let xoff = -1; xoff <= 1; xoff++) {
    for (let yoff = -1; yoff <= 1; yoff++) {
      let i = this.i + xoff;
      let j = this.j + yoff;
      if (i > -1 && i < cols && j > -1 && j < rows) {
        if (grid[i][j].bee) total++
      }
    }
  }
  this.neighbourCount = total;
}

Cell.prototype.contains = function (x, y) {
  return (x > this.x && x < this.x + this.w &&
    y > this.y && y < this.y + this.w)
}

Cell.prototype.reveal = function () {
  this.rev = true;
  if (this.neighbourCount == 0) {
    this.floodFill();
  }
}

Cell.prototype.floodFill = function () {
  for (let xoff = -1; xoff <= 1; xoff++) {
    for (let yoff = -1; yoff <= 1; yoff++) {
      let i = this.i + xoff;
      let j = this.j + yoff;
      if (i > -1 && i < cols && j > -1 && j < rows) {
        let neighbor = grid[i][j];
        if (!neighbor.bee && !neighbor.rev) {
          neighbor.reveal();
        }
      }
    }
  }
}
function setup() {
  createCanvas(201, 201);
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }
  let options = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      options.push([i, j]);
    }
  }

  for (let n = 0; n < totalMines; n++) {
    let idx = floor(random(options.length));
    let choice = options[idx];
    let i = choice[0];
    let j = choice[1];
    options.splice(idx, 1);
    grid[i][j].bee = true;
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].countNeighbors();
    }
  }
}

function gameOver() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].rev = true;
    }
  }
}

function mousePressed() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].reveal();
        if (grid[i][j].bee) {
          gameOver();
        }
      }
    }
  }
}

function draw() {
  background(255, 200, 0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}