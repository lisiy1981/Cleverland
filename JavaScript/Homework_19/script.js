"use strict";

//task 1
function Smartphone(manufacturet, model) {
  this.manufacturet = manufacturet;
  this.model = model;
  this.display = "Amoled";
}

const apple = new Smartphone("Apple", "Iphone 14"),
  samsung = new Smartphone("Samsung", "s22"),
  huawei = new Smartphone("Huawei", "Mate 50"),
  xiaomi = new Smartphone("Xiaomi", "mi 13"),
  honor = new Smartphone("Honor", "70");

Smartphone.prototype.displayMaterial = function () {
  console.log(`${this.manufacturet} display material "Glass" `);
};
console.log(apple, samsung, huawei, xiaomi, honor);

samsung.displayMaterial();

//task 2

function specificationSamsung(model) {
  console.log(this);
  console.log(this.display + " " + model);
}
const newSpesificationSamsung = {
  display: "Amoled",
};
specificationSamsung.call(newSpesificationSamsung, "s22");
specificationSamsung.apply(newSpesificationSamsung, ["s22"]);

//task 3

function phone(model) {
  return this + " " + model;
}

const manufacturet = phone.bind("Apple");
console.log(manufacturet("iphone 14"));
