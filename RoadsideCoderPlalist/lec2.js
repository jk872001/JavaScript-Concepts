// Map-Filter-Reduce

// Map--> It is a hof that is gives a new arr by performing some action on previous arr and it takes a callback function that has three parameters (current element,index,previous arr)

// const arr1=[1,2,3,4,5];
// const arr2= arr1.map((curr,i,arr1)=>
// {
//     return curr*2;
// });
// console.log(arr2);  // [ 2, 4, 6, 8, 10 ]

// Filter

// const arr1=[1,2,3,4,5];
// const arr2= arr1.filter((curr,i,arr1)=>
// {
//     return curr>2;  //condition
// });
// console.log(arr2);  // [ 3, 4, 5 ]

// Reduce--> It is used to reduce the all the value of arr to a single value

// const arr1=[1,2,3,4,5];
// const arr2= arr1.reduce((acc,curr,i,arr1)=>
// {
//     return acc+curr;
// },0);
// console.log(arr2);  // 15

// Custom Map function
// referrence
// Array.map((curr,i,arr)=>{})

// Array.prototype.myMap = function(cb)
// {
//   let temp=[];  //because map returns a new arr
//   for(let i=0;i<this.length;i++)
//   {
//     temp.push(cb(this[i],i,this))
//   }
//   return temp;
// }

// const arr1=[1,2,3,4,5];
// const arr2= arr1.myMap((curr,i,arr1)=>
// {
//     return curr*2;
// });
// console.log(arr2);  // [ 2, 4, 6, 8, 10 ]

// Custom Filter function
// referrence
// Array.filter((curr,i,arr)=>{})

// Array.prototype.myFilter = function(cb)
// {
//   let temp=[];  //because filter returns a new arr
//   for(let i=0;i<this.length;i++)
//   {
//     if(cb(this[i],i,this)) temp.push(this[i])

//   }
//   return temp;
// }

// const arr1=[1,2,3,4,5];
// const arr2= arr1.myFilter((curr,i,arr1)=>
// {
//     return curr>2;  //condition
// });
// console.log(arr2);  // [ 3, 4, 5 ]

// Custom Reduce function
// referrence
// Array.reduce((acc,curr,i,arr)=>{},initialValue)

// Array.prototype.myReduce = function(cb,initialValue) {
//   let acc = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i], i, this) : this[i];
//   }
//   return acc;
// };

// const arr1=[1,2,3,4,5];
// const arr2= arr1.myReduce((acc,curr,i,arr1)=>
// {
//     return acc+curr;
// },0);
// console.log(arr2);  // 15


// Diff between map and forEach
// map returns a new arr but forEach makes change in the original arr 
// we can use chaning in map but not in case of forEach

// O/P questions

let students=[
    {name:"jitesh",age:21,salary:6},
    {name:"preeti",age:25,salary:10},
    {name:"grazzy",age:20,salary:8}
]

// return the name in uppercase
// const ans= students.map((curr,i,arr)=> curr.name.toUpperCase());
// console.log(ans);  // [ 'JITESH', 'PREETI', 'GRAZZY' ]

// return whose salary>8 and age>21
// const ans=students.filter((curr)=>curr.salary>8 && curr.age>21).map((curr)=> curr.name);
// console.log(ans); // [ 'preeti' ]

