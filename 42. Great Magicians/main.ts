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

// Call make_great function to modify magicians name

let great_megicians = make_great(magicians_Name);
 
// call show_magicians that show modified list of magicians
show_magicians(great_megicians);
