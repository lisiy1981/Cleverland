"uuse strict";
let n = prompt("Введите любое число", "");
for (let i = 0; i <= n * 2; i++) {
  if (i % 5 == 0) continue;
  {
    alert(i);
  }
}
