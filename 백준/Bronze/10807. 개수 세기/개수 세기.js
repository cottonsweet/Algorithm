let a = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const count = Number(a[0]);
const arrLength = a[1].split(" ").map(Number);
const catNumber = Number(a[2]);

let result = 0;

for (let i = 0; i < arrLength.length; i++) {
  if (arrLength[i] === catNumber) {
    result++;
  }
}

console.log(result);
