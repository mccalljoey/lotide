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


const middle = function (arr) {
  arr.sort();
  let midIndex = Math.floor(arr.length / 2);
  let midEvenIndex = Math.floor(arr.length / 2) + 1
  if ((arr.length % 2) === 0) {
    return `${midIndex}, ${midEvenIndex}`
  } if (arr.length == 1) {
    return ""
  } else {
    return (arr[midIndex]);
  }
};

module.exports = middle;
