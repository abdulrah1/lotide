

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertation Passed: ${actual} === ${expected}`);
    return; // This stops executing the function and jumps into the next line of code.
  }
  console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`); // Do NOT Need an Else statement
};


// countOnly should take in a collection of items and return counts for a specific subset of those items.

//countOnly will be given an array and an object.
const countOnly = function(allItems, itemsToCount) {
  var result = {};

  // Loop thru allItems
  for (var item of allItems) {

    // if the item from allItems exist within iteToCount (true)
    if (itemsToCount[item]) {
      // if item exist then count it
      if (!result[item]) {
        result[item] = 1;
      } else {
        result[item] += 1;
      }
    }
  }
  return result;
};







const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1); // pass
// assertEqual(result1["Karima"], undefined); // pass
// assertEqual(result1["Fang"], 2); // pass
// assertEqual(result1["Agouhanna"], undefined); // pass
