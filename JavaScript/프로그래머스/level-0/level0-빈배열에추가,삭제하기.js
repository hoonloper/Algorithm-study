function solution(arr, flag) {
  return arr.reduce((acc, cur, i) => {
    for (let idx = 0; idx < (flag[i] ? cur * 2 : cur); idx++) {
      acc[flag[i] ? 'push' : 'pop'](cur);
    }
    return acc;
  }, []);
}
