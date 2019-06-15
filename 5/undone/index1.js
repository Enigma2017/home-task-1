/* 5. Напишите функцию аналог метода массива push. 
Функция добавляет в конец переданного в параметре массив произвольное количество элементов. */

let equalPush = ( arr, ...items ) => {
       	items.forEach(item => arr[arr.length] = item);
        return arr;
    };

let array = [ 1, 2, 3, 4, 5 ];
console.log( equalPush(array, 6, 7, 8) );


/* 6. Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены 
или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}
 */

const s1 = {
    firstname: 'Tom',
    age: 10
};

const s2 = {
    firstname: 'John'
};

const s3 = {
    lastname: 'Doe'
};

const extend = function(...objects) {
    let [s, ...obj] = objects;
    obj = obj.reduce((a, b) => ({
        ...a,
        ...b
    }));
    Object.entries(obj).forEach(([a, b]) => s[a] = b);
    return s
};

let source = extend(s1, s2, s3);
console.log(source);
console.log(s1);


/*7. Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные 
параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться 
предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить
проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате: 
				<имя_автора>, <дата>
				<текст_сообщения>
setComment('2016-11-02', 'Everything is ok', 'John');
John, 2016-12-22
Everything is ok
setComment('2016-11-02', 'You could do it better!');
Anonymous, 2016-12-22
You could do it better! */


function setComment( date, message, author ){
	if( date == null || date == '' && message == '' || message == null ){
		console.log('Not correct');
	} else if ( author == '' || author == null ){
		author = 'Anonymous';
		console.log(`<${author}> <${date}>`);
		console.log(`${message}`);
	} else{
		console.log(`<${author}> <${date}>`);
		console.log(`${message}`);
	}
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');


/*function setComment( date, message, author ){
	if( date == null || date == '' && message == '' || message == null ){
		console.log('Not correct');
	} else if ( author == '' && author == null ){
		author = 'Anonymous';
		console.log(`<${author}> <${date}>`);
		console.log(`${message}`);
	} else{
		console.log(`<${author}> <${date}>`);
		console.log(`${message}`);
	}
}

let author = prompt('author?', '');
let date = prompt('date?', '15.06.2019');
let message = prompt('message?', '');

setComment(author, date, message);*/
