"use strict";

let str = prompt("Введите текст");
let n = "aaaaa";
function text(str, n) {
  if (str.length > n.length) result();
  else resultTwo();
}
function result() {
  alert(str.slice(0, 5) + "...");
}
function resultTwo() {
  alert(`${str}`);
}
text(str, n);
