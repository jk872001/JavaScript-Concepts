// 7;
// 2.5;
// // Number values

// ('anurag');
// ('anurag');
// // String Values

// true;
// false;
// // Boolean values

// null;
// undefined;

// // Empty values

// // Prmitive values / PDT => One Single Value

// // Array and Object

// [1, 2, 'Anurag', true, 'anurag',"Shivam","Swapnil"];
//  0, 1,  2          3       4, 5, 6 => Index

// {
//     fname:anurag,
//     lname:tiwari
// }

// // Non- primitive Data Types => Will More then one value

// Varibales => Place holder for value

// let x = 25;

// const z = '59890000000000'; // constant
// const balance = 999999999;

// let firstname = 'Anurag';
// let lastname = 'Tiwari';
// const mobileno = 9978899788;

// console.log('MY First name  is ' + firstname);
// console.log('My Last Name is', lastname);
// console.log(mobileno, firstname, lastname);

// Tempate Literal

// console.log(`My Current First Name is ${firstname} ${lastname} ${mobileno}`);
// History
// Basic Pillar of an programming Language
// Values
// Data Types
// Difference between Primitive and non primitive Datatypes
// Console.log => How to print something on terminal
// Decalring Variable
// Tempalte Literal

// Operator

// Assignment Operator

// let x = 11;
// let y = 10;

// Arthimatic Operator
// +, -, *. /, (% => Remainder)
// let z = x + y;
// console.log(z);

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// Comparison Op

// let abc = 10;
// let xyz = '10';

// console.log(abc > xyz);
// console.log(abc <= xyz);
// console.log(abc >= xyz);

// == or ===

// console.log(abc === xyz);

// let y;
// // y = 10;
// console.log(y);

// const accno = 5958900000;

// Conditions

let Standard = 7;

if (Standard == 1) {
    console.log('Room One');
} else if (Standard == 2) {
    console.log('Rome Two');
} else if (Standard == 3) {
    console.log('Room Number 3');
} else {
    console.log('You are Principal');
}


// -------------------------------------- \\

// Conditions

// If Else
// switch case
// Ternary Op / ternary Conditions

// Rating mini App

// let rating = 7;

// if (rating == 5) {
//     console.log('5 Stars');
// } else if (rating == 4) {
//     console.log('4 Stars');
// } else if (rating == 3) {
//     console.log('3 Stars');
// } else {
//     console.log('i am else');
// }

//  Switch Case

// let user = 'Admin';

// switch (user) {
//     case 'Admin':
//         console.log('Redirect Him/Her to the Admin Page');
//         break;
//     case 'Mentor':
//         console.log('Redirect Him/Her to the Mentor Dashboard');
//         break;
//     default:
//         console.log('I am Simple User');
// }

// ternary Opeartor / Ternary Condition

// Condition?True:Flase

// let userlogin = true;

// userlogin ? console.log('logout') : console.log('login');
// Condition ? True : False;

// Array

// let name = [
//     'Anirudh',
//     'Anurag',
//     'Shubham',
//     'Bishal',
//     'Pooja',
//     'santosh',
//     'Prajwal',
//     'Monika',
//     'Pritam',
// ];

// console.log(name);
// console.log(name[6]);

// Object

// let backaccount = {
//     firstName: 'Nabeela',
//     lastName: 'laStname',
//     mobileno: 9978899788,
//     balance: 99999999900099,
// };

// console.log(backaccount);
// console.log(backaccount.balance);

// Date and Math

// const now = new Date();
// console.log(now.toString());

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());

// console.log(now.getTime());

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// Math

// const PI = Math;
// console.log(PI);

// console.log(Math.round(PI));
// console.log(Math.round(9.4));
// console.log(Math.floor(9.5));
// console.log(Math.ceil(9.5));

// min and max

// console.log(Math.min(10, 1, 2, 3, 5));
// console.log(Math.max(10, 1, 2, 3, 5));

// Random

// console.log(Math.round(Math.random() * 51)); // 0 - 0.99999999999 (0-1)

//

// console.log(Math.pow(3, 3));

// console.log(Math.log(2));

// console.log(Math.sin(90));

// Loops
// do while, while, for

// let i = 6;
// do {
//     console.log('Value of i is :', i);
//     i++;
// } while (i <= 5);

// let j = 6;

// while (j <= 5) {
//     console.log('Value of J is ', j);
//     j++;
// }

// for

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}

