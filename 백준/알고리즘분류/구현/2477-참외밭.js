const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[k], ...arr] = input.map((el) => el.split(' ').map(Number));
    let max = 0;
    let min = 0;

    let idx = -1;

    for (let i = 0; i < 6; i++) {
      let cur = arr[i][1];
      let next = arr[(i + 1) % 6][1];

      let curRect = cur * next;

      if (curRect > max) {
        max = curRect;
        idx = i;
      }
    }

    min = arr[(idx + 3) % 6][1] * arr[(idx + 4) % 6][1];

    const result = (max - min) * k;
    console.log(result);
  });
