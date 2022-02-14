// function getDistance(hand, leftFinger, rightFinger, keys, num) {
//   const left =
//     Math.abs(keys[num][0] - keys[leftFinger][0]) +
//     Math.abs(keys[num][1] - keys[leftFinger][1]);
//   const right =
//     Math.abs(keys[num][0] - keys[rightFinger][0]) +
//     Math.abs(keys[num][1] - keys[rightFinger][1]);

//   if (left === right) return hand === "left" ? "L" : "R";

//   return left < right ? "L" : "R";
// }

// function solution(numbers, hand) {
//   const keys = {
//     1: [0, 0],
//     2: [0, 1],
//     3: [0, 2],
//     4: [1, 0],
//     5: [1, 1],
//     6: [1, 2],
//     7: [2, 0],
//     8: [2, 1],
//     9: [2, 2],
//     "*": [3, 0],
//     0: [3, 1],
//     "#": [3, 2],
//   };
//   let leftFinger = "*";
//   let rightFinger = "#";
//   let answer = "";

//   for (let num of numbers) {
//     if (num % 3 === 1) {
//       answer += "L";
//       leftFinger = num;
//     } else if (num === 0) {
//       answer += getDistance(hand, leftFinger, rightFinger, keys, num);
//       answer[answer.length - 1] === "L"
//         ? (leftFinger = num)
//         : (rightFinger = num);
//     } else if (num % 3 === 0) {
//       answer += "R";
//       rightFinger = num;
//     } else {
//       answer += getDistance(hand, leftFinger, rightFinger, keys, num);
//       answer[answer.length - 1] === "L"
//         ? (leftFinger = num)
//         : (rightFinger = num);
//     }
//   }
//   return answer;
// }

function solution(numbers, hand) {
  let result = "";

  function location(arr1, arr2) {
    return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
  }

  const key = {
    1: [0, 1],
    2: [0, 2],
    3: [0, 3],
    4: [1, 1],
    5: [1, 2],
    6: [1, 3],
    7: [2, 1],
    8: [2, 2],
    9: [2, 3],
    "*": [3, 1],
    0: [3, 2],
    "#": [3, 3],
  };
  let right = [3, 1];
  let left = [3, 3];

  numbers.forEach((num) => {
    const number = key[num];
    if (number[1] === 1) {
      left = number;
      result += "L";
    } else if (number[1] === 3) {
      right = number;
      result += "R";
    } else {
      const leftLoad = location(left, number);
      const rightLoad = location(right, number);
      if (leftLoad === rightLoad) {
        if (hand === "left") {
          left = number;
          result += "L";
        } else {
          right = number;
          result += "R";
        }
      } else if (leftLoad < rightLoad) {
        left = number;
        result += "L";
      } else {
        right = number;
        result += "R";
      }
    }
  });
  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]));
