let a = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

for (let i = 0; i < a.length; i++) {
  const num = a[i].split(" ").map(Number);
  console.log(num[0] + num[1]);
}
