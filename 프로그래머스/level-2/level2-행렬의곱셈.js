function solution(arr1, arr2) {
  return arr1.map((arr, i) =>
    arr2[0].map((_, j) =>
      arr.reduce((sum, num, z) => sum + num * arr2[z][j], 0)
    )
  );
}
/*
function solution(arr1, arr2) {
    const answer = []

    for(let i = 0; i < arr1.length; i++) {
        const arr = [];
        for(let j = 0; j < arr2[0].length; j++) {
            let elem = 0;
            
            for(let z = 0; z < arr1[0].length; z++) {
                elem += arr1[i][z] * arr2[z][j]
            }
            arr.push(elem)
        }
        answer.push(arr)
    }
    return answer;
}
*/
