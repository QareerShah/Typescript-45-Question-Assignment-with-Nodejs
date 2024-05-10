// Making a Function 
function make_shirt(size : string = "Large", printMessage : string = "Embrace the Unconventional"){
        console.log(`Creating a ${size} shirt with the ${printMessage} prints on Shirt`);
}

// Calling a Function
make_shirt();

// Calling a function now with medium size and default message

make_shirt("Medium")


// Calling a function now with small size and also print different message

make_shirt("Small" , "Elevate Your Style");