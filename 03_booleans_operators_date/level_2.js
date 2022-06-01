console.log("Number 1");
// base = prompt("Enter base");
// height = prompt("Enter height");
// alert(`The area of the triangle is ${0.5 * base * height}`);

console.log("Number 2");
// sideA = prompt("Enter side a:");
// sideB = prompt("Enter side b:");
// sideC = prompt("Enter side c:");
// alert(
//   `The perimeter of the triange is ${
//     parseInt(sideA) + parseInt(sideB) + parseInt(sideC)
//   }`
// );

console.log("Number 3");
// length_rect = +prompt("Enter length");
// width = +prompt("Enter width");
// alert(`The area of the rectangle is ${length_rect * width}`);
// alert(`The perimeter of the rectangle is ${2 * (length_rect + width)}`);

console.log("Number 4");
// radius = +prompt("Enter radius");
// const pi = 3.14;
// alert(`The area of a circle is ${pi * radius ** 2}`);
// alert(`The area of a circle is ${2 * pi * radius}`);

console.log("Number 5");
// by = ax + c
// y = a/bx + c/b

// a = +prompt("Enter the coefficient of x");
// b = +prompt("Enter the coefficient of y");
// c = +prompt("Enter c");
// alert(
//   `The slope of the equation is ${a / b}, the x-intercept ${
//     -c / a
//   } while the y-intercept is ${c / b}`
// );

console.log("Number 6");
// x1 = +prompt("Enter x1");
// y1 = +prompt("Enter y1");
// x2 = +prompt("Enter x2");
// y2 = +prompt("Enter y2");
// alert(
//   `The slope from point (${x1}, ${y1}) to point (${x2}, ${y2}) is ${
//     (y2 - y1) / (x2 - x1)
//   }`
// );

console.log("Number 7");
// console.log("");

console.log("Number 8");
// x = +prompt("Enter x");
// console.log(`The value of y if x is ${x} is  ${x ** 2 + 6 * x + 9}`);

console.log("Number 9");
// hours = +prompt("Enter hours");
// ratePerHour = +prompt("Enter rate per hour");
// console.log(`Your weekly earning is ${hours * ratePerHour}`)

console.log("Number 10");
// name = prompt("Enter your name");
// name.length > 9 ? alert("Your name is else") : alert("Your name is short");

console.log("Number 11");
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// compare = firstName.length > lastName.length ? "longer" : "shorter";
//
// console.log(
//   `Your first name, ${firstName} is ${compare} than your family name, ${lastName}`
// );

console.log("Number 12");
// let myAge = +prompt('Enter my age');
// let yourAge = +prompt('Enter your age');
// console.log(`I am ${myAge - yourAge} older than you`);

console.log("Number 13");
// let date = new Date();
// let birthYear = +prompt("Enter birth year");
// let age = date.getFullYear() - birthYear;
// age >= 18
//   ? alert(`You are ${age} You are old enough to drive`)
//   : alert(`You are ${age}. You will be allowed to drive after 3 years.`);

console.log("Number 14");
// yearsLived = +prompt("Enter number of years you live");
// alert(`You lived ${yearsLived * 365 * 24 * 3600} seconds`);

console.log("Number 15");
let date = new Date();
console.log(
  `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
);
console.log(
  `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
);
console.log(
  `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
);
