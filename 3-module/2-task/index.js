/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // ваш код...
  const result = arr.filter(function(item) {
    return item >= a && item <= b;
  });

  return result;
}
