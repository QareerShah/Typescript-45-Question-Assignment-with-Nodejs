"use strict";
// Decsribe a Function
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Calling a function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Barlin", "Germany");
