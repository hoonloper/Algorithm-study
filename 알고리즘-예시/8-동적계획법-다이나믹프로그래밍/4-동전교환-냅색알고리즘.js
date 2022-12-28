const solution = (n, coin, m) => {
  let answer = 0;
  const dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);
  dy[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];

  return answer;
};

console.log(solution(3, [1, 2, 5], 15));
