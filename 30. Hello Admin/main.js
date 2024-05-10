"use strict";
// Creating a Array
let userNames = ["zainab", "Laiba", "Qareer", "Admin", "ifrah"];
// using for each loop in Array
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser} would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser} Thank you for logging in again.`);
    }
});
