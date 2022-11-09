const solution = (str) => {
  str = str.toLowerCase().replace(/[^a-z]/g, '');

  return str === str.split('').reverse().join('') ? 'YES' : 'NO';
  // const mid = Math.floor(str.length / 2);
  // let answer = "YES";

  // for(let i = 0; i < mid; i++) {
  //   if(str[i] !== str[str.length - i - 1]) answer = "NO";
  // }

  // return answer;
};

solution('found7, time: study; Yduts; emit, 7Dnuof');
