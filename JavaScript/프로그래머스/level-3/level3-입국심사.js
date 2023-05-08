function solution(n, times) {
  let lt = 1;
  let rt = Math.max(...times) * n;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    sum < n ? (lt = mid + 1) : (rt = mid - 1);
  }

  return lt;
}
