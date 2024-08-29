const fs = require("fs");
let [num1, num2] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (num1 > num2) {
  console.log(">");
} else if (num1 < num2) {
  console.log("<");
} else if (num1 === num2) {
  console.log("==");
}
