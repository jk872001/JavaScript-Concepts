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

Array.prototype.myMap = function(cb)
{
  let temp=[];  //because map returns a new arr
  for(let i=0;i<this.length;i++)
  {
    temp.push(cb(this[i],i,this))
  }
  return temp;
}

const arr1=[1,2,3,4,5];
const arr2= arr1.myMap((curr,i,arr1)=>
{
    return curr*2;
});
console.log(arr2);  // [ 2, 4, 6, 8, 10 ]
