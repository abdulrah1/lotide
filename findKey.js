let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement

};


// findKey takes in an Object and a Callback (DONE)
// find Key scnas the object 
// return the FIRST key for which the callback returns a truthy value.
// if no key is found, then it shoudl return undefined.


const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) { // this is scanning the values of the key(names) wihtin the object
      return key;
    }
  }
  // if we did return undefined inside the loop as "Else", the loop would stop if the first key was not true >> undefined.
  return undefined;
  // this return is optional, since if the object doesnt have the key, it is automatically undefined.
  // if there is nothing found, then it should return undefined!! 
};

//Example of object within an object

const obj = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); 

console.log(obj);



////////// Below are test codes:

assertEqual(obj,'noma'); // PASSED
