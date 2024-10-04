// 1.What are the different data types present in javascript?
// To know the type of a JavaScript variable, we can use the typeof operator.

// 1. primitive types :

// console.log(typeof "John Doe")
'jitesh'          // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
// console.log(Number.MAX_SAFE_INTEGER); 
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol

const symb1= Symbol(11)
const symb2= Symbol(11)

// console.log(symb1==symb2)

// 2.Non-primitive types

// Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.
// Object - Used to store collection of data.
// Array

// Example:
// Collection of data in key-value pairs

var obj1 = {
   x:  43,
   y:  "Hello world!",
   z: function(){
      return this.x;
   }
}

// console.log(obj1.y)
      
let shivani1={
   name:"shivani",
   age:24,
   bf:false,
   attitude:234567890123456789012345678901234567890n,
   career:undefined,
   brain:null

}


// Collection of data as an ordered list
     
var array1 = [5, "Hello", true, 4.1];
// console.log(typeof array1) 

// Note- It is important to remember that any data type that is not a primitive data type, is of Object type in javascript.

// 2. Explain Hoisting in javascript.
// console.log(Number.MAX_SAFE_INTEGER+1); 


let a;
a=2
// console.log(typeof a)

let b=null

let shivani2={
    name:"shivani",
    age:24,
    bf:false,
    attitude:234567890123456789012345678901234567890n,
    career:undefined,
    brain:null
 
 }

//  console.log(shivani.name);

// const arr=["jitesh",22,shivani]
// console.log(arr);