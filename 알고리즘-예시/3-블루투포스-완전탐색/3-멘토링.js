const solution = (test) => {
  let answer = 0,
    tmp = [];
  m = test.length;
  n = test[0].length;
  // 멘토가 될 수 있는 학생
  for (let i = 1; i <= n; i++) {
    // 멘티가 될 수 있는 학생
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      // 테스트를 반복해야 하는 횟수 3번(i, j) 멘토 멘티
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        // 테스트를 돌아야하는 반복 횟수 4번 (k = 테스트, s = 등수)
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        // 멘토 등수가 멘티 등수보다 낮으면(등수로는 높음) 카운트 +
        if (pi < pj) cnt++;
      }
      // 카운트가 학생수와 같다면 멘토가 될 수 있는 경우이니 answer +
      if (cnt === m) {
        tmp.push([i, j]);
        answer++;
      }
    }
  }

  console.log(tmp);
  console.log(answer);
};

solution([
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
