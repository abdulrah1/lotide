// takeUnitl takes two parameter: the array to work with AND the callback (which lodash calls 'predicate')
// The function will return a "slice of the array with elements taken from the beginning until the callback/predicate
// returns a TRUTHY VALUE.
// To keep things simple, the callback should ONLY be provided one value: The item in the array.


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  let results = [];

  //looping thru the data1
  for (let num of array) {
    //console.log(num);
    //console.log(callback(num));

    // on line 29 the callback function has parameter x
    // break IF when the condition is TRUE (-1) or ','

    if (callback(num)) {
      // if we push inside the if then it will include all the num > 0 
      break;
    } else {
      results.push(num);
    }
  }
    return results;
  };

/// Change the array and callback to test the code and further understand!

  const results = takeUntil(data1, num => num < -10); // if num of array is less than -10 then stop and give me the array.
  console.log(results);

  console.log('---');

//const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//const results = takeUntil(data2, x => x === ',');
//console.log(results);




//Does your takeUntil function need to loop through the entire array once the callback returns a truthy value? 
// If not, how can we make it stop?
// >>> In order to stop the looping ONCE the callback function returns a TRUTHY, after the IF CONDITION, 
// >>> we will break and add an else





/////////////// Below are the test codes

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
      console.log(`✅✅✅ Assertation Passed: ${arr1} === ${arr2}`);
    } else {
      console.log(`🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`);
    }
  };



  assertArrayEqual(results, [
    1, 2, 5, 7, 2,
   -1, 2, 4, 5
 ]); // PASSED