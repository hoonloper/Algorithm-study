function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    return arr.reduce((acc, cur, i) => {
      if (s <= i && i <= e && k < cur) {
        return acc === -1 ? cur : Math.min(cur, acc);
      }
      return acc;
    }, -1);
  });
}
