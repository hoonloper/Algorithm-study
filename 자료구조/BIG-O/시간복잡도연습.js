// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let j = 0; j < 5; j++) {
//   console.log(j);
// }
// /*---------------------------*/
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(i + " " + j);
//   }
// }

// function func(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return func(n - 1) + func(n - 1);
// }

// console.log(func(n));

// O(N)의 시간 복잡도를 가진 코드
/* 배열을 한 번 읽든 두 번 읽든 big-O 시간을 구할 때는 아무런 영향을 주지 않음*/
function exam(arr) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (let j = 0; j < arr.length; j++) {
    product *= arr[j];
  }

  console.log(sum + " " + product);
}

// O(N^2)의 시간 복잡도를 가진 코드
/* 안쪽 루프의 반복 횟수는 O(N)이고 이 루프가 N번 반복됨.
   즉, O(N^2)의 수행시간을 가짐 */
function exam2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + "," + arr[j]);
    }
  }
}

// O(N^2)의 시간 복잡도를 가진 코드
// 1부터 N-1까지의 합이고, N(N-1)이 되기 때문
function exam3(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + "," + arr[j]);
    }
  }
}

// O(1)의 시간 복잡도를 가진 코드
/* 
  서로 다른 배열 두 개를 사용했을 경우 
  j루프 안에 있는 if 문은 상수 시간에 수행 가능한 단순한 문장임
*/
function exam4(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] < arr2[j]) {
        console.log(arr1[i] + "," + arr2[j]);
      }
    }
  }
}

function exam5(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      /* O(1) 시간이 걸리는 작업 */
    }
  }
}
/* 
  arr1(a) 원소 하나당 arr2(b)의 길이만큼 반복한다.
  따라서 수행 시간은 O(ab)가 된다.
  O(N^2)으로 오해할 수 있는데 서로 다른 두 개의 입력이 주어지므로
  O(N^2)은 아니다. 즉, 두 배열의 크기를 모두 고려해야 하니 주의하자.
*/

// O(ab)의 시간 복잡도를 가진 코드
// 상수항 100000은 무시되므로 수행 시간은 O(ab)가 된다.
function exam6(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < 100000; k++) {
        console.log(arr1[i] + "," + arr2[j]);
      }
    }
  }
}

// O(N)의 시간 복잡도를 가진 코드
// 배열의 절반만 살펴본다고 해서 big-O 시간에 영향을 끼치는 것은 아니다.
function exam7(arr) {
  for (let i = 0; i < arr.length; i++) {
    let other = arr.length - i - 1;
    let temp = arr[i];
    arr[i] = arr[other];
    arr[other] = temp;
  }
}
