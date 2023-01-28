function solution(s) {
  let zeroCount = 0;
  let loopCount = 0;

  while (s !== '1') {
    const bin = s.split('').reduce((acc, el) => {
      if (el === '0') {
        zeroCount++;
        return acc;
      }
      return acc + el;
    }, '');
    s = bin.length.toString(2);
    loopCount++;
  }

  return [loopCount, zeroCount];
}
