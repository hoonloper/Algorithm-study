const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let X = +input[0];
    let line = 0;

    while (X > 0) {
      line++;
      X -= line;
    }

    const arr = [];

    for (let i = 0; i < line; i++) {
      arr.push([i + 1, line - i]);
    }

    if (line % 2 === 0) {
      console.log(`${arr[line - 1 + X][0]}/${arr[line - 1 + X][1]}`);
    } else {
      console.log(`${arr[line - 1 + X][1]}/${arr[line - 1 + X][0]}`);
    }
  });
