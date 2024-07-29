const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "King");
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Queen");
});

Promise.all([myPromise1, myPromise2]).then((x) => {
  console.log(x);
}).catch((error)=>console.log(error))

promiseAllPolyfill([myPromise1, myPromise2]).then((value)=>{
    console.log(value)
}).catch(error=>console.log(error))


function promiseAllPolyfill(tasks) {
  let result = []
  let promiseCompleted = 0

  return new Promise((resolve,reject)=>{
     tasks.forEach((promise,index)=>{
        promise.then((value)=>{
            result[index] = value
            promiseCompleted++
            if(promiseCompleted === tasks.length) resolve(result)
        }).catch((error)=>reject(error))
     })
  })
}


