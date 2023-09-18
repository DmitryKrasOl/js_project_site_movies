/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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

// My variant
/* 
const advirt = document.querySelector('.promo__adv');
advirt.innerHTML = '';
 */

const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => {
    item.remove();
});


// Задание 2 my var
// const genre = document.querySelector('.promo__genre');
// genre.textContent = 'драмма';

const
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre');

genre.textContent = 'драмма';

// Задание 3
poster.style.backgroundImage = "url('img/bg.jpg')";
// console.log(poster);

// Задание 4
// promo__interactive - list

const
    promoList = document.querySelector('.promo__interactive-list'),
    listStrings = promoList.querySelectorAll('.promo__interactive-item');

let listBox = '';

const moviesList = movieDB.movies.sort();

// my var
/* 
moviesList.forEach((item, i) => {
    // item = item.toUpperCase;
    listBox += `<li class="promo__interactive-item">${i + 1} - ${item}<div class="delete"></div></li>`;
});
 */

listStrings.forEach(item => {
    item.remove();
});

moviesList.forEach((item, i) => {
    // item = item.toUpperCase;
    promoList.innerHTML += `<li class="promo__interactive-item">${i + 1} - ${item}<div class="delete"></div></li>`;
});



// promoList.innerHTML = listBox;






// const promo = document.querySelector('.promo__bg');



// console.log(promo);