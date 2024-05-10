// Creating a function with parameters which returns a value of string
function city_Country(city : string , Country : string):string{
    return `${city} , ${Country}`;
}

// Calling a function and print the return value

console.log(city_Country("Karachi" , "Pakistan"));

console.log(city_Country("Tokyo" , "Japan"));

console.log(city_Country("Berlin" , "Germany"));