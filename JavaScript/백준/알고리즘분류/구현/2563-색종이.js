const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[t], ...arr] = input.map((el) => el.split(' ').map(Number));
    const board = new Array(100).fill().map((el) => new Array(100).fill(false));
    for (let i = 0; i < t; i++) {
      const [x, y] = arr.shift();

      for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
          board[x + j][y + k] = true;
        }
      }
    }

    const result = board.reduce((past, curr) => {
      for (let el of curr) {
        if (el) past++;
      }
      return past;
    }, 0);

    console.log(result);
  });
