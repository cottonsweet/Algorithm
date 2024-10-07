let a = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const count = a[0].split(" ").map(Number)[0];
const data = a[1].split(" ").map(Number);
let maxNumber = Number.MAX_SAFE_INTEGER;
let minNumber = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < count; i++) {
  if (maxNumber > data[i]) {
    maxNumber = data[i];
  }
}

for (let i = 0; i < count; i++) {
  if (minNumber < data[i]) {
    minNumber = data[i];
  }
}

console.log(maxNumber, minNumber);
