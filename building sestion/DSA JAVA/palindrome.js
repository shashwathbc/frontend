// 1st approach

// function palindrome(str){
//     str=str.toLowerCase()
//         let len = str.length;
//         for(let index=0;index<len/2;index++){
//             if(str[index]!==str[len-1-index]){
//                 return false;
//             }
//         }
//                 return true;
// }

// console.log(palindrome("naman"));


// 2nd approach

// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input

console.log(checkPalindrome("namaN"));