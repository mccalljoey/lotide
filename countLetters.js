const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion Passed: [actual] === [expected]")
  } else if (actual !== expected) {
    console.log(" 🛑🛑🛑  Assertion Failed: [actual] !== [expected]")
  }
};

const countLetters = function (string) {
  let letterObj = {};
  const stringArray = string.split(" ").join("");
  for (let letter of stringArray) {
    if (letterObj[letter] === null) {
      return letterObj;
    }
    if (letterObj[letter]) {
      letterObj[letter] += 1;
    } else {
      letterObj[letter] = 1;
    }
  }
  return letterObj;
};