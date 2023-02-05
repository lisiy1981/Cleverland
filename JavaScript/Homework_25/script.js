"use strict";

// Task 1

class Man {
  constructor(name, surname) {
    this.name = name;
    this._surname = surname;
  }
  #age = 25;

  say() {
    console.log(
      `Имя и фамилия : ${this.name} ${this._surname}, возраст: ${this.#age}`
    );
  }

  get surname() {
    return this._surname;
  }

  set surname(surname) {
    this._surname = surname;
  }

  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }
}
const aleksei = new Man("Aleksei", "Lukashevich");
console.log((aleksei._surname = "Lukashevich"));
aleksei.age = 41;
aleksei.say();

// Task 2
const name = "Ivan";
(function () {
  let name = "Aleksey";
  console.log(`${name} Lukashevich`);
})();
console.log(name);

// Task 3
const newName = (function () {
  const nameSurname = function () {
    console.log("Aleksey Lukashevich");
  };
  return {
    say: nameSurname,
  };
})();
newName.say();
