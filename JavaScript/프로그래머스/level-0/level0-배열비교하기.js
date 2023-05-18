function solution(arr1, arr2) {
  const sum = (acc, cur) => acc + cur;
  const [arr1Len, arr2Len, arr1Sum, arr2Sum] = [
    arr1.length,
    arr2.length,
    arr1.reduce(sum, 0),
    arr2.reduce(sum, 0),
  ];
  return arr1Len > arr2Len
    ? 1
    : arr1Len < arr2Len
    ? -1
    : arr1Sum > arr2Sum
    ? 1
    : arr1Sum < arr2Sum
    ? -1
    : 0;
}
