let blob
let blobs = []
let zoom = 1

function restoreFood(){
  let n = new Blob(random(-width, width), random(-height, height), 16)
  blobs.push(n)
}

function setup() {
  createCanvas(600, 600)
  strokeWeight(4)
  fill(random(255), random(255), random(255))

  blob = new Blob(0, 0, 64)

  for (let i = 0; i < 50; i++) {
    blobs[i] = new Blob(random(-width, width), random(-height, height), 16)
  }
}

function draw() {
  print(blob.r)
  background(0);
  translate(width / 2, height / 2)
  var newzoom = 64 / blob.r
  zoom = lerp(zoom, newzoom, 0.1)
  scale(zoom)
  translate(-blob.pos.x, -blob.pos.y)
  for (let i = -height*2; i <= height*2; i = i + 50) {
    stroke(100)
    strokeWeight(1)
    line(-width*2, i, width*2, i)
  }
  for (let i = -width*2; i <= width*2; i = i + 50) {
    stroke(100)
    strokeWeight(1)
    line(i, -height*2, i, height*2)
  }

  for (var i = blobs.length - 1; i >= 0; i--) {


    blobs[i].show()
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1)
      setTimeout(restoreFood, 200)
    }
  }

  blob.show()
  blob.update()
}