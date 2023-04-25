// 내장 함수 사용
const solution = (size, arr) => {
  const answer = [];

  arr.forEach((x) => {
    let pos = -1;

    // HIT
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;

    if (pos === -1) {
      answer.unshift(x);

      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
};

// 내장 함수 미사용
const solution = (size, arr) => {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;

    // HIT
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;

    for (let i = pos === -1 ? size - 1 : pos; i >= 1; i--) {
      answer[i] = answer[i - 1];
    }

    answer[0] = x;
  });

  return answer;
};

const solution = (size, arr) => {
  let answer = [];

  arr.forEach((el) => {
    if (answer.includes(el)) {
      answer = answer.filter((num) => num !== el);
    }

    answer.push(el);
  });

  return answer.reverse().slice(0, size);
};

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
