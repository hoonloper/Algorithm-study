const arr1 = [
  [1, 2],
  [2, 3],
];

const arr2 = [
  [3, 4],
  [5, 6],
];

/*
첫번째 풀이
function solution(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const answer = [];
    for (let j = 0; j < arr1.length; j++) {
      answer.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(answer);
  }
  console.log(result);
}

console.log(solution(arr1,arr2));
*/

/*
두번째 풀이
function solution(arr1, arr2) {
  const answer = [[]];
    
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
      
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
*/

function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

console.log(solution(arr1, arr2));
