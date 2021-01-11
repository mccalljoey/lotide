const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion Passed: [actual] === [expected]")
  } else if (actual !== expected) {
    console.log(" 🛑🛑🛑  Assertion Failed: [actual] !== [expected]")
  }
};

const head = function (arr) {
  if (!arr || arr.length === 0) return;
  return arr - arr[0]
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

module.exports = tail;