console.log("Number 1");
let thirty = ["september", "april", "june", "november"];
let twenty_eight = "february";
let february;

let month = prompt("Enter a month").toLocaleLowerCase();
let year = +prompt("Enter a year");
let is_leap;
if (!(year % 100 && year % 400)) is_leap = true;
else is_leap = !(year % 4);
switch (true) {
  case thirty.includes(month):
    alert(`${month} has 30 days.`);
    break;
  case twenty_eight === month && is_leap:
    alert(`${month} has 29 days.`);
    break;
  case twenty_eight === month && !is_leap:
    alert(`${month} has 28 days.`);
    break;
  default:
    alert(`${month} has 31 days`);
}
