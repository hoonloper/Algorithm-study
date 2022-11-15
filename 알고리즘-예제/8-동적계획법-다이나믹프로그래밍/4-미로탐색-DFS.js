const solution = (miro) => {
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const DFS = (x, y) => {
    // 종착지에 도착했을 때
    if (x === 6 && y === 6) {
      answer++;
    } else {
      // 동 서 남 북을 판단하기 위한 반복문
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        // 없는 공간 제외 및 갈 수 있는 공간 판별
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && miro[nx][ny] === 0) {
          miro[nx][ny] = 1;
          DFS(nx, ny);
          miro[nx][ny] = 0;
        }
      }
    }
  };

  miro[0][0] = 1;
  DFS(0, 0);
  return answer;
};

const miro = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];
console.log(solution(miro));
