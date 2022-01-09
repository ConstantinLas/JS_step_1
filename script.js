/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},                     //personalMovieDB.movies[answ21]=answ22; в квадратных скобках
    actors: {},
    genres: [],
    privat: false
};

const answ11 = prompt('Один из последних просмотренных фильмов?', '');
const answ12 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answ11]=answ12;

const answ21 = prompt('Один из последних просмотренных фильмов?', '');
const answ22 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answ21]=answ22;

console.log(personalMovieDB);
*/



//les 15
/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const numberOfFilms = 12;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},         
    actors: {},
    genres: [],
    privat: false
};

for(let i = 1; i < 3; i++){
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');
    let aL = a.length,
        bL = b.length,
        maxL = 10;

    if(a!='' && b!='' && a!=null && b!=null && aL < maxL && bL < maxL ){
        personalMovieDB.movies[a] = b;
    }else{
        i--;
    }
    
}

if(personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}



console.log(personalMovieDB);

