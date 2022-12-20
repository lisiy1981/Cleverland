/* Задания на урок:

1) Реализовать функционал , что после заполнения формы и нажатия  кнопки "Подтвердить" -
новый фильм добавлялся в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов рещения задачи , принимается любой , но рабочий.

2) Если название фильма больше, чем 15 символов - обрезать его и добавить три точки.

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно).

4) Еси в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение :
"Добавлен новый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };
  const adv = document.querySelectorAll(".promo__adv img");
  const poster = document.querySelector(".promo__bg");
  const genre = document.querySelector(".promo__genre");
  const movieList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector("form.add");
  const addInput = addForm.querySelector(".adding__input");
  const checkbox = addForm.querySelector("[type='checkbox']");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 15) {
        newFilm = `${newFilm.substring(0, 16)}...`;
      }
      if (favorite) {
        console.log("Добавили любимый фильм");
      }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }
    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "драма";
    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };
  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
              </li>`;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
