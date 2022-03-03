const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  const num = arr.shift();

  for (let i = 0; i < num; i++) {
    const result = {
      O: 0,
      X: 0,
    };
    let sum = 0;
    arr[i].split("").forEach((e) => {
      if (e === "O") {
        sum += 1;
        result[e] += sum;
      } else {
        sum = 0;
      }
    });

    console.log(result["O"]);
  }
}

solution(input);
