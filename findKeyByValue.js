const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion Passed: [actual] === [expected]")
  } else if (actual !== expected) {
    console.log(" 🛑🛑🛑  Assertion Failed: [actual] !== [expected]")
  }
};

const findKeyByValue = function (object, value) {
  // let type = [keys].value
  for (const key of Object.keys(object)) {
    if (value == object[key]) {
      return key
    }
  }
}