function solution(strArr) {
  return strArr.map((el, i) => (i % 2 ? el.toUpperCase() : el.toLowerCase()));
}
