// // //Add,sub,mul,div: Two Numbers with JavaScript
// // const sum = 10 + 10;
// // const difference = 45 - 33;
// // const product = 8 * 10;
// // const quotient = 66 / 33;

// // console.log(sum);
// // console.log(difference);
// // console.log(product);
// // console.log(quotient);


// // //increnment: 
// // // You can easily increment or add one to a variable with the ++ operator.
// // // i++;
// // // is the equivalent of
// // // i = i + 1;
// // // **********************
// // let myVar = 87;
// // myVar++;
// // console.log(myVar);


// // // Decrement a Number with JavaScript:
// // // You can easily decrement or decrease a variable by one with the -- operator.
// // // i--;
// // // is the equivalent of
// // // i = i - 1;
// // //************************* */
// // let myar = 11;
// // myar--;
// // console.log(myar);




// // // Create Decimal Numbers with JavaScript:
// // // We can store decimal numbers in variables too.
// // // Decimal numbers are sometimes referred to as floating point numbers or floats.
// // let myDecimal=5.7;
// // console.log(myDecimal);
// // //Multiply Two Decimals with JavaScript
// // const mul = 2.0 * 2.5;
// // console.log(mul);
// // //Divide One Decimal by Another with JavaScript
// // const quotnt = 4.4 / 2.0;
// // console.log(quotnt);
// // //Finding a Remainder in JavaScript:
// // const remaindr = 11%3;
// // console.log(remaindr);

// // //Compound Assignment With Augmented Addition:
// // // In programming, it is common to use assignments to modify the contents of a variable. 
// // // Remember that everything to the right of the equals sign is evaluated first, so we can say:
// // // myVar = myVar + 5;
// // // to add 5 to myVar. Since this is such a common pattern, 
// // // there are operators which do both a mathematical operation and assignment in one step.
// // // One such operator is the += operator.
// // // let myVar = 1;
// // // myVar += 5;
// // // console.log(myVar);
// // // 6 would be displayed in the console.
// // let a = 3;
// // let b = 17;
// // let c = 12;
// // a += 12;
// // b += 9;
// // c +=  7;
// // //Compound Assignment With Augmented Subtraction
// // let a = 11;
// // let b = 9;
// // let c = 3;
// // a -= 6;
// // b -= 15;
// // c -= 1;
// // //Compound Assignment With Augmented Multiplication
// // let a = 5;
// // let b = 12;
// // let c = 4.6;
// // a *= 5;
// // b *= 3 ;
// // c *= 10;
// // //Compound Assignment With Augmented Division
// // let a = 48;
// // let b = 108;
// // let c = 33;
// // a /=12;
// // b /= 4;
// // c /= 11;


// //Escaping Literal Quotes in Strings:
// const lit = "I am a \"double quoted\" string inside \"double quotes\".";
// console.log(lit);



// //Quoting Strings with Single Quotes:
// var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';



// // Escape Sequences in Strings:
// // Quotes are not the only characters that can be escaped inside a string. 
// // There are two reasons to use escaping characters:

// // To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
// // To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
// // We learned this in the previous challenge.

// // Code	Output
// // \'	single quote
// // \"	double quote
// // \\	backslash
// // \n	newline
// // \r	carriage return
// // \t	tab
// // \b	word boundary
// // \f	form feed
// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// // o/p:
// // FirstLine
// //     \SecondLine
// // ThirdLine




//Concatenating Strings with Plus Operator

const conCat = "This is the start. "+"This is the end.";
console.log(conCat);


//Concatenating Strings with the Plus Equals Operator:
let myStr="This is the first sentence. ";
myStr += "This is the second sentence.";

//Constructing Strings with Variables:
const myName = "Shashwath";
const myStr = "My name is" + myName + ",and I am well!";


// ********************************************************************************************
//Appending Variables to Strings:
const someAdjective = "shash";
let myStr = "Learning to code is ";
myStr += someAdjective;


// ********************************************************************************************

