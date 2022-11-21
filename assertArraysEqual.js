const eqArrays = require('./eqArrays');


// the arrays must be the exact same
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`);
  }
};



module.exports = assertArraysEqual;




////////////////////// Below is a test code

/*

assertArraysEqual([1,2,3],[1,2,3]); // Pass
assertArraysEqual([5,3,6,4],[3,4,5,6]); // Fail
assertArraysEqual(['Hello','Lighthouse', 'Labs'],["Hello", 'Lighthouse', 'Labs']); // Pass
*/


