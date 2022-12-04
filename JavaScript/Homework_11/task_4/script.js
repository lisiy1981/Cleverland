"use strict";

let start = Date.now();
let sum = 0;
for (let i = 0; i <= 1000000; i++) {
  sum += i;
}
let end = Date.now();
alert(`Цикл отработал за ${end - start} миллисекунд`);
