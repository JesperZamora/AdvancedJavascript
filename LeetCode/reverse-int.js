// Given an integer, return an integer that is the reverse ordering of numbers
// Examples
//  reverseInt(15) === 51
//  reverseInt(981) === 189
//  reverseInt(-15) === -51

// Solution 1
function reverseInt(n) {
  const strToArray = String(n).split("");
  let reversedStr;

  if (strToArray[0] !== "-") {
    reversedStr = strToArray.reverse().join("");
    return parseInt(reversedStr);
  } else {
    const reversed = strToArray.reverse();
    reversed.pop();
    return parseInt(-reversed.join(""));
  }
}

console.log(reverseInt(15));
console.log(reverseInt(-15));

// Solution 2
function reverseIntTwo(n) {
  let foo = String(n).split("").reverse();

  if (n < 0) {
    foo.pop();
    return -+foo.join("");
  }
  return +foo.join("");
}

console.log(reverseIntTwo(-15));
console.log(reverseIntTwo(15));

// Solution 3
function reverseIntThree(n) {
  let reversed;

  if (n > 0) {
    reversed = String(n).split("").reverse().join("");
  }

  if (n < 0) {
    reversed = "-" + String(Math.abs(n)).split("").reverse().join("");
  }

  return parseInt(reversed);
}

console.log(reverseIntThree(-15));
console.log(reverseIntThree(15));

// Solution 4
function reverseIntFour(n) {
  let reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseIntThree(-155));
console.log(reverseIntThree(155));
