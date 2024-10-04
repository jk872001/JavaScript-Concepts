Array.prototype.myFilter = function (callback, thisArg) {
  // Create an array to store the filtered results
  const result = [];
  const array = Object(this); // Convert `this` to an object if it's not already
  const length = array.length >>> 0; // Ensure `length` is a non-negative integer
  for (let i = 0; i < length; i++) {
    const value = array[i];
    if (callback.call(thisArg, value, i, array)) {
      result.push(value);
    }
  }
  return result;
};

let res = [1, 2, 3].myFilter((ele) => ele > 1);
console.log(res);
