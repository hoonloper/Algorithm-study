const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let money = +input[0];
    let count = 0;
    if (money === 1 || money === 3) {
      console.log(-1);
      return;
    }

    while (money > 0) {
      if (money % 2 === 1 || money % 5 === 0) {
        count++;
        money -= 5;
      } else if (money % 2 === 0) {
        count++;
        money -= 2;
      }
    }

    console.log(count);
  });
