/**
 * In JavaScript, when we return a function from another function, we return a combination of the function definition along with the function scope. This would let function definition have an associated persistent memory which can hold data between executions.
 * 
 * So basicly the reference to 'counter' variable in memory and the function itself is returned. And the returned function has access to the variables in its outer scope.
 */

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const fn = outer();
fn(); // Output: 1
fn(); // Output: 2