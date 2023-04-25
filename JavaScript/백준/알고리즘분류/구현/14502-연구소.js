const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[n, m], ...board] = input.map((el) => el.split(' ').map(Number));
    const moves = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];
    let max = 0;
    const range = (y, x) => 0 <= y && y < n && 0 <= x && x <= m;
    const spread = (map, [y, x]) => {
      const queue = [[y, x]];
      while (queue.length) {
        const [Y, X] = queue.shift();

        moves.forEach(([dy, dx]) => {
          const [ny, nx] = [dy + Y, dx + X];
          if (range(ny, nx) && map[ny][nx] === 0) {
            queue.push([ny, nx]);
            map[ny][nx] = 2;
          }
        });
      }
    };

    const recursive = (map, depth) => {
      if (depth === 3) {
        const virusPos = getVirusPos(map);
        const newMap = map.map((row) => [...row]);
        virusPos.forEach((pos) => spread(newMap, pos));
        max = Math.max(max, countSafeArea(newMap));
        return;
      }
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (map[i][j] === 0) {
            map[i][j] = 1;
            recursive(map, depth + 1);
            map[i][j] = 0;
          }
        }
      }
    };

    const getVirusPos = (map) => {
      const posList = [];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (map[i][j] === 2) {
            posList.push([i, j]);
          }
        }
      }
      return posList;
    };
    const countSafeArea = (map) => {
      let safe = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (map[i][j] === 0) safe++;
        }
      }
      return safe;
    };

    recursive(board, 0);
    console.log(max);
  });
