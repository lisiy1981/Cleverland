"use strict";

let time = Date.parse("2022-10-27T00:00:00");
let date = new Date();
let now = date.getTime();
let result = now - time;
result = result / (1000 * 60 * 60);
alert(Math.floor(result));
