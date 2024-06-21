/***
 * Implicit binding - When a function is invoked with a dot notation. The object to its left i was the "this" keyword is referencing too.
 */
const person = {
  name: "Jesper",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};
// person.sayMyName();

/***
 * Explicit binding - Every function in JavaScript has build-in function called "call", which allows you to specify the context with which a function is invoked.
 */
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
// sayMyName.call(person);

/**
 * New Binding - The "New" keyword creates an empty object inernally and the "this" is used for reference the properties in he new empty object.
 */
function Person(name) {
  // this = {}
  this.name = name;
}

// const p1 = new Person("Jesper");
// const p2 = new Person("Alice");

/**
 * Default binding - If not argument is passed when invoking the "sayMyNname" function. JavaScript will default to the global scope and look for a variable called "name" and if nothing is found it will be undefined.
 */

globalThis.name = "Superman"
sayMyName();