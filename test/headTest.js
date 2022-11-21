const head = require('../head');
const assertEqual = require ('../assertEqual');

///// Below are the Test Codes:

assertEqual(head([5, 6, 7]), 5); // The second argument is what "expected"
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);