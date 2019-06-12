//---Методы объектов и контекст исполнения функции

/*1. Создайте объект calculator с методами:
a. read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
b. sum() возвращает сумму этих двух значений
c. multi() возвращает произведение этих двух значений
d. diff() возвращает разницу
e. div() возвращает частное

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );*/

const calculator = {
	read: function() {
	    this.x = +prompt('x?', 0);
	    this.y = +prompt('y?', 0);
  	},

	sum: function() {
	    return this.x + this.y;
	},

	multi: function() {
	    return this.x*this.y;
	},

	diff: function() {
	    return this.x - this.y;
	},

	div: function() {
	    return this.x / this.y;
	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );
alert( calculator.diff() );
alert( calculator.div() );


/*2. Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого 
– coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.*/

const coffeeMachine = {
	message: function(){
		alert('Your coffee is ready!');
	}, 
		
	start: function(){
		setTimeout(this.message, 3000);
	} 
}

coffeeMachine.start();


/* 3. Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения.
 Используйте концепцию chaining для создания цепочки вызовов.

var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1*/
 

function countFunc(){
	let count = 0;

	countFunc.prototype.inc = function(){
	    count++;
	},

	countFunc.prototype.dec = function(){
		count--;
	},

	countFunc.prototype.getValue = function(){
		return count;
	}
}

let current = new countFunc();
current.inc();
current.inc();
current.dec();
current.inc();
current.dec();
current.getValue();
alert( current.getValue() ); 



/* 4. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
Для расчетов все методы используют функционал ранее созданного калькулятора.

alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));*/
 
const me = {
	read: function() {
	    this.num1 = +prompt('num1?', 0);
	    this.num2 = +prompt('num2?', 0);
  	},

	getSum: function() {
	    return `${this.num1} + ${this.num2} = ${this.num1 + this.num2}`;
	},

	getMulti: function() {
	    return `${this.num1} * ${this.num2} = ${this.num1*this.num2}`;
	},

	getDiff: function() {
	    return `${this.num1} - ${this.num2} = ${this.num1 - this.num2}`;
	},

	getDiv: function() {
	    return `${this.num1} / ${this.num2} = ${this.num1 / this.num2}`;
	}
}

me.read();
alert(me.getSum());
alert(me.getMulti());
alert(me.getDiv());
alert(me.getDiff()); 


/* 5. Есть следующий код:
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

format.call( Ваш код ); // Ukraine
format.apply(Ваш код ); // [Ukraine]
format.call( Ваш код ); // Kyiv
format.apply( Ваш код ); // Kyiv
format.apply( Ваш код ); // undefined*/
 

const country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call( country, '', '' );
format.apply( country, ['[', ']'] );
format.call( country.capital, '', '' );
format.apply( country.capital, ['', ''] );
format.apply( '', ['', ''] );


/*6. Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

function format(start, end) {
    console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя

userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().*/ 


// --- Bind methode --- 

function bind( func, context ) {
	return function(){
		return func.apply( context, arguments );
	};
}

let user = {
	name: 'John',
};

function format( start, end ) {
	console.log( start + this.name + end );
}

let userFormat = bind( format, user );

userFormat( '<<<','>>>' );


// ---- Анонимная функция -----

userFormat = function( start1, end1 ){
 	return start1 + this.name + end1;
};

let user1 = {
	name: 'John',
	userFormat: userFormat
};

console.log( user1.userFormat('<<<','>>>') );



/* 7. Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель
и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая
выводит приветствие тому, кто передан в ее параметре:

hello('World'); // Hello World
hello('John'); // Hello John */

let greats = function( greeting ) {
  return function( name ) {
    console.log( greeting + ' ' + name );
  };
};

let hello = greats( 'Hello' );

hello( 'World' );
hello( 'John' ); 



/* -------Рекурсия-------- */

/* 1. Напишите функцию, которая возвращает куб переданного числа,
 аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

console.log( cube(2) ); // 8
 */

//---рекурсия ---

function cube(x) {
	return x*x*x;
}

alert( cube(3) );

//---цикл---

function cub( x ) {
	let sqr = x*x;
  	for ( let i = 1; i < 2; i++ ){
    	sqr *= x;
  	}
  	return sqr;
}

alert( cub(5) ); 



/*2. Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

console.log( sum(1, 2, 3, 4, 5) ); // 15*/


function getSum() {
	let result = 0;
	for ( let i = 0; i < arguments.length; i++ ){
		if( arguments[i] instanceof Array ){
 			for ( let j = 0; j < arguments[i].length; j++ ){
 				result += getSum ( arguments[i][j] );
			}
		} else if(!isNaN(+arguments[i])){
 			result += +arguments[i];
		}
		else{
			continue;
		}
	};
	return result;
};

let sum = getSum(1, 2, 3, 4, 5);
console.log( sum );

