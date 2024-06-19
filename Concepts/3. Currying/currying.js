/**
 * Currying is a technique in which we can transoform a function with multiple arguments into a sequence og nested functions that take one argument at a time.
 */

function sum(a, b, c) {
  return a + b + c;
}

console.log("Sum:", sum(2, 3, 5));

// sum(2, 3, 5); => sum(2)(3)(5);
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log("Curried Sum:", curriedSum(2)(3)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add3);


