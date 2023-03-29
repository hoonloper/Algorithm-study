const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [t, ...arr] = input;
    let answer = '';
    for (let i = 0; i < +t * 3; i += 3) {
      const commands = arr[i];
      const n = +arr[i + 1];
      const nums = arr[i + 2].slice(1, -1).split(',');
      let isReverse = false;
      let flag = true;
      for (const c of commands) {
        if (c === 'R') {
          isReverse = !isReverse;
        } else {
          if (n === 0) {
            answer += 'error\n';
            flag = !flag;
            break;
          }
          if (!nums.length) {
            answer += 'error\n';
            flag = !flag;
            break;
          }
          if (isReverse) nums.pop();
          else nums.shift();
        }
      }
      if (isReverse) {
        nums.reverse();
      }
      if (flag) {
        answer += '[' + nums.join(',') + ']' + '\n';
      }
    }
    console.log(answer);
  });
