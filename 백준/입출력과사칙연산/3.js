const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  console.log(`\\    /\\
 )  ( ')
(  /  )
 \\(__)|`);
}

console.log(solution());
