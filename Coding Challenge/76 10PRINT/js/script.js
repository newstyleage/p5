let x = y = 0,
    s = 15,  //set size
    r = .5;  //set proportions

function setup() {
  createCanvas(600, 400);
  background(25, 53, 74);
  stroke(255, 255, 100);
  strokeWeight(s / 3);

  const array = new Array(floor((width / s) * (height / s) + (height / s * 2)));

  for ( a of array) {
    a=random(1);
    (a > r) ? line(x, y, x+s, y+s) : line(x + s, y, x, y + s);
    x += s;
    if (x > width) {
      x = 0;
      y += s;
    }
  }
}