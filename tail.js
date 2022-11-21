let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement

};
// the actual === expected is NOT going to work because???
//
const tail = function(array) {
  if (array.length > 1) { //
    return array.slice(1);
  }
};


module.exports = tail;










/////////////////////// Below are Test Codes! exported to test/testTail.js

/*

const result = tail(["Hello", "Lighthouse", "Labs"]); // First we provided an array for the tails
assertEqual(result.length, 2); // Tested to see if the actual vs expected is TRUE (yes)
assertEqual(result[0], "Lighthouse"); // Tested to see if the first element of the tail array is "Lighthouse" (yes)
assertEqual(result[1], "Labs");
assertEqual(result[0], "Labs"); // This is FALSE thus, it is !==
*/