const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = Number(input[0]);
    const weights = input[1]
      .split(' ')
      .map(Number)
      .sort((a, b) => b - a);
    const boxCount = Number(input[2]);
    const boxes = input[3]
      .split(' ')
      .map(Number)
      .sort((a, b) => b - a);

    if (Math.max(...boxes) > weights[0]) {
      console.log(-1);
      return;
    }

    let time = 0;

    while (boxes.length) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < boxCount; j++) {
          if (boxes[j] <= weights[i]) {
            boxes.splice(j, 1);
            break;
          }
        }
      }
      time++;
    }

    console.log(time);
  });
