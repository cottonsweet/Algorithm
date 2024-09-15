const fs = require("fs");
let a = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = "";
const count = Math.ceil(a / 4);

for (let i = 0; i < count; i++) {
  result += "long ";
}

console.log(result + "int");
