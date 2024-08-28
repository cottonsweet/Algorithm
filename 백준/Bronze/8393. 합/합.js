const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();
input = input.split(" ");

let result = 0;
for (let i = 0; i <= +input; i++) {
  result += i;
}

console.log(result);
