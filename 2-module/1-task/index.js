/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  let sum = 0;

  for (let salary in salaries) {
    (typeof salaries[salary]) === 'number' ? sum += salaries[salary] : sum;
  }

  return sum;
}
