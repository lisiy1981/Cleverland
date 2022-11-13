"use strict";

let a = prompt("Введите первое натуральное число");
let b = prompt("Введите второе натуральное число");
let sumNumber = function (a, b) {
  let sum = 0;
  for (let c = +a; c <= b; c++) {
    sum += c;
  }
  return alert(`Сумма всех чисел от ${a} до ${b} равна ${sum}`);
};
sumNumber(a, b);
