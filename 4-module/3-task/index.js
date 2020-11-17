/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const MIN_AGE = 18;

    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];

        row.cells[3].getAttribute('data-available') === null ? 
            row.hidden = true : row.cells[3].getAttribute('data-available') === 'true' ? 
                row.classList.add('available') : row.classList.add('unavailable');

        row.cells[2].innerHTML === 'f' ?
            row.classList.add('female') : row.classList.add('male');

        +row.cells[1].innerHTML < MIN_AGE ?
            row.style = "text-decoration: line-through;" : false;  
    }
}
