// write a node program that takes in an unlimited number of command line arguements, goes thru each and prints out the sum of them. If any arguement is not a whole number, skip it.
// Do support negative numbers though.
// If any arguement is not a number, output an error message. We need at least 2 arguments.




//Solution: Breakdown into several steps: 

// 1) extract the command line arguments
var args = process.argv.slice(2);
console.log('arguments', args);
// 1a) Edge case: We need at least 2 arguments
if (args.length < 2) {
  console.log('Error: Please enter at least two arguments') 
  process.exit();
}


// we need an accumulator:
let total = 0;


// 2) Loop thru each
for (let arg of args) {
// 2a) Edge case: if any argument is not a whole #, skip it
//// Math.floor
//// typeof?
//// % modulo
//// regex

if (Number.isInteger(Number(arg))) {
  //add them together
  // Typecast the string into a number
  total += Number(arg);
}

// 2b) Edge case: If any arguement is not a number, output an error message.
if (isNaN(Number(arg))) {
  console.log('Error: Please enter only numbers');
  return;
}

// 4) print out the sum
  console.log('arg:', arg, "total:", total);
}

// 2a) Edge case: if any argument is not a whole #, skip it
// 2b) Edge case: If any arguement is not a number, output an error message.

// 3) add them together






