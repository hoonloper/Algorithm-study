const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[T], ...arr] = input.map((el) => el.split(' ').map(Number));
    let answer = '';
    for (let i = 1; i < arr.length; i += 2) {
      let index = arr[i - 1][1];
      const docs = arr[i];
      let count = 0;

      while (true) {
        const max = Math.max(...docs);
        const value = docs.shift();
        if (value === max) {
          count++;
          if (index === 0) {
            answer += count + '\n';
            break;
          }
        } else {
          docs.push(value);
        }
        if (index === 0) {
          index = docs.length - 1;
        } else {
          index--;
        }
      }
    }
    console.log(answer);
  });
