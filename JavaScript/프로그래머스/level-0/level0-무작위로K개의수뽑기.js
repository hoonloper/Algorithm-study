function solution(arr, k) {
  arr = [...new Set(arr)];
  const answer = Array(k).fill(0);
  for (let i = 0; i < k; i++) {
    answer[i] = arr[i] ?? -1;
  }
  return answer;
}
