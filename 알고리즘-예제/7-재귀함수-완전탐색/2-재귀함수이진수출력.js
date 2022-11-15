const solution = (n) => {
  let answer = '';
  const DFS = (n) => {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));

      answer += n % 2;
    }
  };
  DFS(n);
  return Number(answer);
};

const n = 11;

console.log(solution(n));
