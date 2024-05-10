"use strict";
let guestList = ["Ahmed", "faiz", "Rayyan", "Hasnain"];
let dontCome = guestList[0];
console.log(dontCome, "cannot come!");
guestList.splice(0, 1, "Hussain");
console.log("Good News ! We have Found a Bigger Table For Dinner");
// adding a new guest at starting index of array
guestList.unshift("Ali");
// adding a new guest at ending index of array
guestList.push("zain");
// adding a new guest to middle index of array
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Asad");
console.log("Updated List of our Guests");
guestList.forEach(oneGuest => console.log(`salam, ${oneGuest}, would you like to dinner with me?`));
// Inform that  only 2 guest can be arrive for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me");
// using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry , ${removedGuest} I can't invite you to dinner`);
}
console.log("Invitation to the last 2 Guests");
guestList.forEach(lastTwo => console.log(`Luckily ${lastTwo}, you are still invited to dinner`));
// removing lat two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