//Find the Length of a String:
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName;
// output:
// console.log(lastName.length);
//          or
lastNameLength = lastName.length;


// ********************************************************************************************

//Use Bracket Notation to Find the First Character in a String:
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];


// ********************************************************************************************

//Understand String Immutability
//In JavaScript, String values are immutable, which means that they cannot be altered once created.
// For example, the following code:

// let myStr = "Bob";
// myStr[0] = "J";
// cannot change the value of myStr to Job, 
// because the contents of myStr cannot be altered.
//  Note that this does not mean that myStr cannot be changed, 
//  just that the individual characters of a string literal cannot be changed.
//   The only way to change myStr would be to assign it with a new string, like this:

// let myStr = "Bob";
// myStr = "Job";






// ********************************************************************************************
//Use Bracket Notation to Find the Nth Character in a String:
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];


// ********************************************************************************************
// Use Bracket Notation to Find the Last Character in a String:

// const firstName = "Ada";
// const lastLetter = firstName[firstName.length - 1];
// lastLetter would have a value of the string a.

//Use Bracket Notation to Find the Nth-to-Last Character in a String:
// const firstName = "Augusta";
// const thirdToLastLetter = firstName[firstName.length - 3];
// thirdToLastLetter would have a value of the string s.



// ********************************************************************************************

//Word Blanks:
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";



//************************************************************************* */
//16/01/2022

//JavaScript array variables, we can store several pieces of data in one place.
const sandwich = ["peanut butter", "jelly", "bread"];
const myArray = ["shash",8];


//Nest one Array within Another Array:

const myArray = [["shash","b"],["asm",3]];

//Access Array Data with Indexes:
const myArray = [50, 60, 70];
var myData = myArray[0];


//Modify Array Data With Indexes:
const myArray = [18, 64, 99];
myArray[0] = 45;


//Access Multi-Dimensional Arrays With Indexes:
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  arr[3];
  arr[3][0];
  arr[3][0][1];

//   o/p:arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.



//Manipulate Arrays With push():
// An easy way to append data to the end of an array is via the push() function.
// .push() takes one or more parameters and "pushes" them onto the end of the array.
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);



//Manipulate Arrays With pop():
//.pop() removes the last element from an array and returns that element.
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//o/p: The first console.log will display the value 6, and the second will display the value [1, 4].


//Manipulate Arrays With shift():
// .shift()   it removes the first element:
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
//removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].


//Manipulate Arrays With unshift():
//unshift() adds the element at the beginning of the array.
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
// After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].


//shopping list:
const myList = [["shash",10],["wath",14],["asbf",45],["sabf",7],["sdjbf",78]];


//****************************************************************************************************************************************** */

//VIMP : //Write Reusable JavaScript with Functions:
function reusableFunction(){
    console.log("Hi World")
  }
  reusableFunction();


//Passing Values to Functions with Arguments: (func that accepts 2 arguments and o/p thr sum to console)
function functionWithArgs(a,b){
    console.log(a+b);
    }
functionWithArgs(1,2);


//Return a Value from a Function with Return:
//We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
function timesFive(a)
{
  return a *5;
}
timesFive(5);


//Global Scope and Functions:
//Variables which are defined outside of a function block have Global scope. 
//Variables which are declared without the let or const keywords are automatically created in the global scope. 
// This can create unintended consequences elsewhere in your code or when running a function again. 
// You should always declare your variables with let or const.
let myGlobal =10;


//Local Scope and Functions:
//Variables which are declared within a function,
//  as well as the function parameters, have local scope. That means they are only visible within that function.
function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
  console.log(loc);

//o/p:Here is a function myTest with a local variable called loc.
//The myTest() function call will display the string foo in the console.
//  The console.log(loc) line will throw an error, as loc is not defined outside of the function.




//Understanding Undefined Value returned from a Function:

