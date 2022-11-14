"use strict";

let a = prompt("Введите значение угла в градусах");
let calcRad = (a) => {
  let b = (a * 3.14) / 180;
  return alert(`угол ${a} градусов равен углу ${b} радиан`);
};
calcRad(a);
