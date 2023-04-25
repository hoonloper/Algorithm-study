const solution = (str) => {
  return +str.toLowerCase().replace(/[a-z]/g, '');

  // let answer = 0;

  // for(let x of str) {
  // if(!isNaN(x)) answer = answer * 10 + +x;
  // }

  // return answer;
};

solution('g0en2T0s8eSoft');
