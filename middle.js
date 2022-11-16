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





// Implement middle which will take in an array and return the middle-most element(s) of the given array.




const middle = function(array) {
  // middle function should return an array with only the middle element(s) of the provided array.
  let middleArr = [];
  let middleIndex = array.length / 2;

  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length === 1 || array.length === 2) {
    middleArr = [];

    // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  } else if (array.length % 2 === 0) {
    
    middleArr = [array[middleIndex - 1], array[middleIndex]]; //
  }
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  else {
    middleArr = [array[Math.floor(middleIndex)]];

  }
  return middleArr;
};

console.log(middle([10, 25, 30]));


