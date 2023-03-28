// shallow copy
let originalObj={
    a:1,
    b:{
        c:2
    }
}

let shallowCopy=Object.assign({},originalObj)
// shallowCopy.b.c=3

// it will also change the original object
// console.log(shallowCopy);
// console.log(originalObj);

// deep copy
let deepCopy=JSON.parse(JSON.stringify(originalObj));
deepCopy.b.c=3

console.log(deepCopy);
console.log(originalObj);