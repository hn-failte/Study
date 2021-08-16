var count;
/**
 * 冒泡排序
 * @param {Array} arr
 * @returns {Array}
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!flag) break;
  }
  return arr;
};

count = 0;
console.log(bubbleSort([4, 2, 7, 3, 9, 6]));
console.log(count, 'count');

count = 0;
console.log(bubbleSort([2, 3, 4, 6, 7, 9]));
console.log(count, 'count');
