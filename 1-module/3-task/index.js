/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
/*
  let result = '';
  if (str.trim().length === 0) {
    return result;
  }

  result = str[0].toUpperCase() + str.slice(1);
*/
  return str.trim().length === 0 ? str : str[0].toUpperCase() + str.slice(1); 
}
