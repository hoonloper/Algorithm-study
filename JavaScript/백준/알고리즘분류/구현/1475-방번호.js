const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const room = input[0];
    const check = Array.from({ length: 10 }, () => 0);

    for (let i = 0; i < room.length; i++) {
      check[room[i]]++;
    }
    check[6] = Math.ceil((check[6] + check[9]) / 2);
    check[9] = 0;
    console.log(Math.max(...check));
  });
