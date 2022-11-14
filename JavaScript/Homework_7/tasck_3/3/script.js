"use strict";
let n = prompt("Введите натуральное число");
let calcFactorial = (n) => {
  for (let m = n - 1; m >= 1; --m) {
    n *= m;
  }
  return alert(n);
};
calcFactorial(n);
