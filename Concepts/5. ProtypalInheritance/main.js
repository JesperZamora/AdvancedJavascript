function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

function Superhero(fName, lName) {
  Person.call(this, fName, lName); // Inheritance
  this.isSuperHero = true;
}

Superhero.prototype.fightCrime = function () {
  console.log("Fighting Crime");
};

/**
 * Prototypal Inheritance - This allows the object to inherite the functions of another object.
 */
Superhero.prototype = Object.create(Person.prototype);

const batman = new Superhero("Bruce", "Wayne");
Superhero.prototype.contructor = Superhero;
console.log(batman.getFullName());

// const p1 = new Person("Bruce", "Wayne");
// const p2 = new Person("Clark", "Kent");
// console.log(p1.getFullName());
// console.log(p2.getFullName());
