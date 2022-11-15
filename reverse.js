// Do NOT use JavaScript's Array.prototype.reverse or Array.prototype.join functions to solve this problem.

 const args = process.argv

let sum = args.slice(2, 4); // Slices the Array at 2 and 4
let num1 = parseInt(sum[0]); // parseInt converts string to a number
let num2 = parseInt(sum[1]);
let answer = num1 + num2;
console.log(answer);

