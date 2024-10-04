
function sayMyName(){
    console.log("J");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3, 5)   //8

// console.log("Result: ", result);
// console.log("Result: ", addTwoNumbers(3, 5));


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("jitesh"))


function calculateCartPrice(val1, val2,val3, ...val){
    return val
}

// console.log(calculateCartPrice(200, 400, 500, 2000,444,656,2324,7645,1223))

const user = {
    username: "jitesh",
    prices: 199
}

function handleObject(anyobject){
    // anyobject={
    //     username: "jitesh",
    //     prices: 199
    // }
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     prices: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    // getArray=[200, 400, 500, 1000]
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));