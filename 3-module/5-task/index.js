/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  let result = {
    min: 0,
    max: 0,
  };

  str.split(' ')
    .join()
    .split(',')
    .map(item => +item > result.max ? result.max = +item : +item < result.min ? result.min = +item : item);

  return result;
}
