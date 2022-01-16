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

























































































































































