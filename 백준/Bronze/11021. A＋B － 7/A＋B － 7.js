const fs = require("fs");
let a = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const count = Number(a[0]);

for (let i = 1; i <= count; i++) {
  console.log(
    `Case #${i}: ${
      a[i].split(" ").map(Number)[0] + a[i].split(" ").map(Number)[1]
    }`
  );
}
