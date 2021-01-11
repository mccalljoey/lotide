const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion Passed: [actual] === [expected]")
  } else if (actual !== expected) {
    console.log(" 🛑🛑🛑  Assertion Failed: [actual] !== [expected]")
  }
};


const eqObjects = function (object1, object2) {
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  if (objectOneKeys.length === objectTwoKeys.length) {
    for (const keys of objectOneKeys) {
      if (object1[keys].isArray) {
        if (eqArrays(object1[keys].object2[keys])) {
          return false;
        }
      } else {
        if (object1[keys] !== object2[keys]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

let eqArrays = function (a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        false;
      }
    }
    return true;
  } else {
    return false;
  }
};