const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const arr = input.map((el) => el.split(' '));
    const scores = {
      'A+': 4.5,
      A0: 4.0,
      'B+': 3.5,
      B0: 3.0,
      'C+': 2.5,
      C0: 2.0,
      'D+': 1.5,
      D0: 1.0,
      F: 0.0,
    };

    const sum = arr.reduce(
      (acc, cur) => ('P' === cur[2] ? acc : acc + +cur[1]),
      0
    );
    const score = arr.reduce((acc, cur) => {
      if ('P' === cur[2]) {
        return acc;
      }
      return acc + scores[cur[2]] * +cur[1];
    }, 0);
    console.log((score / sum).toFixed(6));
  });
