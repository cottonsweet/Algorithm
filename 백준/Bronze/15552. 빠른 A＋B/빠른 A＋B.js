const fs = require("fs");
let a = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const count = Number(a[0]);

let result = "";

for (let i = 1; i <= count; i++) {
  result += `${
    a[i].split(" ").map(Number)[0] + a[i].split(" ").map(Number)[1]
  } \n`;
}

console.log(result);
