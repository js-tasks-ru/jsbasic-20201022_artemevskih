/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...
  let result = '';
  const showSalaryByAge = users
    .filter(item => item.age <= age)
    .map(item => result += item.name + ', ' + item.balance + '\n');

  return result.slice(0, result.length - 1);
}
