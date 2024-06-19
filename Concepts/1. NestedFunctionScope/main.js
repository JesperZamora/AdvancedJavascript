/**
 * How it works? JavaScripts looks up the variables within the scope. If we look 'c' in the log statement. It will first look at its inner function scope. When looking up 'b', it will check the inner function scope and if not found, it will move a level up to the outer function scope where 'b' is declared. Same goes from 'a' and since it is not present in the inner nor the outer function scope, it will go a level up to the global scope. This is also called lexical scoping and describe how JavaScript results variables when functions are nested.
 * 
 * Functions has therefore access to variables declared in their own scope and outer scope.
 */
let a = 10;

function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}

outer(); // Output: 10 20 30
