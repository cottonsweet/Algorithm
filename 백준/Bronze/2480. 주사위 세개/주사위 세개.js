const fs = require("fs");
let [a, b, c] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (a === b && b === c) {
  console.log(a * 1000 + 10000);
} else if (a === b || a === c) {
  console.log(a * 100 + 1000);
} else if (b === c) {
  console.log(b * 100 + 1000);
} else {
  let max = Math.max(...[a, b, c]);
  console.log(max * 100);
}
