function solution(num_list) {
  return Math.max(
    ...num_list.reduce(
      (acc, cur, i) => {
        acc[i % 2] += cur;
        return acc;
      },
      [0, 0]
    )
  );
}
