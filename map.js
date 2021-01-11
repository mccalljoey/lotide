
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function (eqArrays) {
  if (eqArrays === true) {
    console.log(" ✅✅✅ Assertion Passed: [actual] === [expected]");
  } else {
    console.log(" 🛑🛑🛑  Assertion Failed: [actual] !== [expected]");
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};