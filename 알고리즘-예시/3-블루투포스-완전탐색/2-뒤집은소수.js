const solution = (arr) => {
  const answer = [];

  for (const x of arr) {
    const num = Number(x.toString().split('').reverse().join(''));
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) cnt++;

      if (cnt > 2) break;
    }

    if (cnt === 2) answer.push(num);
  }

  console.log(answer);
};

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
