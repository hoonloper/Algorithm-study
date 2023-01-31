const solution = (num, str) => {
  const arr = str.split(' ');
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0,
      tmp = +x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = +x;
    } else if (sum === max && +x > answer) {
      answer = +x;
    }
  }

  return answer;

  //   let sum = 0;
  //   let max = 0;

  //   for(let i = 0; i < num; i++) {
  //     const sum2 = arr[i].split("").reduce((acc, el) => acc + Number(el), 0);

  //     if(sum < sum2) {
  //       sum = sum2;
  //       max = arr[i];
  //     } else if (sum === sum2 && arr[i] > max) {
  // 			max = arr[i];
  //     }
  //   }

  //   console.log(+max)
};

console.log(solution(7, '128 60 603 0 521 137 123'));
