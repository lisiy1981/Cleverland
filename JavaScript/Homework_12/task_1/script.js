"use strict";

let table = document.querySelector("table");
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
  row.cells[table.rows.length - 1 - i].style.backgroundColor = "red";
}
