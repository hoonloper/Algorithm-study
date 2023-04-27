function solution(my_string, overwrite_string, s) {
  const [a, b, bLen] = [my_string, overwrite_string, overwrite_string.length];
  return a.slice(0, s) + b.slice(0, bLen) + a.slice(s + bLen);
}
