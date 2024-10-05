let a = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const count = a[0].split(" ").map(Number);
const highNumber = count[1];
const data = a[1].split(" ");
let result = "";

for (let i = 0; i < count[0]; i++) {
  if (highNumber > data[i]) {
    result += `${data[i]} `;
  }
}

console.log(result);
