let a = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let answer = "";
let blank = "";

for (i = 1; i <= a; i++) {
  answer += "*";
  for (let j = 0; j < a - i; j++) {
    blank += " ";
  }
  console.log(blank + answer);
  blank = "";
}
