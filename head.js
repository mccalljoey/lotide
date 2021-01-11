const assertEqual = require('./assertEqual');


const head = function (arr) {
  if (!arr || arr.length === 0) return;
  return arr[0]
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;