// Given a string, return a new string with the reversed order of characters
// Examples
//  reverse("hi") === "ih"
//  reverse("hello") === "olleh"

const strOne = "hi";
const strTwo = "hello";
const strThree = "This is a string";

// Solution 1
function reverse(str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr;
}

console.log(reverse(strOne));
console.log(reverse(strTwo));
console.log(reverse(strThree));

// Solution 2
function reverseTwo(str) {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}

console.log(reverseTwo(strThree));


// Solution 3
function reverseThree(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

console.log(reverseThree(strThree));
