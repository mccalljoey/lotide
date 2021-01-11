const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');


describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 2);
  });
});
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]