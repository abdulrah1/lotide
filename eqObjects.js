let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement

};



// take in two objects and returns true or false, based on a perfect match.

const eqObjects = function(obj1, obj2) {

  // converts the objects keys into array
  const arrKeys1 = Object.keys(obj1);
  const arrKeys2 = Object.keys(obj2);

  const arrLength1 = arrKeys1.length;
  const arrLength2 = arrKeys2.length;

  //console.log(arrLength1, arrLength2);

  // if they have the same number of keys
  if (arrLength1 !== arrLength2) {
    return false;
  }
  // for of to loop thru array
  for (let key of arrKeys1) {
    //console.log(obj1[key]);
  if (obj1[key] !== obj2[key]) {
    return false;
    }
  }
  return true;
};





// const ab = { a: "1", b: "2", c: '4'};
// const ba = { b: "2", a: "1", c: '5', };
// assertEqual(eqObjects(ab, ba), false); // Passed (fales === false)


