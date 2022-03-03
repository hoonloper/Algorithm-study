const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  const num = arr.shift();
  const classrooms = arr.map((classroom) =>
    classroom.split(" ").map((num) => +num)
  );
  const avg = {};
  let failStudent = "";

  for (let i = 0; i < num; i++) {
    let count = 0;
    const students = classrooms[i].shift();

    avg[i] =
      (avg[i] || 0) +
      Math.round(
        (classrooms[i].reduce((acc, e) => acc + e) / classrooms[i].length) *
          1000
      ) /
        1000;
    classrooms[i].filter((e) => {
      if (e > avg[i]) {
        count += 1;
      }
    });
    failStudent += `${((count / students) * 100).toFixed(3)}\%\n`;
  }
  console.log(failStudent);
}

solution(input);
