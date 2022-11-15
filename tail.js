let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement

};

function tail (array) {
  if (array.length > 1) {
    return array.slice(1);
  }
}

assertEqual(tail([1,2,3,4]), ([2,3,4]))
