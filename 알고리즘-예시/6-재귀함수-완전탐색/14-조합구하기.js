// M개를 뽑으니 조합임, 문자 길이가 30을 넘어가면 DFS가 아닌 다른 방법을 모색해봐야한다.
const solution = (n, m) => {
  const answer = [];
  const temp = Array.from({ length: m }, () => 0);

  const DFS = (L, start) => {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = start; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  };
  DFS(0, 1);
  return answer;
};

console.log(solution(4, 2));
