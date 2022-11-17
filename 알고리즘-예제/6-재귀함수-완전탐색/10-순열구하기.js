const solution = (arr, m) => {
  const len = arr.length;
  const answer = [];
  const check = Array.from({ length: len }, () => 0);
  const temp = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = 0; i < len; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  };
  DFS(0);
  return answer;
};

console.log(solution([3, 6, 9], 2));
