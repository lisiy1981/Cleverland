"use strict";
let userName = prompt("Введите ваше имя");
function hello() {
  if (userName) {
    alert(`Привет , ${userName}`);
  } else {
    alert("Привет ,гость");
  }
}
hello();
