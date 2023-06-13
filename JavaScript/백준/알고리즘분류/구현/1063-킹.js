const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [k, s, n] = input.shift().split(' ');
    const move = [...input];

    const [kingY, kingX] = k.split('');
    const [stoneY, stoneX] = s.split('');
    const locations = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
    };

    const moves = {
      R: [0, 1],
      L: [0, -1],
      B: [-1, 0],
      T: [1, 0],
      RT: [1, 1],
      LT: [1, -1],
      RB: [-1, 1],
      LB: [-1, -1],
    };
    const arr = Array.from({ length: 8 }, () => Array(8).fill(0));

    let kx = kingX - 1;
    let ky = locations[kingY];
    let sx = stoneX - 1;
    let sy = locations[stoneY];
    arr[kx][ky] = 1;
    arr[sx][sy] = 2;

    for (let i = 0; i < n; i++) {
      const [dx, dy] = moves[move[i]];
      const [nx, ny] = [dx + kx, dy + ky];

      if (ny < 0 || nx < 0 || ny >= 8 || nx >= 8) continue;
      if (arr[nx][ny] === 2) {
        const [nnx, nny] = [sx + dx, sy + dy];
        if (nny < 0 || nnx < 0 || nny >= 8 || nnx >= 8) continue;
        arr[kx][ky] = 0;
        arr[ny][nx] = 1;
        arr[nnx][nny] = 2;
        [kx, ky] = [nx, ny];
        [sx, sy] = [nnx, nny];
      } else {
        arr[nx][ny] = 1;
        arr[kx][ky] = 0;
        [kx, ky] = [nx, ny];
      }
    }

    const loc = Object.entries(locations);
    console.log(loc[ky][0] + (kx + 1));
    console.log(loc[sy][0] + (sx + 1));
  });
