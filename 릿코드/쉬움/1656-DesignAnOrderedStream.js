/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.arr = Array.from({ length: n }, () => '');
  this.checked = this.arr.map((el) => false);
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.arr[idKey - 1] = value;
  const maxIndex = this.checked.findIndex((el) => el === false);
  this.checked[idKey - 1] = true;
  const answer = [];

  for (let i = maxIndex; i < this.arr.length; i++) {
    if (!this.checked[i]) {
      break;
    }
    answer.push(this.arr[i]);
  }

  return answer;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
