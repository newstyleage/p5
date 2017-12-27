let circles = [];

function setup() {
  createCanvas(640 , 360);
  let protection = 0;
  while (circles.length < 500){
    //for (let i = 0; i < 25; i++) {

      let circle = {
        x: random(width),
        y: random(height),
        r: random(5, 32)
      }
      let overlapping = false;

    for (j=0; j<circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
        break;
      }
    }
    if (!overlapping){
      circles.push(circle);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
    for (let i = 0; i < circles.length; i++) {
    fill(255, 255, 100, 100);
      noStroke();
      ellipse(circles[i].x, circles[i].y, 2 * circles[i].r, 2 * circles[i].r);
    }
}

function draw() {

}