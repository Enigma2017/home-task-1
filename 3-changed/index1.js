"use strict";


// 4. Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok. 

let a = '';

while ( true ) {
  	let conFirm = confirm( 'ok/cancel' );
  	if ( conFirm ) break;
  	a += conFirm;
}

/* 5. В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа 
до диапазона, введенного пользователем. Результат отобразите в окне alert. */

let sumClicks = 0;
let numUser = +prompt( 'num?', '' );

for ( let i = 0; i < numUser; i++ ){
	if ( i % 2 == 0 ) continue;
		sumClicks += i;
}
alert( sumClicks );


/* 6. Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9.
 Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла. */

let random = 1;
let sumRandom = 0;

for ( ;; random++ ){
	if ( Math.random() > 0.9 ) {
		alert(random);
		break;
		} 
	sumRandom += random;
}
alert(sumRandom);


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
		break;
	} else if ( query !== password ) {
		queries += query;
		if ( query == null ){
			let conf = confirm( 'Вы уверены, что хотите отменить авторизацию?' );
			if ( conf ) { alert( 'Вы отменили авторизацию' );
			break;
			} else {
				queries += query;
			}
		}
	}
}
