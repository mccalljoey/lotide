const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
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


const letterPositions = function(sentence) {
  const results = {};
  const noSpaceSentence = sentence.split(" ").join("");
  
  for (let i = 0; i < noSpaceSentence.length; i++) {
      if(!results[noSpaceSentence[i]]) {
        results[noSpaceSentence[i]] = [i];
      } else {
        results[noSpaceSentence[i]].push(i); 
      }
    }
    return results;
  }

const testResult = letterPositions("hello")
console.log(testResult.e, [1])

// console.log(letterPositions("woop woop"))

assertArraysEqual(eqArrays(letterPositions("hello")["e"], [1]));