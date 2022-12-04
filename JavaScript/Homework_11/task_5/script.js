"use strict";

let months = [
  "январь",
  "февраль",
  "мар",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "окябрь",
  "ноябрь",
  "декабрь",
];

let date = new Date();
let month = date.getMonth();
alert(months[month]);
