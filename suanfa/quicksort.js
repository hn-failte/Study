/**
 * 快速排序
 * @param {Array} arr
 * @param {Number} left 开始排序的位置
 * @param {Number} right 结束排序的位置
 * @returns {Array}
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (arr.length > 1) {
    const index = splitIndex(arr, left, right);
    if (left < index - 1) quickSort(arr, left, index - 1);
    if (index < right) quickSort(arr, index, right);
  }
  return arr;
};

/**
 * 根据数组起始与结束位置，取划分左右数组的索引位
 * @param {Array} arr
 * @param {Number} left
 * @param {Number} right
 * @returns {Number}
 */
const splitIndex = (arr, left, right) => {
  const middleValue = arr[Math.floor(left + (right - left) / 2)];
  while (left <= right) {
    while (arr[left] < middleValue) left++;
    while (arr[right] > middleValue) right--;
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
};

console.log(quickSort([4, 2, 7, 3, 9, 6]));
