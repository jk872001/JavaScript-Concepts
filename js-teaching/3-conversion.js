// stack or heap


// string --> number
let score = "jitesh"

// console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)   
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (not a number)
//  true => 1; false => 0

// console.log(Number(true))



let isLoggedIn = "jitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// console.log(Boolean(123))

// 1 => true; 0 => false
// "" => false
// "jitesh" => true

let someNumber = 33



let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**4);  (2*2*2*2)= 16
// console.log(2/3);
// console.log(5%3); --> 2

let str1 = "hello"
let str2 = " jitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);  //("1" + 2 ==> "12" + 2 ==> "122") 
// console.log(1 + 2 + "2");
// console.log(1 + "2" + 2);

// console.log( (3 + 4) * 5 % 3);

// if we want to change anything into number then there is 2 ways (Number || + )

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 + 3

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

let a=5;

let b= ++a;
// ++a
// let b=a

let c= a++; 
// let c=a
// a++

// console.log(c)
// console.log(b)
// console.log(a)

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion