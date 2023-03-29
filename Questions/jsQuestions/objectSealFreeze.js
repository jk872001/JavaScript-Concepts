let obj={
    firstName:"Jitesh",
    lastName:"Kumar"
}

// in object.seal we can edit the object but not able to add the new properties and delete the previous properties
Object.seal(obj)
obj.firstName="Yusuf";
obj.gender="Male"

console.log(obj);




let obj2={
    firstName:"Jitesh",
    lastName:"Kumar"
}

// in object.freeze we can only read the object
Object.freeze(obj2)
obj2.firstName="Yusuf";
obj2.gender="Male"

console.log(obj2);

