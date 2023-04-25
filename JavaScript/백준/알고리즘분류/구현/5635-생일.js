const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [[T], ...arr] = input.map((el) => el.split(' '));

  arr.sort(([n1, d1, m1, y1], [n2, d2, m2, y2]) => {
    if (+y1 === +y2) {
      if (+m1 === +m2) {
        return +d1 - +d2;
      } else {
        return +m1 - +m2;
      }
    } else {
      return +y1 - +y2;
    }
  });
  console.log(arr[arr.length - 1][0]);
  console.log(arr[0][0]);
});
