"use strict";
let amountImages = prompt(
  "Укажите сколько изображений вы хотите разместить галерее?",
  4
);
let imageWidth = prompt("Какая ширина ваших изображений?", 246);
let imageEveryRow = Math.trunc(1024 / (+imageWidth + 5 * 2));
alert(`Количество изображений в каждом ряду: ${imageEveryRow}`);
let row = Math.trunc(amountImages / imageEveryRow);
alert(`Количество полных рядов: ${row}`);
let imagesLastRow = amountImages - imageEveryRow * row || imageEveryRow;
alert(`Количество изображений в последнем ряду: ${imagesLastRow}`);
