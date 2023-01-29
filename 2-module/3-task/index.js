let calculator = {
  sum: () => this.a + this.b,
  mul: () => this.a * this.b,
  read: (a, b) => {
      this.a = a;
      this.b = b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

calculator.read(3, 5);
console.log(calculator.sum());
console.log(calculator.mul());

//
