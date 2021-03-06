// Escaping Literal Quotes in Strings

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// I am a "double quoted" string inside "double quotes".

console.log(myStr)

// Quoting Strings with Single Quotes

// var myStr = '<a href=\"http://www.example.com\" target=\"_blank\">Link</a>';

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr)

// Escape Sequences in Strings

// Code Output
// \' single quote
// \" double quote
// \\ backslash
// \n newline
// \r carriage return
// \t tab
// \b word boundary
// \f form feed 

var myStr = 'FirstLine\n\t\\SecondLine\n\ThirdLine';
console.log (myStr);

//FirstLine
    //\SecondLine
//ThirdLine

// Concatenating Strings with Plus Operator

// Build myStr from the strings This is the start. and This is the end. using the + operator

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// Concatenating Strings with the Plus Equals Operator

var ourStr = "I come first. ";
ourStr += "I come second. ";

console.log(ourStr);

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence. ";
 
console.log(myStr)

// Constructing Strings with Variables

// Example:

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Joseph";
var myStr = "My name is " + myName + " and I am well!";

console.log(myStr);

// outputs a random color 

const color = () =>'#' + Math
.floor(Math.random() * 0xffffff)
.toString(16) 
.padEnd(6, '0');

console.log(color());

// Appending Variables to Strings

var someAdjective = "Funkdoobiest!";
var myStr = "Learning to code is ";

myStr += someAdjective;
console.log (someAdjective);

// Find the Length of a String

//Set up the

var lastNameLength  = 0;
var lastName = "Love                                                                     lace";

// Only change the code below this line

lastNameLength = lastName.length
console.log(lastNameLength);

// Use Bracket Notation to Find the First Character in a String

var firstName = "Charles";
var firstLetter = firstName[6];
console.log (firstLetter);

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
console.log(firstLetterOfLastName);

// Understand String Immutability

// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Changed this line from myStr[0] = "H"

// Only change code above this line
console.log(myStr)

// Use Bracket Notation to Find the Nth Character in a String

var myName = "Joseph";
var thirdLetterOfMyName =myName[2];

console.log(thirdLetterOfMyName);

// Use Bracket Notation to Find the Last Character in a String

var firstName = "Joseph";
var lastLetter = firstName[firstName.length - 1];

// Setup
var lastName = "Roberts";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

console.log(lastLetterOfLastName);

// Use Bracket Notation to Find the Nth-to-Last Character in a String

// Example: 

var firstName = "Augusta";
var thirdToLastLetter = firstName[firstName.length - 3];

// Setup
var lastName = "Roberts";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

console.log(secondToLastLetterOfLastName);

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran"; 
var myAdverb = "quickly";

// Event Handler - Script Lifecycle

function aFunction() {
    console.log("This is a function");
    return true;
}

aFunction();

// Word Blanks

// Only change code below this line
var wordBlanks = "The Worlds Greatest " + [myNoun] + ", was so " + [myAdjective] + " that it " + [myVerb] + " very " + [myAdverb]; // Change this line

console.log (wordBlanks)
// Only change code above this line

// Store Multiple Values in one Variable using JavaScript Arrays

// Nest one Array within Another Array

// Only change code below this line

var myArray = [["color", 1], ["color", 2]];

// Access Array Data with Indexes
var myArray = [50,60,70];
myArray[0];
var myData = myArray[0];
console.log (myData);

// Modify Array Data With Indexes

var joesArray = [1,44,144000];
joesArray[2] = [29];
console.log(joesArray);

// Access Multi-Dimensional Arrays With Indexes

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  arr[3];
  arr[3][0];
  arr[3][0][1];

  // arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

console.log (myData);

// Manipulate Arrays With push()

var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// Push ["dog", 3] onto the end of the myArray variable.

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

myArray.push(["dog" , 3]);
console.log (myArray);

// Manipulate Arrays With pop()

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr)

// therefore

//Setup

var myArray = [["John", 23], ["cat", 2]];
// to remove last array use .pop(3)
var removedFromArray = myArray.pop(3);
console.log(myArray);
console.log(removedFromArray); 

// Manipulate Arrays With shift()..removes the first unlike .pop() which removes the last element.

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift(1);

console.log(removedFromArray)
console.log(ourArray)

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray =  myArray.shift(0);
console.log(removedFromMyArray);
console.log(myArray);

// Manipulte Arrays with unshift()

// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Example:

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

console.log(ourArray);

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
console.log(myArray);

// Shopping List

var myList = [
    ["Chocolate", 1], 
    ["Apple", 2], 
    ["Crisps", 3], 
    ["Sandwich", 4], 
    ["Yoghurt", 5],
];

console.log(myList);

// Write Reusable JavaScript with Functions

function reusableFunction() {
    console.log("Hi World");
};

reusableFunction();
reusableFunction();
reusableFunction();

// Passing Values to Functions with Arguments

function functionWithArgs(a, b) {
    console.log(a + b);
};
functionWithArgs(2, 1);
functionWithArgs(8, 8);

// Alternativley THIS..

function functionWithArgs(x, y) {
    console.log(x + y);
  }
  functionWithArgs(1, 2);
  functionWithArgs(6, 2);

  // Global Scope and Functions

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}
 
// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions

// function myTest() {
  // var loc = "foo";
  // console.log(loc);
// }
// myTest();
// console.log(loc);

// Example 2

// function myLocalScope() {

  // Only change code below this line
// var myVar
  // console.log('inside myLocalScope', myVar);
// }
// myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

  // Global vs. Local Scope in Functions

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}

console.log(someVar);

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

// Awesome code

var locales = {
  europe: function() {          // The Europe continent's local scope
    var myFriend = "Monique";

    var france = function() {   // France country's local scope
      var paris = function() {  // The Paris city's local scope
        console.log(myFriend);  // output: Monique
      };

      paris();
    };

    france();
  }
};


// Return a Value from a Function with Return
// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

function plusThree(num) {
  return num + 3;
}

var answer = plusThree(5);

console.log(answer);

// My code

function timesFive (x) {
  return x * 3;
var total = timesFive(5);
console.log(total);

or

function timesFive(jar){
  return jar*5;
}
var answer = timesFive(5);
console.log(answer);

}

// Awesome example

var locales = {
  europe: function() {          // The Europe continent's local scope
    var myFriend = "Monique";

    var france = function() {   // France country's local scope
      var paris = function() {  // The Paris city's local scope
        console.log(myFriend);  // output: Monique
      };

      paris();
    };

    france();
  }
};

locales.europe();

// Return a Value from a Function with Return Passed
// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.

Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.



// Understanding Undefined Value returned from a Function

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
console.log(sum);
console.log(sum);

// Assignment with a Returned Value

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);


// Stand in Line

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var removed = arr.shift();
  return removed;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Understanding Boolean Values#

function welcomeToBooleans() {
  return True = True;
}

// Use Confidential Logic with If Statements
 function trueOrFalse(wasThatTrue) {
   if (wasThatTrue); {
    return "Yes, that was true";
 }
    return "No, that was false";
}

// Comparison with the Equality Operator

// Setup
function testEqual(val) {
  if (val == 12) { // change this line 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// Comparison with the Strict Operator

function testStrict(val) {
  if (val === 7); {
    return "Equal";
  }
    return "Not Equal";
}

testStrict(10);

// Practice comparing different values

// Setup

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Comparison with the Inequality Operator

//Setup

function testNotEqual(val) {
  if (val !=99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


// Comparison with the Strict Inequality Operator

// Setup
function testStrictNotEqual(val) {
  if (val !==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

// Comparison with the Greater Than Operator

function testGreaterThan(val) {
  if (val >100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);



// Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >='20') {  // Change this line
    return "20 or Over";
  }

  if (val >=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// Comparison with the Less Than Operator

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqualTo(val) {
  if (val <=12) {
    return "Smaller than or equal to 12";
}
  if (val <=24) {
    return "Smaller than or equal to 24";
  }
    return "More than 24";
}

testLessOrEqualTo(10)

// 
function testLogicalAndValue (val) {
  if (val <=50 && val >=25) {
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10)

// Comparisons with the Logical And Operator

function testLogicalValueAnd(val) {
  if (val <=50 && val >=25) {
      return "Yes";
  }
  return "No";
}

testLogicalAnd(10);
console.log(testLogicalAnd);

// Comparisons with the Logical Or Operator

function testLogicalOr(val) {
  if (val <10 || val >20 ) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

// Introducing Else Statements

function testElse(val) {
  var result = "";
  if (val > 5) {
    return "Bigger than 5";
  } else {
  
  return result;
}

testElse(4);

// Introducing Else If Statement

function testElseIf(val) {
  if (val >15) { 
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
  
}
testElseIf(7);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "between 5 and 10"
  }
}

testElseIf(7);

// Correct

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}

testElseIf(7);

// Logical Order in If Else Statements

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5"; 
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or Equal to 10";
    }

  }
    orderMyLogic(10);

// Chaining If Else Statements

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    
    return "Change Me";
  }
}
// Correction

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge"
  } else {

  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);

// Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes === 1) {
    return  "Hole-in-one!";
  } else if (strokes <= (par - 2)) {
    return "Eagle";
  } else if (strokes === (par - 1)) {
    return "Birdie";
  } else if (strokes === (par)) {
    return "Par";
  } else if (strokes === (par + 1)) {
    return "Bogey";
  } else if (strokes === (par + 2)) {
    return "Double Bogey";
  } else if (strokes >= (par + 3)) {
    return "Go Home!"
  
  } else {
    
    return "Change Me";
  }

  // Only change code above this line

  // Selecting from Many Options with Switch Statements
}

golfScore(5, 4);

// Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);



// Adding a Default Option in Switch Statements

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 'a':
    answer = 'apple';
    break;
    case 'b':
    answer = 'bird';
    break;
    case 'c':
    answer = 'cat';
    break;
    default:
    answer = 'stuff';
    break;
  }

    // Only change code above this line
  return answer;
}

switchOfStuff(1);

  */

  // Multiple Identical Options in Switch Statements
  
  function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
  
      switch(val) {
        case 1:
        case 2:
        case 3:
          answer = 'Low';
          break;
        case 4:
        case 5:
        case 6:
          answer = 'Mid';
          break;
        case 7:
        case 8:
        case 9:
          answer = 'High';
      }
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(8);



