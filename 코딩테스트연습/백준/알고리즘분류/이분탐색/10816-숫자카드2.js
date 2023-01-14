const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N], arr1, [M], arr2] = input.map((el) => el.split(' ').map(Number));

    const myMap = new Map();
    arr1.forEach((v) => {
      if (myMap.has(v)) myMap.set(v, myMap.get(v) + 1);
      else myMap.set(v, 1);
    });

    const answer = arr2.map((target) => myMap.get(target) || 0);
    console.log(answer.join(' '));
  });
