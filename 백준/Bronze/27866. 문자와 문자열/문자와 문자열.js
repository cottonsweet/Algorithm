let [a, b] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const text = a;
console.log(text[b - 1]);
