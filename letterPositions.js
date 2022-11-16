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





const letterPositions = function(str) {
  const results = {};
  // Loop thru the str letters
  for (var i = 0; i < str.length; i++) {

    // 
    if (str[i] !== ' ') {
      // check to see if a key value-pair exist for this specific letter 
      if (results[str[i]]) {
        // if it does exist, then push it to the exisiting one.
        results[str[i]].push(i);
      } else {
        // if it does not exist
        // assign it to a new array
        results[str[i]] = [];
        // push
        results[str[i]].push(i);
      }
    }
  }
  return results;
};




