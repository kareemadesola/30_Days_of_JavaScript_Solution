console.log("Number 1");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth().toString().padStart(2, "0");
let day = date.getDate().toString().padStart(2, "0");

console.log(`${year}-${month}-${day}`);