//A function can include the return statement but it does not have to. 
// In the case that the function doesn't have a return statement, when you call it,
//  the function processes the inner code but the returned value is undefined.

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
//o/p: addSum is a function without a return statement. 
//The function will change the global sum variable but the returned value of the function is undefined.





//Assignment with a Returned Value:
//we can take the return value of a function and assign it to a variable.
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);





//Stand in Line
//a queue is an abstract Data Structure where items are kept in order.
//  New items can be added at the back of the queue and old items are taken off from the front of the queue.




//Understanding Boolean Values:  Booleans may only be one of two values: true or false.
function welcomeToBooleans() {
    return false; 
  }




  //Use Conditional Logic with If Statements:
  function trueOrFalse(wasThatTrue) {
  if(wasThatTrue){
    return "Yes, that was true";
  }
  return  "No, that was false";
}


//********************************************************************************************************************************** */


//Comparison with the Equality Operator:

//The most basic operator is the equality operator ==.
//  The equality operator compares two values and returns true if they're equivalent or false if they are not. 
// Note that equality is different from assignment (=), which assigns the value 

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
3 ===  3
3 === '3'
// these conditions would return true and true respectively.


// Comparison with the Strict Equality Operator:
3 ===  3
3 === '3'
// these conditions would return true and false respectively.


//Comparison with the Inequality Operator:
//The inequality operator (!=) is the opposite of the equality operator.
//  It means not equal and returns false where equality would return true and vice versa.

1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
//In order, these expressions would evaluate to true, false, false, false, and false.



//Comparison with the Strict Inequality Operator:
//The strict inequality operator (!==) is the logical opposite of the strict equality operator.
// It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. 

3 !==  3
3 !== '3'
4 !==  3

//In order, these expressions would evaluate to false, true, and true.



// VVIMP://OPERATORS:

// > : greater 
// >= : greater than / equal
// < : less than
// <= : less than / or equal to

// && : logical AND :returns true if and only if the operands to the left and right of it are true.
// || : lofical OR  : The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Else Statements:
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }else{
     result = "5 or Smaller";
  }
  return result;
}

testElse(4);


//Else If Statements:
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}



//Chaining If Else Statements:
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
// . . .
} else {
  statementN
}




//Golf Code:




//Selecting from Many Options with Switch Statements:


switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

//or

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
   switch(val){
     case 1:
     return "alpha";
     break;

      case 2:
     return "beta";
     break;

      case 3:
     return "gamma";
     break;

      case 4:
     return "delta";
     break;

   }


  // Only change code above this line
  return answer;
}





//Adding a Default Option in Switch Statements

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
   switch(val){
     case "a":  return "apple";
     break;

     case "b" : return "bird";
     break;

     case "c" : return  "cat";
     break;

     default: return "stuff";
     break;


   }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);



//Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
     case 1:
     case 2:
     case 3:
     return  "Low";
     break;
     case 4:
     case 5:
     case 6:
     return   "Mid";
     break;
     case 7:
     case 8:
     case 9:
     return  "High";

}

  return answer;
}

sequentialSizes(1);



//Returning Boolean Values from Functions:
function isLess(a, b) {
  // Only change code below this line
  return a <= b;
  // Only change code above this line
}

isLess(10, 15);


//Return Early Pattern for Functions:

function abTest(a, b) {
if (a < 0 || b < 0) {
    return undefined;
  }
return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

//%&%&*%*&%&%*&%&%&*%&*%*&%&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// js objects: creation:
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};


//Accessing Object Properties with Dot Notation:
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
//prop1val would have a value of the string val1, and prop2val would have a value of the string val2.



//Accessing Object Properties with Bracket Notation:
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"]; 
//or
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  // Change this line
const player = testObj[playerNumber]; 
//or
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
//myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, 
//and myObj["NoSpace"] would be the string USS Enterprise.



//Updating Object Properties:
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";


//Add New Properties to a JavaScript Object:
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";


//Delete Properties from a JavaScript Object:
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;


