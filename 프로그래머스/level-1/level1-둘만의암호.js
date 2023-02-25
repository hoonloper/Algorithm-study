function solution(s, skip, index) {
  const alphas = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].filter((alpha) => !skip.includes(alpha));
  s = s.split('');
  const alphasLen = alphas.length;
  return s.reduce((acc, cur) => {
    const num = alphas.indexOf(cur) + index;
    const mul = Math.floor(num / alphasLen);
    const newNum = mul > 1 ? num - alphasLen * mul : num;
    const idx = newNum >= alphasLen ? newNum - alphasLen : newNum;
    return acc + alphas[idx];
  }, '');
}
