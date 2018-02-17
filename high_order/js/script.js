// c+s+p quokka
let arr = [4, 8, 1, 2, 9]
console.log(arr)

// function doubler(x) {
//   return x*2
// }
// console.log(arr.map(doubler))
console.log(arr.map(x => x * 2))

let rand = Array(10)
console.log(rand.fill().map(Math.random))

// add 10 to sum of elements
console.log(arr.reduce((acc, val) => acc + val, 10))

//min max with reduce
console.log(arr.reduce((acc, val) => {
  if (val > acc) acc = val
  return acc;
}))
console.log(arr.reduce((a, v) => a > v ? a : v))
console.log(arr.reduce((acc, val) => {
  if (val < acc) acc = val
  return acc;
}))
console.log(arr.reduce((a, v) => a < v ? a : v))

// function multiplier(factor) {
//   return  x => x* factor
// }

// let multiplier = factor => x => x*factor

// // function multiplier(factor) {
// //   return function(x) {
// //     return x * factor
// //   }
// // }

// let doubler = multiplier(2);
// let tripler = multiplier(3);

// function sing(callback) {
//   console.log("la la la")
//   if (callback instanceof Function) callback();
// }

// function meow(){
//   console.log("meow meow")
// }






function setup() {}

function draw() {

}