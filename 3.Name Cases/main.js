//lower case
var personName = "Babar";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//Tittle Case
console.log("tittlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
