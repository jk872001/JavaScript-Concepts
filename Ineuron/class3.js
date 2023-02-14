// WelCome to JavaScript Lecture!
// Stage One will Be completed Today!

// Datatypes => number, string, boolean, Null and undefined.
// Array and Object

// OPerators
// Condtions
// If, If else, Switch and Ternary Cond
// Loops => do while, while loop and For Loop
// Math and Date
// Array and method => Assignment to write article
// for of  => Array and for in => Object

// Topic: Function

// function sum(value1, value2) {
//     // Defination of Function
//     // let num1 = 16;
//     // let num2 = 25;

//     console.log('Addition of Two Number are: ', value1 + value2);
// }

// sum(16, 25); // Calling of Funcrion
// sum(52, 61);
// sum(10, 11);
// sum(10, 20);
// sum(75, 85);
// sum(30, 67);
// sum(65, 54);
// sum(65, 66);

// Normal.function and  Function with parameters

// Function with Return type

// function sum(val1, val2) {
//     let result = val1 + val2;
//     return result;
// }

// let add = sum(10, 25);
// console.log(add);

// let add1 = sum(10, 43);
// console.log(add1);

// String
// function URL(url, domain) {
//     let con = 'https://';
//     let result = con + url + domain;
//     return result;
// }

// console.log(URL('anuragtiwari', '.me'));
// // console.log(anuragsite);
// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// let sumarray = [1, 2, 3, 4, 5, 6, 7, 9, 8];
// let arrresult = sum(sumarray);
// console.log(arrresult);

// function nihal() {
//     // arguments
//     console.log(arguments);
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     return sum;
// }

// console.log(nihal(7, 8, 9, 10, 11, 12, 14, 15));

// let jaimin = (var1, var2) => {
//     console.log('Me Bhagwan hu', var1, var2);
// };
// jaimin(1, 2);

// let manas = () => {
//     console.log('Manas');
// };

// manas();
// Object

let userName = {
    firstname: 'anurag',
    lastname: 'Tiwari',
    role: 'admin',
    loginCount: 25,
};

// console.log(userName.role);

// userName.loginCount = 61;

// console.log(userName);

// for in

for (const x in userName) {
    console.log(userName[x]);
}


const object = {
    rocket: '🚀',
    home: '🏡'
}

// string, number, bigint, boolean, null, undefine, symbol

const obj1 = {
    rocket: '🚀',
    fuel: 2,
    config: {
        name: 'mars'
    }
}

obj1.fuel = 200
obj1['year'] = 2000

// part 2

const obj2 = new Object() //constructor
obj2.redbook = '📕'
// obj2.1bluebook = '📘'
obj2.myValue = '1 blue book'

// console.log(obj2);

// part 3
const powers = {
    fly: true,
    cordinate: Math.random() + 2
}

const obj3 = Object.create(powers)
// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(Object.getPrototypeOf(obj3));

//part 4

const obj4 = Object.create({})
Object.defineProperty(obj4, 'book', {
    // icon: '📘'
    get: () => '📘',
    enumerable: true
})

// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

for(k in obj4){
    //console.log("value is: ", k);
}

//part 5
const obj5 = {
    comics : 'marvel',
    pen: '',
    printComic: function(){
        this.pen += '🖊️🗒️'
        console.log(this);
        return this;
    },
    // printaComic: () => {
    //     // this.pen += '🖊️🗒️'
    //     console.log(this);

    // },
    
}

console.log(obj5.printComic().printComic().printComic());
// console.log(obj5.printaComic());

let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"]


let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is peresent in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

myHeros.hitesh()

//inheritance 

const User = {
    name: "top name",
    email: "topuser@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TSAssistant = {
    makeAssignment: 'JS assigment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


// Goal: get truelength of string

let yourname = "pooja"

String.prototype.truelength = function(){
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}

let myname = "hitesh   "