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