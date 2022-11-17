
let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement

};



// findKeyByValue which takes in an object and a value.

// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(anObject, aValue) {

  ///object.key takes the object (anObject) returns the object's keys as an array.

  const keys = Object.keys(anObject); // to use this must do for...of loop

  //should scan the object and return the first key which contains the given value.
  for (var key in anObject) {
    if (anObject[key] === aValue) {
      return key;
    }
  }
};






const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
