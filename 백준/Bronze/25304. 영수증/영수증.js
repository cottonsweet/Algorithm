const fs = require("fs");
let a = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const maxMoney = Number(a[0]);
const num = Number(a[1]);
const count = num + 1;
let result = 0;

for (let i = 2; i <= count; i++) {
  result += a[i].split(" ")[0] * a[i].split(" ")[1];
}

if (maxMoney === result) {
  console.log("Yes");
} else {
  console.log("No");
}
