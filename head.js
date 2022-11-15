

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement

};


// Created a function "head" which returns the first item in the array!
function head(arr) {
  return arr[0]; // this returns the index 0 - the head or the first element from an array.
}

assertEqual(head([5, 6, 7]), 5); // The second argument is what "expected"
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5]), 5);