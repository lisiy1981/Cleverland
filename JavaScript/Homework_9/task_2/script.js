"use strict";

let salary = {
  Лукашевич: 2500,
  Янковский: 2400,
  Позняк: 2200,
  Федоров: 2600,
  Сиваков: 2100,
  Борисенко: 2500,
  Анкинович: 2400,
  Огурцов: 2200,
  Карманов: 2300,
  Шишков: 2000,
};
let salaryTwo = Object.assign({}, salary);
let sum = 0;
let amount = 0;
for (let key in salary) {
  sum += salary[key];
  amount++;
}
let averageSalary = sum / amount;
console.log(`Средняя зарплата составляет : ${averageSalary}`);
salary.averageSalary = averageSalary;
let noLessAverage = 0;
for (let key in salary) {
  if (salary[key] >= averageSalary) noLessAverage++;
}
console.log(`${noLessAverage} человек получают зарплату не меньше средней`);
salary.noLessAverage = noLessAverage;
console.log(salary);
