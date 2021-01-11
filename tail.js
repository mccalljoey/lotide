const assertEqual = require('./assertEqual');
const head = require('./head');


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

module.exports = tail;