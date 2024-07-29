const p1 = Promise.resolve(1);
const p2 = Promise.reject('error');
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.allSettled([p1,p2,p3]).then(val=>{
    console.log(val);
})

promiseAllSettled([p1,p2,p3]).then(val=>{
    console.log(val);
})

function promiseAllSettled(promises){
      let mapAllPromises = promises.map((p)=>{
         return Promise.resolve(p).then(
            val => ({status:"fulfilled",value:val}),
            err => ({status:"rejected",error:err})
         )
      })

      return Promise.all(mapAllPromises)
}