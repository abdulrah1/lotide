let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement

};



//  function should take in a sentence (as a string)
const countLetters = function(string) {
  // return a count of each of the letters in that sentence.
  var countedLetters = 0;

  // Loop thru the string
  for (var letter of string) {
    // if it is a space then dont count it;
    if (letter === ' ') {
      countedLetters;
    } else {
      //console.log(letter); >> L \n H \n L
      countedLetters++;
    }
  }
  return countedLetters;
};



assertEqual((countLetters('LHL Labs')), 7); // Passed

