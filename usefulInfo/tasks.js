// const obj = {};
// const obj = new Object();
// console.log(obj);
// function getPropName(some) {
//     return 'testing prop ' + some;
// }
//
// const myCar = {
//     manufacture: 'Toyota',
//     color: 'black',
//     ['prop:with-spaces']: 123,
//     [getPropName('myProp')]: 2345,
// }
// myCar.test = 'test';
//
// // console.log(myCar.manufacture);
// // console.log(myCar['prop:with-spaces']);
// // console.log(myCar[getPropName('myProp')]);
//
// myCar.manufacture = 'BMW';
// delete myCar.color;
// console.log(myCar);

// const myCar = {
//     manufacture: 'Toyota',
//     color: 'black',
//     engine: {
//         power: 300,
//         code: 'XXXX',
//     },
//     possibleColors: ['black', 'white', 'red', 'blue'],
//     // beep: function () {
//     //     console.log('Beep!');
//     // }
//     beep(txt) {
//         console.log('Beep!' + txt);
//     },
//     [Symbol.iterator]: function* () {
//         for (const prop in this) {
//             yield this[prop];
//         }
//     }
// };

// myCar.beep('test');

// myCar.possibleColors.forEach((color) => {
//     console.log(color);
// });

// const keys = Object.keys(myCar);
//
// console.log(keys);
// keys.forEach((key) => {
//     console.log(myCar[key]);
// });

// for (const prop in myCar) {
//     console.log(myCar[prop]);
// }
// for (const value of myCar) {
//     console.log(value);
// }

// let a = 1;
//
// function inc(a) {
//     a++;
//     console.log(a);
// }
//
// inc(a);
//
// console.log(a);
//
// let obj = {
//     num: 5,
// };
//
// function inc(a) {
//     console.log(a === obj);
//     a.num++;
// }
//
// inc(obj);
//
// console.log(obj.num);

// function getObject(num) {
//     return {
//         number: num,
//         getNumber() {
//             // console.log(this);
//             return this.number;
//         }
//     }
// }
//
// const myObject = getObject(100);
// const myGetNumber = myObject.getNumber;

// console.log(myGetNumber());
// const myObject2 = getObject(12);
//
// console.log(myObject);
// console.log(myObject2);
// console.log(myObject === myObject2);

// console.log(myObject.getNumber());

// let myArray = [ 0, 1, 2, 3, 4 ];
// console.log( myArray );
// let value = myArray.reduce( ( prev, curr ) => prev + curr );
// console.log( myArray );
// console.log( value );
// [ 0, 1, 2, 3, 4 ]
// [ 0, 1, 2, 3, 4 ];
// 10
