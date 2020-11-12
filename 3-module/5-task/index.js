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
    .map(function(item) {
      if (+item > result.max) result.max = +item;
      if (+item < result.min) result.min = +item;
    });

  return result;
}
