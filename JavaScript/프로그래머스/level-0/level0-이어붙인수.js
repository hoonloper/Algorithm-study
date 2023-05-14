function solution(num_list) {
  return num_list
    .reduce(
      (acc, cur) => {
        acc[cur % 2] += cur;
        return acc;
      },
      ['', '']
    )
    .reduce((acc, cur) => acc + +cur, 0);
}
