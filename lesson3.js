// 1.
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// let number = 0;
//  while ( number <= 100 ) {
//      console.log( number );
//      number++;
//  }
//  В первый раз некорректно поняла задание и поэтому есть второй вариант реализации c помощью вашего решения.
//  Пока i меньше 100, будем перебирать все числа и проверять их, являются ли они простыми.
//  Простые числа, это числа больше 1, делящиеся без остатка только на 1 и на само себя.
//  Начинаем с нуля
//  let i = 0;
//  while ( i < 100 ) {
//      // Если число простое - выводим его.
//     if ( isPrimeNumber( i ) ) {
//          console.log( i );
//      }
//      i++;
//   }
//  function isPrimeNumber ( number ) {
//      if ( number < 2 ) {
//          return false;
//      }
//     for ( let i = 2; i <= Math.sqrt( number ); i++ ) {
//         if ( number % i === 0 ) {
//              return false;
//          }
//      }
//      return true;
//  }


//  2.
//  После этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.Товары в корзине хранятся в массиве.Задачи:
//  a) Организовать такой массив для хранения товаров в корзине;
//  b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины;
//  let basket = [
//     [ 'Яблоко', 150, 3 ],
//     [ 'Апельсин', 69, 9 ],
//     [ 'Груша', 70, 7 ],
//     [ 'Слива', 30, 4 ]
//   ];
//  Вариант через for
//  function countBasketPrice(basket) {
//    let totalPrice = 0;
//    for (let i = 0; i < basket.length; i++) {
//      totalPrice += basket[i][1] * basket[i][2];
//    }
//   return totalPrice;
//  }
//  Вариант через forEach
//  function sumPrice ( basket ) {
//     let totalPrice = 0;
//     basket.forEach( ( cartItem ) => {
//         totalPrice += cartItem[ 1 ] * cartItem[ 2 ];
//     } );
//     return totalPrice;
//    }
//   function countBasketPrice ( basket ) {
//     return basket.reduce( ( totalPrice, cartItem ) => { totalPrice + cartItem[ 1 ] * cartItem[ 2 ], 0; } );
//   }
// console.log( countBasketPrice( basket ) );
// console.log( sumPrice( basket ) );


// 3.
// Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла;
// for ( let value = 0; value < 10; console.log( value ), value++ ) { }


// 4.
// Нарисовать пирамиду с 20 рядами с помощью console.log
// let sign = "X";
// for ( let i = 0; i < 20; i++ ) {
//     console.log( sign + "\n" );
//     sign += "X";
// }