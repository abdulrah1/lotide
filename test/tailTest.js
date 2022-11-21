const tail = require('../tail');
const assertEqual = require('../assertEqual');






// Below are the Test Codes!


const result = tail(["Hello", "Lighthouse", "Labs"]); // First we provided an array for the tails
assertEqual(result.length, 2); // Tested to see if the actual vs expected is TRUE (yes)
assertEqual(result[0], "Lighthouse"); // Tested to see if the first element of the tail array is "Lighthouse" (yes)
assertEqual(result[1], "Labs");
assertEqual(result[0], "Labs"); // This is FALSE thus, it is !==
