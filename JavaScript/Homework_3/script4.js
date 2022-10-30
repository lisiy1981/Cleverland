"use strict";

let amountImages = prompt("Укажите сколько изображений в галерее?");
amountImages = Number(amountImages);
let imageWidth = prompt("Какая ширина одного изображения?");
imageWidth = Number(imageWidth);
let maxWhiteOneImage = (1024 - (5 * 2 + 3 * 10)) / 4;
alert(
  `Максимальная ширина изображения не должна превышать: ${maxWhiteOneImage}`
);
let imageEveryRow = (1024 - (5 * 2 + 3 * 10)) / maxWhiteOneImage;
alert(`Колличество изображений в каждом ряду: ${imageEveryRow}`);
let row = Math.trunc(amountImages / imageEveryRow);
alert(`Колличество полных рядов: ${row}`);
let imagesLastRow = amountImages % imageEveryRow;
alert(`Колличество изображений в последнем ряду: ${imagesLastRow}`);
