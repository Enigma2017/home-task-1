/* 6. Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены 
или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}
 */


//----1 вариант-----вывод 

/*const source1 = {
 	firstname: 'Tom',
 	age: 10
};

const mergeAr = function(...objects) {
	return [ ...objects ];
};

const source2 = mergeAr(source1);

const merge = source2.map(function(item){
	return {
		...item,
		firstname: 'John',
		lastname: 'Doe'
	};
});

console.log(merge);
console.log(source1);*/


//---2 вариант -----------

const s1 = {
 	firstname: 'Tom',
 	age: 10
};

const s2 = {firstname: 'John'};

const s3 = {lastname: 'Doe'};

const mergeArr = function(...objects) {
	return [ ...objects ];
};

const mergedObj = mergeArr( s1, s2, s3);

const mergeв = mergedObj.reduce(function(items1, items2, items3){
	return {
		...items1,
		...items2,
		...items3
	};
});
console.log(mergeв);
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

/*function setComment( date, message, author ){

}*/