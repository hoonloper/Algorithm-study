function solution(arr, intervals) {
  return intervals.flatMap(([a, b]) => arr.slice(a, b + 1));
}
