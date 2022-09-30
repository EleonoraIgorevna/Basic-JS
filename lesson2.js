//Задание 1. Написать объяснение.
var a = 1, b = 1, c, d;
c = ++a; alert( c );              // 2 - В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.
d = b++; alert( d );              // 1 - В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование.
c = ( 2 + ++a ); alert( c );      // 5 Префиксная форма, сразу увеличиваем на 1 и возвразает уже 3. По итогу получаем 5.
d = ( 2 + b++ ); alert( d );      // 4 Постфиксная форма. Возвращаем пока только 2 ( в уме запоминаем 3) . 2+2 = 4.
alert( a );                       // 3 - Ранее получили 3
alert( b );                       // 3 - Ранее запомнили в уме 3 и сейчас выводим 3

//Задание 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + ( a *= 2 ); // (1+(2*2)) = 5. Операции выполняются  в приоритетности. Сначала произведение в скобках, а затем сложение.


//Задание 3.  Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

let firstValue = -4;
let secondValue = -10;
if ( firstValue >= 0 && secondValue >= 0 ) {
    console.log( firstValue - secondValue );
} else if ( firstValue < 0 && secondValue < 0 ) {
    console.log( firstValue * secondValue );
} else {
    console.log( firstValue + secondValue );
}

//Задание 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
let value = 5;
function counter ( value ) {
    switch ( value ) {
        case 1:
            console.log( value );
            console.log( value++ );
        case 2:
            console.log( value++ );
        case 3:
            console.log( value++ );
        case 4:
            console.log( value++ );
        case 5:
            console.log( value++ );
        case 6:
            console.log( value++ );
        case 7:
            console.log( value++ );
        case 8:
            console.log( value++ );
        case 9:
            console.log( value++ );
        case 10:
            console.log( value++ );
        case 11:
            console.log( value++ );
        case 12:
            console.log( value++ );
        case 13:
            console.log( value++ );
        case 14:
            console.log( value++ );
        case 15:
            console.log( value );
    }
}
counter( value );


//Задание 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
firstValue = -4;
secondValue = -10;
function subtraction ( value1, value2 ) {
    return value1 - value2;
}
function multiplication ( value1, value2 ) {
    return value1 * value2;
}
function division ( value1, value2 ) {
    return value1 / value2;
}
function sum ( value1, value2 ) {
    return value1 + value2;
}
console.log( `Первое число: ${ firstValue }` );
console.log( `Второе число: ${ secondValue }` );
console.log( `Их разница: ${ subtraction( firstValue, secondValue ) }` );
console.log( `Их произведение: ${ multiplication( firstValue, secondValue ) }` );
console.log( `Их деление: ${ division( firstValue, secondValue ) }` );
console.log( `Их сумма: ${ sum( firstValue, secondValue ) }` );


//Задание 6.
// Реализовать функцию с тремя параметрами: function mathOperation ( arg1, arg2, operation ), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций( использовать функции из пункта 5 ) и вернуть полученное значение( использовать switch).

firstValue = -4;
secondValue = -10;
let operation = "subtraction";

function subtraction ( value1, value2 ) {
    return value1 - value2;
}
function multiplication ( value1, value2 ) {
    return value1 * value2;
}
function division ( value1, value2 ) {
    return value1 / value2;
}
function sum ( value1, value2 ) {
    return value1 + value2;
}
function operations ( value1, value2, operation ) {
    switch ( operation ) {
        case 'subtraction': //разница
            return subtraction( value1, value2 );
        case 'multiplication': //произведение
            return multiplication( value1, value2 );
        case 'division': //деление
            return division( value1, value2 );
        case 'sum': //сумма
            return sum( value1, value2 );
    }
}
console.log( `Тип операции:  ${ operation } . Значение:  ${ operations( firstValue, secondValue, operation ) }.` );


//7. *Сравнить null и 0. Попробуйте объяснить результат.
console.log( null > 0 ); //false. Hестрогое равенство и сравнения > < >= <=  преобразуют null в число, рассматривая его как 0. Поэтому выражение  null >= 0 истинно, а null > 0 ложно.
console.log( null < 0 ); //false
console.log( null >= 0 ); //true
console.log( null == 0 ); //false . Тут  не разобралась и нужна помощь.
//Мой ответ 1 - для выражения null == 0 . 

console.log( null === 0 );
console.log( typeof null );
console.log( typeof 0 );
//Мой ответ 2 - для выражения null === 0 . NULL это объект, а 0 это число и именно по этой прочине строгое неравенство, которое учитывает типы данных отображает нам false.
//Эля почитай в будущем - https://habr.com/ru/company/ruvds/blog/337732/

//Задание 8.*С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function pow ( value, degree ) {
    if ( degree != 1 ) {
        return value *= pow( value, degree - 1 );
    } else {
        return value;
    }
}
console.log( pow( 2, 3 ) ); // 8

