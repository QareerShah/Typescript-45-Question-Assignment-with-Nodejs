let apple = "apple";
let upperCaseApple = "Apple";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "mango", "banana"]

// Test for equality and inequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == apple);

console.log("Is apple is not equal to apple?");
console.log(apple != apple);

// Tests using lower case function
console.log("\nIs Apple is equal to apple after convering to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("Is Apple is not equal to apple after convering to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

// Numerical tests
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

// not equal to
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("Is ten is greater than zero?");
console.log(ten > 0 );

// less than
console.log("Is twenty less than 10?");
console.log(twenty < 10);

// Greater than or equal to
console.log("Is ten is greater than or equal to 5?");
console.log( ten >= 5);

// less than or equal to
console.log("Is twenty is less than or equal to 10?");
console.log( twenty <= 10);

// Test using "and"  and "or" operators
//using && (and) operator
console.log("\ntwenty is not equal to 10 and 20 is greater than 10");
console.log(twenty != 10 && twenty > 10);

// using || (or) operator
console.log("20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || twenty == 20);

console.log("20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || twenty != 20);


// Test wheather an item is include in array
console.log("Is banana is include in my array");
console.log(fruits.includes("banana")); 

// not include
console.log("Is banana is not include in my array");
console.log(!fruits.includes("banana"));
