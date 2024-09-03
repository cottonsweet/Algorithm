const fs = require("fs");
let [num1, num2] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

if (num1 > 0 && num2 > 0) {
  console.log(1);
} else if (num1 < 0 && num2 > 0) {
  console.log(2);
} else if (num1 < 0 && num2 < 0) {
  console.log(3);
} else {
  console.log(4);
}
