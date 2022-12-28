const solution = (n) => {
  let answer = 0;

  const DFS = (n) => {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  };
  answer = DFS(n);

  // const factorial = (l, sum) => {
  //   if (l === 0) {
  //     answer = sum;
  //   } else {
  //     factorial(l - 1, sum * l);
  //   }
  // };
  // factorial(n, 1);

  return answer;
};

console.log(solution(5));
