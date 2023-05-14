function solution(num_list) {
  return num_list
    .sort((a, b) => a - b)
    .reduce((acc, cur, i) => (i <= 4 ? acc : [...acc, cur]), []);
}
