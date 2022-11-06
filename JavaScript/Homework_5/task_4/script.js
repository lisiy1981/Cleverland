"use strict";
let sum = 0;
let n = prompt("Введите натуральное число", "");
for (let a = 0; a <= n; a++) {
  sum += a;
}
alert(`Сумма чисел от 0 до ${n} ровна ${sum}`);
