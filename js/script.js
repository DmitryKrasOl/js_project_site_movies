/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Абра-кодабра",
    ]
};

let carts;

console.log(movieDB.movies);

// My variant
/* 
const advirt = document.querySelector('.promo__adv');
advirt.innerHTML = '';
 */

const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => {
    item.remove();
});


const deleteElement = (e) => {
    let parent = e.target.parentElement;

    delete movieDB.movies[parent.dataset.number];

    // Сортируем
    movieDB.movies.sort();

    // Удаляем пустое место
    movieDB.movies.pop();
    console.log(movieDB.movies);
    rewriteList();
}

// Задание 2 my var
// const genre = document.querySelector('.promo__genre');
// genre.textContent = 'драмма';

const
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre');

genre.textContent = 'драмма';

// Задание 3
poster.style.backgroundImage = "url('img/bg.jpg')";

// Задание 4

const promoList = document.querySelector('.promo__interactive-list');

let moviesList = movieDB.movies.sort();

function rewriteList() {
    promoList.innerHTML = '';
    movieDB.movies.forEach((item, i) => {
        // item = item.toUpperCase;
        promoList.innerHTML += `<li data-number="${i}" class="promo__interactive-item">${i + 1} - ${item}<div class="delete"></div></li>`;
    });

    // Навесить событие на все корзины
    carts = document.querySelectorAll('.delete');
    carts.forEach(cart => {
        cart.addEventListener('click', deleteElement);
    });
}

rewriteList();



// Выбираем кнопку
const buttonAdd = document.querySelector('.add__buttton');

const addingInput = document.querySelector('.adding__input');

const stringMovieLength = 21;

let cutStringMovie;

// ф-я добавления фильма в список
const addMovie = (e) => {
    e.preventDefault();

    addingInput.value;

    let value = addingInput.value.charAt(0).toUpperCase() + addingInput.value.slice(1);

    // Проверка введенного значения
    if (value.length > stringMovieLength) {

        cutStringMovie = value.substring(0, stringMovieLength) + '...';
    } else {
        cutStringMovie = value.substring(0, stringMovieLength);
    }

    movieDB.movies.push(cutStringMovie);
    movieDB.movies.sort();
    // console.log(movieDB);
    rewriteList();
}

buttonAdd.addEventListener("click", addMovie);

// =============== Задание 3 ================================================
// Выборка всех урн
carts = document.querySelectorAll('.delete');

let numberMovie;

//================== Задание 4 ======================================================================================================================================

const checkBox = document.querySelector('.yes').previousElementSibling;

console.log(checkBox);

checkBox.addEventListener("click", (e) => {
    console.log('Добавляем любимый фильм');
});