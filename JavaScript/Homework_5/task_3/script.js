"use strict";
let sum = 0;
while (true) {
  let value = +prompt("Введите любое число", "");
  if (!value) break;
  sum += value;
}
alert(`Сумма введенных чисел ровна:${sum}`);
