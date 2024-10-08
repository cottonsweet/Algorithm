let a = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let maxNumber = 0;
let count = 0;

for (let i = 0; i < a.length; i++) {
  if (maxNumber < a[i]) {
    maxNumber = a[i];
    count = i + 1;
  }
}

console.log(maxNumber);
console.log(count);
