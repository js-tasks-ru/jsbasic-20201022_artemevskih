/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {  
  constructor(rows) {
    this.rows = rows;
    this.name = rows.name;
    this.age = rows.age;
    this.salary = rows.salary;
    this.city = rows.city;
    this.render();
  }
  onClick(evt) {
    evt.target.remove();
  }
  render() {
    const table = document.createElement('table');
    const tableHeader = `<thead>
                          <tr>
                            <th>Имя</th>
                            <th>Возраст</th>
                            <th>Зарплата</th>
                            <th>Город</th>
                            <th></th>
                          </tr>
                        </thead>`;
    let tableContent = ``;
    this.rows.map(row => {
      tableContent += `<tr>
                        <td>${row.name}</td>
                        <td>${row.age}</td>
                        <td>${row.salary}</td>
                        <td>${row.city}</td>
                        <td><button>X</button></td>
                      </tr>`
    });

    table.innerHTML = tableHeader + tableContent;

    table.addEventListener('click', evt => {
      evt.target.tagName === 'BUTTON' ? evt.target.parentElement.parentElement.remove() : false;
    });

    this.elem = table;           
  }
}
