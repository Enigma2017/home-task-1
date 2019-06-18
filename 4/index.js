"use strict";

//----------Массивы и объекты----------

/* 1. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert. */

let mixArr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = mixArr.reduce( function( summ, items ){
	return summ + ( items = +items ? +items : 0);
});

alert(sum);


/*2. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. Переберите массив и распечатайте
 в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().*/

let arrNum = [];

let n = Math.floor(Math.random() * 10) + 10;

for( let i = 0; i < n; i++ ){
    let randomNum = Math.round(Math.random() * 10) + 10;
    arrNum[i] = randomNum**5;
}
console.log(arrNum);


/* 3. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
a. Добавьте в начало массива значение ‘Backbone.js’
b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
c. Добавьте в массив значение ‘CommonJS’ вторым элементом
d. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее” */

let frame1 = ['AngularJS', 'jQuery'];

frame1.unshift( 'Backbone.js' );

frame1.push( 'ReactJS', 'Vue.js' );

frame1.splice( 1, 0, 'CommonJS' );

//console.log(frame1);

let frame2 = frame1.splice(3, 1);

alert(frame2.valueOf(3) + ' - ' + 'Это здесь лишнее');

console.log(frame1);


/*4. Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов, 
и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...).
 Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.*/

let str = "Как однажды Жак звонарь сломал фонарь головой";
let arr = str.split( " " );
let order = arr.splice( arr.indexOf( "головой" ), 1 );

arr.splice( 4, 0, order );
alert( str + "\n" + arr.join( " " ) );


/*5. Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С помощью 
оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если 
свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.*/

const person = {
    name: 'Sam',
    surname: 'Smith',
    age: 35,
    country: 'USA',
    city: 'NY'
}

let prop = prompt( 'What is your identify?', 'name, surname, age, country, city' );

if( !person[prop] ){
    person[prop] = prompt( 'Fill your identify', '' );
} else{
    alert( `${person[prop]}` );
}

console.log( person );


/*6. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
 прочитанными из prompt (например: brand, model, resolution, color...),
 не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.*/

let phone = {};

for( let i = 1; i < 3; i++){
    let prop = prompt( 'Brand? Model? Resolution? Color?', '' );
    if( prop !== null && prop !== ''){
        phone[prop] = prompt('Fill characteristic', '');
    } 

    person['phone'] = phone;
}
console.log(person);



/*7. Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней. Из prompt
 читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.*/

const date = {
        now: new Date(),
        lastYear: new Date()
    };

    let { now: nW } = date;
    let { lastYear: lY } = date;

    lY.setDate( lY.getDate() - 365 );

    let nowYYYY = nW.getFullYear();
    let nowMM = ( ( nW.getMonth() < 9 ) ? '0' : '' ) + ( nW.getMonth() + 1 );
    let nowDD = ( ( nW.getDate() < 10) ? '0' : '' ) + nW.getDate();

    let lastYearYYYY = lY.getFullYear();
    let lastYearMM = ( ( lY.getMonth() < 9 ) ? '0' : '' ) + ( lY.getMonth() + 1 );
    let lastYearDD = ( ( lY.getDate() < 10 ) ? '0' : '' ) + lY.getDate();

    let putDate = prompt( 'Date?', '2019-05-25' );
    let userDate = new Date( putDate );

    let outDate = ( userDate >= lY && userDate < nW ) ? alert( 'Входит в диапазон' ) : alert( 'Не входит в диапазон' );


    /*if( userDate >= lY && userDate < nW ){
    	alert( 'Входит в диапазон' );
    } else{
    	alert( 'Не входит в диапазон' );
    }*/


/*8. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение 
добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert 
полученный результат.*/

let arrEmpty = [];
let nN = 10;
for( let i = 0; i < nN; i++ ){
    arrEmpty.push( +prompt( 'Num?', '' ) );
}

let summ = 0;
for ( let value of arrEmpty ) {
        if ( !isNaN( value ) ) summ += parseInt( value );
    }
alert( summ );


/* 9. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения: */

let chart = '';
let chartArr = [];
for ( let i = 1; i < 10; i++ ) {
    for ( let j = 1; j < 10; j++ ) {
    	chart += i + 'x' + j + '=' + ( i*j ) + '\n';
    	chartArr = chart.split('\n');
    }
}

console.log( chartArr );


//var table = new Array(11);// В таблице 10 строк
/*var table = new Array(10);
for( var i = 0; i < 10; i++ )

table[i] = new Array(10);

for( var row = 0; row < 10; row++ ) {
	for( var col = 0; col < 10; col++ ) {
		table[row][col] = row + 'x' + col + '=' + ( row*col );
	}
}*/

//console.log(table);



/*10. Создайте структуру данных, полностью описывающую html-разметку картинки.

<img src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
 alt="" style="border: 1px solid #ccc" width="200" /> */

const image = {
	src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
	tagName: "img",
	alt: "",
	style: {
		border: "1px solid #ccc",
		width: 200
	}
};

console.log(image);