//Testing Objects for Properties:
//Sometimes it is useful to check if the property of a given object exists or not.
// We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name.
// .hasOwnProperty() returns true or false if the property is found or not.

// QUESTION: Modify the function checkObj to test if an object passed to the function (obj) 
//contains a specific property (checkProp). If the property is found, return that property's value. 
//If not, return "Not Found".
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}


//Manipulating Complex Objects:
// Q: Add a new album to the myMusic array. Add artist and title strings, 
//release_year number, and a formats array of strings.
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },

  // Add record here
  {
    artist: "Deep Purple",
    title: "Smoke on the water",
    release_year: 1976,
    formats: ["CD", "8T", "LP"]
  }
];


//Accessing Nested Objects:
// 1)Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

//2) The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
//ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.


//Accessing Nested Arrays:

// 1)Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

//2) ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//Iterate with JavaScript While Loops:
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

//and 
//myArray should equal [5, 4, 3, 2, 1, 0].:
const myArray = [];
let i=5;
while(i>=0){
  myArray.push(i);
  i--;
}



//Iterate with JavaScript For Loops:
//myArray should equal [1, 2, 3, 4, 5].
const myArray = [];
for(let i=1;i<6;i++){
  myArray.push(i);
}


//Iterate Odd and Even Numbers With a For Loop  =>  (doubt)
//odd:
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}


//even:





//Count Backwards With a For Loop:(doubt)
//odd:
const myArray = [];

for(let i=9;i > 0; i -= 2){
  myArray.push(i);
}
//o/p : [9,7,5,3,1]



//even:





//Iterate Through an Array with a For Loop:
const myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

//o/p : 20


//Nesting For Loops:
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
//o/p:  5040



//Iterate with JavaScript Do...While Loops:
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i <= 10);

//o/p: 10




//Replace Loops using Recursion
//Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
//However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
//The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

//Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.






//Profile Lookup
//We have an array of objects representing different people in our contacts lists.

//A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

//The function should check if name is an actual contact's firstName and the given property (prop) 
//is a property of that contact.

//If both are true, then return the "value" of that property.

//If name does not correspond to any contacts then return the string No such contact.

//If prop does not correspond to any valid properties of a contact found to match name then return
// the string No such property.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

//or
function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}




//Generate Random Fractions with JavaScript:
//JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive)
// and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

function randomFraction() {

  // Only change code below this line
var result = 0;
  // Math.random() can generate 0. We don't want to     return a 0,
  // so keep generating random numbers until we get one     that isn't 0
  while (result === 0) {
    result = Math.random();
  }

  return result;

  // Only change code above this line
}


//Generate Random Whole Numbers with JavaScript:
// It's great that we can generate random decimal numbers, but it's even more useful 
// if we use it to generate random whole numbers.

// Use Math.random() to generate a random decimal.
// Multiply that random decimal by 20.
// Use another function, Math.floor() to round the number down to its nearest whole number.
// Remember that Math.random() can never quite return a 1 and, because we're rounding down,
// it's impossible to actually get 20.
// This technique will give us a whole number between 0 and 19.

// Putting everything together, this is what our code looks like:

// Math.floor(Math.random() * 20);
// We are calling Math.random(), multiplying the result by 20,
//  then passing the value to Math.floor() function to round the value down to the nearest whole number.

//Q:Use this technique to generate and return a random whole number between 0 and 9.
function randomWholeNum() {

  // Only change code below this line
return Math.floor(Math.random() * 10);
}





//Generate Random Whole Numbers within a Range
// Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

// To do this, we'll define a minimum number min and a maximum number max.

// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min
//Q): Create a function called randomRange that takes a range myMin and myMax and returns a
// random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}





//Use the parseInt Function:
// The parseInt() function parses a string and returns an integer. Here's an example:
// const a = parseInt("007");
// The above function converts the string 007 to the integer 7. If the first character in the 
// string can't be converted into a number, then it returns NaN.

