"use strict";

let person = {
  surname: "Иванов",
  name: "Иван",
  middleName: "Степанович",
};
person.yearBirthday = 1980;
person.profession = "Строитель";
person.position = "Прораб";
person.experience = "10 лет";
let personTwo = { ...person };
console.log(personTwo.surname, personTwo.name, personTwo.profession);
delete person.middleName;
console.log(person);
if (person.middleName) {
  console.log(`${person.middleName}`);
} else console.log("Такого свойства нет");
console.log(Object.keys(person).length);
let num = 0;
for (let key in person) {
  if (typeof person[key] === "number") {
    num++;
  }
}
console.log(num);
