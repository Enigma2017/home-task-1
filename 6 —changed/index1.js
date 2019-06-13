/* 1. Напишите функцию, которая возвращает куб переданного числа,
 аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

console.log( cube(2) ); // 8
 */

//---рекурсия ---

function cube(x, n) {
	if ( n !== 1 ){
		return x*cube(x, n - 1);
	}
	else {
		return x;
	}
}

alert( cube(3, 3) );


//-------Task with calculator--------


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



/* 4. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
Для расчетов все методы используют функционал ранее созданного калькулятора.

alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));*/
 
const me = {

	getSum: function(x, y) {
		this.x = x;
		this.y = y;
	    return `${x} + ${y} = ${calculator.sum.call(this)}`;
	},

	getMulti: function(x, y) {
		this.x = x;
		this.y = y;
	    return `${x} * ${y} = ${calculator.multi.call(this)}`;
	},

	getDiff: function(x, y) {
		this.x = x;
		this.y = y;
	    return `${x} - ${y} = ${calculator.diff.call(this)}`;
	},

	getDiv: function(x, y) {
		this.x = x;
	    this.y = y;
	    return `${x} / ${y} = ${calculator.div.call(this)}`;
	}
}

alert(me.getSum(1, 1));
alert(me.getMulti(2, 2));
alert(me.getDiff(5, 5));
alert(me.getDiv(1, 2));


