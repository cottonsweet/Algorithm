const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split(" ");

console.log(Number(input[0]) * Number(input[1]));
