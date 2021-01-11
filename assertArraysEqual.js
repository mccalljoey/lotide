const eqArrays = require('./eqArrays');


const assertArraysEqual = function (eqArrays) {
  if (eqArrays === true) {
    console.log(" ✅✅✅ Assertion Passed: [actual] === [expected]");
  } else {
    console.log(" 🛑🛑🛑  Assertion Failed: [actual] !== [expected]");
  }
};

module.exports = assertArraysEqual;