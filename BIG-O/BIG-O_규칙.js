// Big - O의 4가지 계산 규칙

// Big - O Rule 1 : Worst Case
// 최악의 상황
const people = ["정용훈", "홍길동", "전우치", "이순신", "세종대왕"];

const OnAlgorithm = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "전우치") {
      console.log("전우치이올시다.");
    }
  }
};

/* 
해당 코드는 3번만 돌아도 '전우치'를 찾을 수 있으나 불필요하게 5번 반복합니다. 
조건에 맞는 값을 찾았을 경우 return을 작성해주면 효율적인 코드가 됩니다.

하지만, 마지막에 있는 '세종대왕'을 찾으려면, 중간에 조건이 있더라도 최대의 반복 즉, 5번의 반복을 실행할 수 밖에 없습니다.

이런 최악의 상황을 고려했을 때, element의 개수가 증가한다면 작업 횟수도 정비례하게 증가하게 됩니다. 
그렇기에 해당 경우는 O(n) Linear Time이 됩니다.
*/

// Big - O Rule 2 : Remove Constants
// Big - O 계산시 상수 제거
function print(items) {
  console.log(items[0]); // O(1)

  let middleIndex = Math.floor(items.length / 2);
  let index = 0;

  // O(n/2)
  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  // O(100)
  for (let i = 0; i < 100; i++) {
    console.log("hi");
  }
}

/* 
해당 코드의 Big - O를 계산하면 O(1 + n/2 + 100)이 됩니다.
items의 길이가 1억이라면 1을 더하든, 100을 더하든, 1억을 2로 나누는 상황은 크게 달라지지 않습니다.

따라서 상수는 모두 제거하고 O(n)으로 표기해야 합니다.
즉, O(n) Linear Time입니다.
*/
