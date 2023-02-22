// Сделайте счётчик в HTML.
// Начальные и конечные цифры вводит пользователь в HTML.
// Проверка на числа и на одно больше другого.
// Запускать счетчик после нажатия кнопки «Пуск».
// Текст кнопки должен измениться на «Пауза».
// И повторное нажатие на него ставит паузу в счетчике и кнопка становиться «Пуск».
// И так далее

"use stict";

const numberOne = document.querySelector(".one").valueAsNumber;
const numberTwo = document.querySelector(".two").valueAsNumber;
const counter = document.querySelector(".counter");
const btn = document.querySelector(".btn");
// let i;
// for (i = numberOne; i < numberTwo; i++) {
//   alert(i);
//   console.log(i);
// }
console.log(typeof numberTwo);
// const textCounter = counter.innerHTML;
// counter.innerHTML = `${i}`;
btn.addEventListener("click", function counterNew(ms, className) {
  let counterNew = 0;
  let interval = setInterval(() => {
    // counter.innerHTML = ++counterNew;
    let i;
    for (i = numberOne; i < numberTwo; i++) {
      counter.innerHTML = ++i;
    }
    counterNew === 100 ? clearInterval(interval) : false;
  }, ms);
  btn.innerHTML = `Пауза`;
});

// counterNew();
