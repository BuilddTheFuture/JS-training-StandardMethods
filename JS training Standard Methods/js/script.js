'use strict';

// // Степень
// console.log (Math.pow (2, 3)) // 8
// console.log (Math.pow (2, -2)) // 0.25

// // Корень
// console.log (Math.sqrt (16)); // 4
// console.log (Math.sqrt (-100)); // NaN

// console.log (Math.pow (2, 10));
// console.log (Math.sqrt (245))

// // let arr = [4, 2, 5, 19, 13, 0, 10];
// // let sum = 0;
// // for (let i = 0; i < arr.length; i++ ) {
// //     sum += Math.pow (arr[i], 3)
// // }
// // console.log (Math.sqrt (sum)) // квадратный корень из суммы кубов его элементов

// // Округление до целого числа 
// console.log (Math.round(7.9)) // 8

// // Округление числа до указанного знака в дробной части
// let num = 5.9333451
// console.log (num.toFixed(3)) // 9.333

// console.log(Math.ceil(3.00001)); // 4 - всегда в большую
// console.log(Math.floor(2.9999)); // 2 - всегда в меньшую

// let res = Math.sqrt (379);
// console.log (Math.round(res));
// console.log (res.toFixed(1));
// console.log (res.toFixed(2));

// let res = Math.sqrt (587);
// console.log (Math.ceil(res));
// console.log (Math.floor(res));

// // Максимальное число
// console.log(Math.max(1, 5, 10, 34, 100)) // 100
// console.log(Math.max()); // -Infinity

// // Пример вывода из массива
// let arr = [1, 5, 10, 34, 100];
// let max = Math.max.apply(null, arr);
// console.log(max); // 100

// // Минимальное число
// console.log(Math.min(1, 5, 10, 34, 100)) // 1
// console.log(Math.min(-1, 0, -20, -56, -100)); // -100
// console.log(Math.min()); // Infinity

// let arr = [4, -2, 5, 19, -130, 0, 10];
// console.log (Math.max.apply(null, arr))
// console.log (Math.min.apply(null, arr))

// console.log (Math.max (4, -2, 5, 19, -130, 0, 10))
// console.log (Math.min (4, -2, 5, 19, -130, 0, 10))

// console.log(Math.random()); // рандом от 0 до 1. - 0.5416665468657356

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(10, 100));

// console.log(Math.abs(-3)); // модуль - 3

// let str = 'Язык JavaScript';
// console.log(str.toUpperCase()); // ЯЗЫК JAVASCRIPT
// console.log(str.toLowerCase()); // язык javascript

// let str = 'Rrr';
// console.log (str.toUpperCase())
// console.log (str.toLowerCase())

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.push('1', '2');
// console.log(arr); // ['a', 'b', 'c', 'd', 'e', '1', '2']
// arr.unshift('1', '2'); 
// console.log(arr); // ['1', '2', 'a', 'b', 'c', 'd', 'e', '1', '2']
// console.log (arr.shift () + ' - результат arr.shift', arr); // 1 - результат arr.shift ['2', 'a', 'b', 'c', 'd', 'e', '1', '2']

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice (1, 3); // элемент 3 не включается в вырезку
// console.log (sub);
// let sub1 = arr.slice (0, -2); // 
// console.log (sub1);

// let arr = [1, 2, 3, 4, 5];
// console.log (arr.slice (0, -2), arr)
// let sub = arr.slice (0,-2);
// console.log (sub)

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// let sub = arr.splice (-1, 4, '1', '2', '3')
// console.log (sub)

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.splice(3, 0, 'a', 'b', 'c');
// console.log (arr)

// let arr = [1, 2, 3, 4, 5];
// arr.splice (2, 0, 'a', 'b');
// arr.splice (4, 0, 'c');
// arr.splice (8, 0, 'e');
// console.log (arr) // [1, 2, 'a', 'b', 'c', 3, 4, 5, 'e']

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3, 0)) // Нашло элемент 3 с индексом 2 (поиск элемента начат с индекса 0)
// console.log(arr.indexOf(5, -2)) // нашли индекс 4

// let arr = ['a', 'r', 'e', 'w', 'r', 't', 'r'];
// let arr_new = [];
// let elem = 'r';
// let indx = arr.indexOf(elem);
// while (indx != -1) {
//     arr_new.push(indx);
//     indx = arr.indexOf(elem, indx + 1); // Метод indexOf (что ищем, с какого элемента)
// }
// console.log(arr_new)

// let arr = ['a', 'd', 'f', 1, 4, 6, 'a'];
// console.log (arr.includes('f')) // выводит true. Проверка на наличие элемента

// Задача №1

// let str = 'london';
// let result = str.slice(0,1).toUpperCase() + str.slice(1); // преобразовали 1ю букву в верхний регистр
// console.log(result); // выведет 'London'

// let str = 'london';
// let res = str.slice(0, str.length-1) + str.slice(str.length-1).toUpperCase();
// console.log(res) // выведет 'londoN'

// let str = 'Kharkov';
// let result = str.slice(0, 2).toUpperCase() + str.slice(2);
// console.log(result); // вывели 'KHarkov'

// let str = 'London';
// let result = str.slice(0,1).toLowerCase() + str.slice(1);
// console.log(result); // выведет 'london' 

// let str = 'word1 word2 word3';
// let words = str.split(' ');
// for (let i = 0; i < words.length; i++) {
// 	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1); // увеличили регистр каждого слова
// }
// let result = words.join(' '); // сливаем массив обратно в строку
// console.log(result); // выведет 'Word1 Word2 Word3'

// let str = 'var_test_text_ee';
// let words = str.split('_', 4); // Разобьем строку в массив слов
// console.log (words)

// let str = '12345';
// let arr = str.split('');
// console.log (arr);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(arr[i]);
// }
// console.log (arr); // [1, 2, 3, 4, 5]

// let str = 'word1 word2 word3';
// let words = str.split(' '); // Разобьем строку в массив слов:
// for (let i = 0; i < words.length; i++) { // Увеличим регистр каждого слова:
// 	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// let result = words.join(' '); // Сольем массив обратно в строку:
// console.log(result); // выведет 'Word1 Word2 Word3'

// let str    = '123456789';
// let arr1   = str.split('');
// let arr2   = arr1.reverse();
// let result = arr2.join('');
// console.log(result); // '987654321'

// или:
// let str = '123456789';
// let result = str.split('').reverse().join('');
// console.log(result);

// let str = 'fff-aaa-bbb';
// let str2 = str.split('-').reverse()
// console.log(str2.join(''))

// let str = 'word1 word2 word3';
// let words = str.split(' ');
// console.log (words); // ['word1', 'word2', 'word3']
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// console.log (words); // ['Word1', 'Word2', 'Word3']
// console.log (words.join(' ')); // Word1 Word2 Word3
// console.log (words.join('--')); // Word1--Word2--Word3

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }
// console.log(sum); // суммf цифр числа 12345

























































































































































