/*
let js = `amazing`;
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Meredith";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let letjonas_matilda = 'jm'
let $function = 27;

let person = 'jonas';
let PI = 3.145;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programer';
let job2 = 'teacher)';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Joseph');

javascriptIsFun = `YES!`;
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2026
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

const job;

var job = `programmer`;
job = `teacher`;


//code to compare BMI (Body Mass Index) & also creates a boolean variable to check a higher value
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.96;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightMark);
// const markHigherBMI = (typeof heightMark > heightJohn);
const markHigherBMI = (BMIMark > BMIJohn);

//String literals

const firstName = 'Joseph';
const job = 'driver'
const birthYear = 1971;
const year = 2026;

const Joseph = "I am " + firstName + ', a ' + (year - birthYear) + ' year old' + job + '!';

console.log(Joseph);

const josephNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;

console.log(josephNew)

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');
// Mulltiline string using template literals
console.log(`String
multiple
lines`);

//Making decisions with code

const age = 19;

if (age >= 18) {
    console.log('Sarah can start driving license ')
}


//IF ELSE Control Structure
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)

}

const myBirthYear = 2000;
let myCentury
if (myBirthYear <= 1999) {
    myCentury = 19;
} else {
    myCentury = 20;
}
console.log(myCentury);

The following code was incorrect because the parentheses for the placement holder wasn't used

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = heightMark > heightJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);

BMI = mass /(height * weight) mass in kg and height in meters

1. Print a nice output to the console, saying who has the higher BMI. The message can either be "Mark's BMI is higher than John's!" or "John's is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: BMI (38.3) is higher than John's (23.9)!"

HINT: Use an if/else statement

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = heightMark > heightJohn;

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})! `);

} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// type conversion
const inputYear = '1971';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Joseph'));
console.log(typeof NaN);

console.log(String(23), 23);

// type conversion
const inputYear = '1971';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Joseph'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercian
console.log('I am ' + 55 + ' years old');
console.log('55' - '10' - 3);
console.log('55' + 10 + 3);
console.log(`5510${3}`);
console.log('23' / '5')

let n = '1' + 1; //'11'
n = n - 1;
console.log(n)
console.log(typeof n);

let o = 2 + 3 + 4 + '5'
o = o
console.log(o);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Joseph'));
console.log(Boolean({}));//an empty object
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job!');
}

// remember falsy values will automatically be converted to a boolean
let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

*/

//strict equality operators v loose equality operators.

const age = '18'

if (age === 18) console.log("You just  became an adult :D (strict)");

if (age == 18) console.log("You just  became an adult :D (loose)");


// Always try to use strict equality operators in the code to avoid potential bugs and helps with producing cleaner code

