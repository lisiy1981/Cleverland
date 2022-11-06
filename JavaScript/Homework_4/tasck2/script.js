"use strict";
let randomNumber = prompt("Введите любое число");
if (randomNumber > 0) {
  alert("Это положительное число");
} else if (randomNumber == 0) {
  alert("Это число равно 0");
} else if (randomNumber < 0) {
  alert("Это отрицательное число");
}
