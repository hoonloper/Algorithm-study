function solution(targets) {
  let end = 0;
  return targets
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, [s, e]) => {
      if (e < end) {
        end = e;
      } else if (s >= end) {
        acc++;
        end = e;
      }
      return acc;
    }, 0);
}
