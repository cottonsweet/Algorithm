const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split(" ");

for (let i = 1; i <= +input; i++) {
  console.log(i);
}
