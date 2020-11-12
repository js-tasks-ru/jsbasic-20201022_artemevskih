let calculator = {
  // ваш код
  
  read(x, y) {
    typeof x === 'number' ? this.a = x : console.log('Not a number');
    typeof y === 'number' ? this.b = y : console.log('Not a number');
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
