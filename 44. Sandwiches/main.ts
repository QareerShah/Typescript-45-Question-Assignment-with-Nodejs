// Define a function with a rest parameters that accept items arguments representing our sandwich
function make_sandwiches(...items: string[]){
console.log("\nMaking a sandwich with the following items:\n");

items.forEach(singleItem => console.log(singleItem));

console.log("Now enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments

make_sandwiches("Bread" , "Chicken" , "Mayonese" , "Egg");

make_sandwiches("Bread", "Egg");

make_sandwiches("Bread", "Mayonese" , "Chicken", "Cheese" , "Egg" , "Lettuce" , "Tomato" );