const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');








/////////////////////// Below are test codes:
assertArraysEqual(middle([10, 25, 30, 40]), [25, 30]); // PASS
assertArraysEqual(middle([10, 25, 30, 40, 60]), [25]); // FAIL
assertArraysEqual(middle(['Hello','Lighthouse', 'Labs']), ['Lighthouse']); // PASS
assertArraysEqual(middle([10,25,30,40]),[25,10,30,40]); // FAIL


