let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 30);
    let b = new Bubble(x, y, r)
    bubbles.push(b);
    // bubble1 = new Bubble(200, 200);
    // bubble2 = new Bubble(400, 200, 80);
  }
}

// function mousePressed() {
//   for (let i = bubbles.length-1; i>= 0; i--) {
//       if(bubbles[i].contains(mouseX, mouseY)){
//         bubbles.splice(i, 1);
//       }
//   }
// }

// function mousePressed() {
//   let r = random(10, 30);
//   let b = new Bubble(mouseX, mouseY, r)
//   bubbles.push(b);
// }
function draw() {
  background(0);

  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;}
       if (overlapping) {
        b.changerBrightness(255);
      } else {
        b.changerBrightness(0);
      }
    }
  }
  // if (bubble1.intersects(bubble2)) {
  //   background(200, 0, 100);
  //     // }
  // bubble1.show();
  // bubble1.move();
  // bubble2.show();
  // // bubble2.move();
  // bubble2.x = mouseX;
  // bubble2.y = mouseY;

}

class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.bri = 0;
    this.stroke = 255;
  }
  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y)
    return (d < this.r + other.r);
  }
  show() {
    stroke(this.stroke);
    strokeWeight(4);
    fill(this.bri, 100);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    if (this.x < this.r || this.x > (width - this.r))
      this.x = -this.x;
    if (this.y < this.r || this.y > (height - this.r))
      this.y = -this.y;

    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  // clicked(x, y){
  //   let d = dist(x, y, this.x, this.y)
  //   if(d < this.r) {
  //     this.bri = 255;
  //   }
  // }
  changerBrightness(bri) {
    this.bri = bri;
  }
  // contains(x, y) {
  //   let d = dist(x, y, this.x, this.y)
  //   if (d < this.r) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}