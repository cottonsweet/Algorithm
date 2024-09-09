const fs = require("fs");
let [num1] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = 1; i <= 9; i++) {
  console.log(`${num1} * ${i} = ${num1 * i}`);
}
