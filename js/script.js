let color = "red";
let words = ['kot', 'pies', 'zima', 'śnieg', 'góry'];
const colors = ['aqua', 'blue', 'fuchsia', 'gray', 'green',
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
'silver', 'teal', 'white', 'yellow'];
let idx = 0;
function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);
  fill(color);
  textSize(32);
  text(words[idx], 12, 200);
}

function mousePressed() {
  color=random(colors);
  idx++;
  if(idx == words.length){
    idx = 0;
  }
}