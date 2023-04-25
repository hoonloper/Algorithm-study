function solution(numbers) {
  return numbers.map((num) => {
    if (num % 2 === 0) {
      return num + 1;
    } else {
      const x = num.toString(2).split('');
      const i = x.lastIndexOf('0');
      if (i === -1) {
        x.splice(0, 1, '10');
        return parseInt(x.join(''), 2);
      } else {
        x.splice(i, 2, '10');
        return parseInt(x.join(''), 2);
      }
    }
  });
}
