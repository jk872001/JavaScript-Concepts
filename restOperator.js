function sum(a,b)
{
  console.log(a+b)  // 3
}
sum(1,2,3,4,5)

// here if we want other inputs as well in the function then we can use rest operator(...) which gives the remaining value in a form of an arr.

function sum2(...input)
{
    console.log(input)  // [1,2,3,4,5]
    console.log(...input)  // 1 2 3 4 5

    let total=0;
    for(let i of input)
    {
        total += i
    }
    console.log('total',total)
}
sum2(1,2,3,4,5)