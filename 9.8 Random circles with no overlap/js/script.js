function setup() {
  createCanvas(640 , 360);

  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = 48;
    fill(255, 255, 100, 100);
    noStroke();
    ellipse(x, y, 2 * r, 2 * r);
  }
}

function draw() {

}