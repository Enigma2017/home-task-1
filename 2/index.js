"use strict";

//Условные и логические операторы

/* 1. В переменную x записывается число, введенное пользователем в диалоговое окно. 
Проверить и вывести на экран, x – отрицательное число, положительное или ноль. */

let x = +prompt( 'fill a num', 'from -100 to 100' );

if ( x < 0 ){
	alert( 'negative num' );
} else if ( x > 0 ){
	alert( 'positive num' );
} else{
	alert( 'zero' );
}


/* 2. Создайте три переменные с любыми числовыми значениями. Используя условный оператор  и не 
используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение. */

let a = 22;
let b = 32;
let c = 12;

a <= b && a <= c ? alert(a + ' is the smallest variable') : b <= c ? alert( b + ' is the smallest variable') : alert( c + ' is the smallest variable');


/* 3. У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt.
 В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. 
С помощью условного оператора определите ваши возможности и отобразите на экране в alert. */

let myCash = +prompt( 'my cash...', 'up to 0' );
let friendCash = +prompt( ' friend\'s cash...', 'up to 0' );
let sumMutual = myCash + friendCash;

if ( sumMutual > 20000){
	alert('let\'s fly to Majorka!');
} else if ( sumMutual === 0 ){
	alert( 'let\'s walk in a park' );
} else {
	alert( 'let\'s drink a beer!' );
}


/* 4. В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27,
 в alert выводится “Выслать повестку”. */

let age = 27;

if ( age >= 20 && age < 27 ){
	alert( 'Выслать повестку' );
} else {
	alert( 'Не подходит' );
} 


/* 5. Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка
 приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете. */

let bus1 = 7;
let bus2 = 225;
let bus3 = 255;

let schedule = +prompt( 'choose one of the numbers of bus: 7, 100, 150, 200, 225, 240, 255, 270, 300', '' );

if ( schedule == bus1 || schedule == bus2 || schedule == bus3 ){
	alert( 'let\'s go home' );
} else {
	alert( 'still wait...' );
} 


/* 6. В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert
 сообщение о необходимости идти на работу. */

let day = new Date();
let date = day.getDay();

if ( date == 0 || date == 6){
	alert( 'you have a weekend' );
} else {
	alert( 'go to work' );
}


/* 7. Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1, 
а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!' */

let xX = +prompt( 'from -20 to 20', '' );
let yY = +prompt( 'from -20 to 20', '' );

if ( xX <= 1 && yY >= 3 || yY < 0 ){
	alert( xX + yY );
} else{
	alert( 'Неверно!' );
} 


/* 8. Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, 
иначе прибавьте к x число 5. Выведите новое значение переменной на экран. */

let xx = 22;
let yy = 5;

if ( xx > 2 && xx < 11 && yy >= 6 && yy < 14 ){
	alert( xx += 2 );
} else{
	alert( xx += 5 );
} 


/* 9. Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, 
что пользователь может не ввести ничего или нажать на Отмена. */

let userName = prompt( 'fill your name', '' );

if ( userName == null || userName == '' ){
	alert( 'what is your name?' );
} else{
	alert( 'Hello ' + userName );
} 


/* 10. Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать
 три значения: 'ru', 'en', 'de' (например, из prompt). Если она имеет значение 'ru', то в переменную greeting запишите 
 приветствие на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран 
 приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case. */


// if - else

let greeting = '';
let lang = prompt( " 'ru', 'en', 'de' ", "" );

if ( lang == 'ru' ){
	greeting = 'Привет! Хорошего дня!';
	alert( greeting );
} else if ( lang == 'en' ){
	greeting = 'Hello! Have a nice day!';
	alert( greeting );
} else if ( lang == 'de' ){
	greeting = 'Hallo! Ich wünsche dir einen schönen Tag!';
	alert( greeting );
} else{
	alert( greeting );
}


// switch-case

let greetings = '';
let langs = prompt( " 'ru', 'en', 'de' ", "" );

switch (langs) {
	case 'ru':
		greetings = 'Привет! Хорошего дня!';
		alert( greetings );
	break;
	case 'en':
		greetings = 'Hello! Have a nice day!';
		alert( greetings );
	break;
	case 'de':
		greetings = 'Hallo! Ich wünsche dir einen schönen Tag!';
		alert( greetings );
	break;
	default:
	alert( greetings )
}


/* 11. В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает 
этот месяц (зима, лето, весна, осень). */

let month = new Date();
let season = month.getMonth();

if ( season == 0 || season == 1 || season == 11 ){
	alert( 'winter' );
} else if ( season == 2 || season == 3 || season == 4 ){
	alert( 'spring' );
} else if ( season == 5 || season == 6 || season == 7 ){
	alert( 'summer' );
} else if( season == 8 || season == 9 || season == 10 ){
	alert( 'autumn' );
} else{
	alert('');
}


/* 12. Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение 
от 0 до 6-ти. Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в
соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же lang имеет 
значение 'en' – то аналогично, но день недели будет на английском. */

let language = prompt( 'choose a lang', 'ru, en' );
let days = new Date();
let daysNum = days.getDay();
let daysOut = {
  	weekday: 'long'
};

if ( language == 'ru' ){
	alert( daysNum + '-' + days.toLocaleString('ru', daysOut) );
} else if ( language == 'en' ){
	alert( daysNum + '-' + days.toLocaleString('en', daysOut) );
}