// Creating an array with 5 values
let userNames = ["zainab", "Laiba", "Qareer" , "Admin", "Ifrah"];

// Remove all values from one Array now our Array is empty
userNames = [];

// If Statement for checking Length of our array is empty?
if(userNames.length === 0){
    console.log("We need to find some users!");
}else{
    // If array is not empty use forEach Loop on Array
    userNames.forEach(oneUser => {
        if(oneUser === "Admin" ){
            console.log(`Hello ${oneUser} would you like to see a status report?`);
        }else{
            console.log(`Hello ${oneUser} Thank you for logging in again.`);
        }
    });
}

