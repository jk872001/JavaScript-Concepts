// In JavaScript, a higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. Higher-order functions are commonly used in functional programming and can be a powerful tool for creating more concise, modular, and reusable code.

// Here's an example of a higher-order function that takes a function as an argument:
function greet(name, sayHelloFunc) {
    return sayHelloFunc(name);
  }
  
  function sayHello(name) {
    return `Hello, ${name}!`;
  }
  
  const message = greet('John', sayHello);
  
  console.log(message); // Output: "Hello, John!"


// In this example, we have a function called greet that takes two arguments: a name and a function called sayHelloFunc. The greet function calls the sayHelloFunc function and passes in the name as an argument. The sayHello function simply returns a string greeting message with the given name.

// We then call the greet function and pass in the sayHello function as the sayHelloFunc argument. The greet function executes the sayHello function with the name argument and returns the result, which we store in the message variable.

// The greet function is a higher-order function because it takes a function as an argument and uses it to modify its behavior. In this case, the sayHello function is used to generate the greeting message.

// Here's an example of a higher-order function that returns a function as its result:
  
function multiplyBy(num) {
    return function(x) {
      return x * num;
    }
  }
  
  const double = multiplyBy(2);
  
  console.log(double(5)); // Output: 10
  console.log(double(10)); // Output: 20

//   In this example, we have a function called multiplyBy that takes a number as an argument and returns a new function that multiplies its argument by the given number. We then call the multiplyBy function with an argument of 2 and store the returned function in a variable called double.

// We can then use the double function to multiply any number by 2 by calling it with a single argument. In this example, we call the double function with arguments of 5 and 10, which return the values 10 and 20, respectively.

// The multiplyBy function is a higher-order function because it returns a function as its result, which can be used to modify behavior in different ways. In this case, the returned function is used to multiply numbers by a given factor.