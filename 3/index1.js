"use strict";

//1. Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for. 

let str = '';
for ( let i = 0; i < 5; i++ ) {
	str += '.' + '#';
}
alert( str );



// 2. Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика. 

for ( let i = 1; i <= 20; i++ ) {
	if ( i % 2 == 0 ){
		document.write( i**2 + '<br>' );
	}
}


/* 3. Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление.
 Программа поздравляет того, чье имя определяется в переменной username:
Happy birthday to you
Happy birthday to you
Happy birthday dear {{username}}
Happy birthday to you */

let congrat = '';
for ( let i = 0; i < 2; i++ ){
	congrat += 'Happy birthday to you' + '\n';
}
console.log( congrat );

let user = prompt( 'what is your name?', '' );
	if ( user !== null && user !== ''){
		console.log( 'Happy birthday dear ' +  user);
	} else {
		console.log( 'Happy birthday dear Unknown user' );
	}

console.log( 'Happy birthday to you' + '\n' );


// 4. Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok. 

let a = '';

while ( true ) {
  	let conFirm = confirm( 'ok/cancel' );
  	if ( !conFirm ) break;
  	a += conFirm;
}

/* 5. В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа 
до диапазона, введенного пользователем. Результат отобразите в окне alert. */

let numUser = +prompt( 'num?', '' );

for ( let i = 0; i < numUser; i++ ){
	if ( i % 2 == 0 ) continue;
	alert( i );
}


/* 6. Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9.
 Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла. */

let random = 0;

	while ( true ) {
		random++;
 		if ( Math.random() > 0.9 ) {
		alert(random);
		break;
	}
}


// 7. Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...  

let chart = '';
for ( let i = 1; i < 10; i++ ) {
    for ( let j = 1; j < 10; j++ ) {
    	chart += i + 'x' + j + '=' + ( i*j ) + '\n'; // вывод таблицы в столбик
    	//chart += i + 'x' + j + '=' + ( i*j ) + ' '; //вывод таблицы в строку
    }
}

console.log( chart );


// 8. С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

function fib(n){
	let sum = 0;
	let arr = [];

	for( let i = 0; i < n; i++ ){
		if( arr.length > 1 )  sum += arr[ arr.length - 2 ];
        if( arr.length == 1 ) sum = 1;
        if( arr.length == 0 ) sum = 0;
        arr.push( sum );
	}
	let str = arr.join( ", " ); 

	console.log(str);
}
fib(10);


/*9. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. 
После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое */

let amount = 0;
let i = 0;
for ( ;; i++ ){
let user = +prompt('input a num', '');
	if ( user ){
		amount += user;
		continue;
	} else{
		break;
	}
}
alert( 'quantity of clicks:' + '' + i ); 
alert( 'sum of inputs:' + ' ' + amount );
alert( 'average:' + ' ' + amount/i);


/* 10. Напишите проверку пароля, введенного пользователем (заведомо определите пароль). Если введенный пароль правильный, то 
программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, 
пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с
текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, 
если ответ отрицательный, тогда снова выдать запрос пароля */

let password = 'hello2019';
let queries = '';
for ( let i = 0;; i++ ){
	let query = prompt( 'Ваш пароль?', '' );
	if ( query == password ){
		alert('Вы успешно авторизованы');
		continue;
	} else if ( query !== password ){
		queries += query;
		let conf = confirm( 'Вы уверены, что хотите отменить авторизацию?' );
		if ( conf ){
			alert( 'Вы отменили авторизацию' );
			break;
		} else {
			queries += query;
		}
	}
}