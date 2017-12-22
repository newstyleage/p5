const nums = [100, 25, 46, 72];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  fill(111);
  for(i=0;i<nums.length;i++)
    ellipse(100*i+100, 200, nums[i]);
}
