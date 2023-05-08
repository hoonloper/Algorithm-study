function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let idx = -30001;

  return routes.reduce((acc, [s, e]) => {
    if (idx < s) {
      acc++;
      idx = e;
    }
    return acc;
  }, 0);
}
