const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input.shift();
    const arr = input.map((v) => v.split(' '));

    const deque = [];
    let answer = '';

    for (let i = 0; i < n; i++) {
      const [command, num] = arr[i];

      switch (command) {
        case 'push_front':
          deque.unshift(+num);
          break;
        case 'push_back':
          deque.push(+num);
          break;
        case 'pop_front':
          answer += deque.length ? deque.shift() + '\n' : -1 + '\n';
          break;
        case 'pop_back':
          answer += deque.length ? deque.pop() + '\n' : -1 + '\n';
          break;
        case 'size':
          answer += deque.length + '\n';
          break;
        case 'empty':
          answer += deque.length ? 0 + '\n' : 1 + '\n';
          break;
        case 'front':
          answer += deque.length ? deque[0] + '\n' : -1 + '\n';
          break;
        case 'back':
          answer += deque.length ? deque[deque.length - 1] + '\n' : -1 + '\n';
          break;
      }
    }
    console.log(answer);
  });
