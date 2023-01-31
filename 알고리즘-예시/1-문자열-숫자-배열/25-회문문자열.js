const solution = (str) => {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('') ? 'YES' : 'NO';

  // let newStr = str.toLowerCase();
  // const mid = Math.floor(newStr.length / 2);
  // let count = 0;

  // for(let i = 0; i < mid; i++) {
  //   if(newStr[i] === newStr[newStr.length - i - 1]) count++;
  // }

  // if(mid === count) return "YES";
};

solution('ggooGGoogg');
