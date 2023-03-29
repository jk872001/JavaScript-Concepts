let obj1={
    firstName:"Jitesh",
    lastName:"Kumar"
}
function printName(hometown)
{
    console.log(this.firstName + " " + this.lastName + " from " + hometown);
}

// printName.call(obj1,"Haryana")
// printName.apply(obj1,["Haryana"])

const useLater=  printName.bind(obj1,"Haryana")
useLater();
