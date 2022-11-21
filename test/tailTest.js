const tail = require('../tail');
const assert = require('chai').assert;
const assertEqual = require('../assertEqual'); // do not need this anymore

const result = tail(["Hello", "Lighthouse", "Labs"]); // First we provided an array for the tails




describe("#tail", () => {

  it("should return 2 for result.length", () => {
    assert.deepEqual((result.length), 2); // PASS
  });
  it("should return 'Lighthouse' for result[0]'", () => {
    assert.deepEqual((result[0]), 'Lighthouse'); // Pass
  });
  it("should return 'Labs' for result[1]", () => {
    assert.deepEqual((result[1]), "Labs"); // Pass 
  });
});




// Below are the Test Codes!

// assertEqual is NOT going to work for plurals (e.g., numbers, arrays)
  // e.g., assertEqual(tail([1,2,3,4]), [2,3,4]) // >>> FAIL because plural and assertEqual cannot work!




// assertEqual(result.length, 2); // Tested to see if the actual vs expected is TRUE (yes)
// assertEqual(result[0], "Lighthouse"); // Tested to see if the first element of the tail array is "Lighthouse" (yes)
// assertEqual(result[1], "Labs");
// assertEqual(result[0], "Labs"); // This is FALSE thus, it is !==
