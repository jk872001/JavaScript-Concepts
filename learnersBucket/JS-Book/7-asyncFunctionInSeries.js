const asyncTask = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${num}`), 1000 * num);
  });
};

let promises = [asyncTask(3), asyncTask(5), asyncTask(2)];

asyncSeriesExecuter(promises);

// Async/await approach
// async function asyncSeriesExecuter(promises){
//     try{
//        for(let promise of promises){
//         let res = await promise
//         console.log(res);
//        }
//     }catch(error){
//         console.log(error)
//     }
// }

// recursive approach
// async function asyncSeriesExecuter(promises){
//     let promise = promises.shift()
//     promise.then(data=>{
//         console.log(data)
//         if(promises.length > 0) asyncSeriesExecuter(promises)
//     });

// }

// Array.reduce()
async function asyncSeriesExecuter(promises) {
  promises.reduce((acc, curr) => {
    return acc.then(() => {
      return curr.then((val) => console.log(val));
    });
  }, Promise.resolve());
}
