function solution(input_string) {
  const obj = {};
  const str = input_string.split('').reduce((acc, el, i) => {
    if (el === input_string[i + 1]) {
      return acc;
    }
    return acc + el;
  }, '');
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  const result = Object.entries(obj)
    .filter((el) => el[1] > 1)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .reduce((acc, cur) => acc + cur[0], '');
  return result ? result : 'N';
}
