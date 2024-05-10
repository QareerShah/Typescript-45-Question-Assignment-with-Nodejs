"use strict";
// Defie a function to print each magicians name from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Define an array containing megicians name
let magicians_Name = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
// Call the function to print each megicians name
show_magicians(magicians_Name);
