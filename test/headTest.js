// const head = require('../head'); // commented out since we are converting to use Mocha and Chai and it includes the code.
const assertEqual = require('../assertEqual');


// converting headTest.js to use Mocha and Chai
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("should returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); // If put 5 instead of '5' >>> failed because '5' is not equal to 5 since we are doing "strictEqual"
  });
  it('should return 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5); // Pass
  });
  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Pass 
  });
});















///// Below are the Test Codes (We No Longer Need These; Keeping for reference only)
/*
assertEqual(head([5, 6, 7]), 5); // The second argument is what "expected"
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
*/