/* 
공간복잡도(Space Complexity) 
- 시간 복잡도는 input되는 element의 증가에 따른 작업 횟수의 증가입니다.
  하지만 시간 복잡도와 다르게 공간 복잡도는 작업 수행 시 공간을 얼마나 추가로 사용하게 되는지를 봅니다.
  즉 알고리즘에 사용되는 메로리의 양을 공간 복잡도라고 합니다.

  TIP : 효율적인 알고리즘을 사용한다고 가정했을 때 시간과 공간은 '반비례 관계'입니다.
        좋은 알고리즘을 비교할 땐 시간이 빠른 경우 공간을 많이 사용하고,
        시간이 느린 경우엔 공간을 적게 쓰는 경우가 있습니다.

공간 복잡도에 영향을 미치는 요소 4가지
- 변수
- 자료구조(Data Structure)
- 함수 호출(Function Call)
- 할당(Allocation)
*/

function space(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("space!");
  }
}

space([1, 2, 3, 4, 5]);

/*
해당 코드는 변수 i 선언 외에는 공간 복잡도에 영향을 미치는 다른 작업이 없기 때문에 O(1)입니다.
즉, 공간 복잡도에서는 input이 얼마나 큰지는 중요한 부분이 아닙니다.
*/

function arrayOfHiNTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

console.log(arrayOfHiNTimes(6)); // O(n)

/*
해당 코드의 공간 복잡도는 O(n)입니다.
6번의 반복으로 공간을 6번 사용했기 때문입니다.
*/
