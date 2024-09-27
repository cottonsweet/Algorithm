const fs = require("fs");
let a = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const count = Number(a[0]);
let result = "";

for (let i = 0; i < count; i++) {
  result += "*";
  console.log(result);
}
