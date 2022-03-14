

// working:
// Basically, we iterate over the array and, for each element, 
// check if the first position of this element in the array 
// is equal to the current position. Obviously, these two positions 
// are different for duplicate elements.
// function duplicate(a) {
//     return a.sort().filter(function(item, pos, ary) {
//         return !pos || item != ary[pos - 1];
//     });
// }

// let a = [2,1,1,5,2,6,7];
// console.log(duplicate(a));

//or
// let arr =[2,2,5,6,4,4];

// let newArr = arr.filter((e,i)=>{
//     return arr.indexOf(e)===i ;
// })
// console.log(newArr);

//or
let arr =[2,2,5,6,4,4];

let newArr = arr.filter((e,i)=>{
    return arr.indexOf(e)===arr.lastIndexOf(e) ;
})
console.log(newArr);