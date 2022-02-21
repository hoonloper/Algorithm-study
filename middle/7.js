const time = "13:05:31";
const time2 = "00:00:00";
const time3 = "23:59:59";

function solution(time) {
  const arr = time.split(":");
  arr[0] += "시";
  arr[1] += "분";
  arr[2] += "초";

  return arr;
}

console.log(solution(time));
console.log(solution(time2));
console.log(solution(time3));
