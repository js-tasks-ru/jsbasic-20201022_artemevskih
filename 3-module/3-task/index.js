/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  return str.split('-')
    .map(function(item, index) {
      return index >= 1 ? item[0].toUpperCase() + item.slice(1) : item;
    })
    .join('');
}
