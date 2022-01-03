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













