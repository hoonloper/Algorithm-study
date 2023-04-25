const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    let [n, m, x, y, k] = input.shift().split(' ').map(Number);
    const commands = input
      .pop()
      .split(' ')
      .map((el) => +el - 1);
    const map = input.map((el) => el.split(' ').map(Number));

    const dice = [0, 0, 0, 0, 0, 0];
    const moves = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0],
    ];
    const tops = [];
    const move = (command) => {
      const [dx, dy] = moves[command];
      const [nx, ny] = [x + dx, y + dy];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) return;

      const [top, bottom, left, right, front, back] = dice;

      switch (command) {
        case 0:
          dice[0] = left;
          dice[1] = right;
          dice[2] = bottom;
          dice[3] = top;
          break;
        case 1:
          dice[0] = right;
          dice[1] = left;
          dice[2] = top;
          dice[3] = bottom;
          break;
        case 2:
          dice[0] = front;
          dice[1] = back;
          dice[4] = bottom;
          dice[5] = top;
          break;
        case 3:
          dice[0] = back;
          dice[1] = front;
          dice[4] = top;
          dice[5] = bottom;
          break;
        default:
          break;
      }

      if (map[nx][ny] === 0) {
        map[nx][ny] = dice[1];
      } else {
        dice[1] = map[nx][ny];
        map[nx][ny] = 0;
      }

      tops.push(dice[0]);
      x = nx;
      y = ny;
    };

    commands.forEach((command) => move(command));

    console.log(tops.join('\n'));
  });
