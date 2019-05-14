"use strict";


// 8. С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

/*function fib(n){
	let sum = 0;
	let arr = [];*/

/*let arr = [];
let sum = 0;
	for( let i = 0; i < 10; i++ ){
		if( arr.length > 1 )  sum += arr[ arr.length - 2 ];
        if( arr.length == 1 ) sum = 1;
        if( arr.length == 0 ) sum = 0;
        arr.push( sum );
	}
	let str = arr.join( ", " ); 

	console.log(str);*/
//}
//fib(10);


let arr = [0, 1];

for ( let i = arr.length; i < 10; arr[i] += arr[ i - 2 ] + arr[ i - 1 ] )

alert( arr ); 
