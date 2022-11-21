
const assertEqual = require('./assertEqual');



// Created a function "head" which returns the first item in the array!
const head = function(arr) {
  return arr[0]; // this returns the index 0 - the head or the first element from an array.
}


module.exports = head;


////////////////////// Below are Test Codes


// These test codes are moved to test/headTest.js
/*
assertEqual(head([5, 6, 7]), 5); // The second argument is what "expected"
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5]), 5);
*/