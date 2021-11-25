// TYPE COERSION
// Converts a value from one type to another

//console.log("I am " + 36 + " years old");
//console.log(36);

//console.log("23" - "10" - 3);

//console.log("23" + "10" + 3);
/*
// TYPE CONVERSION
const year = "1992";
//console.log(year + 15);

//console.log(year);
//console.log(Number(year));
//console.log(Number(year) + 15);

// LOGICAL OPERATORS
//console.log("23" > "18");
// type coersion and converts the strings to numbers

// GUESS THE OUTPUT
let n = "1" + 1;
// 1 to string and then we add 1
//console.log(n);
n = n - 1;
// n = 11
// "11" - 1
// converted to a number so 11 - 1 is 10
console.log(n);


// TRUTHY & FALSY VALUES

// 5 falsy values: 0, '', undefined, NaN, null

//console.log(Boolean(0));
//console.log(Boolean(undefined));
//console.log(Boolean("Helena"));
//console.log(Boolean({}));

const money = 0;

// lets tesy here if we have money or not
if (money) {
  //console.log("Yay, you got some money");
} else {
  //console.log("Please get a job...");
}

let height;

if (height) {
  //console.log("Height is defined");
} else {
  //console.log("Height is not defined...");
}

// EQUALITY OPERATORS
const age = 18;
//if (age === 18) console.log("age is equal to 18");
// 18 === 18 it will return true
// 18 === 19 it would return false
// === strict comparison it does preform type coersion
// and only return true if both sides are the exact same
// == is not strict comparison and actually does type coersion
// '18' == 18 this would be true AVOID LOOSE EQUALITY
// '18' === 18 this would be false

//prompt("What's your favourite color");

const number = prompt("Type a number");
console.log(number);

if (number === 25) {
  console.log("Cool!");
} else if (number === 5) {
  console.log("Also cool!");
} else {
  console.log("that was not a cool number...");
}

if (number !== 25) console.log("Also not cool");
// '!==' strict and '!=' not strict
*/

// INTRODUCTION TO FUNCTIONS

function logFunction() {
  console.log("This is a function!");
}
// define the function

//logFunction();
// calling for the function to execute

//logFunction();
//logFunction();
//logFunction();
//logFunction();

// Think of functions almost like a machine, you put stuff in and you get a
// finished product back
// Lets say we want to bake a really simple chocolate cake with three ingredients
// Butter, Chocolate and Eggs

function chocolateCake(butter, chocolate, eggs) {
  const cake = `A simple cake with ${butter} cup of butter, ${chocolate} cup of chocolate and ${eggs} eggs`;
  return cake;
}
// defined the function

// cake does not exist here
chocolateCake(1, 2, 3);

// we need store the result of the function in a variable
const yummyCake = chocolateCake(1, 2, 3);
console.log(yummyCake);

function calcAge(age1, age2) {
  const resAge = age1 + age2;
  return resAge;
}
console.log(calcAge(20, 10));
