//6. Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом.

/* старое решение
let digit = +prompt( 'compire?', '' );
alert( typeof digit ); */

//Новое решение

let digit = prompt( 'compire?', '' );
function isNumeric(digit) {
  return !isNaN(parseFloat(digit)) && isFinite(digit);
}

alert(isNumeric(digit));