"use strict";

let fruits = ["Яблоко", "Апельсин", "Слива"];
fruits.push("Абрикос");
fruits.unshift("Нектарин", "Персик");
fruits.splice(2, 2);
console.log(fruits);
let favoriteFruits = fruits.slice(0, 3);
console.log(favoriteFruits);
let berries = ["Барбарис", "Виноград", "Годжи"];
console.log(berries);
fruits = fruits.concat(berries);
console.log(fruits);
console.log(`Длина масива Fruits равна ${fruits.length}`);
favoriteFruits.forEach((item, index) => {
  console.log(`${item} имеет индекс ${index}`);
});
console.log("У элемента 'Слива' индекс равен " + fruits.indexOf("Слива"));
if (fruits.includes("Яблоко")) {
  console.log("Элемент 'Яблоко' содержится в данном ммассиве");
} else {
  console.log("Элемент 'Яблоко' не содержится в данном массиве");
}
