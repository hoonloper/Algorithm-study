// M개를 뽑으니 조합임, 문자 길이가 30을 넘어가면 DFS가 아닌 다른 방법을 모색해봐야한다.
const solution = (arr, x, m) => {
  const len = arr.length;
  const answer = [];
  const temp = Array.from({ length: m }, () => 0);

  const DFS = (L, start) => {
    if (L === m) {
      const sum = temp.reduce((acc, el) => acc + el, 0);
      if (sum % x === 0) answer.push([...temp]);
    } else {
      for (let i = start; i < len; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  };
  DFS(0, 0);
  return answer;
};

console.log(solution([2, 4, 5, 8, 12], 6, 3));
