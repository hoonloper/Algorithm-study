function solution(numbers) {
  return [...new Set(getPermutation(numbers))].filter((el) => isPrime(+el))
    .length;
}
function getPermutation(number) {
  const result = [];
  const n = number.length;
  let ch = Array.from({ length: n }, () => 0);

  const dfs = (curNum) => {
    result.push(+curNum);
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        dfs(curNum + number[i]);
        ch[i] = 0;
      }
    }
  };
  dfs('');
  result.shift();
  return result;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  // 입력된 숫자의 제곱근보다 작은 홀수로 나누어 떨어지면 소수가 아님
  const sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
