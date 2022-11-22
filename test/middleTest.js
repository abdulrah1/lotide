const middle = require('../middle'); // returns the expected in an array
const assertArraysEqual = require('../assertArraysEqual'); // not going to need this anymore
const assert = require('chai').assert;




// Note that for comparing arrays, Chai gives us assert.deepEqual, because assert.strictEqual simply uses === to compare values, 
// which will not work for comparing objects and arrays.

// add tests only pass

describe("#Codes That Pass", () => {
  it("expect [25, 30] to return for '[10, 25, 30, 40]'", () => {
    assert.deepEqual(middle([10, 25, 30, 40]), [25, 30]); // The assert.deepEqual compares objects and arrays | Pass
  });
  it("expect ['Lighthouse'] to return for '['Hello', 'Lighthouse', 'Labs']'", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']); // Pass
  });
  it("expected [10, 25, 30, 40, 60] to be different than [30]", () => {
    assert.notDeepEqual(middle([10, 25, 30, 40, 60]), [40]); // notEqual (notDeepEqual) will FAIL if actual EQUALs expected; it will PASS if not equal
  })
});

// How to Do Codes that Fail?








/////////////////////// Below are test codes; no longer needed; keeping for reference only!
// assertArraysEqual(middle([10, 25, 30, 40]), [25, 30]); // PASS
// assertArraysEqual(middle([10, 25, 30, 40, 60]), [25]); // FAIL
// assertArraysEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']); // PASS
// assertArraysEqual(middle([10, 25, 30, 40]), [25, 10, 30, 40]); // FAIL


