/*
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, '%o',  { number, errorMsg });
}
*/


// Assert pritns error message  when assertation is FALSE - helps with catching buggy functions (e.g., if we mistakenly return a*b instead of a+b)



let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement

};


// exports the function fro this module
module.exports = assertEqual;





// Below are Test Codes:

//assertEqual('30','31');
//assertEqual(20, 20);



