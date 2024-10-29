let [a] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(a.length);
