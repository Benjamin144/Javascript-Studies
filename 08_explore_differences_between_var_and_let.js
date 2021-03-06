// beware var keywords can be easily over written e.g below:

// var camper = "James";
// var camper = "David";
// console.log(camper);

// var camper = "James"; // with the advent javscript ES6 it is only possible to use a variable once with the let keyword
// let camper = "David"; // nothing overwritten but already declared by var keyword
// let camper = "David"; 
// console.log(camper);

/*in conclusion the following code will output correctly because the let key word declares two differing variables*/
let catName = "Oliver";
let catSound = "Meow!";

console.log(catName)
console.log(catSound)

// The let statement declares a block-scoped local variable, optionally initializing it to a value.

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1




