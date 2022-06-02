console.log("Number 1");
// let score = +prompt("Enter your score");
// switch (true) {
//   case score >= 80 && score <= 100:
//     alert("A");
//     break;
//   case score >= 70:
//     alert("B");
//     break;
//   case score >= 60:
//     alert("C");
//     break;
//   case score >= 50:
//     alert("D");
//     break;
//   case score >= 0 && score <= 50:
//     alert("F");
//     break;
//   default:
//     alert("Entered value was not a number");
// }

console.log("Number 2");
// month = prompt("Enter your month").toLocaleLowerCase();
// switch (true) {
//   case ["september,october, november"].includes(month):
//     console.log("The season is Autumn");
//     break;
//   case ["december", "january", "february"].includes(month):
//     console.log("The season is Winter");
//     break;
//   case ["march", "april", "may"].includes(month):
//     console.log("The season is Spring");
//     break;
//   case ["june", "july", "august"].includes(month):
//     console.log("The season is Summer");
//     break;
// }

console.log("Number 3");
let day = prompt("What is the day today")
  .toLocaleLowerCase();
let weekend = ["saturday", "sunday"]
  weekend.includes(day)
  ? alert(`${day} is a weekend`)
  : alert(`${day} is a working day`);
