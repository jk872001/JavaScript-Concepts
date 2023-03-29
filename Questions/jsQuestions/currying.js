// there are two ways of creating curried function

// 1st one
// function multiply(x,y)
// {
//     console.log(x*y) 
// }

// const multiplyByTwo=multiply.bind(this,2);
// multiplyByTwo(5)
// const multiplyByThree=multiply.bind(this,3);
// multiplyByThree(5)

// 2nd way
function multiply(x)
{
    return function(y)
    {
       console.log(x*y)
    }
}

const multiplyByTwo=multiply(2)
multiplyByTwo(10)
const multiplyByThree=multiply(3)
multiplyByThree(10)

// Currying is a technique used in functional programming to transform a function that takes multiple arguments into a series of functions that take a single argument. In JavaScript, currying is achieved by returning a new function that partially applies the original function with one or more arguments.