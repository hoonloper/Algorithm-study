const solution = (target, arr) => {
  let answer = 0;
  let lt = Math.max(...arr);
  let rt = arr.reduce((acc, el) => acc + el, 0);

  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) <= target) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
};

const count = (arr, capacity) => {
  let cnt = 1;
  let sum = 0;

  for (const x of arr) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }

  return cnt;
};

const target = 3;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(target, arr));
