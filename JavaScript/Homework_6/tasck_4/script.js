"use strict";

function calcDegree() {
  let num = prompt("Введите число");
  let degree = prompt("Введите степень числа");
  let numDegree = Math.pow(num, degree);
  alert(`${num} в ${degree} степени равно ${numDegree}`);
}
calcDegree();
