"use strict";


// 8. С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

let arr = [0, 1];

for ( let i = arr.length; i < 10; arr[i] = arr[ i - 2 ] + arr[ i - 1 ], i++ );

alert( arr ); 


/* 6. Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9.
 Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла. */

let random = 0;
let math = 0;

for ( ;; random++ ){
	math = Math.random();
	if ( math > 0.9 ) {
		alert(math);
		alert(random);
		break;
	} 
}
