let guestList: string []= ["Ahmed", "faiz", "Rayyan", "Hasnain"];

let dontCome = guestList[0];

console.log(dontCome, "cannot come!");

guestList.splice(0 , 0 ,  "Hussain" );

guestList.forEach(oneGuest => console.log (` Assalam O Alaikum ${oneGuest} , would you like to dinner with me?`));