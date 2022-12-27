const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  const highScore = Math.max(...arr);
  console.log(
    arr.map((e, i) => (e / highScore) * 100).reduce((acc, e) => acc + e) /
      arr.length
  );
}

solution(input[1].split(" ").map((item) => +item));