//Q) : Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
function convertToInteger(str) {
  return parseInt(str);
 }
 
 convertToInteger("56");

 //o/p: 56




 //Use the parseInt Function with a Radix
// The parseInt() function parses a string and returns an integer. 
// It takes a second argument for the radix, which specifies the base of the number in the string.
//  The radix can be an integer between 2 and 36.

// The function call looks like:

// parseInt(string, radix);
// And here's an example:

// const a = parseInt("11", 2);
// The radix variable says that 11 is in the binary system, or base 2. 
// This example converts the string 11 to an integer 3.

//Q) : Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
function convertToInteger(str) {
  return parseInt(str, 2);
  }
  
  convertToInteger("10011");



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Use the Conditional (Ternary) Operator:

// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

// The syntax is a ? b : c, where a is the condition,
//  b is the code to run when the condition returns true, 
//  and c is the code to run when the condition returns false.

// The following function uses an if/else statement to check a condition:

// function findGreater(a, b) {
//   if(a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater or equal";
//   }
// }
// This can be re-written using the conditional operator:

// function findGreater(a, b) {
//   return a > b ? "a is greater" : "b is greater or equal";
// }

//Q); Use the conditional operator in the checkEqual function to check if two numbers are equal or not. 
//The function should return either the string Equal or the string Not Equal.
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);







  // Use Multiple Conditional (Ternary) Operators
  // In the previous challenge, you used a single conditional operator.
  //  You can also chain them together to check for multiple conditions.
  
  // The following function uses if, else if, and else statements to check multiple conditions:
  
  // function findGreaterOrEqual(a, b) {
  //   if (a === b) {
  //     return "a and b are equal";
  //   }
  //   else if (a > b) {
  //     return "a is greater";
  //   }
  //   else {
  //     return "b is greater";
  //   }
  // }
  // The above function can be re-written using multiple conditional operators:
  
  // function findGreaterOrEqual(a, b) {
  //   return (a === b) ? "a and b are equal" 
  //     : (a > b) ? "a is greater" 
  //     : "b is greater";
  // }
  // It is considered best practice to format multiple conditional operators 
  // such that each condition is on a separate line, as shown above.
  //  Using multiple conditional operators without proper indentation may make your code hard to read.
  // For example:
  
  // function findGreaterOrEqual(a, b) {
  //   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
  // }
  



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//Use Recursion to Create a Countdown
// In a previous challenge, you learned how to use recursion to replace a for loop. 
// Now, let's look at a more complex function that returns an array of consecutive integers
//  starting with 1 through the number passed to the function.

// As mentioned in the previous challenge, there will be a base case. The base case tells
//  the recursive function when it no longer needs to call itself.
//   It is a simple case where the return value is already known. 
//   There will also be a recursive call which executes the original function with different arguments.
//    If the function is written correctly, eventually the base case will be reached.

// For example, say you want to write a recursive function 
// that returns an array containing the numbers 1 through n. This function will need to accept an 
// argument, n, representing the final number. Then it will need to call itself with progressively
//  smaller values of n until it reaches 1. You could write the function as follows:

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));
// The value [1, 2, 3, 4, 5] will be displayed in the console.

// At first, this seems counterintuitive since the value of n decreases, but the values in the
// final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

// Q) : We have defined a function called countdown with one parameter (n).
//  The function should use recursion to return an array containing the 
//  integers n through 1 based on the n parameter. If the function is called with a number less than 1,
//   the function should return an empty array.
// For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
//  Your function must use recursion by calling itself and must not use loops of any kind.

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

//or
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

//or:
function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}


//or:
function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}






//Use Recursion to Create a Range of Numbers:
//Q: We have defined a function named rangeOfNumbers with two parameters. 
//The function should return an array of integers which begins with a number represented 
//by the startNum parameter and ends with a number represented by the endNum parameter. 
//The starting number will always be less than or equal to the ending number. 
//Your function must use recursion by calling itself and not use loops of any kind.
// It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

//or

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}


//or
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}







































































































































































































































































































































































































