"use strict";
// Making a arrays of Countries and print its original order
let countriesToVisit = ["Brazil", "Danmark", "china", "Argentina"];
console.log("Original Order:", countriesToVisit);
// print the array in Alphabetical order without modigying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());
// Show that the array is still in its original order
console.log("still in original order:", countriesToVisit);
// print the array in reverse alphabetical order without changing the actual array list
console.log("Reverse order", [...countriesToVisit].reverse());
// Show that the array is still in its original order
console.log("still in original order:", countriesToVisit);
// we have changed the original array order Now 
console.log("Original Array Reversed:", countriesToVisit.reverse());
// print the array to show that its back to its original order
console.log("Back to original order:", countriesToVisit.reverse());
// print the array to show that it's order has been changed in Alphabetical order now
console.log("sorted in Alphabetical order:", countriesToVisit.sort());
// we have changed again the original array order now in reversed order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
