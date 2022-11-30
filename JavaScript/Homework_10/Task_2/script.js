"use strict";

let arr = [2, -15, 12, 83, -29, 111, -6, 22];
let indexItem = arr.findIndex((item) => {
  if (item >= 100 && item < 1000) {
    return true;
  }
});
console.log(`Индекс трехзначного элемента равен ${indexItem}`);
let multipleItem = arr.find((item) => {
  if (item % 5 == 0) {
    return true;
  }
});
console.log(`${multipleItem} это элемент кратный 5`);
let arrTwo = arr.filter((item) => {
  if (item > 0) {
    return true;
  }
});
console.log(arrTwo);
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));
console.log(arr.reverse());
let noun = arr.reduce((a, b) => a * b);
console.log(`Произведение элементов массива равно ${noun}`);
let mean = arr.reduce((a, b) => a + b) / arr.length;
console.log(`Среднее арифметическое элементов массива равно ${mean}`);
