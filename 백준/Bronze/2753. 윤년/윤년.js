const fs = require("fs");
let [num1, num2] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 윤년 4의 배수이면서, 100의 배수가 아니거나 400의 배수일 때
if ((num1 % 4 === 0 && num1 % 100 !== 0) || num1 % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
