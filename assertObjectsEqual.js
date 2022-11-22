// will help us easily test functions that return objects.



const eqObjects = function(obj1, obj2) {
  const arrKeys1 = Object.keys(obj1);
  const arrKeys2 = Object.keys(obj2);
  const arrLength1 = arrKeys1.length;
  const arrLength2 = arrKeys2.length;

  if (arrLength1 !== arrLength2) {
    return false;
  }
  for (let key of arrKeys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};



// assertObjectsEqual will take in two objects and console.log an appropriate message to console

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};


// assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // Pass (TRUE)


