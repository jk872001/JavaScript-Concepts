const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "King");
  });
  
  const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Queen");
  });
  
  
  Promise.any([myPromise1, myPromise2]).then((x) => {
    console.log(x);
  }).catch((error)=>{
    console.log(error)
  })
  
  promiseAnyPolyfill([myPromise1, myPromise2]).then((value)=>{
      console.log(value)
  }).catch(error=>console.log(error))
  
  
  function promiseAnyPolyfill(tasks) {
    let promiseError = []
    let counter = 0

    return new Promise((resolve,reject)=>{
        tasks.forEach((promise,index) => {
            promise.then((value)=>resolve(value))
            .catch(error=>{
                promiseError[index] = error
                counter++
                if(counter === tasks.length) reject(new AggregateError(promiseError,"All promise were rejected"))
            })
        });
    })
  }
  
  
  