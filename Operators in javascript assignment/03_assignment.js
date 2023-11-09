// Use a nested ternary operator to check that a number is positive, negative or zero. You have to print “positive” if the number is positive and similarly for negative and zero also.

// Solution-->

let num = 0; // Replace this number with the one you want to check

let result = num > 0 ? "positive" : (num < 0 ? "negative" : "zero");
console.log(result);
