
let guestList: string []= ["Ahmed", "faiz", "Rayyan", "Hasnain"];

let dontCome = guestList[0];

console.log(dontCome, "cannot come!");

guestList.splice(0 , 1 , "Hussain" );

console.log ("Good News ! We have Found a Bigger Table For Dinner");

// adding a new guest at starting index of array
guestList.unshift("Ali");

// adding a new guest at ending index of array
guestList.push("zain");


// adding a new guest to middle index of array
let middleIndex : number =  Math.floor(guestList.length / 2);

guestList.splice(middleIndex , 0 , "Asad");

console.log("Updated List of our Guests");

guestList.forEach(oneGuest => console.log(`salam, ${oneGuest}, would you like to dinner with me?`));




