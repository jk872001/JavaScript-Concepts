let obj={
    name:"nidhi",
    age:24,
    isMarried:false
};

let convertToStr= JSON.stringify(obj)
// console.log(typeof convertToStr)

let covertToObj= JSON.parse(convertToStr)
// console.log(covertToObj)
// console.log(typeof covertToObj)

// console.log(JSON.parse("Nidhi")) // not possible will return error
