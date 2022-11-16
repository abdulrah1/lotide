let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement

};


// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match

/*

var eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
*/



const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      // if it is an array && the arrays are not equal then return false;
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      // if the element is not an array and the items are not equal then return false
      return false;
    }
  } 
  return true;
};






// Tests

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);