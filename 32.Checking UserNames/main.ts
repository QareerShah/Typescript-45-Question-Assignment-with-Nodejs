
// Array of Current users
let current_users = ["usman" , "areeba", "Ayesha", "Ahad", "usama"];

// Array of new users
let new_users = ["Hussain" ,"Hassan" , "Asad" , "Usama" , "usman" ];

// loop through new users to check for usernames avaibility
new_users.forEach(new_one_user => {
    let our_conditions = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_conditions){
     console.log(`Sorry! ${new_one_user} is already taken.`);
    }
    else{
        console.log(`This user name is ${new_one_user} is availabe`);
    }
});
