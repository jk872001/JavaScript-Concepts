// array

// const myArr = [ 1, 2, 3, 4, "a",true ,'1239']
const myHeors = ["shaktiman", "naagraj",["jitesh","nidhi"]]

// myHeors[1]="jitesh"
// console.log(myHeors)

// console.log(myArr[myArr.length-1])

// const strFromArr=myHeors[0]
// console.log(strFromArr[3])   

// console.log(myHeors[0][3])

// console.log(myHeors[2][0][3]) 

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)

// myArr.pop()


// myArr.unshift(9)


// myArr.shift()

// myArr.pop().shift()  // not possible
// myArr.push(7).unshift(-1)



// console.log(myArr.includes(9));

// console.log(myArr[myArr.length-1].includes(9))

// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(typeof myArr.join())

// console.log(myArr);
// console.log(typeof newArr);


// Assignment
// write an example of all the methods  above
// draw a chart for stack heap logic






// slice, splice

// console.log("A ", myArr);

const myArr = [ 1, 2, 3, 4, "a",true ,'1239']


const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

// slice does not change the original arr but in splice the original arr changes and splice part cut down from the original arr

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const indianHero=["shaktiman","nagaraj"]
// ["thor", "Ironman", "spiderman","superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);

// spread operator

const all_new_heros = [...marvel_heros, ...dc_heros,...indianHero,"shivani"]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]],"string"]

// console.log(typeof another_array)

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Jitesh"))

// console.log(Array.isArray(another_array))

// console.log(Array.from("Jitesh"))

// console.log(Array.from(another_array))

// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// console.log(Array.of(dc_heros,marvel_heros));



// assignment
// write three ways of adding the two arrays