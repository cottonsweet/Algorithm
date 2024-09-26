const fs = require("fs");
let a = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const count = Number(a[0]);

for (let i = 1; i <= count; i++) {
  const numA = a[i].split(" ").map(Number)[0];
  const numB = a[i].split(" ").map(Number)[1];
  console.log(`Case #${i}: ${numA} + ${numB} = ${numA + numB}`);
}
