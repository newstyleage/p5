let arr = []
let cols = 10;
let rows = 10;
function setup () {
  createCanvas(480, 360);
  for (let i = 0; i < cols; i++) {
    arr[i] = [];
      for (let j = 0; j < rows; j++) {
        arr[i][j] = random(255);
  }
}
  console.table(arr);
}

function draw(){
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i*30;
      let y = j*30;

      fill(255, 255, arr[i][j]);
      noStroke;
      rect(x, y, 30, 30);
    }
  }

}