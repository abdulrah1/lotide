const assertArraysEqual = require('./assertArraysEqual');




// Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(array) {
  // middle function should return an array with only the middle element(s) of the provided array.
  let middleArr = [];
  let middleIndex = array.length / 2;

  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length === 1 || array.length === 2) {
    middleArr = [];

    // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  } else if (array.length % 2 === 0) {
    
    middleArr = [array[middleIndex - 1], array[middleIndex]]; //
  }
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  else {
    middleArr = [array[Math.floor(middleIndex)]];

  }
  return middleArr; // returns it in an array
};



module.exports = middle;







/////////////////////// Below are test codes:
/*
assertArraysEqual(middle([10, 25, 30, 40]), [25, 30]); // PASS
assertArraysEqual(middle([10, 25, 30, 40, 60]), [25]); // FAIL
assertArraysEqual(middle(['Hello','Lighthouse', 'Labs']), ['Lighthouse']); // PASS
assertArraysEqual(middle([10,25,30,40]),[25,10,30,40]); // FAIL
*/

