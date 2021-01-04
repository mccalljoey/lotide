// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion Passed: [actual] === [expected]")
  } else if (actual !== expected) {
    console.log(" 🛑🛑🛑  Assertion Failed: [actual] !== [expected]")
  }
};

// 🛑🛑🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
// ✅✅✅ Assertion Passed: 1 === 1

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);