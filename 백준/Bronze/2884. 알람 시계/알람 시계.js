const fs = require("fs");
let [num1, num2] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 45분 전
// m > 60
if (num1 > 0 && num2 < 45) {
  console.log(num1 - 1, num2 + 60 - 45);
} else if (num1 < 1 && num2 < 45) {
  console.log(num1 + 23, num2 + 60 - 45);
} else {
  console.log(num1, num2 - 45);
}
