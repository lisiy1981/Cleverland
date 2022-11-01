"use strict";
let monthNamber = prompt("Введите номер месяца");
if (monthNamber < 3) {
  alert("Это зима");
} else if (monthNamber < 6) {
  alert("Это весна");
} else if (monthNamber < 9) {
  alert("Это лето");
} else if (monthNamber < 12) {
  alert("Это осень");
} else if (monthNamber == 12) {
  alert("Это зима");
}
