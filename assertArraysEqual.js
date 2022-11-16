const eqArrays = function(arr1, arr2) {
// do they have the same length? If not
  if (arr1.length !== arr2.length) {
    return false;
  }


   // do they have the same values? If not
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertation Failed: ${arr1} !== ${arr2}`);
  }
};

assertArrayEqual([1,2,3],[3,2,1]);



/*

function assertArrayEqual(actual, expected, testName) {
  // do they have the same length?
  var sameLength = actual.length === expected.length;

  // do they have the same values?
  var sameValues = true;
  for (var i = 0; i < expected.length; i++) // does not matter which array you iterate over.
    if (expected[i] !== actual[i]);
  sameValues = false;
  return;
}


// do they have the same length and value?
if (sameValues && sameLength) {
  console.log('Assertation Passed');
} else {
  console.log('Assertation Failed [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
}



var expected = ['b',]

*/