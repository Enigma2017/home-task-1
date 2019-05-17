"use strict";

// ----------- Функции -----------

/* 1. Напишите функцию max, которая сравнивает два числа и возвращает большее: 

console.log( max(0, -1) ); // 0 */


//1-й вариант

function funcMax(x, y){
	return Math.max(x, y);
}

console.log( funcMax(12, 22) );

//2-й вариант

function max(z, w){
	return z > w ? z : w;
}
console.log( max(0, -1) );


/*2. Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

console.log( min(0, -1, 100, 500, 100500) ); // -1 */

//--1 вариант

let min1 = [ 0, -1, 100, 500, 100500 ];
function getMin(arr) {
    let min = arr[0];
    let i = arr.length;

    while (i--) {
        min = arr[i] < min ? arr[i] : min;
    }
    return min;
}

let minimum = getMin(min1);
console.log(minimum);

//---2 способ
let minArr = [ 0, -1, 100, 500, 100500 ];

function getMin(minArr){
	let minElement = minArr[0];

	for ( let i = 0; i < minArr.length; i++ ){
		if ( minElement > minArr[i] ){
			minElement = minArr[i];
		}
	}

	return minElement;
}

let mini = getMin(minArr);
console.log(mini);


/* 3. Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов),
 каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:	
a. Отфильтруйте пользователей младше 18 лет
b. Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
c. Сформируйте новый массив, который содержит только полное имя пользователей */

const users = [
	{
		firstName: 'John',
		lastName: 'Legend',
		age: 16
	},
	{
		firstName: 'David',
		lastName: 'Guet',
		age: 51
	},
	{
		firstName: 'Lili',
		lastName: 'Coul',
		age: 28
	},
	{
		firstName: 'Alex',
		lastName: 'Gurov',
		age: 17
	},
	{
		firstName: 'Masha',
		lastName: 'Nazarova',
		age: 30
	},
	{
		firstName: 'Mike',
		lastName: 'Derrek',
		age: 11
	},
	{
		firstName: 'Alina',
		lastName: 'Birtz',
		age: 46
	},
	{
		firstName: 'Kim',
		lastName: 'Liu',
		age: 36
	}
]

const usersAdults = users.filter(function(juniors){
	let filtered = juniors.age;
	return juniors.age > 18;
});

console.log(usersAdults);

const full = users.map(function(items1){
	return {
		...items1,
		fullname: items1.firstName + " " + items1.lastName
	};
});
console.log(full);


const fullName = users.map(function(names){
	let fullNames = names.firstName + " " + names.lastName;
	return fullNames;
});

console.log(fullName);


//4. Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.

let equalShift = function( arr, value ) {
    let index = arr.indexOf(value);
    if ( index > -1 ) {
        arr.splice(index, 1);
    }
    return arr;
}


/* 5. Напишите функцию аналог метода массива push. 
Функция добавляет в конец переданного в параметре массив произвольное количество элементов. */

let equalPush = function( arr1, arr2 ) {
    return arr1.concat(arr2.filter( function(item){
    	return arr1.indexOf(item) < 0;
  }))
}


// ---------Замыкания--------- 

/*1. Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения 
текущей временной метки и служит для замера времени выполнения другого кода:

var timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer() */

function createTimer(){
	let t0 = performance.now();
	return function timer(){
		let t1 = performance.now();
		return t1 - t0;
	};
};

let timer = createTimer();
alert('!');
alert( timer() );


/* 2. Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный 
параметр и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:

var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10
  */

function createAdder(str1){
	return function hello(str2){
		return str1 + str2;
	};
};

let hello = createAdder('Hello, ');

alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry


function createAdder(a) {
  return function plus(b) {
    return a + b;
  };
};

let plus = createAdder(5);

alert( plus(1) ); // 6
alert( plus(5) ); // 10 