"use strict";
let date = new Date();
let h = date.getHours();
let yourName = prompt("Как тебя зовут?");
switch (h) {
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
    alert(`Доброе утро ${yourName}!`);
    break;
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
    alert(`Добрый день ${yourName}!`);
    break;
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    alert(`Добрый вечер ${yourName}!`);
    break;
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    alert(`Доброй ночи ${yourName}!`);
    break;
}
