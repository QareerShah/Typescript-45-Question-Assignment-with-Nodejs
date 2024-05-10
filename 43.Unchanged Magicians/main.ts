// Defie a function to print each magicians name from an array

function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name));
}

// function to make megicians Great through .map()  it will modify array

function make_great(megicians : string[]){
      return  megicians.map(name => `The Great ${name}`);
}

// Define an array containing megicians name

let magicians_Name = ["Harry Houdini", "David Copperfield", "Penn Jillette"];

// Making a copy of original array through .slice(); function

let copy_magicians_name = magicians_Name.slice();

// Modified the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_name);

// show both arrays original and copied 

// original array
console.log("\nOriginal Array\n")
show_magicians(magicians_Name);

// copied
console.log("\ncopied Array\n")
show_magicians(copy_great_magicians);