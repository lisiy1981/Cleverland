"use strict";
let price = prompt("Введите стоимость покупки");
let cash = prompt("Введите сумму внесенную в кассу");
function calcChange(price, cash) {
  if (cash - price >= 0) sumChange();
  else adverbCash();
}
function sumChange() {
  let change = cash - price;
  alert(`Сумма сдачи с покупки равна ${change}`);
}
function adverbCash() {
  alert("Недостаточная сумма для оплаты");
}
calcChange(price, cash);
