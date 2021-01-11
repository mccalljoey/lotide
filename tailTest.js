const assertEqual = require('./assertEqual');
const head = require('./head');
const tail = require('./tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 3);
  });
});