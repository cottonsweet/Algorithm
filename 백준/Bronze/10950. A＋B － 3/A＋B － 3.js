const fs = require("fs");
let a = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const count = a[0];

for (let i = 1; i <= count; i++) {
  const num = a[i].split(" ").map(Number);
  console.log(num[0] + num[1]);
}
