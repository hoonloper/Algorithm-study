function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map((x) => x.charAt(0).toUpperCase() + x.substring(1))
    .join(' ');
}
