function solution(arr) {
  const r = arr.length;
  const c = arr[0].length;
  if (r === c) {
    return arr;
  }
  if (r > c) {
    return arr.map((el) => {
      return [...el, ...Array(r - c).fill(0)];
    });
  }
  {
    return [...arr, ...Array.from({ length: c - r }, () => Array(c).fill(0))];
  }
}
