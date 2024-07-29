const checkMail = new Promise((resolve,reject)=>{
    if(Math.random() > 0.5){
        resolve("Mail received")
    }else{
        reject("Mail not recieved")
    }
})

checkMail.then(value=>{
    console.log(value);
}).catch(error=>{
    console.log(error)
}).finally(()=>{
    console.log("Execution completed")
})