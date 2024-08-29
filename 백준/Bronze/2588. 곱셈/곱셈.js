const fs = require("fs");
let [num1, num2] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(num1 * (num2 % 10));
console.log(num1 * Math.floor((num2 % 100) / 10));
console.log(num1 * Math.floor(num2 / 100));
console.log(num1 * num2);
