const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');



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
