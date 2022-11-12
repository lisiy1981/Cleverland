"use strict";

let num = prompt("Введите любое число");
function anyNumber(num) {
  if (num > 10) {
    return num * num;
  } else if (num <= 7) {
    return "Число меньше 7";
  } else if (num == 8) {
    return "7";
  } else if (num == 9) {
    return "8";
  }
}
alert(anyNumber(num));
